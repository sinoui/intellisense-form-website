"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[1024],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82660:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),l=function(e){var t=e.version,n=e.type,l="font"===n?"dynamic-font-server-v"+t+".zip":"sino-intellisense-form-v"+t+"."+("backend"===n?"jar":"zip"),a="http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v"+t+"/"+l;return r.createElement("a",{href:a},l)},a=function(e){var t=e.font,n=e.frontend,a=e.backend,o=e.version;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"发布包名称"),r.createElement("th",null,"下载链接"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"前端包",o===n?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"frontend",version:n}))),r.createElement("tr",null,r.createElement("td",null,"后端包",o===a?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"backend",version:a}))),t&&r.createElement("tr",null,r.createElement("td",null,"字体服务",o===t?"（新版本）":""),r.createElement("td",null,r.createElement(l,{type:"font",version:t})))))}},37302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=n(82660),i=["components"],c={id:"changelog-v1.15.0-alpha.10",title:"v1.15.0-alpha.10"},u=void 0,p={unversionedId:"changelog/changelog-v1.15.0-alpha.10",id:"changelog/changelog-v1.15.0-alpha.10",title:"v1.15.0-alpha.10",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.15.0-alpha10.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.15.0-alpha.10",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.15.0-alpha.10",tags:[],version:"current",frontMatter:{id:"changelog-v1.15.0-alpha.10",title:"v1.15.0-alpha.10"},sidebar:"someSidebar",previous:{title:"v1.15.0-alpha.11",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.15.0-alpha.11"},next:{title:"v1.15.0-alpha.9",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.15.0-alpha.9"}},s=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要变更",id:"4-主要变更",children:[],level:2}],m={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,a.kt)("p",null,"发布日期：2022.4.17"),(0,a.kt)(o.Z,{version:"1.15.0-alpha.10",frontend:"1.15.0-alpha.10",backend:"1.15.0-alpha.9",font:"1.13.0",mdxType:"BundleList"}),(0,a.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,a.kt)("p",null,"可以从任何版本平滑升级到 v1.15.0-alpha.10。"),(0,a.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,a.kt)("p",null,"因 sinomatrix 缺陷影响了智能表单之前版本（v1.12.0 版本之前的版本）提供的功能，sinomatrix 已经修复，所以需要同步升级 sinomatrix 到 ",(0,a.kt)("a",{parentName:"p",href:"http://47.93.34.153:10080/sino-matrix/sino-matrix/blob/master/CHANGELOG.md"},"1.6.37")," 。（注意：访问此地址时可能会出现 ERR_UNSAFE_PORT 的情况，请参看",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kjcxmx/article/details/118122483"},"这篇帖子"),"配置一下浏览器。）"),(0,a.kt)("h2",{id:"4-主要变更"},"4. 主要变更"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fix: 修复部门管理员选择人数过多时，显示错乱的样式问题")))}f.isMDXComponent=!0}}]);