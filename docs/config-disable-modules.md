---
id: config-disable-modules
title: 禁用功能模块
---

默认情况下，智能表单应用启用所有功能模块。项目组可以在 `application.yml` 中添加配置，禁用功能模块。

## 启用版本

`v1.11.0`

## 示例

在您启动智能表单后端程序前，在您的配置文件中添加以下配置，即可禁用部分功能模块：

```yaml
sinoform:
  # 禁用移动端功能（屏蔽掉移动端预览功能）
  disable-mobile: true
  # 禁用仪表盘功能
  disable-dashboard: true
  # 禁用表单应用
  disable-application: true
  # 禁用流程表单
  disable-flow-form: true
  # 禁用登录拦截功能
  enable-auth-interceptor: false
```

## disable-mobile

此选项会禁用移动端功能。添加此配置后，会禁用表单设计中的移动端预览，如下图所示：

![disable-mobile](/img/config-disable-modules/disable-mobile.png)

## disable-dashboard

此选项会禁用仪表盘功能，在创建应用时，则不会出现仪表盘选项。如下图所示：

![disable-dashboard](/img/config-disable-modules/disable-dashboard.png)

## disable-application

此选项会禁用表单应用，只保留表单模块。如下图所示：

![disable-application](/img/config-disable-modules/disable-application.png)

![disable-application](/img/config-disable-modules/disable-application2.png)

![disable-application](/img/config-disable-modules/disable-application3.png)

## disable-flow-form

此选项会禁用流程表单，只保留无流程表单功能。如下图所示：

![disable-flow-form](/img/config-disable-modules/disable-flow-form.png)

![disable-flow-form](/img/config-disable-modules/disable-flow-form2.png)

![disable-flow-form](/img/config-disable-modules/disable-flow-form3.png)

![disable-flow-form](/img/config-disable-modules/disable-flow-form4.png)

## enable-auth-interceptor

默认禁用登录拦截功能，即访问的接口不添加登录验证。可以设置为 `true`，来启用此功能：

```yaml
sinoform:
  # 启用登录拦截功能
  enable-auth-interceptor: true
```
