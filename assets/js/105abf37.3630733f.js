"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[7635],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16599:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"guide-list-page-transform-data",title:"定制列表数据转换"},s=void 0,u={unversionedId:"guide-list-page-transform-data",id:"guide-list-page-transform-data",title:"定制列表数据转换",description:"如果列表页查询接口返回的数据不满足我们的实际展示需求，除了renderColumns的方式来修改展示列的渲染值之外，还可以通过transformDataList的方式来改变列表中每行数据的值来达到相同的效果。",source:"@site/docs/guide-list-page-transform-data.mdx",sourceDirName:".",slug:"/guide-list-page-transform-data",permalink:"/intellisense-form-website/docs/guide-list-page-transform-data",tags:[],version:"current",frontMatter:{id:"guide-list-page-transform-data",title:"定制列表数据转换"},sidebar:"someSidebar",previous:{title:"列表页展示项定制",permalink:"/intellisense-form-website/docs/guide-list-page-columns-config"},next:{title:"扩展字段",permalink:"/intellisense-form-website/docs/extra-field"}},c=[{value:"使用方式",id:"使用方式",children:[],level:2},{value:"<code>transformDataList</code>与<code>renderColumns</code>的对比",id:"transformdatalist与rendercolumns的对比",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"如果列表页查询接口返回的数据不满足我们的实际展示需求，除了",(0,i.kt)("inlineCode",{parentName:"p"},"renderColumns"),"的方式来修改展示列的渲染值之外，还可以通过",(0,i.kt)("inlineCode",{parentName:"p"},"transformDataList"),"的方式来改变列表中每行数据的值来达到相同的效果。"),(0,i.kt)("h2",{id:"使用方式"},"使用方式"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import appSetting from '@sinform/app-setting';\n\n/**\n * 列表数据转换\n */\nconst transformDataList = async (\n  currentUser: UserInfo,\n  _form: FormDesignSetting,\n  dataList: Record<string, any>[]\n) => {\n  return dataList.map((item) => ({\n    ...item,\n    currentUserDept: currentUser.deptId,\n  }));\n};\n\nappSetting.listPageConfig.transformDataList(\n  '*',\n  'ALL_LIST_PAGE',\n  transformDataList\n);\n")),(0,i.kt)("p",null,"参数说明："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"formId。表单设计 id"),(0,i.kt)("li",{parentName:"ul"},"listType。列表页类型"),(0,i.kt)("li",{parentName:"ul"},"transformDataList。列表数据转换方法，返回新的列表数据",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"currentUser。当前登录用户"),(0,i.kt)("li",{parentName:"ul"},"formDesignSetting。表单设计数据"),(0,i.kt)("li",{parentName:"ul"},"dataList。原列表数据")))),(0,i.kt)("h2",{id:"transformdatalist与rendercolumns的对比"},(0,i.kt)("inlineCode",{parentName:"h2"},"transformDataList"),"与",(0,i.kt)("inlineCode",{parentName:"h2"},"renderColumns"),"的对比"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"两个方法都能够做到修改列表项展示值的效果"),(0,i.kt)("li",{parentName:"ul"},"transformDataList 改变了列表查询接口的返回数据（如果有的功能涉及到了列表数据的操作，那么他们获取到的是修改后的数据）； renderColumns 只专注于修改页面上列表项的展示效果，不会对数据产生影响。")))}m.isMDXComponent=!0}}]);