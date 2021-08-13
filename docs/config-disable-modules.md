---
id: config-disable-modules
title: 禁用功能模块
---

默认情况下，智能表单应用启用所有功能模块。项目组可以在 `application.yml` 中添加配置，禁用功能模块。

## 启用版本

`v1.11.0`

## 示例

在您启动智能表单后端程序前，在您的配置文件中添加以下配置，即可禁用部分功能模块：

```yaml title="application.yml"
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
  # 禁用资源同步（即不启用资源接口，表单发布不同步到系统管理中）
  disable-resource-sync: true
  # 禁用业务角色选择（在选择权限范围时，不显示业务角色选项）
  disable-role: true
  # 禁用应用级别业务角色功能
  disable-application-role: true
  # 禁用部门范围选择（在选择权限范围时，不显示组织机构选项）
  disable-dept: true
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

## disable-resource-sync

有一些项目组不需要将表单页面放入到业务系统的导航中去，则可以通过 `disable-resource-sync` 来禁用资源同步。

## disable-role

有一些业务系统没有业务角色概念，或者不想将表单与业务角色绑定，则可以通过 `disable-role` 来禁用业务角色授权功能。

## disable-application-role

有一些业务系统不需要应用角色，那么可以通过 `disable-application-role` 来禁用应用角色功能。

## disable-dept

有一些业务系统不需要将表单与部门绑定，则可以通过 `disable-dept` 来禁用部门授权功能。
