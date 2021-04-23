---
id: plugin-index
title: 插件开发
sidebar_label: 开篇
---

智能表单目前内置集成了大量表单控件及流程按钮，能够快速实现简单的审批流程。并且支持通过插件的方式进行扩展，主要包括以下扩展点：

- 新增表单项控件
- 新增流程按钮，如盖章
- 新增详情页业务逻辑
- 自定义样式

## 创建插件项目

可以通过命令行快速创建插件项目，具体如下：

```json
npx sinoform-pulgin-cli create xxx-plugins  //默认创建react项目
或
npx sinoform-pulgin-cli create xxx-plugins -t vue //创建vue项目
```

执行成功后会生成如下项目结构：

```Makedown
xxx-plugins
|__ .vscode
|__ .storybook
|__ src
    |__ index.tsx
    |__ plugins
|__ stories
|__ .editorconfig
|__ .eslintrc.ci.json
|__ package.json
|__ webpack.config.js
|__ webpack.prod.js
|__ README.md
|__ tsconfig.json
```

我们可以在 plugins 文件夹下添加文件夹进行插件开发，具体开发方式参考详细内容。

- [新增表单字段](plugin-field)
- [新增流程按钮](plugin-button)
- [新增详情页业务逻辑](plugin-detail-page-extend)
- [自定义样式](plugin-css)
