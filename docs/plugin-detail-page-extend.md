---
id: plugin-detail-page-extend
title: 自定义详情页业务逻辑扩展
---

> 业务逻辑扩展主要包括三个方面的扩展：
>
> - 表单值变化监听、表单字段项值变化监听
> - 按钮点击事件的前置回调函数
> - 自定义按钮或表单项权限

## 添加自定义业务逻辑扩展方法

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
  const cancel = detailPageConfig.onButtonPrevClick(
    "save",
    (event: DetailPageContextType) => {
      const { formState } = event;
      if (formState.values["bianhao"] === "002") {
        formState.setFieldError("bianhao", "编号不能重复");
        formState.setFieldTouched("bianhao", true);

        cancel();
        return false;
      }

      cancel();
      return true;
    },
    true
  );
}
```

上述代码中，`detailPageExtend`方法接收一个`detailPageConfig`参数，其中`detailPageConfig`中包含以下方法：

- `onValueChange` —— 监听表单值变化
- `onFieldValueChange` —— 监听指定表单项的值变化
- `onButtonPrevClick` —— 监听指定按钮的点击事件
- `customPermission` —— 注册自定义权限控制的方法
- `getFormValue` —— 获取存储的表单值
- `getFormState` —— 获取当前表单状态

`detailPageConfig` 完整的数据结构如下：

```ts
import type { FormState } from "@sinoui/rx-form-state";
import type { FormData } from "../app/FormData";
import type { CustomPermissionFn } from "../app/CustomPermissionFn";

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
   * @param filterFn 自定义的rxjs过滤方法
   */
  onValueChange<T = any>(
    fn: ValueChangeCallback<T, T>,
    filterFn?: () => any
  ): () => void;
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
   * 监听指定按钮的点击事件
   * @param buttonId 按钮标识
   * @param fn 按钮点击事件的前置回调函数
   * @param common 通用拓展插件点击事件
   */
  onButtonPrevClick(
    buttonId: string,
    fn: (event: any) => boolean,
    common?: boolean
  ): () => void;
  /**
   * 获取存储的表单数据
   */
  getFormValue: () => FormData;
  /**
   * 获取表单实时状态
   */
  getFormState<T = any>(): FormState<T>;
  /**
   * 自定义权限计算方式
   * @param fn 权限判定方法
   */
  customPermission(fn: CustomPermissionFn): void;
}
```

## 注册方式

通过 appSetting 的方式注册此扩展，具体如下：

```ts
import appSetting from "@sinoform/app-setting";

appsetting.detailPageExtendConfig.addDetailPageExtend(
  "表单id", // 这里的表单id指的是表单设计的id
  () => import("./detailPageExtend.ts"),
  false
);
```

`appsetting.detailPageExtendConfig.addDetailPageExtend()`方法接收 3 个参数：

- `formDesignId` —— 表单设计器的 id
- `fn` —— 引入扩展文件的方法
- `common` —— 是否对全局表单起作用。值为`true | false`, 默认为`false`,表示此扩展 逻辑只对绑定的表单起作用。若设为`true`,则无论`formDesignId`为何值，此扩展逻辑都对所有表单起作用。

## 监听表单值变化

在业务逻辑扩展方法中我们可以监听表单值的变化，从而做一系列的操作，具体如下：

```ts
import type { DetailPageExtendsConfig } from "@sinoform/types";

export default function formExtends(detailPageConfig: DetailPageExtendsConfig) {
  // 监听表单值变化
  detailPageConfig.onValueChange((prevValue, nextValue, formState) => {
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
}
```

## 按钮点击事件的前置回调函数

我们可以在扩展逻辑中添加指定按钮点击事件的前置回调函数。比如，一个带编号的表单，编号是不允许重复的，那么我们就可以在扩展逻辑中添加一个`保存`按钮的前置回调函数,在此方法中判断编号值是否重复，从而决定是否进行后续操作，具体实现可参考：

```ts
import type { DetailPageExtendsConfig } from "@sinoform/types";

export default function formExtends(detailPageConfig: DetailPageExtendsConfig) {
  // 监听按钮点击事件，添加前置处理，返回true或false决定是否继续执行点击事件
  const cancel = detailPageConfig.onButtonPrevClick(
    "save",
    (event: DetailPageContextType) => {
      const { formState } = event;
      // 判断编号是否等于已有编号
      if (formState.values["bianhao"] === "002") {
        // 设置校验错误
        formState.setFieldError("bianhao", "编号不能重复");
        formState.setFieldTouched("bianhao", true);

        cancel();
        // 返回false,表示不执行保存操作
        return false;
      }

      cancel();
      //返回true,表示执行保存操作
      return true;
    },
    true
  );
}
```

上述代码的在应用中的实际意义为：在此扩展逻辑绑定的表单点击`保存`按钮时，会首先校验编号字段的值是否与已有数据重复，如果是，则设置校验失败的提示，并且不再执行保存操作；如果不重复，则直接保存。

## 自定义权限判定逻辑
