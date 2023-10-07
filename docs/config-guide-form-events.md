---
id: config-guide-form-events
title: 监听表单事件
---

> 支持版本：1.18.11

可以监听内部表单事件，在事件监听器中添加额外的处理代码，从而实现类似下面的扩展：

- 流程结束时创建另一个表单数据
- 保存表单数据时更新另一个表单数据

## 添加事件监听

```typescript
import AppSetting from "@sinoform/app-setting";
import { FormEvents } from "@sinoform/types";

import createOtherFormValues from "./create-other-form-values";

const formDesignId = "表单id";
AppSetting.listen(formDesignId, FormEvents.FLOW_END, async (event) => {
  const { formValues, formDesign, detailPageContext } = event;
  await createOtherFormValues(formValues);
});
```

## 支持的事件

从 `@sinoform/types` 模块中引入 `FormEvents`， `FormEvents` 中定义了目前支持的事
件。

- `FormEvents.FLOW_END` - 流程结束事件
- `FormEvents.FLOW_SEND` - 流程发送成功事件
- `FormEvents.SAVE_FORM_VALUES` - 保存表单数据成功事件
