---
id: guide-button-in-detail-page
title: 详情页注册按钮
---

> 支持版本：v1.15.0

智能表单从 v1.12.0 版本开始支持[按钮注册](./guide-button)。但在后续的实际运用场景中，上述方式不能完全满足我们的需求，因此从 v1.15.0 版本开始智能表单新增了直接将按钮注册至详情页的方法。

## 示例：无流程表单新增发布按钮

1. 开发一个发布按钮。

```tsx title="src/plugins/custom-button/PublishButton.tsx"
import $ from "jQuery";
import { SinoFormElement } from "@sinoform/plugin-sinoform-helpers";
import "./style.css";

export default class PublishButton extends SinoFormElement {
  onClick() {
    console.log("按钮被点击了");
  }

  override render() {
    this.innerHTML = `<button class="custom-button">发布</button>`;

    $(".custom-button", this).on("click", this.onClick.bind(this));
  }
}
```

组件样式：

```css title="src/plugins/custom-button/style.css"
.custom-button {
  color: #fff;
  background-color: #2196f3;
  font-size: 0.875rem;
  border: none;
  height: 36px;
  margin: 8px;
}
```

2. 包装为 React 组件

```typescript title="src/plugins/custom-button/index.ts"
import { wrapperWebComponent } from "@sinoform/plugin-sinoform-helpers";
import PublishButton from "./PublishButton";

export default wrapperWebComponent("publish-button", PublishButton);
```

3. 注册到智能表单

```typescript title="src/index.ts"
import AppSetting from "@sinoform/app-setting";

// 允许显示发布的表单id
const ALLOW_PUBLISH_FORM_IDS = ["form-id-1", "form-id-2"];

appSetting.detailPageConfig.addButton({
  id: "publishButton", // 按钮标识
  name: "发布", // 按钮名称
  render: React.lazy(() => import("./plugins/custom-button")),
  availability: (
    permissionHelper, // 智能表单内置的权限辅助方法
    formData, // 表单详情页数据
    currentUser // 当前登录人
  ) => {
    return ALLOW_PUBLISH_FORM_IDS.includes(formData.formDesign.id);
  },
});
```

## 按钮属性

表单会给按钮组件传递以下属性：

- `formState` - 表单状态
- `detailPage` - 详情页数据
- `appInfo` - 应用级别的信息，包括当前用户信息

我们可以从 props 中直接读取对应的属性值，比如我们点击按钮时需要获取当前的表单状态，就可以使用如下的方式来获取

```typescript
const { formState } = this.props;
```

有了属性，我们就可以在 `onClick` 方法中处理实际的业务逻辑。

## detailPageConfig.addButton 方法解析

`detailPageConfig.addButton`方法接收一个`object`类型参数，该参数中的主要包含以下四个属性：

- `id` —— 按钮标识，全局唯一
- `name` —— 按钮名称
- `render` —— 按钮的渲染组件
- `availability` —— 控制按钮可见性的函数，返回 true 或 false。此方法为注册按钮可见性的唯一来源。
  此方法接收三个参数
  - permissionHelper 表单内置的权限辅助方法
  - formData 表单详情页数据
  - currentUser 当前登录人信息
