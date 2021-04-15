---
id: plugin-field
title: 新增表单字段
---

## 新增表单字段

### 字段配置

使用方式：

```tsx
import setting from '@sinoform/app-setting';
const { formConfig } = setting;

formConfig.addField({...}); // 新增字段配置

```

支持的配置：

| 配置项                      | 类型                                 | 含义                                                                                                                                                                                              | 是否必须设置 |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| type                        | string                               | 字段类型，必须唯一                                                                                                                                                                                | 是           |
| title                       | string                               | 字段名称                                                                                                                                                                                          | 是           |
| group                       | 'normal' \| 'senior' \| 'layout'     | 分别表示普通字段、高级字段和布局字段，默认为`普通字段`                                                                                                                                            | 否           |
| icon                        | React.ReactNode                      | 在表单设计器中字段显示面板中字段图标                                                                                                                                                              | 否           |
| preview                     | React.FunctionComponent              | 字段在设计器中的预览组件                                                                                                                                                                          | 是           |
| subformPreview              | React.FunctionComponent              | 字段在表单设计器子表单字段中的预览组件                                                                                                                                                            | 否           |
| render                      | React.FunctionComponent              | 字段在表单中的渲染组件                                                                                                                                                                            | 是           |
| subformRender               | React.FunctionComponent              | 字段在子表单中的渲染组件。如果不指定，则采用 `render` 作为在子表单中的渲染组件。                                                                                                                  | 否           |
| configPanel                 | React.FunctionComponent              | 字段在表单设计器中的面板配置组件                                                                                                                                                                  | 是           |
| defaultValueGetter          | function                             | 字段获取默认值的方法                                                                                                                                                                              | 否           |
| defaultValidate             | function                             | 字段级默认校验规则函数                                                                                                                                                                            | 否           |
| controlConditions           | string[]                             | 字段支持的控制条件，可选值有`eq`(等于)、`ne`(不等于)、 `contains`(包含)、 `notcontains`(不包含)、 `isnull`(为空)、 `isnotnull`(不为空)、`gt`(大于)、 `gte`(大于等于)、`lt`(小于)、`lte`(小于等于) | 否           |
| enableFloating              | boolean                              | 字段是否支持浮动布局                                                                                                                                                                              | 否           |
| defaultConfig               | function                             | 新增该字段作为表单项时需要产生设置面板默认配置的方法值                                                                                                                                            | 否           |
| validates                   | { [validateName: string]: function;} | 字段校验函数                                                                                                                                                                                      | 否           |
| readonlyRender              | React.ElementType                    | 只读渲染器。在需要只读显示的地方使用，如子表单中的字段只读显示、数据查询列表中的显示。如果不指定，则默认直接展示表单项值的值。                                                                    | 否           |
| textRender                  | function                             | 文本渲染。用于打印输出场景。                                                                                                                                                                      | 否           |
| formatRender                | function                             | 格式化复杂数据类型。用于高级搜索景。                                                                                                                                                              | 否           |
| disallowInSubform           | boolean                              | 禁止在子表单中渲染。默认为 `false`，表示可以在子表单中渲染。                                                                                                                                      | 否           |
| transformConfig             | function                             | 将表单项的配置做转化                                                                                                                                                                              | 否           |
| disabledInList              | boolean                              | 是否禁止该字段在数据表格中展示。默认为 `false`，表示可以在数据表格中展示。                                                                                                                        | 否           |
| disabledInSeniorSearch      | boolean                              | 是否禁止该字段作为查询列表高级查询项。默认为 `false`，表示可以作为查询列表高级查询项。                                                                                                            | 否           |
| disabledInControlConditions | boolean                              | 是否禁止该字段作为路由的控制条件。默认为 `false`，表示可以作为路由控制条件。                                                                                                                      | 否           |
| layoutFormField             | boolean                              | 是否为布局字段                                                                                                                                                                                    | 否           |

示例：

FieldInputRender.tsx

```tsx
import React from "react";
import TextInput from "@sinoui/core/TextInput";
import type { FormFieldRenderProps } from "@sinoform/types";
import InputAdornment from "@sinoui/core/InputAdornment";
import { RelyRule, useFieldValue } from "@sinoui/rx-form-state";
import { relyFn } from "@sinoform/comp-expression-config";

function FieldInputRenderer(props: FormFieldRenderProps) {
  const {
    config: { expressionConfig, startAdornment, endAdornment },
    name,
    readOnly,
    ...rest
  } = props;

  const value: string = useFieldValue(name);
  return (
    <>
      <TextInput
        {...rest}
        name={name}
        inputProps={{ "data-testid": "field-input" }}
        title={(readOnly ? value : "") as string}
        readOnly={readOnly}
        value={value ?? ""}
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined
        }
      />
      {expressionConfig && expressionConfig.relyFields?.length > 0 && (
        <RelyRule
          relyFields={expressionConfig.relyFields}
          relyFn={(draft) => relyFn(draft, name, expressionConfig)}
        />
      )}
    </>
  );
}

export default React.memo(FieldInputRenderer);
```

FieldPreview.tsx

```tsx
import styled from "styled-components";

const FieldInputPreview = styled.div`
  height: 32px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
`;

export default FieldInputPreview;
```

FieldInputConfigPanel.tsx

```tsx
import React from "react";
import { Field, FormValueMonitor, RelyRule } from "@sinoui/rx-form-state";
import TextInput from "@sinoui/core/TextInput";
import InputAdornment from "@sinoui/core/InputAdornment";
import Select from "@sinoui/core/Select";
import Checkbox from "@sinoui/core/Checkbox";
import styled from "styled-components";
import ConfigItem from "@sinoform/comp-config-item";
import LayoutConfigItem from "@sinoform/comp-layout-config-item";
import SelectForTodoTitle from "@sinoform/comp-select-for-todo-title";
import convertInputConfig from "@sinoform/helper-convert-input-config";
import { useFormManager } from "@sinoform/form-manager-context";
import RelyFieldConfigPanel from "@sinoform/comp-rely-field-config";
import { FormItem } from "@sinoform/types";
import ExpressionConfigPanel from "@sinoform/comp-expression-config";

const InlineNumberInput = styled(TextInput)`
  display: inline-flex !important;
  width: 50px;
  margin-left: 8px;

  input {
    padding-right: 2px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

function resetDefaultConfig(draft: FormItem) {
  if (draft.defaultValue?.type !== "rely") {
    if (draft.relyConfig) {
      delete draft.relyConfig;
    }
  }
}

function FieldInputConfigPanel({ inSubform }: { inSubform?: boolean }) {
  const {
    formDataRef: { current },
  } = useFormManager();
  return (
    <>
      <ConfigItem label="标题" name="title" required>
        <TextInput />
      </ConfigItem>
      <ConfigItem label="标识" name="fieldName" required>
        <TextInput />
      </ConfigItem>
      {!inSubform && (
        <ConfigItem label="字段描述" name="helperText">
          <TextInput multiline />
        </ConfigItem>
      )}
      <RelyRule relyFields={["type"]} relyFn={convertInputConfig} />
      <ConfigItem label="字段类型" name="type">
        <Select allowClear={false}>
          <option value="input">单行文本</option>
          <option value="textarea">多行文本</option>
          <option value="numberInput">数字</option>
        </Select>
      </ConfigItem>
      <ConfigItem label="数据格式" name="format">
        <Select>
          <option value="">无</option>
          <option value="phoneNumber">电话号码</option>
          <option value="cellPhoneNumber">手机号</option>
          <option value="email">邮箱地址</option>
          <option value="idCard">身份证号</option>
          <option value="postCode">邮政编码</option>
        </Select>
      </ConfigItem>
      <RelyRule
        relyFields={["defaultValue.type"]}
        relyFn={resetDefaultConfig}
      />
      <ConfigItem label="默认值">
        <Field as={Select} name="defaultValue.type">
          <option value="">无</option>
          <option value="custom">自定义</option>
          <option value="expression">公式</option>
          <option value="creator">创建人</option>
          <option value="creatorDept">创建人部门</option>
          {current?.applicationId ? (
            <option value="rely">数据联动</option>
          ) : null}
        </Field>
        <FormValueMonitor path="defaultValue.type">
          {(type) =>
            type === "custom" ? (
              <Field as={TextInput} name="defaultValue.customValue" autoFocus />
            ) : null
          }
        </FormValueMonitor>
        <FormValueMonitor path="defaultValue.type">
          {(type) => (type === "expression" ? <ExpressionConfigPanel /> : null)}
        </FormValueMonitor>
        <FormValueMonitor path="defaultValue.type">
          {(type) => (type === "rely" ? <RelyFieldConfigPanel /> : null)}
        </FormValueMonitor>
      </ConfigItem>
      <ConfigItem label="前缀" name="startAdornment">
        <TextInput />
      </ConfigItem>
      <ConfigItem label="后缀" name="endAdornment">
        <TextInput />
      </ConfigItem>
      <ConfigItem label="校验规则">
        <Field
          as={Checkbox}
          name="validateRules.required.enabled"
          valuePropName="checked"
        >
          必填
        </Field>
        <FormValueMonitor path="format">
          {(format) =>
            !format ? (
              <>
                <Field
                  as={Checkbox}
                  name="validateRules.minLength.enabled"
                  valuePropName="checked"
                >
                  最小长度
                  <FormValueMonitor path="validateRules.minLength.enabled">
                    {(enabled) =>
                      enabled ? (
                        <Field
                          as={InlineNumberInput}
                          name="validateRules.minLength.value"
                          autoFocus
                          type="number"
                          endAdornment={
                            <InputAdornment position="end">字</InputAdornment>
                          }
                        />
                      ) : null
                    }
                  </FormValueMonitor>
                </Field>
                <Field
                  as={Checkbox}
                  name="validateRules.maxLength.enabled"
                  valuePropName="checked"
                >
                  最大长度
                  <FormValueMonitor path="validateRules.maxLength.enabled">
                    {(enabled) =>
                      enabled ? (
                        <Field
                          as={InlineNumberInput}
                          name="validateRules.maxLength.value"
                          autoFocus
                          type="number"
                          endAdornment={
                            <InputAdornment position="end">字</InputAdornment>
                          }
                        />
                      ) : null
                    }
                  </FormValueMonitor>
                </Field>
              </>
            ) : null
          }
        </FormValueMonitor>
      </ConfigItem>

      <LayoutConfigItem inSubform={inSubform} />
      {!inSubform && (
        <ConfigItem label="是否作为待办标题">
          <SelectForTodoTitle />
        </ConfigItem>
      )}
    </>
  );
}

export default React.memo(FieldInputConfigPanel);
```

resolveDefaultValue.ts

```tsx
import type { FormItem, AppInfo } from "@sinoform/types";

export default function resolveDefaultValue(
  formItem: FormItem,
  appInfo: AppInfo
) {
  if (formItem.defaultValue?.type === "custom") {
    return formItem.defaultValue.customValue;
  }
  if (formItem.defaultValue?.type === "creator") {
    return appInfo.currentUser.userName;
  }
  if (formItem.defaultValue?.type === "creatorDept") {
    return appInfo.currentUser.deptName;
  }

  return undefined;
}
```

validateFn.ts

```tsx
import validateTel from "./utils/validateTel";
import validatePhoneNumber from "./utils/validatePhoneNumber";
import validateIdCard from "./utils/validateIdCard";
import validateEmail from "./utils/validateEmail";
import ValidatePostCode from "./utils/validatePostCode";

const validateFn = (value: any, context: { props: any }) => {
  const {
    props: { format },
  } = context;
  if (value && format) {
    if (format === "phoneNumber") {
      return validateTel(value);
    }

    if (format === "cellPhoneNumber") {
      return validatePhoneNumber(value);
    }
    if (format === "email") {
      return validateEmail(value);
    }
    if (format === "idCard") {
      return validateIdCard(value);
    }
    if (format === "postCode") {
      return ValidatePostCode(value);
    }
  }
  return "";
};

export default validateFn;
```

新增单行文本字段：

```tsx
/** =========单行文本字段========= */
import setting from "@sinoform/app-setting";
const { formConfig } = setting;

import EventNote from "@sinoui/icons/EventNote";
import FieldInputPreview from "./fields/field-input/FieldInputPreview";
import resolveDefaultValue from "./fields/field-input/resolveDefaultValue";
import validateFn from "./fields/field-input/validateFn";

formConfig.addField({
  type: "input",
  title: "单行文本",
  group: FormFieldGroup.normal,
  preview: FieldInputPreview,
  icon: EventNote,
  render: React.lazy(() => import("./fields/field-input/FieldInputRenderer")),
  configPanel: React.lazy(
    () => import("./fields/field-input/FieldInputConfigPanel")
  ),
  defaultValueGetter: resolveDefaultValue,
  controlConditions: [
    "eq",
    "ne",
    "contains",
    "notcontains",
    "isnull",
    "isnotnull",
  ],
  defaultValidate: validateFn,
  enableFloating: true,
});
```

### 属性面板

| 属性标识                       | 描述                                         | 说明                                                                                                                                              |
| ------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                          | 字段标题                                     | 属性面板设置时，一般设置为必填                                                                                                                    |
| fieldName                      | 字段标识                                     | 属性面板设置时，必须设置为必填                                                                                                                    |
| helperText                     | 字段描述                                     |                                                                                                                                                   |
| validateRules.required.enabled | 校验规则，该字段在表单渲染中是否标题         |                                                                                                                                                   |
| width                          | 字段宽度或布局，即该字段占一行的宽度或百分比 |                                                                                                                                                   |
| type                           | 字段类型                                     | 有些字段支持相互转化，比如输入类组件`单行文本`、`多行文本`、`数字`字段可以通过在属性面板选择类型实现转化。字段类型的可选值是支持转化字段的配置 id |

#### 监听表单属性值

使用 `@sinoui/rx-form-state`库的`FormValueMonitor`组件来监听字段属性值的变化。

示例：
比如智能表单中的`部门选择`字段，当`部门范围`选择为`指定 url`时，需要渲染设置自定义部门范围 url 都文本框，否则不渲染。

代码：

```tsx
import { FormValueMonitor } from "@sinoui/rx-form-state";

<>
  <ConfigItem label="部门范围" name="deptRange">
    <Select>
      <Option value="all">全组织机构</Option>
      <Option value="selfDept">本部门</Option>
      <Option value="custom">自定义</Option>
      {extendsOptions.map((item: DataRangeOption) => (
        <Option key={item.id} value={item.id}>
          {item.title}
        </Option>
      ))}
      <Option value="url">指定url</Option>
    </Select>
  </ConfigItem>
  <FormValueMonitor path="deptRange">
    {(deptRange) =>
      deptRange === "url" ? (
        <ConfigItem name="url">
          <TextInput />
        </ConfigItem>
      ) : null
    }
  </FormValueMonitor>
</>;
```

#### 值关联

使用`@sinoui/rx-form-state`库的`RelyRule`组件来实现属性值关联计算的功能。

示例：
比如智能表单中的`下拉选择`字段，当`选择类型`设置为单选时，需要取消各个选项的选中状态；当`选择类型`设置为多选时，需要把选项的关联设置清空。

代码：

```tsx
import { RelyRule } from "@sinoui/rx-form-state";
/**
 * 选择类型与选项默认值之间的关联关系
 *
 * @param draft 表单值
 */
const selectTypeToOptionsRelyFn = (draft: FormItem) => {
  if (draft.options && draft.selectType === "single") {
    draft.options = draft.options.map((item) => ({
      ...item,
      checked: false,
    }));
  }
  if (draft.selectType !== "single") {
    draft.fieldsMapConfig = {};
  }
};

<>
  <ConfigItem label="选择类型" name="selectType">
    <Select>
      <option value="single">单选</option>
      <option value="multiple">多选</option>
    </Select>
  </ConfigItem>
  <RelyRule relyFields={["selectType"]} relyFn={selectTypeToOptionsRelyFn} />
</>;
```

#### 通用表单字段组件的开发方式

自定义表单字段组件会传入以下常用属性：

| 属性名称 | 含义                               |
| -------- | ---------------------------------- |
| config   | 字段配置对象                       |
| name     | 字段作为表单项的字段标识           |
| value    | 字段作为表单项的值                 |
| onChange | 字段值更改的回调函数               |
| readOnly | 字段作为表单项时是否只读           |
| disable  | 字段作为表单项时是否只读           |
| isMobile | 字段作为表单项时是否是在移动端渲染 |

在表单字段组件中可以使用`@sinoui/rx-form-state`中的`useFormStateContext`获取表单状态，以便做一些复杂的操作。
示例：

`序号字段`组件。

```tsx
function FieldSerialNumberRenderer(props: FormFieldRenderProps) {
  const { config, name, readOnly, preview, value, ...rest } = props;
  const { fieldName, expression, genType, sequenceTypeId, time, dept } = config;
 const formState = useFormStateContext();
  ....

 /**
   * 生成序号 + 占用 + 保存
   */
  const genSequence = useEventCallback(async () => {
    .....

    // 生成序号值后 需要同时将序号值更新表单数据
    detailPage?.formHelpers?.save({
      ...formState.values,
      [name]: value,
    });
  });

  useEffect(() => {
    // 没有调用过自动占用序号接口
    if (genType === "1" ) {
      genSequence();
    }
  }, [genType]);

  // 手动生成并占用
  const onClick = async () => {
    await genSequence();
  };

  return (
    <Wrapper>
      <TextInput
        {...rest}
        value={value}
        name={name}
        inputProps={{ "data-testid": "field-inputserail-number" }}
        readOnly
      />
      {genType === "0" && !readOnly && (
        <LoadingButton outlined onClick={onClick} disabled={!!value}>
          生成并占用
        </LoadingButton>
      )}
    </Wrapper>
  );
}
```

#### 注册表单字段

```tsx
import AppSetting from '@sinoform/app-setting';

AppSetting.formConfig.addField({
type:'xxx',
render:React.lazy(()=>import('./plugins/field-xxx/xxxRenderer'))
...
});
```
