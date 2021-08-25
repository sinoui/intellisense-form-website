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

```ts title="detailPageExtend.ts"
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

```ts title="DetailPageExtendsConfig.ts"
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

```tsts title="index.ts"
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
- `common` —— 是否对全局表单起作用。值为`true | false`， 默认为`false`，表示此扩展 逻辑只对绑定的表单起作用。若设为`true`，则无论`formDesignId`为何值，此扩展逻辑都对所有表单起作用。

## 监听表单值变化

在业务逻辑扩展方法中我们可以监听表单值的变化，从而做一系列的操作，具体如下：

```ts title="detailPageExtend.ts"
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

我们可以在扩展逻辑中添加指定按钮点击事件的前置回调函数。比如，一个带编号的表单，编号是不允许重复的，那么我们就可以在扩展逻辑中添加一个`保存`按钮的前置回调函数，在此方法中判断编号值是否重复，从而决定是否进行后续操作，具体实现可参考：

```ts title="detailPageExtend.ts"
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

智能表单权限一共有三部分：

1. 流程节点配置的表单项权限和节点操作权限
2. 表单设计时，通过选项关联设置的表单项权限
3. 通过扩展业务逻辑的方式注册的权限

这里我们主要描述如何通过扩展业务逻辑的方式自定义权限模型。

### 自定义权限判定方法

```ts title="getCustomPermission.ts"
import type {
  FormData,
  FormValues,
  UserInfo,
  PermissionItem,
} from "@sinoform/types";

export default function getCustomPermission(
  formData: FormData | undefined,
  formValues: FormValues,
  currentUser: UserInfo
): PermissionItem[] {
  const permissionItems: PermissionItem[] = [];
  const { passNodes = [], flowNode } = formData ?? {};

  if (
    flowNode?.name === "处长审批" &&
    passNodes?.every(
      (node) => node.id !== "98dfd13f-f700-4751-8983-0323a451a4c1"
    )
  ) {
    permissionItems.push({
      name: "end",
      hidden: true,
    });
  }

  return permissionItems;
}
```

上述代码示例的意义是为了控制`办结`按钮的权限，如果当前节点是处长审批节点，且此流程还未经过指定节点，则办结按钮不显示。

### 注册权限判定方法

当我们自定义完权限判定之后，可通过下面的方式将其注册进业务扩展逻辑中。

```ts title="detailPageExtend.ts"
import type { DetailPageExtendsConfig } from "@sinoform/types";
import getCustomPermission from "./getCustomPermission";

export default function formExtends(detailPageConfig: DetailPageExtendsConfig) {
  // 注册权限判定方法
  detailPageConfig.customPermission(getCustomPermission);
}
```

### 权限判定方法说明

权限判定方法接收三个参数：

- `formData` —— 表单数据，包括表单配置数据、流程配置数据、流经节点等
- `formValues` —— 表单项的值
- `currentUser` —— 当前登录人信息

我们可以根据以上三个参数，添加各种逻辑判断，从而控制表单项或者按钮权限。

### 权限判定示例

1. 文秘节点配置`办结`按钮，但必须在经过`办公室主任审批`后才能显示此按钮

```ts title="getCustomPermission.ts"
import type {
  FormData,
  FormValues,
  UserInfo,
  PermissionItem,
} from "@sinoform/types";

export default function getCustomPermission(
  formData: FormData | undefined,
  formValues: FormValues,
  currentUser: UserInfo
): PermissionItem[] {
  const permissionItems: PermissionItem[] = [];
  const { passNodes = [], flowNode } = formData ?? {};

  // 判断当前节点是否是`文秘`节点且流程已经流经`办公室主任审批`节点，这里用到了节点id,由于每个节点的id都不一致，因此如果使用节点id的话，此权限判定只能对绑定的表单起作用。如果此逻辑为共用，建议使用节点名称匹配，即`node.name !== '办公室主任审批'`
  if (
    flowNode?.name === "文秘" &&
    passNodes?.every(
      (node) => node.id !== "98dfd13f-f700-4751-8983-0323a451a4c1"
    )
  ) {
    permissionItems.push({
      name: "end",
      hidden: true,
    });
  }

  return permissionItems;
}
```

2.流程 `办结` 之后，`张三` 对表单中的`用户反馈`有可见且可编辑权限

```ts title="getCustomPermission.ts"
import type {
  FormData,
  FormValues,
  UserInfo,
  PermissionItem,
} from "@sinoform/types";

export default function getCustomPermission(
  formData: FormData | undefined,
  formValues: FormValues,
  currentUser: UserInfo
): PermissionItem[] {
  const permissionItems: PermissionItem[] = [];
  const { passNodes = [], flowNode } = formData ?? {};

  if (
    formValus?.workflowStatus === "已办结" &&
    currentUser.userName === "张三"
  ) {
    permissionItems.push({
      name: "yonghufankui", // 用户反馈字段标识
      hidden: false,
      readOnly: false,
    });
  }

  return permissionItems;
}
```
