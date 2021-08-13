---
id: config-audit
title: 系统管理日志功能集成
---

默认情况下，智能表单禁用了系统管理日志功能集成，可以通过 `audit.log` 配置项来启用此功能。

## 启用版本

`v1.11.0`

## 启用系统管理日志功能集成

在您的自定义 `application.yml` 文件中，添加以下配置，即可启用日志功能：

```yaml title="config/application.yml"
audit:
  # 启用日志功能
  log: true
url:
  # 设置获取应监控数据发生变化的数据库表的接口链接。
  audit-table-url: http://10.10.10.10:8888/apis/audit/tables
```

> 注意：要想启用日志功能，还需要有两个先决条件：
>
> - 智能表单与 sino-matrix 中的系统管理组合使用（智能表单可以独立于 sino-matrix 平台之外独立运行，但是这种模式就不支持日志功能）
> - 需要自行实现 `audit-table-url` 对应的接口（见 [audit-table-url](#audit-table-url) 章节）

## audit-table-url

`audit-table-url` 配置项用来指定获取应监控的数据库表的接口链接。此接口需要在您的项目中实现，并返回数据库表名数组（以 json 格式返回）。

如下所示：

```http
GET http://10.10.10.10:8888/apis/audit/tables

response: application/json
["table_1", "table_2", "table_3"]
```

重点说明：

- 链接的路径（即示例中的`/apis/audit/tables`）是不限定的，由项目组自行决定
- 响应必须是 JSON 格式的字符串数组

一种做法是从 redis 中获取系统管理日志功能中的数据库表监控设置数据，如下所示：

```java
import org.springframework.data.redis.core.StringRedisTemplate;

@RestController
@GetMapping("/apis/audit/tables")
public class AuditTablesApis {
  @Autowired
  private StringRedisTemplate redisTemplate;
  /**
   * 表单应用在 sinomatrix 的系统管理中的系统id
   */
  private final static String SYSTEM_ID = "67250";
  /**
   * 监听变化产生日志的数据库表设置在 redis 中的字段名
   */
  private final static String AUDIT_TABLE_KEY = "SYS_AUDIT_LOG_SETTING";

  @GetMapping
  public List<String> getAuditTables() {
    Object tables = redisTemplate.opsForValue().get(AUDIT_TABLE_KEY + ":${" + systemId + "}");

    if (tables != null) {
      return JSONObject.parseArray(tables.toString(), String.class);
    }

    return ImmutableList.of();
  }
}
```
