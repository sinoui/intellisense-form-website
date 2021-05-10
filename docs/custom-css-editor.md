---
id: custom-css-editor
title: 开发人员编写自定义样式
---

## 打开自定义样式编辑器

### PC 应用端

在表单应用页面，按住`ctrl`键的同时，连续单击页面 5 次（每次点击的间隔不能大于 0.5s）显示自定义样式入口。点击表单应用页面中的`自定义样式`超链接，会打开一个浏览器的新标签页显示自定义样式编辑器页面。

![image-20200713091302540](/img/custom-css/editor1.png)

## 移动端

在移动端`我的表单`首页，按住`ctrl`键的同时，连续单击页面 5 次（每次点击的间隔不能大于 0.5s），顶部应用栏右侧会显示自定义样式入口。点击表单应用页面中的`自定义样式`超链接，会打开一个浏览器的新标签页显示自定义样式编辑器页面。

![image-20200713091302540](/img/custom-css/editor1.png)

![image-20200713091655711](/img/custom-css/editor-mobile.png)

## 自定义样式编辑器功能

在自定义样式编辑器中仅支持使用 css 编写样式，编辑器目前支持自定义样式的预览、保存和下载和缓存。

编辑器默认会显示缓存中的样式代码，若无缓存样式，会显示服务器保存的自定义样式代码，若服务器中没有自定义样式，编辑器不显示样式代码。

### 页面显示

![editor2](/img/custom-css/editor2.png)

### 预览

点击`预览`按钮，会将当前编写的 css 应用到表单应用。开发人员可以打开表单应用中某个页面查看编写好的样式效果。

> 特别说明：在预览之前，需要先打开要预览的页面，再点击`预览`按钮，才可以实时看到编写的样式效果。

### 保存

点击`保存`按钮，会将编辑器中编写的 css 保存到服务器。表单应用组件加载时，首先会从服务器中获取自定义的 css，若服务器存在自定义的 css 代码，则应用自定义 css 样式。否则显示表单应用的默认样式。

### 下载

点击`下载`按钮，将当前编写的 css 代码以`.css`文件后缀保存到本地。

### 缓存

编辑 css 时，localstorage 会缓存编辑中的 css，只有当点击`保存`按钮后，将自定义样式保存到服务器成功后，才会清除 localStorage 中缓存的 css。防止由于开发人员误关闭自定义编辑器，导致编写中样式丢失的问题。

### 编写自定义样式

表单起草页面的默认样式如下图：

![image-20200708104210030](/img/custom-css/editor3.png)

若想将表单起草页的表单标题背景显示为灰色，表单标题和图标为蓝色；详情页面底部操作按钮显示为右对齐。按照支持自定义样式元素的 className 命名，应该编写如下样式代码：

```css
/* 表单标题背景色 */
.sinoform-detail-page__title {
  background: #f5f5f5;
}

/* 表单标题文字和图标颜色 */
.sinoform-detail-page__title .sinoui-svg-icon,
.sinoform-detail-page__title-text {
  color: #2196f3;
}

/* 底部操作按钮 */
.sinoform-detail-page-buttons-panel {
  justify-content: flex-end;
}
```

预览后效果如下：

![image-20200708104246261](/img/custom-css/editor4.png)

### 样式优先级

具有同等权值的样式，样式优先级为：内联样式(style 属性定义的样式) > 内部样式(style 标签定义的样式) > 外部样式(link 标签或 import 引入的样式)。智能表单应用中组件使用 styled-components 来定义样式(为内部样式)，所以开发人员在编写自定义样式时，为了使自己编写的外部样式优先级高于组件默认的样式，需要编写权值更大的样式。我们的建议是编写自定义样式时，通过层级样式的编写或.className.className 的方式，来提高自定义样式的优先级：

```css
/* 层级样式 */
.sinoform-apply-app .sinoform-detail-page__title {
  background: #f5f5f5;
}

.sinoform-apply-app .sinoform-detail-page__title .sinoui-svg-icon,
.sinoform-apply-app .sinoform-detail-page__title-text {
  color: #2196f3;
}

.sinoform-apply-app .sinoform-detail-page-buttons-panel {
  justify-content: flex-end;
}

/* .className.className */
.sinoform-btn-submit.sinoform-btn-submit {
  background-color: greenyellow;
}
```
