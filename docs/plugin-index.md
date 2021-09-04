---
id: plugin-index
title: 插件开发
sidebar_label: 开篇
---

智能表单目前内置集成了大量表单控件及流程按钮，能够快速实现审批流程。并且支持通过插件的方式进行扩展，主要包括以下扩展点：

- 新增表单项控件
- 新增流程按钮，如盖章
- 新增详情页业务逻辑（监听表单值变化、按钮前置回调、自定义权限判定等）
- 自定义样式

## 插件开发方式

智能表单页面采用 React 开发的，但是项目组可以根据自身情况，可以选择 React、Vue 或者 jQuery 开发插件。插件项目是独立于智能表单项目开发、打包和部署的。一个智能表单项目可以安装多个插件，但是推荐一个项目组一个插件项目就可以了，这样插件开发体验会更好一些。

:::info 如何支持 jQuery 的？

我们将 jQuery 代码封装成 WebComponent 组件，然后将 WebComponent 组件封装成 React 组件，将 React 组件注入到智能表单中使用。您将在教程中会看到相关的示例代码，会有这个封装的过程。不用担心，这个过程只有渺渺几行代码，不会增加额外的开发量。

您在看教程文档时，我们很多时候会提 Web Component。在提及 Web Component 时，等同于在说明 jQuery 开发插件方式。

:::

## 教程

为了您能够快速入门插件开发，我们准备了[入门教程](http://localhost:3000/intellisense-form-website/docs/guide-setup)，您只需要跟着一步一步学习，就能够掌握插件开发。如果您对插件开发已经了如指掌，但是想查找更多的插件知识，可以查看我们准备的高级教程。

在开始教程前，您可以先下载[示例源码](#示例源码)，边运行、调试示例源码边学习效果更好。

## 示例源码

入门教程文档中的示例代码是采用 Web Component 编写的。如果您使用 React 或者 Vue 开发插件，则需要自行下载相关的示例代码对比着学习。

入门教程、高级教程文档中的示例代码可以从以下链接下载到：

- [sinoform-plugins-web-component-examples](https://gitee.com/sinoui/sinoform-plugins-web-component-examples)
- [sinoform-plugins-vue-examples](https://gitee.com/sinoui/sinoform-plugins-vue-examples)
- [sinoform-plugins-react-examples](https://gitee.com/sinoui/sinoform-plugins-react-examples)

## 在线演示系统中查看插件效果

为了您能够快速查看和调试示例源码的插件效果，我们在[智能表单在线演示系统](http://121.30.232.162:18880/sso/)中准备了相关的示例表单，您可以在入门教程的 [开发第一个插件](./guide-hello.mdx#在智能表单产品中调试插件) 章节中看到如何使用示例表单。

## 最佳实践

在开发插件项目时，我们将比较好的开发习惯整理成文档，放在最佳实践中。您在开发插件时，请阅读一下这些最佳实践。

## 有问题？

这是我们准备的第一版插件开发系列文档，肯定有很多纰漏或者没有说明的地方，请您多多包涵。如果您在开发插件时遇到困难，而我们准备的教程帮助不到您，您可以联系我们的开发人员，我们会第一时间解决您遇到的问题。
