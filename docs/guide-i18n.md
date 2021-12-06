---
id: guide-i18n
title: i18n定制
---

如果当前智能表单的文字描述或页面布局不满足业务要求的话，可以通过 i18n 定制插件来实现对页面的调整。从 1.13.0 开始，智能表单项目支持 i18n 插件集成。目前 i18n 插件支持一下几类场景的配置：

## 修改文字描述

字段值的类型声明:

```typescript
interface I18NItemInterface {
  /**
   * 消息内容
   */
  message: string;
  /**
   * 描述
   */
  description: string;
}

type I18NItem = string | I18NItemInterface;
```

支持的配置如下：

```typescript
export interface Theme2I18N {
  /**
   * 主题二中的流转记录标题。
   *
   * @defaultvalue '流转记录'
   * @since 1.13.0
   */
  'theme2.detailPage.flow.record.title'?: I18NItem;
  /**
   * 主题二中的进度详情标题。
   *
   * @defaultvalue '进度详情'
   * @since 1.13.0
   */
  'theme2.detailPage.flow.detail.title'?: I18NItem;
  /**
   * 主题二中的流程图标题。
   *
   * @defaultvalue '流程图'
   * @since 1.13.0
   */
  'theme2.detailPage.flow.image.title'?: I18NItem;
}
```

## 控制组件是否显示

```typescript
/**
 * 主题二中的当前状态是否显示。
 *
 * @defaultvalue true
 * @since 1.13.0
 */
'theme2.detailPage.flow.status'?: boolean;

/**
 * 主题二中的审批意见是否显示
 *
 * @defaultvalue true
 * @since 1.13.0
 */
'theme2.detailPage.flow.idea'?: boolean;
```

## 控制组件的显示顺序

```typescript
 /**
 * 主题二中的流程图区块显示顺序。值越大，越靠后。
 *
 * @defaultvalue 0
 * @since 1.13.0
 */
'theme2.detailPage.flow.image.order'?: number;
/**
 * 主题二中的流转记录区块显示顺序。值越大，越靠后。
 *
 * @defaultvalue 0
 * @since 1.13.0
 */
'theme2.detailPage.flow.record.order'?: number;
/**
 * 主题二中的进度详情区块显示顺序。值越大，越靠后。
 *
 * @defaultvalue 0
 * @since 1.13.0
 */
'theme2.detailPage.flow.detail.order'?: number;
```

## 设计系统首页的布局方式

```typescript
/**
 * 管理首页列表的展现形式。
 *
 * @since 1.13.0
 * @defaultvalue 'list'
 */
'manager.homelist': 'table' | 'grid';
```

## 如何在插件项目中使用

上面我们了解了目前智能表单支持的 i18n 配置项，下面介绍一下如何在插件项目中使用这些配置。操作非常简单，分如下两个步骤：

1. 声明 i18n 配置

```src/plugins/i18n/index.ts
import AppSetting from "@sinoform/app-setting";

AppSetting.i18n = {
  // 流程图title
  "theme2.detailPage.flow.image.title": "流程图",
  // 流转记录title
  "theme2.detailPage.flow.record.title": "流程图示",
  // 进度详情title
  "theme2.detailPage.flow.detail.title": "流程记录",
  // 流程图显示顺序
  "theme2.detailPage.flow.image.order": 2,
  // 流转记录显示顺序
  "theme2.detailPage.flow.record.order": 1,
  // 进度详情显示顺序
  "theme2.detailPage.flow.detail.order": 0,
  // 当前状态是否显示
  "theme2.detailPage.flow.status": false,
  // 审批意见是否显示
  "theme2.detailPage.flow.idea": false,
  // 设计首页的显示方式
  "manager.homelist": "list",
};
```

2. 在插件项目入口文件中引用该配置文件

```src/index.ts
import './plugins/i18n';
```
