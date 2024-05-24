"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[8268],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,f=d["".concat(u,".").concat(m)]||d[m]||o[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49809:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(87462),l=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"sinomatrix-sequence-interface",title:"智能表单序号接口"},u=void 0,s={unversionedId:"sinomatrix-sequence-interface",id:"sinomatrix-sequence-interface",title:"智能表单序号接口",description:"序号类型保存（/apis/intellisense-form/sequenceType）",source:"@site/docs/sinomatrix-sequence-interface.md",sourceDirName:".",slug:"/sinomatrix-sequence-interface",permalink:"/intellisense-form-website/docs/sinomatrix-sequence-interface",tags:[],version:"current",frontMatter:{id:"sinomatrix-sequence-interface",title:"智能表单序号接口"}},c=[{value:"序号类型保存（/apis/intellisense-form/sequenceType）",id:"序号类型保存apisintellisense-formsequencetype",children:[{value:"请求",id:"请求",children:[],level:3},{value:"响应",id:"响应",children:[],level:3}],level:2},{value:"序号类型更新（/apis/intellisense-form/sequenceType）",id:"序号类型更新apisintellisense-formsequencetype",children:[{value:"请求",id:"请求-1",children:[],level:3},{value:"响应",id:"响应-1",children:[],level:3}],level:2},{value:"生成序号值（/apis/intellisense-form/sequenceRecord/apply）",id:"生成序号值apisintellisense-formsequencerecordapply",children:[{value:"请求",id:"请求-2",children:[],level:3},{value:"响应",id:"响应-2",children:[],level:3}],level:2},{value:"更改序号值状态（/apis/intellisense-form/sequenceRecord/{sequenceRecordId}/status）",id:"更改序号值状态apisintellisense-formsequencerecordsequencerecordidstatus",children:[{value:"请求",id:"请求-3",children:[],level:3}],level:2}],o={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"序号类型保存apisintellisense-formsequencetype"},"序号类型保存（/apis/intellisense-form/sequenceType）"),(0,i.kt)("p",null,"序号类型保存"),(0,i.kt)("h3",{id:"请求"},"请求"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求方法： post请求")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求参数："),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "title":"序号类型名称"\n}\n')))),(0,i.kt)("h3",{id:"响应"},"响应"),(0,i.kt)("p",null,"JSON格式数据如下："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "id":"3479jke32323",\n    "title":"序号类型名称"\n}\n')),(0,i.kt)("h2",{id:"序号类型更新apisintellisense-formsequencetype"},"序号类型更新（/apis/intellisense-form/sequenceType）"),(0,i.kt)("p",null,"序号类型更新"),(0,i.kt)("h3",{id:"请求-1"},"请求"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求方法：put方法")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求参数："),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "id":"3479jke32323",\n    "title":"序号类型名称"\n}\n')))),(0,i.kt)("h3",{id:"响应-1"},"响应"),(0,i.kt)("p",null,"JSON格式数据如下："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "id":"3479jke32323",\n    "title":"序号类型名称"\n}\n')),(0,i.kt)("h2",{id:"生成序号值apisintellisense-formsequencerecordapply"},"生成序号值（/apis/intellisense-form/sequenceRecord/apply）"),(0,i.kt)("p",null,"根据序号类型id值和维度 两个参数，来生成序号值。 大致逻辑：根据两个参数 从序号当前值表查询是否存在，如果不存在，则新建序号当前值为0；如果存在，则把当前值获取到后+1.。然后在序号使用记录表里插入新值记录，同时生成日志文件。再把当前新值更新到序号当前值表。"),(0,i.kt)("h3",{id:"请求-2"},"请求"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求方式：get请求")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求参数 "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sequenceTypeId 序号类型id"),(0,i.kt)("li",{parentName:"ul"},"dimension 纬度值")))),(0,i.kt)("h3",{id:"响应-2"},"响应"),(0,i.kt)("p",null,"JSON数据如下"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "id": "5f87bc892196bc200c77e44e",\n    "value": 6,\n    "status": "申请占用"\n}\n')),(0,i.kt)("h2",{id:"更改序号值状态apisintellisense-formsequencerecordsequencerecordidstatus"},"更改序号值状态（/apis/intellisense-form/sequenceRecord/{sequenceRecordId}/status）"),(0,i.kt)("p",null,"序号值状态变化逻辑"),(0,i.kt)("p",null,"申请占用：在打开草稿页面。业务数据未保存的时候"),(0,i.kt)("p",null,"占用：业务数据保存以后。"),(0,i.kt)("p",null,"回收：当业务数据或者草稿删除"),(0,i.kt)("p",null,"废弃：该号无法再使用"),(0,i.kt)("h3",{id:"请求-3"},"请求"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求方式 ：put请求")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求参数："),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sequenceRecordId  序号使用记录id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"请求体"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "formValueId":"123123",\n    "status":"占用",\n    "userId":"1",\n    "userName":"admin",\n    "deptId":"18706",\n    "deptName":"系统管理部"\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"响应"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "id": "5f87bc892196bc200c77e44e",\n    "status": "占用",\n    "formValueId": "123123",\n    "userId": "1",\n    "userName": "admin",\n    "deptId": "18706",\n    "deptName": "系统管理部"\n}\n')))))}d.isMDXComponent=!0}}]);