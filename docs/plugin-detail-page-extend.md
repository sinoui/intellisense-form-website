---
id: plugin-detail-page-extend
title: 自定义详情业务逻辑扩展
---

业务逻辑扩展主要包括两方面：

- 表单值变化监听、表单字段项值变化监听
- 按钮点击事件的前置回调函数

## 自定义业务逻辑

定义一个`detailPageExtend`方法，此方法接收`detailPageConfig`参数，`detailPageConfig`结构如下：

```ts
import type { FormState } from "@sinoui/rx-form-state";

export interface ValueChangeCallback<ValueType = any, FormType = any> {
  /**
   * @param prevValue 变化之前的值
   * @param nextValue 变化之后的值
   * @param formState 表单状态管理对象
   */
  (
    prevValue: ValueType,
    nextValue: ValueType,
    formState: FormState<FormType>
  ): void;
}

export interface DetailPageExtendsConfig {
  /**
   * 监听表单值变化
   *
   * @param fn 值变化的回调函数
   */
  onValueChange<T = any>(fn: ValueChangeCallback<T, T>): () => void;
  /**
   * 监听表单项值的变化
   *
   * @param fieldName 表单字段标识
   * @param fn 值变化的回调函数
   */
  onFieldValueChange<ValueType = any, FormType = any>(
    fieldName: string,
    fn: ValueChangeCallback<ValueType, FormType>
  ): () => void;
  /**
   * 注销监听
   */
  destory: () => void;
  /**
   * 监听指定按钮的点击事件
   * @param buttonId 按钮标识
   * @param fn 按钮点击事件的前置回调函数
   */
  onButtonPrevClick(buttonId: string, fn: (event: any) => boolean): () => void;
}
```

方法示例`detailPageExtend.ts`

```ts
import type { DetailPageExtendsConfig } from "@sinoform/types";

export default function formExtends(detailPageConfig: DetailPageExtendsConfig) {
  // 监听表单值变化
  detailPageConfig.onValueChange((prevValue, nextValue) => {
    console.log(
      `表单值发生变化：${JSON.stringify(prevValue)}=======>${JSON.stringify(
        nextValue
      )}`
    );
  });

  // 监听field_1表单项值的变化
  detailPageConfig.onFieldValueChange("field_1", (prevValue, nextValue) => {
    console.log(`field_1的值发生变化：${prevValue}=======>${nextValue}`);
  });

  // 监听按钮点击事件，添加前置处理，返回true或false决定是否继续执行点击事件
  const cancel2 = detailPageConfig.onButtonPrevClick("save", (event) => {
    console.log(
      `保存按钮被点击===========>携带数据为${event}===>${JSON.stringify(
        event.formState.values,
        undefined,
        2
      )}`
    );

    return true;
  });

  cancel2();

  const cancel1 = detailPageConfig.onButtonPrevClick("save", (event) => {
    console.log("验证事件重复");
    return false;
  });
}
```

## 注册方式

通过 appSetting 的方式进行注册，具体如下：

```ts
import appSetting from "@sinoform/app-setting";

appsetting.detailPageExtendConfig.addDetailPageExtend(
  "表单id", // 这里的表单id指的是表单设计的id
  () => import("./detailPageExtend.ts")
);
```
