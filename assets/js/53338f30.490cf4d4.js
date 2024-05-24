"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[1323],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return g}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),u=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=u(t.components);return a.createElement(p.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(e),g=r,c=s["".concat(p,".").concat(g)]||s[g]||m[g]||l;return e?a.createElement(c,i(i({ref:n},d),{},{components:e})):a.createElement(c,i({ref:n},d))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},26226:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i=["components"],o={id:"plugin-button",title:"新增流程按钮"},p=void 0,u={unversionedId:"plugin-button",id:"plugin-button",title:"新增流程按钮",description:"流程按钮目录结构",source:"@site/docs/plugin-button.md",sourceDirName:".",slug:"/plugin-button",permalink:"/intellisense-form-website/docs/plugin-button",tags:[],version:"current",frontMatter:{id:"plugin-button",title:"新增流程按钮"},sidebar:"someSidebar",previous:{title:"新增表单字段",permalink:"/intellisense-form-website/docs/plugin-field"},next:{title:"自定义详情页业务逻辑扩展",permalink:"/intellisense-form-website/docs/plugin-detail-page-extend"}},d=[{value:"流程按钮目录结构",id:"流程按钮目录结构",children:[],level:2},{value:"流程按钮开发",id:"流程按钮开发",children:[{value:"react 方式开发",id:"react-方式开发",children:[],level:3},{value:"vue 方式开发",id:"vue-方式开发",children:[],level:3},{value:"jQuery 方式开发",id:"jquery-方式开发",children:[],level:3}],level:2},{value:"注册流程按钮",id:"注册流程按钮",children:[{value:"react 方式",id:"react-方式",children:[],level:3},{value:"vue 方式",id:"vue-方式",children:[],level:3},{value:"jQuery 方式",id:"jquery-方式",children:[],level:3}],level:2},{value:"流程按钮配置",id:"流程按钮配置",children:[],level:2}],m={toc:d};function s(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"流程按钮目录结构"},"流程按钮目录结构"),(0,l.kt)("p",null,"在 plugins 目录下新增以",(0,l.kt)("inlineCode",{parentName:"p"},"flow-button-xxx"),"命名的文件夹，比如审核通过按钮：",(0,l.kt)("inlineCode",{parentName:"p"},"flow-button-approve"),"。"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"xxx-plugins\n|__ src\n    |__ index.tsx\n    |__ plugins\n        |__ flow-button-xxx\n            |__xxxButton.tsx\n")),(0,l.kt)("h2",{id:"流程按钮开发"},"流程按钮开发"),(0,l.kt)("h3",{id:"react-方式开发"},"react 方式开发"),(0,l.kt)("p",null,"办结按钮示例："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport pcMessage from "@sinoui/message";\nimport appMessage from "@sinoform/comp-message";\nimport { useApp, useDetailPage } from "@sinoform/app-core";\nimport type { ButtonConfig } from "@sinoform/types";\nimport CompOperationButton from "@sinoform/comp-operation-button";\nimport toFlowSuccess from "@sinoform/helper-toFlow-success";\nimport { workflowFinish } from "./apis";\n\ninterface Props {\n  setting: ButtonConfig;\n  loadingBtnId: string;\n  setButtonLoading: (btnId: string) => void;\n  cancelButtonLoading: () => void;\n  variant?: "pc" | "mobile" | "more";\n  onBeginClick: () => void;\n}\n\n/**\n * 办结 按钮\n */\nconst EndButton: React.FunctionComponent<Props> = ({\n  setting,\n  loadingBtnId,\n  setButtonLoading,\n  cancelButtonLoading,\n  variant = "pc",\n  onBeginClick,\n}) => {\n  const message = variant === "pc" ? pcMessage : appMessage;\n  const btnId = setting.id;\n  const { currentUser, dispatchEvent } = useApp();\n  const {\n    formData: {\n      flowIdea,\n      formDesign: { id: formDesignId },\n    },\n    formState,\n    workItemId,\n  } = useDetailPage();\n\n  /**\n   * 点击办结按钮触发\n   */\n  const finishWorkFlow = async () => {\n    // 如果传入了onBeginClick属性，需要在点击函数中触发\n    if (onBeginClick) {\n      onBeginClick();\n    }\n    if (flowIdea?.idea === "required" && !flowIdea?.content) {\n      message.error("请先填写意见");\n      return;\n    }\n    // 保存表单数据\n    const hide = message.loading("正在提交...", {\n      key: "finishWorkFlow",\n      duration: 0,\n    });\n    setButtonLoading(btnId);\n    try {\n      await formState.submit();\n      await workflowFinish({\n        workItemId: workItemId ?? "",\n        approvalStatus: "1", //  审核通过传1  审核不通过传0\n        userId: currentUser.userId,\n        userName: currentUser.userName,\n        formDesignId,\n      });\n      hide();\n      // 调用流程操作成功的处理函数\n      toFlowSuccess(dispatchEvent, "endSuccess");\n      message.success("办结成功", { key: "finishWorkFlow" });\n    } catch (e) {\n      if (e && e.message === "表单校验失败") {\n        message.error("表单项未填写或数据格式有误", { key: "finishWorkFlow" });\n      } else {\n        message.error("办结失败", { key: "finishWorkFlow" });\n      }\n    } finally {\n      cancelButtonLoading();\n    }\n  };\n\n  // 确认提示框显示之前 触发\n  const beforeConfirmClick = (event: React.MouseEvent<HTMLDivElement>) => {\n    if (flowIdea?.idea === "required" && !flowIdea?.content) {\n      message.error("请先填写意见");\n      event.preventDefault();\n    }\n  };\n  return (\n    <>\n      <CompOperationButton\n        onClick={finishWorkFlow}\n        loadingBtnId={loadingBtnId}\n        setting={setting}\n        confirm\n        beforeConfirmClick={beforeConfirmClick}\n        variant={variant}\n      />\n    </>\n  );\n};\n\nexport default EndButton;\n')),(0,l.kt)("p",null,"上述代码使用",(0,l.kt)("inlineCode",{parentName:"p"},"@sinoform/comp-operation-button"),"库的",(0,l.kt)("inlineCode",{parentName:"p"},"CompOperationButton"),"组件完成流程按钮的开发。"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CompOperationButton"),"组件接收以下属性："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"属性名称"),(0,l.kt)("th",{parentName:"tr",align:null},"类型"),(0,l.kt)("th",{parentName:"tr",align:null},"含义"),(0,l.kt)("th",{parentName:"tr",align:null},"必传属性"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setting"),(0,l.kt)("td",{parentName:"tr",align:null},"ButtonConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮的配置对象"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadingBtnId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮配置中的唯一标识"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClick"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"点击流程按钮的确认执行流程操作的回调函数"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirm"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮操作是否需要执行二次确认,默认为否"),(0,l.kt)("td",{parentName:"tr",align:null},"否")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confirmMsg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"二次确认的提示语"),(0,l.kt)("td",{parentName:"tr",align:null},"否")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"'pc' ","|"," 'mobile' ","|"," 'more'"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮在应用中的显示模式。",(0,l.kt)("inlineCode",{parentName:"td"},"pc"),"、",(0,l.kt)("inlineCode",{parentName:"td"},"mobile"),"、",(0,l.kt)("inlineCode",{parentName:"td"},"more"),"分别表示在 pc 端、移动端、移动端更多按钮中的显示模式，默认为",(0,l.kt)("inlineCode",{parentName:"td"},"pc"),"。"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"beforeConfirmClick"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"二次确认操作之前触发的回调函数"),(0,l.kt)("td",{parentName:"tr",align:null},"否")))),(0,l.kt)("p",null,"流程按钮组件自身接收以下属性："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"属性名称"),(0,l.kt)("th",{parentName:"tr",align:null},"类型"),(0,l.kt)("th",{parentName:"tr",align:null},"含义"),(0,l.kt)("th",{parentName:"tr",align:null},"必传属性"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setting"),(0,l.kt)("td",{parentName:"tr",align:null},"ButtonConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮的配置对象"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loadingBtnId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮配置中的唯一标识"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setButtonLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"(btnId: string) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"设置流程按钮为加载中的回调函数"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancelButtonLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"(btnId: string) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"取消流程按钮为加载中的回调函数"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variant"),(0,l.kt)("td",{parentName:"tr",align:null},"'pc' ","|"," 'mobile' ","|"," 'more'"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮在应用中的显示模式。",(0,l.kt)("inlineCode",{parentName:"td"},"pc"),"、",(0,l.kt)("inlineCode",{parentName:"td"},"mobile"),"、",(0,l.kt)("inlineCode",{parentName:"td"},"more"),"分别表示在 pc 端、移动端、移动端更多按钮中的显示模式，默认为",(0,l.kt)("inlineCode",{parentName:"td"},"pc"),"。"),(0,l.kt)("td",{parentName:"tr",align:null},"否")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onBeginClick"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void"),(0,l.kt)("td",{parentName:"tr",align:null},"点击流程按钮前的回调函数"),(0,l.kt)("td",{parentName:"tr",align:null},"否")))),(0,l.kt)("h3",{id:"vue-方式开发"},"vue 方式开发"),(0,l.kt)("p",null,"vue 方式的自定义流程按钮组件除接收 react 方式支持的属性外，还接收以下属性："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"属性名称"),(0,l.kt)("th",{parentName:"tr",align:null},"含义"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"表单应用上下文信息")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formState"),(0,l.kt)("td",{parentName:"tr",align:null},"表单状态管理对象")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"detailPage"),(0,l.kt)("td",{parentName:"tr",align:null},"表单详情上下文信息")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <button @click="sayHellow()">hello</button>\n</template>\n\n<script>\nexport default {\n  name: "hello-btn",\n  props: ["appInfo"],\n  methods: {\n    sayHellow: function () {\n      alert(`Hello world! ${this.appInfo.currentUser.userName}`);\n    },\n  },\n};\n<\/script>\n')),(0,l.kt)("h3",{id:"jquery-方式开发"},"jQuery 方式开发"),(0,l.kt)("p",null,"jQuery 方式的自定义流程按钮组件除传入 react 方式支持的属性外，还接收以下属性："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"属性名称"),(0,l.kt)("th",{parentName:"tr",align:null},"含义"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"表单应用上下文信息")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"formState"),(0,l.kt)("td",{parentName:"tr",align:null},"表单状态管理对象")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"detailPage"),(0,l.kt)("td",{parentName:"tr",align:null},"表单详情上下文信息")))),(0,l.kt)("p",null,"使用 ",(0,l.kt)("inlineCode",{parentName:"p"},"jQuery")," 和 ",(0,l.kt)("inlineCode",{parentName:"p"},"Web Component")," 开发按钮插件。"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import $ from 'jquery';\n\nexport default class HelloBtn extends HTMLElement {\n  public _setting: any = { name: '' };\n  public _loadingBtnId: string = '';\n  root: ShadowRoot;\n  button: any;\n  public _setButtonLoading: (id: string) => void = () => {};\n  public _cancelButtonLoading: () => void = () => {};\n\n  constructor() {\n    super();\n    this.root = this.attachShadow({ mode: 'open' });\n    this.root.innerHTML = this.render();\n    this.button = $('#btn', this.root);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  connectedCallback() {\n    this.button.on('click', this.handleClick);\n  }\n\n  disConnectedCallback() {\n    this.button.off('click', this.handleClick);\n  }\n\n  handleClick() {\n    this.setButtonLoading(this.setting.id);\n    this.loadingBtnId = this.setting.id;\n    setTimeout(() => {\n      this.cancelButtonLoading();\n      this.button.removeAttr('disabled');\n    }, 1000);\n  }\n\n  set setting(value: any) {\n    this._setting = value;\n    this.button.text(value.name);\n  }\n\n  get setting() {\n    return this._setting;\n  }\n\n  set loadingBtnId(value: any) {\n    this._loadingBtnId = value;\n    if ((value = this.setting.id)) {\n      this.button.attr('disabled', true);\n    }\n  }\n\n  get loadingBtnId() {\n    return this._loadingBtnId;\n  }\n\n  set setButtonLoading(func: any) {\n    this._setButtonLoading = func;\n  }\n\n  get setButtonLoading() {\n    return this._setButtonLoading;\n  }\n\n  set cancelButtonLoading(func: any) {\n    this._cancelButtonLoading = func;\n  }\n\n  get cancelButtonLoading() {\n    return this._cancelButtonLoading;\n  }\n\n  render() {\n    return `<button id=\"btn\" >${this.setting.name}</button>`;\n  }\n}\n")),(0,l.kt)("h2",{id:"注册流程按钮"},"注册流程按钮"),(0,l.kt)("h3",{id:"react-方式"},"react 方式"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import appsetting from "@sinoform/app-setting";\nconst { flowConfig } = appsetting;\n\nflowConfig.addButton({\n  id: "xxx",\n  name: "xxx",\n  render: React.lazy(() => import("./xxx/xxx")),\n  enabled: false | true,\n  hidden: false | true,\n  icon: "xxxx",\n});\n')),(0,l.kt)("h3",{id:"vue-方式"},"vue 方式"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import appsetting from "@sinoform/app-setting";\nconst { flowConfig } = appsetting;\n\nflowConfig.addButton({\n  id: "xxx",\n  name: "xxx",\n  render: React.lazy(() => import("./xxx/vue-field-input")),\n  enabled: false | true,\n  hidden: false | true,\n  icon: "xxxx",\n});\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'import("./xxx/vue-field-input")'),"导入的是将 Vue 组件转换为 React 后的组件。"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/xxx/vue-field-input"),"目录下",(0,l.kt)("inlineCode",{parentName:"p"},"index.ts"),"代码："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { vueComponentWrapper } from "@sinoform/plugin-sinoform-helpers";\nimport HelloBtn from "./HelloBtn.vue";\n\nconst HelloBtnReact = vueComponentWrapper(HelloBtn);\n\nexport default HelloBtnReact;\n')),(0,l.kt)("h3",{id:"jquery-方式"},"jQuery 方式"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import appsetting from "@sinoform/app-setting";\nconst { flowConfig } = appsetting;\n\nflowConfig.addButton({\n  id: "xxx",\n  name: "xxx",\n  render: React.lazy(() => import("./xxx/js-flow-button-hello")),\n  enabled: false | true,\n  hidden: false | true,\n  icon: "xxxx",\n});\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'import("./xxx/js-flow-button-hello")'),"导入的是将 Web component 组件转换为 React 后的组件。"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/xxx/js-flow-button-hello目录下"),"index.ts`代码："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import HelloBtn from "./HelloBtn";\nimport { webComponentWrapper } from "@sinoform/plugin-sinoform-helpers";\n\ncustomElements.define("flow-button-hello", HelloBtn);\nconst HelloBtnReact = webComponentWrapper("flow-button-hello");\n\nexport default HelloBtnReact;\n')),(0,l.kt)("h2",{id:"流程按钮配置"},"流程按钮配置"),(0,l.kt)("p",null,"通过以上注册方式不难看出，流程按钮在注册时需要配置以下属性："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"配置项"),(0,l.kt)("th",{parentName:"tr",align:null},"类型"),(0,l.kt)("th",{parentName:"tr",align:null},"含义"),(0,l.kt)("th",{parentName:"tr",align:null},"是否必须配置"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮标识，必须唯一"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮名称"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},"React.ReactType"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮组件"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"流程节点属性设置的节点操作中按钮默认是否启用"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"流程节点属性设置的节点操作中是否显示该按钮"),(0,l.kt)("td",{parentName:"tr",align:null},"是")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"icon"),(0,l.kt)("td",{parentName:"tr",align:null},"React.ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null},"流程按钮组件的图标"),(0,l.kt)("td",{parentName:"tr",align:null},"是")))))}s.isMDXComponent=!0}}]);