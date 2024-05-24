"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[6712],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),p=l,d=f["".concat(c,".").concat(p)]||f[p]||m[p]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82660:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),l=function(e){var t=e.version,n=e.type,l="font"===n?"dynamic-font-server-v"+t+".zip":"sino-intellisense-form-v"+t+"."+("backend"===n?"jar":"zip"),o="http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v"+t+"/"+l;return r.createElement("a",{href:o},l)},o=function(e){var t=e.font,n=e.frontend,o=e.backend,a=e.version;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"发布包名称"),r.createElement("th",null,"下载链接"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"前端包",a===n?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"frontend",version:n}))),r.createElement("tr",null,r.createElement("td",null,"后端包",a===o?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"backend",version:o}))),t&&r.createElement("tr",null,r.createElement("td",null,"字体服务",a===t?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"font",version:t})))))}},86800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),a=n(82660),i=["components"],c={id:"changelog-v1.17.1",title:"v1.17.1"},u=void 0,s={unversionedId:"changelog/changelog-v1.17.1",id:"changelog/changelog-v1.17.1",title:"v1.17.1",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.17.1.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.17.1",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.17.1",tags:[],version:"current",frontMatter:{id:"changelog-v1.17.1",title:"v1.17.1"},sidebar:"someSidebar",previous:{title:"v1.17.2",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.17.2"},next:{title:"v1.17.0",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.17.0"}},m=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要变更",id:"4-主要变更",children:[],level:2}],f={toc:m};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,o.kt)("p",null,"发布日期：2023.02.13"),(0,o.kt)(a.Z,{version:"1.17.1",frontend:"1.17.1",backend:"1.17.1",font:"1.13.0",mdxType:"BundleList"}),(0,o.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,o.kt)("p",null,"可以从任何版本平滑升级到 v1.17.1。"),(0,o.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,o.kt)("p",null,"sinomatrix 针对当前版本的智能表单修复了一些缺陷，需要同步升级 sinomatrix 到 ",(0,o.kt)("a",{parentName:"p",href:"http://sinomatrix.gitee.io/sino-matrix-website/docs/changelog/home#v1649--202266"},"1.6.49")," 。"),(0,o.kt)("h2",{id:"4-主要变更"},"4. 主要变更"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feat: 新增数据变更功能"),(0,o.kt)("li",{parentName:"ul"},"feat: 新增部分查询功能"),(0,o.kt)("li",{parentName:"ul"},"feat: 增加申请撤回功能"),(0,o.kt)("li",{parentName:"ul"},"feat: 增加表单项关联第三方接口功能"),(0,o.kt)("li",{parentName:"ul"},"feat: 无流程表单支持添加自定义定制列表"),(0,o.kt)("li",{parentName:"ul"},"feat: 增加金额输入框"),(0,o.kt)("li",{parentName:"ul"},"feat: 表单项新增隐藏占位的特性"),(0,o.kt)("li",{parentName:"ul"},"feat: 表格支持横向滚动")))}p.isMDXComponent=!0}}]);