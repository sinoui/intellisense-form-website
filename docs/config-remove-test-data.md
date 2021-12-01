---
id: config-remove-test-data
title: 清除测试表单
---

为了安全性考虑，智能表单默认不会提供删除已发布表单和应用的功能。如果您要删除已经发布的测试表单以及推送到 sinomatrix 的资源信息，需要按照本文介绍的方式来启用删除已发布表单功能。

## 启用版本

`v1.13.0`

## 开启清除已发布表单的配置

首先需要配置 sinomatrix 数据源，如下所示：

```yaml title="config/application-dev.yaml"
sinomatrix:
  datasource:
    url: jdbc:mysql://192.168.90.127:3306/sinoepuias?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false&allowPublicKeyRetrieval=true
    username: sinoepuias
    password: sinoepuias
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
    druid:
      initial-size: 1
      #最小连接池数量
      #spring.datasource.druid
      min-idle: 1
      #最大连接池数量 maxIdle已经不再使用
      max-active: 20
      #获取连接时最大等待时间，单位毫秒
      max-wait: 60000
```

:::tip 提示

具体修改 config 目录下的哪个 `application.yml` 文件，就看之前修改的是哪一个，保持一致即可。

:::

然后启用删除已经发布表单的功能：

```yaml title="config/application-dev.yaml"
sinoform:
  # 启用删除已经发布的表单
  enable-remove-published-form: true
```

之后，重新启用表单应用，刷新智能表单管理首页，即可看到删除已发布表单的按钮。

## 一次性删除所有的表单和应用

我们为此提供了一个非常便捷的接口，即：

```http
DELETE /apis/intellisense-form/tools/delete-all
```

也可以在浏览器上使用下面的接口：

```http
GET /apis/intellisense-form/tools/delete-all
```

## 安全警告

请做完清除工作之后，删除以上配置，并重新启动智能表单应用，以屏蔽掉这些接口。

## 非 sinomatrix 集成

如果您的资源不是由 sinomatrix 托管，那么不需要配置 `sinomatrix.datasource`，但是同时需要您自己清理导航资源。
