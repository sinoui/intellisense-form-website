"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[3578],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),o=["components"],a={id:"custom-css-editor",title:"开发人员编写自定义样式"},s=void 0,c={unversionedId:"custom-css-editor",id:"custom-css-editor",title:"开发人员编写自定义样式",description:"打开自定义样式编辑器",source:"@site/docs/custom-css-editor.md",sourceDirName:".",slug:"/custom-css-editor",permalink:"/intellisense-form-website/docs/custom-css-editor",tags:[],version:"current",frontMatter:{id:"custom-css-editor",title:"开发人员编写自定义样式"},sidebar:"someSidebar",previous:{title:"移动端支持自定义样式的元素",permalink:"/intellisense-form-website/docs/custom-css-mobile"},next:{title:"开篇",permalink:"/intellisense-form-website/docs/sinoform-sdk-event-starter"}},p=[{value:"打开自定义样式编辑器",id:"打开自定义样式编辑器",children:[{value:"PC 应用端",id:"pc-应用端",children:[],level:3}],level:2},{value:"移动端",id:"移动端",children:[],level:2},{value:"自定义样式编辑器功能",id:"自定义样式编辑器功能",children:[{value:"页面显示",id:"页面显示",children:[],level:3},{value:"预览",id:"预览",children:[],level:3},{value:"保存",id:"保存",children:[],level:3},{value:"下载",id:"下载",children:[],level:3},{value:"缓存",id:"缓存",children:[],level:3},{value:"编写自定义样式",id:"编写自定义样式",children:[],level:3},{value:"样式优先级",id:"样式优先级",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"打开自定义样式编辑器"},"打开自定义样式编辑器"),(0,l.kt)("h3",{id:"pc-应用端"},"PC 应用端"),(0,l.kt)("p",null,"在表单应用页面，按住",(0,l.kt)("inlineCode",{parentName:"p"},"ctrl"),"键的同时，连续单击页面 5 次（每次点击的间隔不能大于 0.5s）显示自定义样式入口。点击表单应用页面中的",(0,l.kt)("inlineCode",{parentName:"p"},"自定义样式"),"超链接，会打开一个浏览器的新标签页显示自定义样式编辑器页面。"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200713091302540",src:n(48900).Z})),(0,l.kt)("h2",{id:"移动端"},"移动端"),(0,l.kt)("p",null,"在移动端",(0,l.kt)("inlineCode",{parentName:"p"},"我的表单"),"首页，按住",(0,l.kt)("inlineCode",{parentName:"p"},"ctrl"),"键的同时，连续单击页面 5 次（每次点击的间隔不能大于 0.5s），顶部应用栏右侧会显示自定义样式入口。点击表单应用页面中的",(0,l.kt)("inlineCode",{parentName:"p"},"自定义样式"),"超链接，会打开一个浏览器的新标签页显示自定义样式编辑器页面。"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200713091302540",src:n(48900).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200713091655711",src:n(78842).Z})),(0,l.kt)("h2",{id:"自定义样式编辑器功能"},"自定义样式编辑器功能"),(0,l.kt)("p",null,"在自定义样式编辑器中仅支持使用 css 编写样式，编辑器目前支持自定义样式的预览、保存和下载和缓存。"),(0,l.kt)("p",null,"编辑器默认会显示缓存中的样式代码，若无缓存样式，会显示服务器保存的自定义样式代码，若服务器中没有自定义样式，编辑器不显示样式代码。"),(0,l.kt)("h3",{id:"页面显示"},"页面显示"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"editor2",src:n(3689).Z})),(0,l.kt)("h3",{id:"预览"},"预览"),(0,l.kt)("p",null,"点击",(0,l.kt)("inlineCode",{parentName:"p"},"预览"),"按钮，会将当前编写的 css 应用到表单应用。开发人员可以打开表单应用中某个页面查看编写好的样式效果。"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"特别说明：在预览之前，需要先打开要预览的页面，再点击",(0,l.kt)("inlineCode",{parentName:"p"},"预览"),"按钮，才可以实时看到编写的样式效果。")),(0,l.kt)("h3",{id:"保存"},"保存"),(0,l.kt)("p",null,"点击",(0,l.kt)("inlineCode",{parentName:"p"},"保存"),"按钮，会将编辑器中编写的 css 保存到服务器。表单应用组件加载时，首先会从服务器中获取自定义的 css，若服务器存在自定义的 css 代码，则应用自定义 css 样式。否则显示表单应用的默认样式。"),(0,l.kt)("h3",{id:"下载"},"下载"),(0,l.kt)("p",null,"点击",(0,l.kt)("inlineCode",{parentName:"p"},"下载"),"按钮，将当前编写的 css 代码以",(0,l.kt)("inlineCode",{parentName:"p"},".css"),"文件后缀保存到本地。"),(0,l.kt)("h3",{id:"缓存"},"缓存"),(0,l.kt)("p",null,"编辑 css 时，localstorage 会缓存编辑中的 css，只有当点击",(0,l.kt)("inlineCode",{parentName:"p"},"保存"),"按钮后，将自定义样式保存到服务器成功后，才会清除 localStorage 中缓存的 css。防止由于开发人员误关闭自定义编辑器，导致编写中样式丢失的问题。"),(0,l.kt)("h3",{id:"编写自定义样式"},"编写自定义样式"),(0,l.kt)("p",null,"表单起草页面的默认样式如下图："),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200708104210030",src:n(89711).Z})),(0,l.kt)("p",null,"若想将表单起草页的表单标题背景显示为灰色，表单标题和图标为蓝色；详情页面底部操作按钮显示为右对齐。按照支持自定义样式元素的 className 命名，应该编写如下样式代码："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* 表单标题背景色 */\n.sinoform-detail-page__title {\n  background: #f5f5f5;\n}\n\n/* 表单标题文字和图标颜色 */\n.sinoform-detail-page__title .sinoui-svg-icon,\n.sinoform-detail-page__title-text {\n  color: #2196f3;\n}\n\n/* 底部操作按钮 */\n.sinoform-detail-page-buttons-panel {\n  justify-content: flex-end;\n}\n")),(0,l.kt)("p",null,"预览后效果如下："),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20200708104246261",src:n(93315).Z})),(0,l.kt)("h3",{id:"样式优先级"},"样式优先级"),(0,l.kt)("p",null,"具有同等权值的样式，样式优先级为：内联样式(style 属性定义的样式) > 内部样式(style 标签定义的样式) > 外部样式(link 标签或 import 引入的样式)。智能表单应用中组件使用 styled-components 来定义样式(为内部样式)，所以开发人员在编写自定义样式时，为了使自己编写的外部样式优先级高于组件默认的样式，需要编写权值更大的样式。我们的建议是编写自定义样式时，通过层级样式的编写或.className.className 的方式，来提高自定义样式的优先级："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* 层级样式 */\n.sinoform-apply-app .sinoform-detail-page__title {\n  background: #f5f5f5;\n}\n\n.sinoform-apply-app .sinoform-detail-page__title .sinoui-svg-icon,\n.sinoform-apply-app .sinoform-detail-page__title-text {\n  color: #2196f3;\n}\n\n.sinoform-apply-app .sinoform-detail-page-buttons-panel {\n  justify-content: flex-end;\n}\n\n/* .className.className */\n.sinoform-btn-submit.sinoform-btn-submit {\n  background-color: greenyellow;\n}\n")))}d.isMDXComponent=!0},78842:function(e,t,n){t.Z=n.p+"assets/images/editor-mobile-a3d5ea21d58d9d4db36524564c1d269d.png"},48900:function(e,t,n){t.Z=n.p+"assets/images/editor1-56ddf5235c7e876c0955219c7e58d35e.png"},3689:function(e,t,n){t.Z=n.p+"assets/images/editor2-939d62a03a280f6805224ae8e8452aed.png"},89711:function(e,t,n){t.Z=n.p+"assets/images/editor3-bd5cf193277b6b07727de501db17d0db.png"},93315:function(e,t,n){t.Z=n.p+"assets/images/editor4-cbe0fca78e6393dd3e8b266e42fb330b.png"}}]);