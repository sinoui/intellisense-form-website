---
id: plugin-field
title: 新增表单字段
---

## 表单字段目录结构

在 plugins 目录下新增以`field-xxx`命名的文件夹，比如图片上传字段：`field-image-upload`。

```tsx
xxx-plugins
|__ src
    |__ index.tsx
    |__ plugins
        |__ field-xxx
            |__ xxxPreview.tsx //预览组件
            |__ xxxRenderer.tsx  //在表单中的渲染组件
            |__ xxxSubformRenderer.tsx //在子表单中的渲染组件
            |__ xxxConfigPanel.tsx  // 字段属性配置面板
            |__ xxxReadonlyRenderer.tsx // 只读渲染组件
            |__ index.ts // 组件的导出配置
```

## 通用表单字段组件的开发方式

### react 方式开发

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

如`序号字段`组件。

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

### vue 方式开发

vue 方式的自定义表单字段组件除接收 react 方式支持的属性外，还接收以下属性：

| 属性名称   | 含义               |
| ---------- | ------------------ |
| appInfo    | 表单应用上下文信息 |
| formState  | 表单状态管理对象   |
| detailPage | 表单详情上下文信息 |

```tsx
<template>
  <div>
    <input v-model="inputValue" @change="onChangeValue" />
  </div>
</template>

<script>
export default {
  props: ["value", "onChange"],
  data: function () {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    onChangeValue: function (e) {
      this.onChange(e.target.value);
    },
  },
};
</script>
<style scoped></style>
```

### jQuery 方式开发

jQuery 方式的自定义表单字段组件除接收 react 方式支持的属性外，还接收以下属性：

| 属性名称   | 含义               |
| ---------- | ------------------ |
| appInfo    | 表单应用上下文信息 |
| formState  | 表单状态管理对象   |
| detailPage | 表单详情上下文信息 |

使用 `jQuery` 和 `Web Component` 开发字段插件。

在`react`中使用`Web Component`组件时传入的每一个属性，在`Web Component`组件中都需要设置对应属性名称的 set 函数。

```javascript

import $ from 'jquery';
export default class InputRenderer extends HTMLElement {
  public _value: string = '';

  root: ShadowRoot;
  public _appInfo: any;
  private _userName?: string;
  input: any;
  private _onChange: any;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.innerHTML = this.render();
    this.input = $('#field-input-renderer', this.root);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  connectedCallback() {
    this.input.on('change', this.handleInputChange);
  }

  disConnectedCallback() {
    this.input.off('change', this.handleInputChange);
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(attr: string, _oldVal: any, newVal: any) {
    switch (attr) {
      case 'value':
        this.value = newVal;
        break;
      default:
        break;
    }
  }

  set onChange(fn: any) {
    this._onChange = fn;
  }

  get onChange() {
    return this._onChange;
  }

  handleInputChange(e: any) {
    this.onChange(e.target.value);
  }

  set appInfo(value: any) {
    this._appInfo = value;
    if (value && value.currentUser && value.currentUser.userName) {
      this.userName = value.currentUser.userName;
    }
  }

  set value(val: string) {
    this._value = val;
    this.input.val(val);
  }

  get value() {
    return this._value;
  }

  set userName(val: string) {
    this._userName = val;
    const name = this.root.querySelector('#name');
    if (name) {
      name.innerHTML = this.userName;
    }
  }

  get userName() {
    return this._userName ?? '';
  }

  render() {
    return `<input id="field-input-renderer" value='${this.value}'/>
    <div id='name'>${this.userName}</div>`;
  }
}
```

## 属性面板开发

属性面板主要用来配置表单字段项各种属性，目前属性面板的开发仅支持`React`方式。可以使用现有组件配置不同的属性名称即可。以`数字输入框`的属性面板为例，示例代码如下：

```ts
import React from "react";
import TextInput from "@sinoui/core/TextInput";
import InputAdornment from "@sinoui/core/InputAdornment";
import Select from "@sinoui/core/Select";
import Checkbox from "@sinoui/core/Checkbox";
import { FormValueMonitor, RelyRule, Field } from "@sinoui/rx-form-state";
import styled from "styled-components";
import ConfigItem from "@sinoform/comp-config-item";
import LayoutConfigItem from "@sinoform/comp-layout-config-item";
import convertInputConfig from "@sinoform/helper-convert-input-config";
import { useFormManager } from "@sinoform/form-manager-context";
import RelyFieldConfigPanel from "@sinoform/comp-rely-field-config";
import type { FormItem } from "@sinoform/types";
import ExpressionConfigPanel from "@sinoform/comp-expression-config";

const InlineNumberInput = styled(TextInput)`
  display: inline-flex !important;
  width: 50px;
  margin: 0px 8px;
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

function NumberInputConfigPanel({ inSubform }: { inSubform?: boolean }) {
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
      <RelyRule
        relyFields={["defaultValue.type"]}
        relyFn={resetDefaultConfig}
      />
      <ConfigItem label="默认值">
        <Field as={Select} name="defaultValue.type">
          <option value="">无</option>
          <option value="custom">自定义</option>
          <option value="expression">公式</option>
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
        <Field
          as={Checkbox}
          name="validateRules.positiveInteger.enabled"
          valuePropName="checked"
        >
          只显示正整数
        </Field>
        <Field
          as={Checkbox}
          name="validateRules.decimal.enabled"
          valuePropName="checked"
        >
          <span>小数位</span>
          <FormValueMonitor path="validateRules.decimal.enabled">
            {(enabled) =>
              enabled ? (
                <Field
                  as={InlineNumberInput}
                  name="validateRules.decimal.value"
                  autoFocus
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">位</InputAdornment>
                  }
                />
              ) : null
            }
          </FormValueMonitor>
        </Field>
        <Field
          as={Checkbox}
          name="validateRules.range.enabled"
          valuePropName="checked"
        >
          <span>限定范围</span>
          <FormValueMonitor path="validateRules.range.enabled">
            {(enabled) =>
              enabled ? (
                <div style={{ display: "inline-flex" }}>
                  <Field
                    as={InlineNumberInput}
                    name="validateRules.range.min"
                    autoFocus
                    type="number"
                    placeholder="最小值"
                  />
                  --
                  <Field
                    as={InlineNumberInput}
                    name="validateRules.range.max"
                    type="number"
                    placeholder="最大值"
                  />
                </div>
              ) : null
            }
          </FormValueMonitor>
        </Field>
      </ConfigItem>

      <LayoutConfigItem inSubform={inSubform} />
    </>
  );
}

export default React.memo(NumberInputConfigPanel);
```

属性面板中一些通用属性名称如下：

| 属性标识                       | 描述                                         | 说明                                                                                                                                              |
| ------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                          | 字段标题                                     | 属性面板设置时，此属性为必填                                                                                                                      |
| fieldName                      | 字段标识                                     | 属性面板设置时，必须设置为必填                                                                                                                    |
| helperText                     | 字段描述                                     |                                                                                                                                                   |
| validateRules.required.enabled | 校验规则，该字段在表单渲染中是否标题         |                                                                                                                                                   |
| width                          | 字段宽度或布局，即该字段占一行的宽度或百分比 |                                                                                                                                                   |
| type                           | 字段类型                                     | 有些字段支持相互转化，比如输入类组件`单行文本`、`多行文本`、`数字`字段可以通过在属性面板选择类型实现转化。字段类型的可选值是支持转化字段的配置 id |

### 监听表单属性值

在开发属性面板时，我们可能需要监听表单项的某个属性值，从而进行后续设置。比如上述`数字输入框`属性面板中在设置默认值时，如果选择`自定义`，则会出现输入框让我们输入自定义的默认值。此时我们可以使用 `@sinoui/rx-form-state`库的`FormValueMonitor`组件来监听字段属性值的变化。

代码如下：

```tsx
import { FormValueMonitor } from "@sinoui/rx-form-state";

<>
  <ConfigItem label="默认值">
    <Field as={Select} name="defaultValue.type">
      <option value="">无</option>
      <option value="custom">自定义</option>
      <option value="expression">公式</option>
      {current?.applicationId ? <option value="rely">数据联动</option> : null}
    </Field>
    <FormValueMonitor path="defaultValue.type">
      {(type) =>
        type === "custom" ? (
          <Field as={TextInput} name="defaultValue.customValue" autoFocus />
        ) : null
      }
    </FormValueMonitor>
  </ConfigItem>
</>;
```

代码中，通过`FormValueMonitor`组件的`path`属性指定要监听的表单值。

### 值关联

`值关联`也是表单状态管理中比较常见的一种方式。比如`下拉选择`字段是可以通过`选择类型`来切换其选择方式，如果我们在`多选`模式下设置了默认值，那么当我们切换其为`单选`时，需要把默认值清空。这种场景我们就能借助`值关联`的方式实现。

使用`@sinoui/rx-form-state`库的`RelyRule`组件来实现属性值关联计算的功能。

示例代码如下：

```tsx
import { RelyRule } from "@sinoui/rx-form-state";
/**
 * 选择类型与选项默认值之间的关联关系
 *
 * @param draft 表单值
 */
const selectTypeToOptionsRelyFn = (draft: FormItem) => {
  //判断选择类型为单选，把所有选项的checked属性置为false
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

## 注册表单字段

表单项开发完成之后，我们需要将其注册到 appSetting 中，三种开发方式开发的组件注册方式基本一致，具体如下。

### react 组件注册方式

```tsx
import AppSetting from '@sinoform/app-setting';

AppSetting.formConfig.addField({
  type:'xxx',
  render:React.lazy(()=>import('./plugins/field-xxx/xxxRenderer')),
  preview: XxxPreview,
  configPanel: XxxConfigPanel,
  ...
});

```

### vue 组件注册方式

```tsx
import AppSetting from "@sinoform/app-setting";

AppSetting.formConfig.addField({
  type: "vueInput",
  title: "vue单行文本",
  group: "normal",
  icon: EventNote,
  render: React.lazy(() => import("./plugins/field-xxx/xxxRenderer")),
  preview: XxxPreview,
  configPanel: XxxConfigPanel,
});
```

`XxxConfigPanel`组件是使用 React 定义的属性设置组件，不是 vue 组件。

#### vue 组件的字段预览和渲染组件

因为插件开发完成之后，最终是集成到`React`项目中，因此在注册之前，要通过`@sinoform/plugin-sinoform-helpers`中的`vueComponentWrapper`方法将 vue 组件转换为 react 形式的组件。比如上述注册代码中的`XxxPreview` 和 `xxxRenderer`组件。转换代码如下：

`/xxx/field-xxx目录下`index.ts`代码：

```tsx
import { vueComponentWrapper } from "@sinoform/plugin-sinoform-helpers";
import InputRenderer from "./InputRenderer.vue";
import InputPreview from "./InputPreview.vue";

const InputRendererReact = vueComponentWrapper(InputRenderer);
const InputPreviewReact = vueComponentWrapper(InputPreview);
```

### jQuery 方式

```tsx
import AppSetting from "@sinoform/app-setting";

AppSetting.formConfig.addField({
  type: "jsInput",
  title: "js单行文本",
  group: "normal",
  icon: EventNote,
  render: React.lazy(() => import("./plugins/field-xxx/xxxRenderer")),
  preview: XxxPreview,
  configPanel: XxxConfigPanel,
});
```

`XxxConfigPanel`组件是使用 React 定义的属性设置组件，不是 Web component 组件。

#### 字段预览和渲染组件

同 vue 开发一样，jquery 开发的组件在注册之前，也要进行转换。具体方式是使用`@sinoform/plugin-sinoform-helpers`中的`webComponentWrapper`方法将 Web component 组件转换为 react 形式的组件。

`/xxx/field-xxx目录下`index.ts 文件在将组件导出之前，对`XxxPreview` 和 `xxxRenderer`组件进行了转换，代码如下：

```TSX
import InputRenderer from './InputRenderer';
import InputConfigPanel from './InputConfigPanel';
import { webComponentWrapper } from '@sinoform/plugin-sinoform-helpers';

customElements.define('field-input-preview', InputPreview);
const JsInputPreviewReact = webComponentWrapper('field-input-preview');

customElements.define('field-input-renderer', InputRenderer);
const JsInputRendererReact = webComponentWrapper('field-input-renderer');

export { JsInputPreviewReact, InputConfigPanel };

export default JsInputRendererReact;
```

## 字段配置

在字段注册时，支持以下所有属性，各个属性含义可参考下表：

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
