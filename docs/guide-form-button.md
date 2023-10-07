---
id: guide-form-button
title: 定制表单按钮组件
---

不同于流程按钮，表单按钮是在表单详情页中表单项布局区域展示的按钮，通常它可以用来完成一些特定的 UI 交互动作，实现特定的业务逻辑功能。设计界面添加完表单按钮之后，我们只是完成了布局方面的设置，如果想要它发挥功能，还要搭配插件项目给按钮绑定功能。

## 如何在插件项目中使用

前提是我们需要在表单设计界面中添加表单按钮，然后我们才可以在插件项目中为指定的按钮绑定方法。

下面我们来实现一个小需求，点击按钮，打开一个弹窗，在这个弹窗内部获取当前表单值，并显示表单项 field_1 的值

1. 创建表单按钮的逻辑文档，为指定的表单按钮添加业务逻辑

```typescript title="src/plugins/extends-form-button/index.tsx"
import React from "react";
import appSetting from "@sinoform/app-setting";
import { globalPortalManager } from "@sinoform/app-core";

import DemoDialog from "./DemoDialog";

// 打开弹窗
function renderPage(formState: any) {
  // 生成临时id
  const modalId = Math.random().toString(16).slice(2);
  console.log("modalId", modalId);
  const dialog = (
    <DemoDialog
      formState={formState}
      onRequestClose={() => globalPortalManager.hidePortal(modalId)}
    />
  );

  return globalPortalManager.showPortal(modalId, dialog);
}

// 创建表单监听
appSetting.hooks.detailPage.tap("监听表单按钮的事件", (detailPage) => {
  const { hooks, formData, formState } = detailPage;
  const { formDesign: { id } = {} } = formData;

  if (id === "62611cc481b95cd6e3d913aa") {
    // 监听该表单中所有表单按钮的点击事件， 我们给field_2对应的表单按钮添加弹窗实现
    hooks.fieldButtonClick.tap("表单按钮点击事件", (fieldId) => {
      if (fieldId === "field_2") {
        renderDialog(formState);
      }
    });
  }
});
```

2. 创建弹窗组件，展示 field_1 的值

```typescript title="src/plugins/extends-form-button/DemoDialog.tsx"
import React from "react";
import Button from "@sinoui/core/Button";
import Dialog from "@sinoui/core/Dialog";
import DialogActions from "@sinoui/core/DialogActions";
import DialogContent from "@sinoui/core/DialogContent";
import DialogTitle from "@sinoui/core/DialogTitle";

export interface Props {
  formState: any;
  onRequestClose: () => void;
}

export default function DemoDialog({ onRequestClose, formState }: Props) {
  return (
    <Dialog
      open
      onRequestClose={onRequestClose}
      showCloseIcon
      className="sinoform-show-draft-form-dialog"
    >
      <DialogTitle>测试弹窗</DialogTitle>
      <DialogContent>
        <>{formState?.values?.field_1}</>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose}>取消</Button>
        <Button onClick={onRequestClose}>确定</Button>
      </DialogActions>
    </Dialog>
  );
}
```

3. 在插件的入口文件中引用该业务逻辑文件

```typescript title="src/index.ts"
import "./plugins/extends-form-button";
```

### 子表单中的表单按钮功能扩展

为了方便表单按钮在子表单中使用，`fieldButtonClick`中回调函数的参数做了扩展，在原有的 `fieldId` 基础上，新增了`parentFieldName`和`rowIdx`两个参数，两个参数可用于获取按钮所在行的数据。

```ts
hooks.fieldButtonClick.tap(
  "表单按钮点击事件",
  (
    fieldId: string,
    parentFieldName: string | undefined,
    rowIdx: number | undefined
  ) => {
    console.log(
      "表单按钮的id",
      fieldId,
      "父表单的fieldName",
      parentFieldName,
      "当前点击的表单按钮在子表单中的第几行",
      rowIdx
    );
  }
);
```

接下来我们就可以在业务系统中测试按钮的点击效果了。上文示例中的需求比较简单，其实我们可以通过详情页上下文中的数据做非常多的事情，比如拿到表单数据之后我们可以根据数据请求后端接口实现一些我们自己的业务操作，具体的功能实现项目组可以根据自己的业务需求实现。
