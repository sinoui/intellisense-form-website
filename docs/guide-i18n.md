---
id: guide-i18n
title: i18n定制
---

如果当前智能表单的文字描述或页面布局不满足业务要求的话，可以通过 i18n 定制插件来实现对页面的调整。从 1.13.0 开始，智能表单项目支持 i18n 插件集成。

## 如何在插件项目中使用

1. 声明 i18n 配置。

```typescript title=src/plugins/i18n/index.ts
import AppSetting from '@sinoform/app-setting';

AppSetting.i18n = {
  // 流程图标题
  'theme2.detailPage.flow.image.title': '流程图',
  // 流转记录标题
  'theme2.detailPage.flow.record.title': '流程图示',
  // 进度详情标题
  'theme2.detailPage.flow.detail.title': '流程记录',
  // 流程图显示顺序
  'theme2.detailPage.flow.image.order': 2,
  // 流转记录显示顺序
  'theme2.detailPage.flow.record.order': 1,
  // 进度详情显示顺序
  'theme2.detailPage.flow.detail.order': 0,
  // 当前状态是否显示
  'theme2.detailPage.flow.status.visible': false,
  // 审批意见是否显示
  'theme2.detailPage.flow.idea.visible': false,
  // 管理首页列表的展现形式
  'manager.homelist': 'table',
};
```

2. 在插件项目入口文件中引用该配置文件。

```typescript title=src/index.ts
import './plugins/i18n';
```

下面分几个场景简单介绍 i18n 的使用方法。

## 修改文字描述

用于替换智能表单中对应的文字描述。

```typescript
AppSetting.i18n = {
  'theme2.detailPage.flow.image.title': '流程图',
};
```

## 控制组件是否显示

隐藏不需要展示的组件，接收布尔类型的值。

```typescript
AppSetting.i18n = {
  'theme2.detailPage.flow.status.visible': false,
};
```

## 控制组件的显示顺序

指定组件的排序，数字越大，组件显示越靠后。下面示例的最终展示顺序为：

- theme2.detailPage.flow.detail.order: 进度详情组件
- theme2.detailPage.flow.record.order: 流转记录组件
- theme2.detailPage.flow.image.order: 流程图组件

```typescript
AppSetting.i18n = {
  'theme2.detailPage.flow.image.order': 2,
  'theme2.detailPage.flow.record.order': 1,
  'theme2.detailPage.flow.detail.order': 0,
};
```

## 管理首页列表的展现形式

管理系统首页列表支持两种展现形式：

- table: 列表布局
- grid: 栅格布局

```typescript
AppSetting.i18n = {
  'manager.homelist': 'table',
};
```
