"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[8551],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74152:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={id:"guide-button-in-detail-page",title:"详情页注册按钮"},u=void 0,p={unversionedId:"guide-button-in-detail-page",id:"guide-button-in-detail-page",title:"详情页注册按钮",description:"支持版本：v1.15.0",source:"@site/docs/guide-button-in-detail-page.md",sourceDirName:".",slug:"/guide-button-in-detail-page",permalink:"/intellisense-form-website/docs/guide-button-in-detail-page",tags:[],version:"current",frontMatter:{id:"guide-button-in-detail-page",title:"详情页注册按钮"},sidebar:"someSidebar",previous:{title:"开发一个表单控件",permalink:"/intellisense-form-website/docs/guide-formfield"},next:{title:"表单默认值",permalink:"/intellisense-form-website/docs/guide-default-form-values"}},s=[{value:"示例：无流程表单新增发布按钮",id:"示例无流程表单新增发布按钮",children:[],level:2},{value:"按钮属性",id:"按钮属性",children:[],level:2},{value:"detailPageConfig.addButton 方法解析",id:"detailpageconfigaddbutton-方法解析",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"支持版本：v1.15.0")),(0,o.kt)("p",null,"智能表单从 v1.12.0 版本开始支持",(0,o.kt)("a",{parentName:"p",href:"./guide-button"},"按钮注册"),"。但在后续的实际运用场景中，上述方式不能完全满足我们的需求，因此从 v1.15.0 版本开始智能表单新增了直接将按钮注册至详情页的方法。"),(0,o.kt)("h2",{id:"示例无流程表单新增发布按钮"},"示例：无流程表单新增发布按钮"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"开发一个发布按钮。")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/plugins/custom-button/PublishButton.tsx"',title:'"src/plugins/custom-button/PublishButton.tsx"'},'import $ from "jQuery";\nimport { SinoFormElement } from "@sinoform/plugin-sinoform-helpers";\nimport "./style.css";\n\nexport default class PublishButton extends SinoFormElement {\n  onClick() {\n    console.log("按钮被点击了");\n  }\n\n  override render() {\n    this.innerHTML = `<button class="custom-button">发布</button>`;\n\n    $(".custom-button", this).on("click", this.onClick.bind(this));\n  }\n}\n')),(0,o.kt)("p",null,"组件样式："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/plugins/custom-button/style.css"',title:'"src/plugins/custom-button/style.css"'},".custom-button {\n  color: #fff;\n  background-color: #2196f3;\n  font-size: 0.875rem;\n  border: none;\n  height: 36px;\n  margin: 8px;\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"包装为 React 组件")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/plugins/custom-button/index.ts"',title:'"src/plugins/custom-button/index.ts"'},'import { wrapperWebComponent } from "@sinoform/plugin-sinoform-helpers";\nimport PublishButton from "./PublishButton";\n\nexport default wrapperWebComponent("publish-button", PublishButton);\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"注册到智能表单")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import AppSetting from "@sinoform/app-setting";\n\n// 允许显示发布的表单id\nconst ALLOW_PUBLISH_FORM_IDS = ["form-id-1", "form-id-2"];\n\nappSetting.detailPageConfig.addButton({\n  id: "publishButton", // 按钮标识\n  name: "发布", // 按钮名称\n  render: React.lazy(() => import("./plugins/custom-button")),\n  availability: (\n    permissionHelper, // 智能表单内置的权限辅助方法\n    formData, // 表单详情页数据\n    currentUser // 当前登录人\n  ) => {\n    return ALLOW_PUBLISH_FORM_IDS.includes(formData.formDesign.id);\n  },\n});\n')),(0,o.kt)("h2",{id:"按钮属性"},"按钮属性"),(0,o.kt)("p",null,"表单会给按钮组件传递以下属性："),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formState")," - 表单状态"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"detailPage")," - 详情页数据"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appInfo")," - 应用级别的信息，包括当前用户信息")),(0,o.kt)("p",null,"我们可以从 props 中直接读取对应的属性值，比如我们点击按钮时需要获取当前的表单状态，就可以使用如下的方式来获取"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { formState } = this.props;\n")),(0,o.kt)("p",null,"有了属性，我们就可以在 ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," 方法中处理实际的业务逻辑。"),(0,o.kt)("h2",{id:"detailpageconfigaddbutton-方法解析"},"detailPageConfig.addButton 方法解析"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"detailPageConfig.addButton"),"方法接收一个",(0,o.kt)("inlineCode",{parentName:"p"},"object"),"类型参数，该参数中的主要包含以下四个属性："),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," —— 按钮标识，全局唯一"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," —— 按钮名称"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"render")," —— 按钮的渲染组件"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"availability")," —— 控制按钮可见性的函数，返回 true 或 false。此方法为注册按钮可见性的唯一来源。\n此方法接收三个参数",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"permissionHelper 表单内置的权限辅助方法"),(0,o.kt)("li",{parentName:"ul"},"formData 表单详情页数据"),(0,o.kt)("li",{parentName:"ul"},"currentUser 当前登录人信息")))))}m.isMDXComponent=!0}}]);