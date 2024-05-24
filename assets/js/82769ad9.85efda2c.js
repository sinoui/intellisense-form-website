"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[7802],{3905:function(A,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var i=n.createContext({}),c=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},u=function(A){var e=c(A.components);return n.createElement(i.Provider,{value:e},A.children)},v={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,u=o(A,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(i,".").concat(f)]||d[f]||v[f]||a;return t?n.createElement(m,l(l({ref:e},u),{},{components:t})):n.createElement(m,l({ref:e},u))}));function f(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o.mdxType="string"==typeof A?A:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82660:function(A,e,t){t.d(e,{Z:function(){return a}});var n=t(67294),r=function(A){var e=A.version,t=A.type,r="font"===t?"dynamic-font-server-v"+e+".zip":"sino-intellisense-form-v"+e+"."+("backend"===t?"jar":"zip"),a="http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v"+e+"/"+r;return n.createElement("a",{href:a},r)},a=function(A){var e=A.font,t=A.frontend,a=A.backend,l=A.version;return n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"发布包名称"),n.createElement("th",null,"下载链接"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"前端包",l===t?"（新版本）":""),n.createElement("td",null,n.createElement(r,{type:"frontend",version:t}))),n.createElement("tr",null,n.createElement("td",null,"后端包",l===a?"（新版本）":""),n.createElement("td",null,n.createElement(r,{type:"backend",version:a}))),e&&n.createElement("tr",null,n.createElement("td",null,"字体服务",l===e?"（新版本）":""),n.createElement("td",null,n.createElement(r,{type:"font",version:e})))))}},75566:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return v},default:function(){return f}});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),l=t(82660),o=["components"],i={id:"changelog-v1.14.0-alpha.1",title:"v1.14.0-alpha.1"},c=void 0,u={unversionedId:"changelog/changelog-v1.14.0-alpha.1",id:"changelog/changelog-v1.14.0-alpha.1",title:"v1.14.0-alpha.1",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.14.0-alpha.1.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.14.0-alpha.1",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.14.0-alpha.1",tags:[],version:"current",frontMatter:{id:"changelog-v1.14.0-alpha.1",title:"v1.14.0-alpha.1"},sidebar:"someSidebar",previous:{title:"v1.14.0-alpha.2",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.14.0-alpha.2"},next:{title:"v1.14.0-alpha.0",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.14.0-alpha.0"}},v=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要变更",id:"4-主要变更",children:[],level:2}],d={toc:v};function f(A){var e=A.components,i=(0,r.Z)(A,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,a.kt)("p",null,"发布日期：2022.2.25"),(0,a.kt)(l.Z,{version:"1.14.0-alpha.1",frontend:"1.14.0-alpha.1",backend:"1.14.0-alpha.0",font:"1.13.0",mdxType:"BundleList"}),(0,a.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,a.kt)("p",null,"可以从任何版本平滑升级到 v1.14.0-alpha.1。"),(0,a.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,a.kt)("p",null,"因 sinomatrix 缺陷影响了智能表单之前版本（v1.12.0 版本之前的版本）提供的功能，sinomatrix 已经修复，所以需要同步升级 sinomatrix 到 ",(0,a.kt)("a",{parentName:"p",href:"http://47.93.34.153:10080/sino-matrix/sino-matrix/blob/master/CHANGELOG.md"},"1.6.37")," 。（注意：访问此地址时可能会出现 ERR_UNSAFE_PORT 的情况，请参看",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kjcxmx/article/details/118122483"},"这篇帖子"),"配置一下浏览器。）"),(0,a.kt)("h2",{id:"4-主要变更"},"4. 主要变更"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"feat: 下拉框支持过滤选项"),(0,a.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"破坏性变更提醒：多选时开启选项过滤，下拉框中的值会以 tag 标签的方式展示\n",(0,a.kt)("img",{src:t(82657).Z}))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"chore: 弹窗子表单无数据，显示列表表头")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: 修复弹窗子表单配置面板列表项名称与表单项的标题不一致的 bug")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: 修复无流程列表自定义列数据错误的 bug")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"fix: 修复多层嵌套弹窗子表单预览错误的 bug"))))}f.isMDXComponent=!0},82657:function(A,e){e.Z="data:image/png;base64,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"}}]);