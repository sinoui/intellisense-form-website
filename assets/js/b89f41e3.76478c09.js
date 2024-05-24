"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[5653],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?i.createElement(f,s(s({ref:n},m),{},{components:t})):i.createElement(f,s({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},89221:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"guide-control-button-formitem",title:"控制表单页上的按钮和表单项"},l=void 0,p={unversionedId:"guide-control-button-formitem",id:"guide-control-button-formitem",title:"控制表单页上的按钮和表单项",description:"本章节的示例代码可以在 sinoform-plugins-web-component-examples/src/plugins/detail-page-extends 中找到。",source:"@site/docs/guide-control-button-formitem.mdx",sourceDirName:".",slug:"/guide-control-button-formitem",permalink:"/intellisense-form-website/docs/guide-control-button-formitem",tags:[],version:"current",frontMatter:{id:"guide-control-button-formitem",title:"控制表单页上的按钮和表单项"},sidebar:"someSidebar",previous:{title:"表单之间的交互",permalink:"/intellisense-form-website/docs/guide-rely-forms"},next:{title:"定制表单按钮组件",permalink:"/intellisense-form-website/docs/guide-form-button"}},m=[{value:"创建权限扩展文件",id:"创建权限扩展文件",children:[],level:2},{value:"注册权限扩展文件",id:"注册权限扩展文件",children:[],level:2},{value:"示例：办结按钮显示权限",id:"示例办结按钮显示权限",children:[],level:2},{value:"示例：控制表单字段可见且可编辑",id:"示例控制表单字段可见且可编辑",children:[],level:2}],d={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"示例源码")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"本章节的示例代码可以在 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/sinoui/sinoform-plugins-web-component-examples/tree/master/src/plugins/detail-page-extends"},"sinoform-plugins-web-component-examples/src/plugins/detail-page-extends")," 中找到。"))),(0,o.kt)("p",null,"添加",(0,o.kt)("inlineCode",{parentName:"p"},"控制表单页上的按钮和表单项"),"的扩展，一般分成两步："),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"创建权限扩展文件"),(0,o.kt)("li",{parentName:"ol"},"注册权限扩展文件")),(0,o.kt)("h2",{id:"创建权限扩展文件"},"创建权限扩展文件"),(0,o.kt)("p",null,"首先在",(0,o.kt)("inlineCode",{parentName:"p"},"src/plugins/detail-page-extends"),"文件夹下创建",(0,o.kt)("inlineCode",{parentName:"p"},"helloPermissionExtends"),"文件。通过",(0,o.kt)("inlineCode",{parentName:"p"},"permission"),"钩子注册监听事件，判断当前节点如果是",(0,o.kt)("inlineCode",{parentName:"p"},"中心文秘"),"，则",(0,o.kt)("inlineCode",{parentName:"p"},"退回"),"按钮可见。"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/plugins/detail-page-extends/helloPermission.ts"',title:'"src/plugins/detail-page-extends/helloPermission.ts"'},'import AppSetting from "@sinoform/app-setting";\n\nAppSetting.hooks.detailPage.tap(\n  "helloPermissionExtends",\n  (detailPageContext) => {\n    const { hooks, formData } = detailPageContext;\n    const { formDesign: { id } = {}, flowNode } = formData;\n    // 判断是否为指定的表单id\n    if (id === "612df55ac9327f1383eb4bbb") {\n      // 在产生最终的表单权限时调用，用来收集自定义的权限控制数据。\n      hooks.permission.tap(\n        "helloPermissionExtends",\n        (_currentUser, permissionItemList) => {\n          //判断当前节点是否为`中心文秘`，如果是，则显示`退回`按钮\n          if (flowNode?.name === "中心文秘") {\n            permissionItemList.push({\n              name: "back",\n              hidden: false,\n            });\n          }\n        }\n      );\n    }\n  }\n);\n')),(0,o.kt)("h2",{id:"注册权限扩展文件"},"注册权限扩展文件"),(0,o.kt)("p",null,"只需在",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"文件中引入扩展文件即可。"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},'import "./plugins/detail-page-extends/helloPermissionExtends";\n')),(0,o.kt)("h2",{id:"示例办结按钮显示权限"},"示例：办结按钮显示权限"),(0,o.kt)("p",null,"中心文秘节点配置",(0,o.kt)("inlineCode",{parentName:"p"},"办结"),"按钮，但必须在经过",(0,o.kt)("inlineCode",{parentName:"p"},"领导审批"),"后才能显示此按钮"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/plugins/detail-page-extends/customPermissionExtends.ts"',title:'"src/plugins/detail-page-extends/customPermissionExtends.ts"'},'import AppSetting from "@sinoform/app-setting";\n\nAppSetting.hooks.detailPage.tap(\n  "customPermissionExtends",\n  (detailPageContext) => {\n    const { hooks, formData, formState } = detailPageContext;\n    const { formDesign: { id } = {}, flowNode, passNodes } = formData;\n    // 判断是否为指定的表单id\n    if (id === "612df55ac9327f1383eb4bbb") {\n      // 在产生最终的表单权限时调用，用来收集自定义的权限控制数据。\n      hooks.permission.tap(\n        "customPermissionExtends",\n        (currentUser, permissionItemList) => {\n          // 判断当前节点是否是`中心文秘`节点且流程已经流经`领导审批`节点，这里用到了节点id,由于每个节点的id都不一致，因此如果使用节点id的话，此权限判定只能对绑定的表单起作用。如果此逻辑为共用，建议使用节点名称匹配，即`node.name !== \'领导审批\'`\n          if (\n            flowNode?.name === "中心文秘" &&\n            passNodes?.every(\n              (node) => node.id !== "4e7d5e6f-5da7-4b34-a056-950939f6e557"\n            )\n          ) {\n            permissionItemList.push({\n              name: "end",\n              hidden: true,\n            });\n          }\n        }\n      );\n    }\n  }\n);\n')),(0,o.kt)("h2",{id:"示例控制表单字段可见且可编辑"},"示例：控制表单字段可见且可编辑"),(0,o.kt)("p",null,"流程 ",(0,o.kt)("inlineCode",{parentName:"p"},"办结")," 之后，",(0,o.kt)("inlineCode",{parentName:"p"},"智能表单管理员")," 对表单中的",(0,o.kt)("inlineCode",{parentName:"p"},"用户反馈"),"有可见且可编辑权限"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="customPermissionExtends.ts"',title:'"customPermissionExtends.ts"'},'import AppSetting from "@sinoform/app-setting";\n\nAppSetting.hooks.detailPage.tap(\n  "customPermissionExtends",\n  (detailPageContext) => {\n    const { hooks, formData, formState } = detailPageContext;\n    const { formDesign: { id } = {}, flowNode, passNodes } = formData;\n    // 判断是否为指定的表单id\n    if (id === "612df55ac9327f1383eb4bbb") {\n      // 在产生最终的表单权限时调用，用来收集自定义的权限控制数据。\n      hooks.permission.tap(\n        "customPermissionExtends",\n        (currentUser, permissionItemList) => {\n          // 判断是否是已办结状态，如果是并且当前登录人是`智能表单管理员`，则表单中的用户反馈字段可见\n          if (\n            formState.values?.workflowStatus === "已办结" &&\n            currentUser.userName === "智能表单管理员"\n          ) {\n            permissionItemList.push({\n              name: "yonghufankui", // 用户反馈字段标识\n              hidden: false,\n              readOnly: false,\n            });\n          }\n        }\n      );\n    }\n  }\n);\n')))}c.isMDXComponent=!0}}]);