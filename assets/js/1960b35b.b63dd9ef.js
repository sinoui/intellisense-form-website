"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[4161],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(r),p=o,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56275:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],c={id:"sinoform-sdk-event-starter",title:"开篇"},l="开篇",a={unversionedId:"sinoform-sdk-event-starter",id:"sinoform-sdk-event-starter",title:"开篇",description:"背景",source:"@site/docs/sinoform-sdk-event-starter.md",sourceDirName:".",slug:"/sinoform-sdk-event-starter",permalink:"/intellisense-form-website/docs/sinoform-sdk-event-starter",tags:[],version:"current",frontMatter:{id:"sinoform-sdk-event-starter",title:"开篇"},sidebar:"someSidebar",previous:{title:"开发人员编写自定义样式",permalink:"/intellisense-form-website/docs/custom-css-editor"},next:{title:"入门教程",permalink:"/intellisense-form-website/docs/sinoform-sdk-event-rudiments"}},u=[{value:"背景",id:"背景",children:[],level:2},{value:"目标",id:"目标",children:[],level:2},{value:"事件扩展机制",id:"事件扩展机制",children:[],level:2},{value:"sinoform-sdk对事件扩展的支持",id:"sinoform-sdk对事件扩展的支持",children:[],level:2}],f={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"开篇"},"开篇"),(0,i.kt)("h2",{id:"背景"},"背景"),(0,i.kt)("p",null,"在使用智能表单服务的过程中，用户往往存在各种各样的定制化业务需求，如：某个流程结束需要向流程发起人发送短信、某个流程的流转记录需要实时同步到其他系统等操作，这就需要智能表单提供强大的扩展机制，方便用户在智能表单服务的基础上进行二次开发，从而满足不同系统的多样的业务需求。"),(0,i.kt)("h2",{id:"目标"},"目标"),(0,i.kt)("p",null,"智能表单将为开发者提供简单易懂的扩展机制，轻量的开发工具包，方便开发者快速的实现对智能表单的扩展。"),(0,i.kt)("h2",{id:"事件扩展机制"},"事件扩展机制"),(0,i.kt)("p",null,"智能表单提供了事件总线服务，在工作流流转过程中，智能表单服务将发布一些工作流相关的事件，目前提供了流程流转事件、流程结束事件。开发者需要向智能表单订阅事件，才能在事件发布时获取到事件数据，我们为开发者准备了sinoform-sdk开发工具包，通过简单的开发即能实现事件的订阅。事件的订阅与发布过程可以参考下图："),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"远程事件模型",src:r(42550).Z})),(0,i.kt)("h2",{id:"sinoform-sdk对事件扩展的支持"},"sinoform-sdk对事件扩展的支持"),(0,i.kt)("p",null,"sinoform-sdk是智能表单提供的开发工具包，提供了方法级的事件订阅注解，开发者只需要简单的配置，它就可以提供自动化的事件订阅服务，当有事件发布时，它可以根据事件订阅注解找到对应的方法，传入事件数据并执行，开发者只需要关注需要订阅的事件类型和业务逻辑。"),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"-1"}))}d.isMDXComponent=!0},42550:function(e,t,r){t.Z=r.p+"assets/images/event-subscribe-model-726a4b30d9cf0b05c5fbc75a7c0d768d.png"}}]);