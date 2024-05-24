"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[1724],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(t),p=i,f=m["".concat(o,".").concat(p)]||m[p]||s[p]||a;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55284:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],u={id:"guide-validate",title:"自定义表单校验规则"},o=void 0,c={unversionedId:"guide-validate",id:"guide-validate",title:"自定义表单校验规则",description:"支持版本：v1.15.0",source:"@site/docs/guide-validate.mdx",sourceDirName:".",slug:"/guide-validate",permalink:"/intellisense-form-website/docs/guide-validate",tags:[],version:"current",frontMatter:{id:"guide-validate",title:"自定义表单校验规则"},sidebar:"someSidebar",previous:{title:"监听表单值变化",permalink:"/intellisense-form-website/docs/guide-watch-form-values"},next:{title:"控制按钮的点击行为",permalink:"/intellisense-form-website/docs/guide-control-button-click"}},d=[{value:"如何使用",id:"如何使用",children:[{value:"自定义表单校验规则",id:"自定义表单校验规则",children:[],level:3},{value:"注册该校验规则文件",id:"注册该校验规则文件",children:[],level:3}],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"支持版本：v1.15.0")),(0,a.kt)("p",null,"智能表单支持以插件的方式集成自定义的表单校验。关于表单校验一共牵涉 4 个校验方法："),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formValidate")," 表单同步校验方法"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formValidateAsync")," 表单异步校验方法"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subFormValidate")," 弹窗子表单表单项的同步校验方法"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subFormValidateAsync")," 弹窗子表单表单项的异步校验方法")),(0,a.kt)("h2",{id:"如何使用"},"如何使用"),(0,a.kt)("h3",{id:"自定义表单校验规则"},"自定义表单校验规则"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/plugins/validate/index.ts",title:"src/plugins/validate/index.ts"},'import AppSetting from "@sinoform/app-setting";\n\n/**\n * 表单同步校验方法\n *\n * 接收两个参数：\n *\n * - 表单id：表单id如果为\'\'或者\'*\'，视为校验方法对所有的表单都适用\n * - 字段项校验方法对象\n *    - key: 表单项的fieldName\n *    - value: 校验方法，只能是同步的方法。接收两个参数：当前表单项的值和整个表单的值。\n *             如果校验不通过，返回校验结果说明字符串，否则返回undefined\n */\nAppSetting.formValidate("61c99ea3c9327f1d0cb7ef26", {\n  // num1与表单项num2的值进行大小判定\n  num1: (value, values) => {\n    if (value && values.num2 && Number(value) > Number(values.num2)) {\n      return "num1不能比num2大";\n    }\n    return undefined;\n  },\n\n  // count进行非空校验\n  count: (value) => {\n    if (!value) return "count不能为空";\n    return undefined;\n  },\n});\n\n/**\n * 表单异步校验方法\n *\n * 接收两个参数：\n *\n * - 表单id：表单id如果为\'\'或者\'*\'，视为校验方法对所有的表单都适用\n * - 字段项校验方法对象\n *    - key: 表单项的fieldName\n *    - value: 异步校验方法，可以是同步的方法。接收两个参数：当前表单项的值和整个表单的值\n *\n */\nAppSetting.formValidateAsync("61c99ea3c9327f1d0cb7ef26", {\n  // 通过异步方法校验name值是否符合标准\n  name: async (value) => {\n    if (value) {\n      return validateNameAsync(value);\n    }\n    return undefined;\n  },\n});\n\n/**\n * 弹窗子表单表单项的同步校验方法\n *\n * 接收三个参数：\n *\n * - 表单id：由于要匹配子表单的fieldName，不支持通配符匹配\n * - 子表单fieldName: 弹窗子表单的fieldName，用于判定校验规则适用于当前表单中的哪个子表单\n * - 字段项校验方法对象\n *    - key: 表单项的fieldName\n *    - value: 校验方法，必须是同步的方法。方法最多接收四个参数\n *        - 当前表单项的值\n *        - 当前编辑的这条子表单数据\n *        - 当前子表单的数据，不包含正在编辑的子表单的数据\n *        - 完整的表单数据\n */\nAppSetting.subFormValidate("61c99ea3c9327f1d0cb7ef26", "field_10", {\n  // id_card用于存储用户身份信息，通过当前值和整个子表单的数据，判定用户是否重复添加\n  id_card: (value: any, itemValues: any, subFormValues: any = []) => {\n    if (value && subFormValues.some((item) => item.id_card === value)) {\n      return "身份信息不能重复";\n    }\n    return undefined;\n  },\n});\n\n/**\n * 弹窗子表单表单项的异步校验方法\n *\n * - 表单id：由于要匹配子表单的fieldName，不支持通配符匹配\n * - 子表单fieldName: 弹窗子表单的fieldName，用于判定校验规则适用于当前表单中的哪个子表单\n * - 字段项校验方法对象\n *    - key: 表单项的fieldName\n *    - value: 异步校验方法，可以是同步的方法。方法最多接收四个参数\n *        - 当前表单项的值\n *        - 当前编辑的这条子表单数据\n *        - 当前子表单的数据，不包含正在编辑的子表单的数据\n *        - 完整的表单数据\n */\nAppSetting.subFormValidate("61c99ea3c9327f1d0cb7ef26", "field_10", {\n  // 通过异步方法校验name值是否符合标准\n  name: async (value) => {\n    if (value) {\n      return validateNameAsync(value);\n    }\n    return undefined;\n  },\n});\n')),(0,a.kt)("h3",{id:"注册该校验规则文件"},"注册该校验规则文件"),(0,a.kt)("p",null,"在插件项目的入口文件中引用上述校验规则的文件即为注册。"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=src/index.ts",title:"src/index.ts"},'import "./plugins/validate";\n')))}m.isMDXComponent=!0}}]);