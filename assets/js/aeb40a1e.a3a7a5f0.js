"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[6957],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91448:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={id:"changelog-v1.12.1",title:"v1.12.1"},c=void 0,s={unversionedId:"changelog/changelog-v1.12.1",id:"changelog/changelog-v1.12.1",title:"v1.12.1",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.12.1.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.12.1",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.1",tags:[],version:"current",frontMatter:{id:"changelog-v1.12.1",title:"v1.12.1"},sidebar:"someSidebar",previous:{title:"v1.12.2",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.2"},next:{title:"v1.12.0",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.0"}},p=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要特性",id:"4-主要特性",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,i.kt)("p",null,"发布日期：2021.9.29"),(0,i.kt)("p",null,"前端包：",(0,i.kt)("a",{parentName:"p",href:"http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v1.12.0/sino-intellisense-form-v1.12.0.zip"},"sino-intellisense-form-v1.12.0.zip")),(0,i.kt)("p",null,"后端包：",(0,i.kt)("a",{parentName:"p",href:"http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v1.12.1/sino-intellisense-form-v1.12.1.jar"},"sino-intellisense-form-v1.12.1.jar")),(0,i.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,i.kt)("p",null,"可以从 v1.12.0 平滑升级到 v1.12.1。但是从 v1.12.0 版本之前升级到 v1.12.1，需要完成一些手动升级的任务，详情请见 ",(0,i.kt)("a",{parentName:"p",href:"/intellisense-form-website/docs/changelog/changelog-v1.12.0"},"v1.12.0 版本发布公告"),"。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"为什么 v1.12.0 版本没有提供平滑升级？"),(0,i.kt)("p",{parentName:"blockquote"},"主要是因为时间上来不及处理。我们需要按照计划将 v1.12.0 版本发布出去，因为个别项目组正在等待此版本的升级。"),(0,i.kt)("p",{parentName:"blockquote"},"我们预计在一周后的 ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.12.2")," 版本包含自动升级脚本，来实现此版本的平滑升级。")),(0,i.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,i.kt)("p",null,"因 sinomatrix 缺陷影响了智能表单之前版本（v1.12.0 版本之前的版本）提供的功能，sinomatrix 已经修复，所以需要同步升级 sinomatrix 到 ",(0,i.kt)("a",{parentName:"p",href:"http://47.93.34.153:10080/sino-matrix/sino-matrix/blob/master/CHANGELOG.md"},"1.6.31")," 。（注意：访问此地址时可能会出现 ERR_UNSAFE_PORT 的情况，请参看",(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kjcxmx/article/details/118122483"},"这篇帖子"),"配置一下浏览器。）"),(0,i.kt)("h2",{id:"4-主要特性"},"4. 主要特性"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"紧急修复缺陷：流程办结失败")))}m.isMDXComponent=!0}}]);