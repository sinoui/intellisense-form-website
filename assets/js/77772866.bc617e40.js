"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[9744],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8112:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"plugin-module-federation",title:"模块联邦配置"},p=void 0,c={unversionedId:"plugin-module-federation",id:"plugin-module-federation",title:"模块联邦配置",description:"插件项目基于 webpack5 的模块联邦机制，package.json文件dependencies中的第三方库依赖会作为共享的依赖。如果智能表单项目的依赖中同样有该库，会优先使用智能表单中的依赖，所以对版本的要求非常高，需要保证与智能表单项目的依赖版本保持一致。",source:"@site/docs/plugin-module-federation.md",sourceDirName:".",slug:"/plugin-module-federation",permalink:"/intellisense-form-website/docs/plugin-module-federation",tags:[],version:"current",frontMatter:{id:"plugin-module-federation",title:"模块联邦配置"},sidebar:"someSidebar",previous:{title:"自定义全局样式",permalink:"/intellisense-form-website/docs/plugin-css"},next:{title:"插件项目联调",permalink:"/intellisense-form-website/docs/plugin-test"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"插件项目基于 webpack5 的模块联邦机制，",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"文件",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"中的第三方库依赖会作为共享的依赖。如果智能表单项目的依赖中同样有该库，会优先使用智能表单中的依赖，所以对版本的要求非常高，需要保证与智能表单项目的依赖版本保持一致。"),(0,i.kt)("p",null,"模块联邦配置在",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.base.config.js"),"的",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"中"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'new ModuleFederationPlugin({\n  name: "<%=模块名称%>",\n  library: { type: "var", name: "<%=容器解析名称%>" },\n  filename: "extend.js",\n  shared: {\n    ...sharedDeps,\n  },\n  exposes: { ".": "./src/index" },\n});\n')),(0,i.kt)("p",null,"说明："),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"name 作为模块输出名称需要保证唯一。")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"library.name 是 extend.js 做为远程容器解析时用到的名称，是插件配置中的插件标识，要保证其唯一性。 默认为当前项目名称的转小驼峰之后的值。")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"filename 默认 extend.js。 项目打包后会生成 extend.js 文件。插件配置时的 url 就是此文件的请求地址，形式：",(0,i.kt)("inlineCode",{parentName:"p"},"<域名或ip>[端口]/extend.js"),"，例如：",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/extend.js"),"。")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"shared 需要共享的第三方依赖.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"exposes 插件项目导出的模块。"))))}d.isMDXComponent=!0}}]);