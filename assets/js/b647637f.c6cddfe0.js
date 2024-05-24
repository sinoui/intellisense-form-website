"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[8885],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),g=o,m=f["".concat(l,".").concat(g)]||f[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77716:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"use-app-setting",title:"appSetting",sidebar_label:"appSetting的使用"},l=void 0,c={unversionedId:"use-app-setting",id:"use-app-setting",title:"appSetting",description:"appSetting 为默认全局配置，其中包括表单配置、流程按钮配置、打印输出配置、仪表盘图表配置以及业务逻辑扩展配置。",source:"@site/docs/use-app-setting.md",sourceDirName:".",slug:"/use-app-setting",permalink:"/intellisense-form-website/docs/use-app-setting",tags:[],version:"current",frontMatter:{id:"use-app-setting",title:"appSetting",sidebar_label:"appSetting的使用"},sidebar:"someSidebar",previous:{title:"总结",permalink:"/intellisense-form-website/docs/guide-summary"},next:{title:"新增表单字段",permalink:"/intellisense-form-website/docs/plugin-field"}},s=[{value:"安装方式",id:"安装方式",children:[],level:2},{value:"使用方式",id:"使用方式",children:[],level:2}],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"appSetting 为默认全局配置，其中包括表单配置、流程按钮配置、打印输出配置、仪表盘图表配置以及业务逻辑扩展配置。")),(0,i.kt)("h2",{id:"安装方式"},"安装方式"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @sinoform/app-setting\n\n或\n\nyarn add @sinoform/app-setting\n")),(0,i.kt)("h2",{id:"使用方式"},"使用方式"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import appSetting from '@sinoform/app-setting';\n\nconst { formConfig, flowConfig } = appSetting;\n\nformConfig.addField({...}); // 新增字段配置\nformConfig.field('input'); // 获取指定type的字段配置\nformConfig.formConfigPanel = React.lazy(()=>import('@sinoform/form-config-panel'));  // 指定表单属性设置面板\n\nflowConfig.addButton({...}); // 新增按钮配置\nflowConfig.button(buttonId);  // 获取指定id的按钮配置\n")),(0,i.kt)("p",null,"完整的",(0,i.kt)("inlineCode",{parentName:"p"},"appSetting"),"数据结构如下："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface AppSetting {\n  /**\n   * 表单配置\n   */\n  formConfig: FormConfig;\n  /**\n   * 流程配置\n   */\n  flowConfig: FlowConfig;\n  /**\n   * 打印输出配置\n   */\n  printOutConfig: PrintOutSetting;\n  /**\n   * 图表配置\n   */\n  dashboardConfig: DashboardConfig;\n  /**\n   * 详情页逻辑扩展\n   */\n  detailPageExtendConfig: DetailPageExtendInfo<T>;\n}\n")))}f.isMDXComponent=!0}}]);