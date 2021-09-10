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

const genConfigFiles = async (config) => {
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
        host: ${config.mongodb.host ?? ""}
        port: ${config.mongodb.port ?? ""}
        database: form
        username: ${config.mongodb.username ?? ""}
        password: ${config.mongodb.password ?? ""}
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
