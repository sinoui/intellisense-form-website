---
id: config-cas-login
title: CAS 单点登录集成配置
---

## 首发版本

**`1.17.0`**

## 关闭默认 sso 验证

修改 application.yml 文件中的 sinoform.enable-auth-interceptor 配置为 false：

```yaml
sinoform:
  enable-auth-interceptor: false
```

## 开启 cas 客户端（单机部署）

在 application.yml 文件中添加以下配置：

```yaml
cas:
  # cas 服务地址前缀
  server-url-prefix: http://192.168.90.127:8888/cas
  # cas 服务登录地址
  server-login-url: http://192.168.90.127:8888/cas/login
  # 智能表单服务地址（或 nginx 地址）
  client-host-url: http://192.168.90.127
# cas 需要忽略验证的 url
sinoform:
  public-paths:
    - /apis/intellisense-form/common/**
    - /apis/intellisense-form/login
    - /apis/intellisense-form/files/**
    - /apis/intellisense-form/theme**
    - /apis/intellisense-form/plugIn**
```

## 开启 cas 客户端（集群部署）

在 application.yml 文件中添加以下配置：

```yaml
spring:
  redis:
    # 基本连接信息配置
    database: 0
    host: 192.168.90.125
    port: 6379
    password: 123456
    # 连接池信息配置
    lettuce:
      pool:
        #连接池最大连接数（使用负值表示没有限制） 默认 8
        max-active: 50
        #连接池中的最大空闲连接 默认 8
        max-idle: 8
        #连接池中的最小空闲连接 默认 0
        min-idle: 0
cas:
  # cas 服务地址前缀
  server-url-prefix: http://192.168.90.127:8888/cas
  # cas 服务登录地址
  server-login-url: http://192.168.90.127:8888/cas/login
  # 智能表单服务地址（或 nginx 地址）
  client-host-url: http://192.168.90.127
# cas 需要忽略验证的 url
sinoform:
  public-paths:
    - /apis/intellisense-form/common/**
    - /apis/intellisense-form/login
    - /apis/intellisense-form/files/**
    - /apis/intellisense-form/theme**
    - /apis/intellisense-form/plugIn**
```

## 实现效果

未登录时，访问后端接口会返回 401 错误，错误内容如下：

```json
{
  "redirectUrl": "cas 登录页url（对应 application.yml 中的 cas.server-login-url 配置）"
}
```

前端拿到该 url 后，在 url 后面拼接参数并跳转到 cas 登录页，拼接规则为：

```text
[cas 登录url]?service=[后端 cas 登录接口 url]
```

例如当前页为 `http://localhost:8085/intellisense-form/home`：

```http
http://192.168.90.127:8888/cas/login?service=http://localhost:8081/apis/intellisense-form/cas-login?redirectUrl=http://localhost:8085/intellisense-form/home
#参数需要转码，转码后的最终请求为：
http://192.168.90.127:8888/cas/login?service=http%3A%2F%2Flocalhost%3A8081%2Fapis%2Fintellisense-form%2Fcas-login%3FredirectUrl%3Dhttp%253A%252F%252Flocalhost%253A8085%252Fintellisense-form%252Fhome
```

登录成功后，跳转回当前页。

## 后端 cas 登录接口说明

当从 cas 登录后，智能表单后端需要获取登录票据，并跳转至当前页，该功能由以下接口实现：

```http request
GET /apis/intellisense-form/cas-login?redirectUrl=[当前页url]
```
