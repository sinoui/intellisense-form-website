---
id: config-oauth2-login
title: OAuth2单点登录集成配置
---


## 首发版本

1.17.0

## 开启 OAuth2 客户端

### 单机版

在 application.yml 文件中添加以下配置：

```yaml
spring:
  security:
    oauth2:
      client:
        registration:
          # 注册客户端ID，客户端自定义
          form-client-oidc: 
            # 自定义， 与spring.security.oauth2.client.provider 保持一致即可
            provider: my-provider
            # 认证服务端注册后提供
            client-id: form-client 
            # 认证服务提供
            client-secret: secret 
            # 认证授权类型（授权码）
            authorization-grant-type: authorization_code  
            redirect-uri: "http://127.0.0.1/apis/intellisense-form/oauth2/login/code/{registrationId}"
            # 客户端申请注册的权限范围（逗号分隔）,认证服务提供
            scope: openid,profile
            # 客户端名称，自定义
            client-name: form-client 
        provider:
          my-provider:
          	# 认证服务器地址
            issuer-uri: http://localhost:9000

# oauth2 需要忽略验证的 url
sinoform:
  public-paths:
    - /apis/intellisense-form/common/**
    - /apis/intellisense-form/login
    - /apis/intellisense-form/files/**
    - /apis/intellisense-form/theme/**
    - /apis/intellisense-form/plugIn/**
```

配置说明：

- `redirect-uri`：重定向`uri`，`ip`部分为智能表单访问`ip`，后面的`/apis/intellisense-form/oauth2/login/code/{registrationId}`保持不变。这个配置需要提供给**OAuth2认证服务器**。其中`{registrationId}`即为`form-client-oidc`。也就是最终提供给认证服务器的地址为：`http://ip/apis/intellisense-form/oauth2/login/code/form-client-oidc`。

  

### 集群版

如果部署多个智能表单后端服务，除上述配置外，还需要添加以下配置：

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
```

## 实现效果

未登录时，访问后端接口会返回 401 错误，错误内容如下：

```json
{
  "redirectUrl": "OAuth2认证服务器授权请求URL",
  "type": "oauth2"
}
```

前端拿到该 URL后，直接重定向到该URL即可。

此时，会跳转到认证服务器的登录页面，登录之后，可能会出现是否确认授权的页面（根据认证服务器配置不同，可能不需要确认），确认授权后，跳转回智能表单页面。

