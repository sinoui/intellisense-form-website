"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[3255],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15003:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(87462),l=t(63366),i=(t(67294),t(3905)),a=["components"],o={id:"plugin-faq",title:"常见问题"},p=void 0,c={unversionedId:"plugin-faq",id:"plugin-faq",title:"常见问题",description:"1. 在调试智能表单插件时，智能表单页面上不显示相关的插件，如自定义的流程按钮、表单控件等。",source:"@site/docs/plugin-faq.mdx",sourceDirName:".",slug:"/plugin-faq",permalink:"/intellisense-form-website/docs/plugin-faq",tags:[],version:"current",frontMatter:{id:"plugin-faq",title:"常见问题"},sidebar:"someSidebar",previous:{title:"异步加载",permalink:"/intellisense-form-website/docs/plugin-dynamic-import"},next:{title:"表单应用支持自定义样式的元素",permalink:"/intellisense-form-website/docs/custom-css-pc"}},u=[{value:"1. 在调试智能表单插件时，智能表单页面上不显示相关的插件，如自定义的流程按钮、表单控件等。",id:"1-在调试智能表单插件时智能表单页面上不显示相关的插件如自定义的流程按钮表单控件等",children:[{value:"情况一：未注册本地插件项目",id:"情况一未注册本地插件项目",children:[],level:3},{value:"情况二：注册的插件项目名称错误",id:"情况二注册的插件项目名称错误",children:[],level:3},{value:"情况三：插件项目未启动",id:"情况三插件项目未启动",children:[],level:3},{value:"情况四：您动了 webpack 配置？",id:"情况四您动了-webpack-配置",children:[],level:3},{value:"情况五：您的插件注册了么？",id:"情况五您的插件注册了么",children:[],level:3}],level:2},{value:"2. 新写的代码在调试过程中没有作用",id:"2-新写的代码在调试过程中没有作用",children:[{value:"步骤一：查看一下代码文件是否保存",id:"步骤一查看一下代码文件是否保存",children:[],level:3},{value:"步骤二：可能是浏览器缓存导致没有获取到最新的 js 文件",id:"步骤二可能是浏览器缓存导致没有获取到最新的-js-文件",children:[],level:3},{value:"步骤三：使用大招：重新启动插件项目",id:"步骤三使用大招重新启动插件项目",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-在调试智能表单插件时智能表单页面上不显示相关的插件如自定义的流程按钮表单控件等"},"1. 在调试智能表单插件时，智能表单页面上不显示相关的插件，如自定义的流程按钮、表单控件等。"),(0,i.kt)("p",null,"出现这种问题，有可能是以下几种情况导致的，请逐一排查："),(0,i.kt)("h3",{id:"情况一未注册本地插件项目"},"情况一：未注册本地插件项目"),(0,i.kt)("p",null,"要想在智能表单中调试插件项目，需要将插件项目注册到智能表单产品中。注册过程是：在浏览器中先打开智能表单页面，然后打开浏览器的控制台（devtools），在控制台执行下面的代码，完成注册："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{6}","{6}":!0},'localStorage.setItem(\n  "sinoform-preview-plugins",\n  JSON.stringify([\n    {\n      url: "http://localhost:8090/extend.js",\n      name: "qxjoaPlugins",\n    },\n  ])\n);\n')),(0,i.kt)("p",null,"千万要注意 ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"，需要与插件项目名称保持一致（需要将连字符形式的插件项目名称转化为首字母小写的驼峰式名称）。"),(0,i.kt)("p",null,"另外，如果您之前注册过，但是以下行为有可能会取消注册："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"主动执行 ",(0,i.kt)("inlineCode",{parentName:"li"},'localStorage.removeItem("sinoform-preview-plugins");')," 代码，取消插件项目的注册"),(0,i.kt)("li",{parentName:"ul"},"清空了浏览器的缓存"),(0,i.kt)("li",{parentName:"ul"},"您使用了其他的浏览器打开了智能表单")),(0,i.kt)("p",null,"您可以打开浏览器开发者工具的",(0,i.kt)("inlineCode",{parentName:"p"},"application"),"（",(0,i.kt)("inlineCode",{parentName:"p"},"应用程序"),"）面板中查看一下",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage"),"（",(0,i.kt)("inlineCode",{parentName:"p"},"本地存储"),"），如果有以下类似的内容，则表示注册成功："),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(14428).Z})),(0,i.kt)("h3",{id:"情况二注册的插件项目名称错误"},"情况二：注册的插件项目名称错误"),(0,i.kt)("p",null,"有可能您的项目名称与您注册的插件项目名称不一致，您可以打开插件项目的 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.base.config.js")," 文件，查看库名称，如下图所示："),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(41261).Z})),(0,i.kt)("p",null,"可以将上图与情况一中注册的名称对比一下，看一下是否一致。"),(0,i.kt)("h3",{id:"情况三插件项目未启动"},"情况三：插件项目未启动"),(0,i.kt)("p",null,"有可能您忘记启动插件项目了。请确认一下。如果没有启动，则执行一下 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start"),"，启动项目。"),(0,i.kt)("h3",{id:"情况四您动了-webpack-配置"},"情况四：您动了 webpack 配置？"),(0,i.kt)("p",null,"如果您调整了 webpack 相关配置，例如 ",(0,i.kt)("inlineCode",{parentName:"p"},"端口号"),"，那么您需要重新注册一下插件项目，使用正确的 ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"。"),(0,i.kt)("h3",{id:"情况五您的插件注册了么"},"情况五：您的插件注册了么？"),(0,i.kt)("p",null,"请打开插件项目入口文件 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts"),"，检查是否注册了相关插件。例如："),(0,i.kt)("p",null,"注册流程按钮："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// 注册 hello-button 插件（流程按钮）\nAppSetting.flowConfig.addButton({\n  id: "hello-button",\n  name: "Hello World",\n  render: React.lazy(() => import("./plugins/flow-button-hello")),\n});\n')),(0,i.kt)("p",null,"注册表单项："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// 注册 custom-text-input 表单控件\nAppSetting.formConfig.addField({\n  type: "custom-text-input",\n  title: "自定义单行文本",\n  group: FormFieldGroup.normal,\n  icon: EventNote,\n  render: React.lazy(\n    () => import("./plugins/form-field-custom-text-input/render")\n  ),\n  preview: React.lazy(\n    () => import("./plugins/form-field-custom-text-input/preview")\n  ),\n  configPanel: React.lazy(\n    () => import("./plugins/form-field-custom-text-input/config-panel")\n  ),\n});\n')),(0,i.kt)("p",null,"注册扩展："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import "./plugins/detail-page-extends/customPermissionExtends";\n')),(0,i.kt)("h2",{id:"2-新写的代码在调试过程中没有作用"},"2. 新写的代码在调试过程中没有作用"),(0,i.kt)("p",null,"导致出现此现象的原因有很多，我们可以按照下面的步骤逐一排查："),(0,i.kt)("h3",{id:"步骤一查看一下代码文件是否保存"},"步骤一：查看一下代码文件是否保存"),(0,i.kt)("p",null,"我们在开发智能表单产品过程中，出现过因为没有保存修改代码的文件，导致在页面上看不到应有的效果，我们偶尔还会花很多时间来调试代码为什么没有起作用。"),(0,i.kt)("p",null,"所以，您可以先检查一下是否遇到与我们类似的情况。 您可以查看一下 vscode 的页签，看是否有带有圆点的页签，如果有，则保存一下。如下图所示："),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8413).Z})),(0,i.kt)("h3",{id:"步骤二可能是浏览器缓存导致没有获取到最新的-js-文件"},"步骤二：可能是浏览器缓存导致没有获取到最新的 js 文件"),(0,i.kt)("p",null,"首先可以打开浏览器开发者工具（按 ",(0,i.kt)("inlineCode",{parentName:"p"},"F12")," 可打开开发者工具）的 ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," （",(0,i.kt)("inlineCode",{parentName:"p"},"源"),"）页签，按 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + P")," 快捷键，在出现的输入框中输入你的文件名，找到你的文件，然后打开此文件，看看是否包含了变更的代码。如下图所示："),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(72280).Z})),(0,i.kt)("p",null,"如果没有包含变更代码，则可能是因为浏览器缓存导致的，可以打开 ",(0,i.kt)("inlineCode",{parentName:"p"},"network"),"（",(0,i.kt)("inlineCode",{parentName:"p"},"网络面板"),"），勾选上 ",(0,i.kt)("inlineCode",{parentName:"p"},"Disable Cache"),"（",(0,i.kt)("inlineCode",{parentName:"p"},"禁用缓存"),"）选项，如下图所示："),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(50434).Z})),(0,i.kt)("h3",{id:"步骤三使用大招重新启动插件项目"},"步骤三：使用大招：重新启动插件项目"),(0,i.kt)("p",null,"如果通过上面两个步骤还是没能解决您的问题，您可以重新启动一下插件项目。出现这种情况的概率非常小，我们在开发智能表单过程中，遇到不到十次这样的情况。"))}d.isMDXComponent=!0},50434:function(e,n,t){n.Z=t.p+"assets/images/disable-cache-in-devtools-d26ddfde466c3d4d6e3fe20e9895e943.png"},8413:function(e,n,t){n.Z=t.p+"assets/images/non-save-file-7ef1962a65cb295909adc39841cabb38.png"},14428:function(e,n,t){n.Z=t.p+"assets/images/view-plugin-local-storage-be2ffda6266f932be5e1d2875ae85a74.png"},72280:function(e,n,t){n.Z=t.p+"assets/images/view-source-in-browser-devtools-3d84a4ad8b39ef3a4a36c08795d26ac7.png"},41261:function(e,n,t){n.Z=t.p+"assets/images/webpack-library-name-cba3730c4dd7b96b47709b10d4836d9d.png"}}]);