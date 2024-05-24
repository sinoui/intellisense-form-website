"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[5055],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=i,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93018:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),l=["components"],a={id:"changelog-v1.12.4",title:"v1.12.4"},c=void 0,s={unversionedId:"changelog/changelog-v1.12.4",id:"changelog/changelog-v1.12.4",title:"v1.12.4",description:"1. 发布情况",source:"@site/docs/changelog/changelog-v1.12.4.mdx",sourceDirName:"changelog",slug:"/changelog/changelog-v1.12.4",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.4",tags:[],version:"current",frontMatter:{id:"changelog-v1.12.4",title:"v1.12.4"},sidebar:"someSidebar",previous:{title:"v1.12.5",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.5"},next:{title:"v1.12.3",permalink:"/intellisense-form-website/docs/changelog/changelog-v1.12.3"}},u=[{value:"1. 发布情况",id:"1-发布情况",children:[],level:2},{value:"2. 平滑升级",id:"2-平滑升级",children:[],level:2},{value:"3. sinomatrix 依赖变更",id:"3-sinomatrix-依赖变更",children:[],level:2},{value:"4. 主要特性",id:"4-主要特性",children:[{value:"4.1. 新增缓存时长的配置项",id:"41-新增缓存时长的配置项",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-发布情况"},"1. 发布情况"),(0,o.kt)("p",null,"发布日期：2021.12.05"),(0,o.kt)("p",null,"前端包：",(0,o.kt)("a",{parentName:"p",href:"http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v1.12.0/sino-intellisense-form-v1.12.0.zip"},"sino-intellisense-form-v1.12.0.zip")),(0,o.kt)("p",null,"后端包：",(0,o.kt)("a",{parentName:"p",href:"http://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/v1.12.4/sino-intellisense-form-v1.12.4.jar"},"sino-intellisense-form-v1.12.4.jar")),(0,o.kt)("h2",{id:"2-平滑升级"},"2. 平滑升级"),(0,o.kt)("p",null,"可以从任何版本平滑升级到 v1.12.4。"),(0,o.kt)("h2",{id:"3-sinomatrix-依赖变更"},"3. sinomatrix 依赖变更"),(0,o.kt)("p",null,"因 sinomatrix 缺陷影响了智能表单之前版本（v1.12.0 版本之前的版本）提供的功能，sinomatrix 已经修复，所以需要同步升级 sinomatrix 到 ",(0,o.kt)("a",{parentName:"p",href:"http://47.93.34.153:10080/sino-matrix/sino-matrix/blob/master/CHANGELOG.md"},"1.6.31")," 。（注意：访问此地址时可能会出现 ERR_UNSAFE_PORT 的情况，请参看",(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kjcxmx/article/details/118122483"},"这篇帖子"),"配置一下浏览器。）"),(0,o.kt)("h2",{id:"4-主要特性"},"4. 主要特性"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fix: 修复单表单、单应用资源导航处理部门+业务角色的权限错误的缺陷"),(0,o.kt)("li",{parentName:"ul"},"improve: 优化获取当前用户信息的性能")),(0,o.kt)("h3",{id:"41-新增缓存时长的配置项"},"4.1. 新增缓存时长的配置项"),(0,o.kt)("p",null,"新增以下控制缓存时长的配置项："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sinoform:\n  # 用户信息缓存时长：30分钟（单位：毫秒）\n  user-cache-time: 1800000\n  # 部门信息缓存时长：1小时（单位：毫秒）\n  dept-cache-time: 3600000\n  # 部门路径信息缓存时长：1小时（单位：毫秒）\n  dept-path-cache-time: 3600000\n  # 用户对应的业务角色信息缓存时长：5分钟（单位：毫秒）\n  user-roles-cache-time: 300000\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"备注：上面示例中的值是系统中的默认值")),(0,o.kt)("p",null,"详情请见",(0,o.kt)("a",{parentName:"p",href:"../config-user-info"},"用户信息配置"),"。"))}m.isMDXComponent=!0}}]);