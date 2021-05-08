---
id: plugin-test
title: 插件项目联调
---

支持本地读取和远程数据库读取两种插件配置获取方式。

### 本地读取配置

智能表单项目可以从浏览器的 localstorage 中读取插件配置。支持多个插件项目同时验证，适合在开发阶段实时调试。打开浏览器在智能表单项目页面的控制台中执行如下脚本，将插件配置写入 localstorage 中。

```js
var items = [
  {
    url: "http://localhost:8090/extend.js",
    name: "sinoformPlugin",
  },
];

localStorage.setItem("sinoform-preview-plugins", JSON.stringify(items));
```

插件信息 items 根据插件自身项目的配置自行替换。配置完成之后，刷新页面即可验证。

### 远程数据库配置

智能表单主界面右上角有插件维护功能模块，在此界面新增或修改插件配置后可以刷新界面进行验证。

![插件维护](/intellisense-form-website/img/plugin-operation.png)

1. 插件名称。具有唯一性，建议使用 ModuleFederationPlugin 中的 name。

2. 插件标识。具有唯一性，必须使用 ModuleFederationPlugin 中的 libaray.name。

3. 插件 url。插件的入口文件（extend.js）的请求地址，参考模块联邦配置中的 filename 说明。
