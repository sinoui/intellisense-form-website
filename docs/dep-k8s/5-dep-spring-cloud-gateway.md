---
id: dep-spring-cloud-gateway
title: 与 spring-cloud-gateway 集成
---

如果您将智能表单部署在 kubernetes 中，然后又希望通过 spring-cloud-gateway 做统一网关处理，那么可以使用以下配置：

```yaml {7,12}
spring:
  cloud:
    gateway:
      routes:
        - # 智能表单后端服务
          id: sinoform_backend_route
          uri: http://sinoform-backend:8080
          predicates:
            - Path=/apis/intellisense-form
        - # 智能表单前端
          id: sinoform_frontend_route
          uri: http://sinoformweb
          predicates:
            - Path=/intellisense-form, /intellisense-form-mobile, /intellisense-form-manager
```

其中 `http://sinoform-backend:8080` 和 `http://sinoformweb` 是智能表单后端和前端的服务名称对应的域名（域名与服务名称保持一致）。如果spring-cloud-gateway与智能表单部署在不同的命名空间中，则域名中需要添加上智能表单的命名空间。例如，假设智能表单部署在 `default` 命名空间中，则配置如下：

```yaml {7,12}
spring:
  cloud:
    gateway:
      routes:
        - # 智能表单后端服务
          id: sinoform_backend_route
          uri: http://sinoform-backend.default:8080
          predicates:
            - Path=/apis/intellisense-form
        - # 智能表单前端
          id: sinoform_frontend_route
          uri: http://sinoformweb.default
          predicates:
            - Path=/intellisense-form, /intellisense-form-mobile, /intellisense-form-manager
```