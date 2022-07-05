---
id: guide-list-page-config
title: 列表页按钮定制
---

目前系统中的列表类型：

- 草稿列表
- 待办列表
- 已办列表
- 查询列表
- 无流程列表

我们可以通过列表页定制做到：

- 在列表外添加自定义的按钮，我们可以把它定义为页面级别的按钮
- 定义列表数据是否支持复选框选中
- 定义每条数据对应的操作按钮，我们把它定义为单行数据级别的按钮

## 如何在插件项目中使用

### 页面级别的按钮

1. 创建自定义的按钮组件

```typescript title="src/plugins/list-page-button-query/CustomQueryButton.ts"
import $ from 'jQuery';
import { SinoFormElement } from '@sinoform/plugin-sinoform-helpers';
import './style.css';

export default class CustomQueryButton extends SinoFormElement {
  onClick() {
    console.log('按钮被点击了');
  }

  override render() {
    this.innerHTML = `<button class="custom-button">列表按钮</button>`;

    $('.custom-button', this).on('click', this.onClick.bind(this));
  }
}
```

组件样式：

```css title="src/plugins/list-page-button-query/style.css"
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

```typescript title="src/plugins/list-page-button-query/index.ts"
import { wrapperWebComponent } from '@sinoform/plugin-sinoform-helpers';
import CustomQueryButton from './CustomQueryButton';

export default wrapperWebComponent('list-page-button-query', CustomQueryButton);
```

3. 注册到智能表单

```typescript title="src/index.ts"
import AppSetting from '@sinoform/app-setting';

AppSetting.listPageConfig.addButton({
  type: 'ALL_PAGE',
  render: React.lazy(() => import('./plugins/list-page-button-query')),
  formId: '*',
  pos: 'left',
  availability: (id, type, currentUser, formDesignSetting) => {
    return !(
      id === '123456' &&
      type === 'SEARCH_LIST_PAGE' &&
      currentUser.userId === 'xxx'
    );
  },
});
```

`addButton` 参数的说明

- type: 按钮需要在哪一类列表页中展示，支持的类型如下
  - DRAFT_LIST_PAGE: 草稿列表
  - TODO_LIST_PAGE: 待办列表
  - DONE_LIST_PAGE: 已办列表
  - SEARCH_LIST_PAGE: 查询列表
  - NOFLOW_LIST_PAGE: 无流程列表
  - ALL_PAGE: 所有列表都支持
  - 其他。定制列表配置中的页面类型
- render: 按钮的渲染组件
- formId: 表单设计 id，用于控制按钮需要在哪个表单的列表界面展示，如果为\*，则所有的表单都适用
- pos: 可取值 left 、right，默认 right。用于控制按钮居左还是居右显示
- order: 按钮的排序，数值越大显示越靠前。默认值为 0
- availability: 按钮是否显示的回调函数，返回值为 true，展示按钮，反之则不展示。函数的参数说明如下：
  - id。表单设计 id
  - type。表单类型
  - currentUser。当前登录人
  - formDesignSetting。表单设计配置数据

:::info
上述代码含义解读：除了登陆用户 id 为 `xxx` ，表单 id 为 `123456` 的查询列表界面，其余所有用户的所有列表的定制按钮区域左侧添加一个自定义按钮。
:::

最后可以在演示系统中查看效果。点击新的按钮，会在控制台输出 `按钮被点击了`。

列表级的按钮接收下面这些属性参数

- formId: 表单的设计 id
- currentUser: 当前登录人信息
- formDesignSetting: 表单设计信息
- dataSource: 分页查询的操作对象
- url: 列表页查询接口

接下来，我们以 dataSource 为例，通过 dataSource 来执行列表刷新

```typescript title="src/plugins/list-page-button-query/CustomQueryButton.ts"
onClick(){
  const { dataSource } = this.props;
  dataSource.reload();
}
```

### 列表支持选中

示例中我们简化处理，直接在插件入口文件中定义

```typescript title="src/index.ts"
appSetting.listPageConfig.addSelectable({
  type: 'ALL_PAGE',
  formId: '*',
});
```

`addSelectable` 方法参数中 `type` 和 `formId` 的定义与 `addButton` 方法相同

### 单行数据级别的按钮

1. 创建自定义的按钮组件

```typescript title="src/plugins/list-page-button-in-row/InRowButton.ts"
import $ from 'jQuery';
import { SinoFormElement } from '@sinoform/plugin-sinoform-helpers';
import './style.css';

export default class InRowButton extends SinoFormElement {
  onClick() {
    console.log('按钮被点击了');
  }

  override render() {
    this.innerHTML = `<button class="custom-button">行内按钮</button>`;

    $('.custom-button', this).on('click', this.onClick.bind(this));
  }
}
```

组件样式：

```css title="src/plugins/list-page-button-in-row/style.css"
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

```typescript title="src/plugins/list-page-button-in-row/index.ts"
import { wrapperWebComponent } from '@sinoform/plugin-sinoform-helpers';
import InRowButton from './InRowButton';

export default wrapperWebComponent('list-page-button-in-row', InRowButton);
```

3. 注册到智能表单

```typescript title="src/index.ts"
import AppSetting from '@sinoform/app-setting';

AppSetting.listPageConfig.addInRowButton({
  type: 'ALL_PAGE',
  render: React.lazy(() => import('./plugins/list-page-button-in-row')),
  formId: '*',
});
```

`addInRowButton`中参数的定义与`addButton`方法一致

单行数据级别的按钮支持如下参数

- rowData: 当前行对应的数据
- dataSource: 分页查询的操作对象

完善行内按钮的点击事件，打印当前行数据

```typescript title="src/plugins/list-page-button-in-row/InRowButton.ts"
onClick() {
  const { rowData } = this.props;
  console.log(rowData);
}
```

### 内置行内按钮可见性控制

除了可以新增行内按钮之外，我们也可以定制已有的行内按钮的可见性。

```typescript title="src/index.ts"
appSetting.listPageConfig.setInRowButtonVisible(
  '*',
  'NOFLOW_LIST_PAGE',
  'deleteButton',
  (currentUser, formDesignSetting, rowData) => {
    if (rowData?.isPublish === '已发布') {
      return false;
    }

    return true;
  }
);
```

`setInRowButtonVisible` 参数的说明:

- formId。表单 id 或表单 id 数组。`*`标识匹配任意表单 id
- pageType。页面类型
- buttonName。按钮名称。内置按钮名称说明：
  - deleteButton。删除按钮
  - copyButton。复用按钮
  - editButton。编辑按钮
  - viewButton。查看按钮
- visible。按钮是否显示回调函数，返回 true，按钮显示，反之则不显示。参数说明：
  - currentUser。当前登录人
  - formDesignSetting。表单设计配置数据
  - rowData。当前行数据

:::info
上述代码含义解读：任意无流程列表中，如果某行数据中的`isPublish`字段值为`已发布`，则该行操作列中的删除按钮不显示。
:::
