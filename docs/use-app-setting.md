---
id: use-app-setting
title: appSetting
sidebar_label: appSetting的使用
---

> appSetting 为默认全局配置，其中包括表单配置、流程按钮配置、打印输出配置、仪表盘图表配置以及业务逻辑扩展配置。

`appSetting`数据结构如下：

```ts
interface AppSetting {
  /**
   * 表单配置
   */
  formConfig: FormConfig;
  /**
   * 流程配置
   */
  flowConfig: FlowConfig;
  /**
   * 打印输出配置
   */
  printOutConfig: PrintOutSetting;
  /**
   * 图表配置
   */
  dashboardConfig: DashboardConfig;
  /**
   * 详情页逻辑扩展
   */
  detailPageExtendConfig: DetailPageExtendInfo<T>;
}
```

## 安装方式

```shell
npm install @sinoform/app-setting

或

yarn add @sinoform/app-setting
```

## 使用方式

```tsx
import appSetting from '@sinoform/app-setting';

const { formConfig, flowConfig } = appSetting;

formConfig.addField({...}); // 新增字段配置
formConfig.field('input'); // 获取指定type的字段配置
formConfig.formConfigPanel = React.lazy(()=>import('@sinoform/form-config-panel'));  // 指定表单属性设置面板

flowConfig.addButton({...}); // 新增按钮配置
flowConfig.button(buttonId);  // 获取指定id的按钮配置
```
