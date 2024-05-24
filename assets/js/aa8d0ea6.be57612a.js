"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[5808],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82660:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),l=function(e){var t=e.version,n=e.type,l="font"===n?"dynamic-font-server-v"+t+".zip":"sino-intellisense-form-v"+t+"."+("backend"===n?"jar":"zip"),o="http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v"+t+"/"+l;return r.createElement("a",{href:o},l)},o=function(e){var t=e.font,n=e.frontend,o=e.backend,a=e.version;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"发布包名称"),r.createElement("th",null,"下载链接"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"前端包",a===n?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"frontend",version:n}))),r.createElement("tr",null,r.createElement("td",null,"后端包",a===o?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"backend",version:o}))),t&&r.createElement("tr",null,r.createElement("td",null,"字体服务",a===t?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"font",version:t})))))}},44077:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),a=n(82660),i=["components"],c={id:"changelog-v1.16.5",title:"v1.16.5"},u=void 0,s={unversionedId:"changelog/changelog-v1.16.5",id:"changelog/changelog-v1.16.5",title:"v1.16.5",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.16.5.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.16.5",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.16.5",tags:[],version:"current",frontMatter:{id:"changelog-v1.16.5",title:"v1.16.5"},sidebar:"someSidebar",previous:{title:"v1.16.6",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.16.6"},next:{title:"v1.16.4",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.16.4"}},m=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要变更",id:"4-主要变更",children:[],level:2}],p={toc:m};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,o.kt)("p",null,"发布日期：2023.2.28"),(0,o.kt)(a.Z,{version:"1.16.5",frontend:"1.16.5",backend:"1.16.5",font:"1.13.0",mdxType:"BundleList"}),(0,o.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,o.kt)("p",null,"可以从任何版本平滑升级到 v1.16.5。"),(0,o.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,o.kt)("p",null,"sinomatrix 针对当前版本的智能表单修复了一些缺陷，需要同步升级 sinomatrix 到 ",(0,o.kt)("a",{parentName:"p",href:"http://47.93.34.153:10080/sino-matrix/sino-matrix/blob/master/CHANGELOG.md"},"1.6.49")," 。（注意：访问此地址时可能会出现 ERR_UNSAFE_PORT 的情况，请参看",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kjcxmx/article/details/118122483"},"这篇帖子"),"配置一下浏览器。）"),(0,o.kt)("h2",{id:"4-主要变更"},"4. 主要变更"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feat: 表单和应用新增一个切换部门所属和个人所属的功能",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"在未开启表单管理员功能时，表单和应用 都是个人私有的"),(0,o.kt)("li",{parentName:"ul"},"开启表单管理员功能后，分级管理员可查看所管理的部门下的所有表单 + 自己私有的表单"),(0,o.kt)("li",{parentName:"ul"},"若需要让自己的表单可以被同级的管理员看见，需要将表单设置为部门所属"),(0,o.kt)("li",{parentName:"ul"},"若自己创建的表单不想被同级管理员看见，需要将表单设置为个人所属")))))}f.isMDXComponent=!0}}]);