---
id: plugin-dashboard
title: 仪表盘
---

仪表盘是数据可视化工具，适合进行数据展示和分析。

## 定制组件渲染

仪表盘内置了定制组件的类型，定制组件本身是个空白组件，可以通过插件来注册组件的显示内容。

1. 定义渲染组件

```tsx
export default function DashboardCustomRender() {
  return <div>这是一个自定义的渲染组件</div>;
}
```

2. 通过 appSetting 注册组件

```tsx
import appSetting from "@sinoform/app-setting";
import React from "react";

appSetting.dashboardConfig.addCustomComponentConfig({
  id: "a7c8fddd-9812-487a-b8b5-095e7ed0ed74",
  dashboardId: "650123b308d6c84f457ce86a",
  render: React.lazy(() => import("./DashboardCustomRender")),
});
```

对象参数说明：

- id。图表组件的 id
- dashboardId。仪表盘的 id
- render。自定义的渲染组件
