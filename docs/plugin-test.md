---
id: plugin-test
title: 插件联调验证
---

支持本地读取和远程数据库读取两种插件配置读取方式。

### 本地读取配置

智能表单项目从浏览器的 localstorage 中读取插件配置，适合在开发阶段实时调试。打开浏览器在主项目页面的控制台中执行如下脚本

```js
var items = [
  {
    url: "http://localhost:8090/extend.js",
    name: "sinoformPlugin",
  },
];

localStorage.setItem("sinoform-preview-plugins", JSON.stringify(items));
```

items 是需要配置的本地插件信息，请自行替换。配置完成之后，刷新页面即可验证。

### 远程数据库配置

智能表单主界面右上角有插件维护功能模块，在此界面新增或修改插件配置后可以刷新界面进行验证。
