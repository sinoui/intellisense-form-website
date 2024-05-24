"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[2091],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(n),c=a,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(s,i(i({ref:e},d),{},{components:n})):r.createElement(s,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44348:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"interpolation-expression",title:"插值表达式"},p=void 0,u={unversionedId:"interpolation-expression",id:"interpolation-expression",title:"插值表达式",description:"使用场景",source:"@site/docs/interpolation-expression.mdx",sourceDirName:".",slug:"/interpolation-expression",permalink:"/intellisense-form-website/docs/interpolation-expression",tags:[],version:"current",frontMatter:{id:"interpolation-expression",title:"插值表达式"},sidebar:"someSidebar",previous:{title:"公式规则",permalink:"/intellisense-form-website/docs/expression-rules"},next:{title:"列表定制手册",permalink:"/intellisense-form-website/docs/custom-list-guide"}},d=[{value:"使用场景",id:"使用场景",children:[],level:2},{value:"语法规则",id:"语法规则",children:[],level:2},{value:"支持的表达式字段",id:"支持的表达式字段",children:[],level:2},{value:"特殊说明",id:"特殊说明",children:[],level:2}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"使用场景"},"使用场景"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"单行文本、多行文本生成默认值"),(0,l.kt)("li",{parentName:"ul"},"说明文字生成默认的富文本内容")),(0,l.kt)("h2",{id:"语法规则"},"语法规则"),(0,l.kt)("p",null,"花括号包裹要动态解析的表达式字段"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{ 表达式字段 }\n")),(0,l.kt)("h2",{id:"支持的表达式字段"},"支持的表达式字段"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"表达式字段"),(0,l.kt)("th",{parentName:"tr",align:null},"取值说明"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"办理人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"发送人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"完整部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人完整部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人完整部门路径，以",(0,l.kt)("inlineCode",{parentName:"td"},"/"),"拼接")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"部门简称"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称简称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人部门简称"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人部门名称简称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建时间"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间，格式",(0,l.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿时间"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间，格式",(0,l.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"年份"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间的年份")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"季度"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间所在的季度。第 1 季度、第 2 季度、第 3 季度、第 4 季度")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"月份"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间所在的月份")))),(0,l.kt)("h2",{id:"特殊说明"},"特殊说明"),(0,l.kt)("p",null,"弹窗子表单支持新建的时候带入主表单表单项的默认值，格式: ",(0,l.kt)("inlineCode",{parentName:"p"},"{主表单表单项名称}")))}k.isMDXComponent=!0}}]);