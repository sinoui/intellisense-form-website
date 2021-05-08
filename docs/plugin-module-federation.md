---
id: plugin-module-federation
title: 模块联邦配置
---

插件项目基于 webpack5 的模块联邦机制，`package.json`文件`dependencies`中的第三方库依赖会作为共享的依赖。如果智能表单项目的依赖中同样有该库，会优先使用智能表单中的依赖，所以对版本的要求非常高，需要保证与智能表单项目的依赖版本保持一致。

模块联邦配置在`webpack.base.config.js`的`plugins`中

```js
new ModuleFederationPlugin({
  name: "<%=模块名称%>",
  library: { type: "var", name: "<%=容器解析名称%>" },
  filename: "extend.js",
  shared: {
    ...sharedDeps,
  },
  exposes: { ".": "./src/index" },
});
```

说明：

1. name 作为模块输出名称需要保证唯一。

2. library.name 是 extend.js 做为远程容器解析时用到的名称，是插件配置中的插件标识，要保证其唯一性。 默认为当前项目名称的转小驼峰之后的值。

3. filename 默认 extend.js。 项目打包后会生成 extend.js 文件。插件配置时的 url 就是此文件的地址，形式：`<域名或ip>[端口]/extend.js`，例如：`http://localhost:8090/extend.js`。

4. shared 需要共享的第三方依赖.

5. exposes 插件项目导出的模块。
