"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[6949],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),l=n(63366),i=(n(67294),n(3905)),a=["components"],o={id:"export-excel",title:"定制导出excel按钮"},p=void 0,c={unversionedId:"export-excel",id:"export-excel",title:"定制导出excel按钮",description:"这篇文章将介绍如何以插件的方式开发项目组自己的导出 Excel 按钮。示例采用 React 开发。",source:"@site/docs/export-excel.mdx",sourceDirName:".",slug:"/export-excel",permalink:"/intellisense-form-website/docs/export-excel",tags:[],version:"current",frontMatter:{id:"export-excel",title:"定制导出excel按钮"},sidebar:"someSidebar",previous:{title:"列表定制手册",permalink:"/intellisense-form-website/docs/custom-list-guide"},next:{title:"数据字典管理员",permalink:"/intellisense-form-website/docs/dictionary-manager"}},s=[{value:"实现",id:"实现",children:[{value:"1. 开启列标勾选的功能",id:"1-开启列标勾选的功能",children:[],level:3},{value:"2. 开发导出按钮组件",id:"2-开发导出按钮组件",children:[],level:3}],level:2},{value:"模板的要求",id:"模板的要求",children:[{value:"模板语法",id:"模板语法",children:[{value:"${表达式}",id:"表达式",children:[],level:4},{value:"插值表达式",id:"插值表达式",children:[],level:4}],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"这篇文章将介绍如何以插件的方式开发项目组自己的导出 Excel 按钮。示例采用 React 开发。"),(0,i.kt)("p",null,"需求：导出列标中勾选的数据"),(0,i.kt)("h2",{id:"实现"},"实现"),(0,i.kt)("h3",{id:"1-开启列标勾选的功能"},"1. 开启列标勾选的功能"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/plugins/export-excel-button/index.ts"',title:'"src/plugins/export-excel-button/index.ts"'},"import appSetting from '@sinoform/app-setting';\n\nappSetting.listPageConfig.addSelectable({\n  type: 'ALL_PAGE',\n  formId: '*',\n});\n")),(0,i.kt)("h3",{id:"2-开发导出按钮组件"},"2. 开发导出按钮组件"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/plugins/export-excel-button/ExportButton.ts"',title:'"src/plugins/export-excel-button/ExportButton.ts"'},"import React from 'react';\n\nexport default function ExportButton() {\n  return <button>导出Excel</button>;\n}\n")),(0,i.kt)("p",null,"我们通过",(0,i.kt)("inlineCode",{parentName:"p"},"@sinoform/helper-export-excel"),"提供的",(0,i.kt)("inlineCode",{parentName:"p"},"exportExcel"),"辅助方法来实现导出 Excel 功能。此方法接收如下参数："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"template: 模板文件 Buffer 数据"),(0,i.kt)("li",{parentName:"ul"},"data: 导出的 Excel 数据"),(0,i.kt)("li",{parentName:"ul"},"title: 导出的 Excel 标题"),(0,i.kt)("li",{parentName:"ul"},"formItems: 导出的表单字段配置"),(0,i.kt)("li",{parentName:"ul"},"extraData: 额外数据，用于 excel 模板的插值表达式解析")),(0,i.kt)("p",null,"此案例我们以本地上传的文件来获取文件的 Buffer 数据，也可以通过后端接口读取远程数据。"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/plugins/export-excel-button/ExportButton.ts"',title:'"src/plugins/export-excel-button/ExportButton.ts"'},"import React from 'react';\n\nexport default function ExportButton({ dataSource, formDesignSetting }: any) {\n  // 获取表单项配置\n  const {\n    formConfig: { items: formItems },\n  } = formDesignSetting;\n\n  const handleChange = async (e: any) => {\n    const file = e.target.files?.[0];\n    if (!file) return;\n\n    const { default: exportExcel } = await import(\n      '@sinoform/helper-export-excel'\n    );\n\n    const fr = new FileReader();\n\n    fr.readAsBinaryString(file);\n\n    fr.onload = (e) => {\n      // 从dataSource中获取选中列表项的值\n      const { items, selectIds } = dataSource;\n      const data = items.filter(({ id }) =>\n        selectIds.some((item) => item === id)\n      );\n      // 调用辅助方法，生成Excel\n      exportExcel(e.target.result, data, '测试.xlsx', formItems);\n    };\n  };\n  return <input type=\"file\" onChange={handleChange} />;\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"将导出按钮注册到 appSetting 中")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/plugins/export-excel-button/index.ts"',title:'"src/plugins/export-excel-button/index.ts"'},"import appSetting from '@sinoform/app-setting';\n\nappSetting.listPageConfig.addSelectable({\n  type: 'ALL_PAGE',\n  formId: '*',\n});\n\nappSetting.listPageConfig.addButton({\n  type: 'ALL_PAGE',\n  formId: '*',\n  render: React.lazy(() => import('./ExportButton')),\n  pos: 'left',\n});\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"在插件入口文件中引入配置，使其生效")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"import './plugins/export-excel-button';\n")),(0,i.kt)("h2",{id:"模板的要求"},"模板的要求"),(0,i.kt)("h3",{id:"模板语法"},"模板语法"),(0,i.kt)("h4",{id:"表达式"},"${表达式}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"${表单项}: 表示要打印的表单值"),(0,i.kt)("li",{parentName:"ul"},"count: 用于统计当前表单值中子表单的数据条数，格式：${count(field_1.field_2)}"),(0,i.kt)("li",{parentName:"ul"},"sum: 用户汇总当前表单值中子表单的数据累计值，格式：${sum(field_1.field_2)}")),(0,i.kt)("h4",{id:"插值表达式"},"插值表达式"),(0,i.kt)("p",null,"使用",(0,i.kt)("inlineCode",{parentName:"p"},"{{字段值}}"),"这种插值表达式的方式来读取",(0,i.kt)("inlineCode",{parentName:"p"},"extraData"),"中的配置，来达到动态生成导出 excel 数据的目的。"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"导出辅助方法目前只读取 Excel 模板第一个 sheet 页的内容，并根据内容生成对应的列表数据。"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"模板",src:n(50276).Z})),(0,i.kt)("p",null,"打印的效果"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"结果",src:n(86627).Z})))}m.isMDXComponent=!0},86627:function(e,t,n){t.Z=n.p+"assets/images/export-excel-06b0c504b36dd7a83da49eea429b7fa4.png"},50276:function(e,t,n){t.Z=n.p+"assets/images/export-template-8681e6b8966e638f9b4f704c85c4e607.png"}}]);