---
id: plugin-detail-page-extend
title: 自定义详情业务逻辑
---

业务逻辑扩展主要包括两方面：

- 表单值监听、关联值计算
- 按钮点击事件的前置回调函数

## 自定义业务逻辑

定义一个`detailPageExtend`方法，此方法接收`detailPageConfig`参数，`detailPageConfig`结构如下：

```ts
export interface DetailPageConfig {
  /**
   * 表单状态管理
   */
  formState: FormState;
  /**
   * 监听表单值变化
   */
  onValueChange: (prevValue: any, nextValue: any) => void;
  /**
   * 按钮前置事件
   */
  onButtonPrevClick: (
    buttonId,
    fn: (prevValue: string, nextValue: string, formState: FormState) => boolean
  ) => void;
}
```

```ts
export default function (detailPageConfig) {
  const formState = detailPageConfig.formState;
  // 监听表单值变化
  detailPageConfig.onValueChange((prevValue, nextValue) => {
    console.log(`表单值发生了变化：${prevValue} -> ${nextValue}`);
  });

  // 监听某个表单项的值变化
  detailPageConfig.onFieldValueChange('field_1', (prevValue, nextValue,  formState) => {
    console.log(`字段field_1值发生变化：${prevValue} -> ${nextValue}`);
  });

  // 添加按钮点击监听
  detailPageConfig.onButtonPrevClick("按钮名称", (event) => {
    console.log(`点击按钮${event.buttonId}`);
    ...
    return true; // 根据返回值决定是否进行后续处理
  });
}
```

## 注册方式

通过 appSetting 的方式进行注册，具体如下：

```ts
import AppSetting from "@sinoform/app-setting";

AppSetting.addDetailPageExtend("表单id", () => import("./detailPageExtend.ts"));
```
