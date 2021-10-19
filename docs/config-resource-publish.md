---
id: config-resource-publish
title: 资源发布配置
---

智能表单本身不维护页面资源和资源的访问权限，而是依托于 sino-matrix 平台或者其他平台来实现的资源发布。

:::info 提示

本文重点介绍与 sino-matrix 集成使用时的资源发布配置。

:::

## 功能介绍

在发布表单的过程中，有一个非常关键的步骤，即资源发布，包括产生表单页面、系统角色和页面资源授权。

## sinoform.uias-server-uri 配置项

智能表单服务默认与 sino-matrix 平台中的 `sino-matrix-uias` 服务提供的接口进行交互，实现资源发布的。需要通过 `sinoform.uias-server-uri` 配置项指定 `sino-matrix-uias` 服务的地址，如下所示：

```yaml title="application-dev.yml"
sinoform:
  uias-server-uri: 127.0.0.1:18001
```

## url.resource-publish-url 配置项

如果在资源发布时，业务系统还需要做一些额外的事情，例如需要将发布的表单应用推送到第三方平台的门户上作为一个快捷链接显示。那么可以使用 `url.resource-publish-url` 配置项来定义业务系统的扩展接口，如下所示：

```yaml title="application-dev.yml"
url:
  resource-publish-url: http://192.168.90.110:19001/extend-resource-publish
```

:::warning 特别注意

需要特别注意，`url.resource-publish-url` 不能在 `sinoform` 的下面。

错误的写法：

```yaml
sinoform:
  uias-server-uri: 127.0.0.1:18001
  url:
    resource-publish-url: http://192.168.90.110:19001/extend-resource-publish
```

正确的写法：

```yaml
sinoform:
  uias-server-uri: 127.0.0.1:18001
url:
  resource-publish-url: http://192.168.90.110:19001/extend-resource-publish
```

:::

### 资源发布扩展接口约定

此扩展接口需要符合如下接口约定：

```http
POST [扩展资源的链接，您可以自行设计链接路径，如http://192.168.90.110:19001/extend-resource-publish]
```

请求体是 `application/json` 格式的，示例数据如下：

```json
{
  "title": "国际合作",
  "id": "1",
  "resourceId": "统一授权资源id",
  "url": "/intellisense-form/app/1/home",
  "type": "app",
  "children": [{
      "title": "流程审批",
      "id": "2",
      "resourceId": "统一授权资源id",
      "url": "/intellisense-form/app/1/home/form/2",
      "type": "form",
      "children": [{
          "title": "草稿箱",
          "id": "3",
          "resourceId": "统一授权资源id",
          "type": "page",
          "url": "/intellisense-form/app/1/home/form/2/draft-list",
          "auth": {
              "deptRole": [{
                  "roleId": "11212121212",
                  "deptIds": ["deptid1", "deptid2"]
              }],
              "deptId": [
                  "4028d00e717bd7e10171b608abaf02da",
                  "4028d00e717bd7e10171f21b8fc1043d"
              ],
              "roleId": ["4028d00e6ec42073016ec46896840014"],
              "user": [
                  {
                    "deptId": "18043",
                    "userId": "4028d0136b7919e7016b791f50c10004"
                  },
              ]
          },
      }, {
          "title": "查询",
          "id": "4",
          "resourceId": "统一授权资源id",
          "type": "page",
          "url": "/intellisense-form/app/1/home/form/2/search-list"
      }]
  }, {
      "title": "人员资料库",
      "id": "7",
      "resourceId": "统一授权资源id",
      "type": "group",
      "url": "/intellisense-form/app/1/home/group/7",
      "children": [{...}]
  }, {
      "title": "出国（境）团组",
      "id": "5",
      "resourceId": "统一授权资源id",
      "type": "noflow",
      "url": "/intellisense-form/app/1/home/form/5/no-flow-list"
  }, {
      "title": "统计分析",
      "id": "6",
      "resourceId": "统一授权资源id",
      "type": "dashboard",
      "url": "/intellisense-form/app/1/home/dashboard/6"
  }]
}
```

字段说明：

- title - 资源名称
- id - 表单或者应用的 id（对于流程表单的草稿箱、查询列表等自动生成的资源，其 id 为 ${表单id}_${页面英文名称}）
- resourceId - 统一授权资源 id
- iconUrl - 应用图标链接
- type - 资源类型
  - app - 应用
  - form - 表单
  - dashboard - 仪表盘
  - noflow - 无流程表单
  - group - 分组
- url - 页面对应的链接
- auth - 页面对应的授权信息
  - deptRole - 部门下的业务角色，如授权办公室（包含子孙部门）下的处员可以起草表单数据
  - deptId - 部门，如授权给办公室（包含子孙部门）所有人员使用
  - roleId - 业务角色，如授权给所有处员使用
  - user - 人员，如授权给张三、李四
- children - 包含的子资源

注意：不是所有级别的资源都有 auth，一般是最底层的资源才有 auth。**上层资源的授权范围包含子孙资源的授权范围。**

如果处理成功，返回成功的响应码即可，响应体有无都可以。