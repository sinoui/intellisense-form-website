import message from "@sinoui/message";
async function loadPrettier() {
  const { default: prettier } = await import("prettier/standalone");
  const { default: yamlParser } = await import("prettier/parser-yaml");

  return { prettier, yamlParser };
}

const DRIVER_CLASS_NAMES = {
  mysql: "com.mysql.cj.jdbc.Driver",
  oracle: "oracle.jdbc.driver.OracleDriver",
  dm: "dm.jdbc.driver.DmDriver",
  kingbase: "com.kingbase.Driver",
};

const TEST_SQL = {
  mysql: "select 1",
  oracle: "select 1 from dual",
  dm: "select 1 from dual",
  kingbase: "select 1 from dual",
};

/**
 * 生成mongodb数据库的uri
 *
 * @param {{port: string; username?: string; password?: string; host: string;}} mongodbConfig
 * @returns 返回产生的 mongodb 数据库的 uri
 */
const getMongoDbUri = ({
  port = "27017",
  username = "",
  password = "",
  host,
}) => {
  const auth = username && password ? `${username}:${password}@` : "";
  return `mongodb://${auth}${host}:${port}/form`;
};

const genConfigFiles = async (formState) => {
  const { values: config } = formState;
  formState.validate();
  const valid = formState.isValid;
  if (!valid) {
    message.error("单点登录链接填写不正确，请修改后重试");
    return;
  }
  const { prettier, yamlParser } = await loadPrettier();
  const applicationFile = prettier.format(
    `
  # 自定义项目使用的端口号
  server:
    port: ${config.port}

  # 数据库类型
  database:
    type: ${config.db.type === "mysql" ? "mysql" : "oracle"}
  `,
    {
      filepath: "applicaiton.yml",
      parser: "yaml",
      plugins: [yamlParser],
    }
  );

  const devApplicationFile = prettier.format(
    `
  spring:
    data:
      mongodb:
        uri: ${getMongoDbUri(config.mongodb)}
    datasource:
      url: ${config.db.url ?? ""}
      username: ${config.db.username ?? ""}
      password: ${config.db.password ?? ""}
      driver-class-name: ${DRIVER_CLASS_NAMES[config.db.type]}
      druid:
        # 指定测试数据库连接的连通性 SQL 语句
        validation-query: ${TEST_SQL[config.db.type]}

  # 指定单点登录服务链接
  sso:
    ssoService: ${config.sinomatrix.ssoServerUrl ?? ""}
  
  sinoform:
    # 指定工作流设计器服务链接
    workflow-design-server-uri: ${
      config.sinomatrix.workflowDesignServerUri ?? ""
    }
    # 指定工作流引擎链接
    workflow-server-uri: ${config.sinomatrix.workflowServerUri ?? ""}
    # 指定统一授权服务链接
    uias-server-uri: ${config.sinomatrix.uiasServerUri ?? ""}
  
  sinomatrix:
    # 指定sinomatrix数据源配置
    datasource:
      url: ${config.sinomatrix.dataSourceConfig.url ?? ""}
      username: ${config.sinomatrix.dataSourceConfig.username ?? ""}
      password: ${config.sinomatrix.dataSourceConfig.password ?? ""}
      driver-class-name: ${DRIVER_CLASS_NAMES[config.db.type]}
      type: com.alibaba.druid.pool.DruidDataSource
      druid:
        # 初始化连接数
        initial-size: ${config.sinomatrix.dataSourceConfig.initialSize ?? 1}
        # 最小连接池数量
        # spring.datasource.druid
        min-idle: ${config.sinomatrix.dataSourceConfig.minIdle ?? 1}
        # 最大连接池数量
        max-active: ${config.sinomatrix.dataSourceConfig.maxActive ?? 20}
        # 获取连接时最大等待时间，单位毫秒
        max-wait: ${config.sinomatrix.dataSourceConfig.maxWait ?? 60000}
  `,
    {
      filepath: "application-dev.yml",
      parser: "yaml",
      plugins: [yamlParser],
    }
  );

  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();

  zip.file("application.yml", applicationFile);
  zip.file("application-dev.yml", devApplicationFile);
  zip.file("application-test.yml", devApplicationFile);
  zip.file("application-prod.yml", devApplicationFile);

  const content = await zip.generateAsync({ type: "blob" });
  const {
    default: { saveAs },
  } = await import("file-saver");
  saveAs(content, "config.zip");
};

export default genConfigFiles;
