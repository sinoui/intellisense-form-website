"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[7625],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),a=["components"],o={id:"config-auto-rely",title:"自动关联"},c=void 0,u={unversionedId:"config-auto-rely",id:"config-auto-rely",title:"自动关联",description:"自动关联是v1.17.1之后新添加的表单项，通过关联查询用户输入的内容模糊查询其他的表单或第三方数据，在用户选择对应的数据之后，根据用户配置的数据映射关系，将选中数据中的值映射到对应的当前表单上。",source:"@site/docs/config-rely-input.md",sourceDirName:".",slug:"/config-auto-rely",permalink:"/intellisense-form-website/docs/config-auto-rely",tags:[],version:"current",frontMatter:{id:"config-auto-rely",title:"自动关联"},sidebar:"someSidebar",previous:{title:"应用角色授权",permalink:"/intellisense-form-website/docs/app-role-manager"},next:{title:"关联其他表单数据v2",permalink:"/intellisense-form-website/docs/config-guide-async-v2"}},p=[{value:"核心配置说明",id:"核心配置说明",children:[{value:"数据来源",id:"数据来源",children:[],level:3},{value:"关联数据接口",id:"关联数据接口",children:[],level:3},{value:"数据来源标题",id:"数据来源标题",children:[],level:3},{value:"自动关联规则",id:"自动关联规则",children:[],level:3}],level:2},{value:"如何使用",id:"如何使用",children:[],level:2}],s={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"自动关联是",(0,l.kt)("inlineCode",{parentName:"p"},"v1.17.1"),"之后新添加的表单项，通过关联查询用户输入的内容模糊查询其他的表单或第三方数据，在用户选择对应的数据之后，根据用户配置的数据映射关系，将选中数据中的值映射到对应的当前表单上。"),(0,l.kt)("h2",{id:"核心配置说明"},"核心配置说明"),(0,l.kt)("h3",{id:"数据来源"},"数据来源"),(0,l.kt)("p",null,"自动关联的数据来源方式，分为以下两种："),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"第三方来源"),(0,l.kt)("li",{parentName:"ul"},"内部表单")),(0,l.kt)("p",null,"目前只支持了第三方来源"),(0,l.kt)("h3",{id:"关联数据接口"},"关联数据接口"),(0,l.kt)("p",null,"指定数据来源为",(0,l.kt)("inlineCode",{parentName:"p"},"第三方来源"),"时，用户必须指定第三方数据来源请求接口地址，否则无法请求第三方数据。"),(0,l.kt)("p",null,"此接口为",(0,l.kt)("inlineCode",{parentName:"p"},"GET"),"请求方式，请求时会传递以下几个参数："),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"userId: 系统当前登录人"),(0,l.kt)("li",{parentName:"ul"},"q: 用户输入的查询条件"),(0,l.kt)("li",{parentName:"ul"},"formId: 表单设计 id")),(0,l.kt)("p",null,"接口的返回值为符合查询条件的表单数据数组。"),(0,l.kt)("h3",{id:"数据来源标题"},"数据来源标题"),(0,l.kt)("p",null,"使用插值表达式的方式来指定模糊请求到的数据如何展示在页面上供用户选择。如果不指定的话，默认从每条数据中查找",(0,l.kt)("inlineCode",{parentName:"p"},"title"),"字段对应的值。"),(0,l.kt)("p",null,"标题的插值表达式格式：",(0,l.kt)("inlineCode",{parentName:"p"},"{createUser}创建的${title}表单")),(0,l.kt)("h3",{id:"自动关联规则"},"自动关联规则"),(0,l.kt)("p",null,"指定关联的数据与当前表单项的映射关系，可一次性指定多条映射关系。"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2216).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"映射字段：本表单字段。不支持子表单、弹窗子表单内部的子表单项"),(0,l.kt)("li",{parentName:"ul"},"关联字段：第三方数据中值的对应字段标识，需要手动输入")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"提示")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"虽然表单内部对一些复杂结构的表单项进行了数据匹配的转换处理，但是仍然可能有场景没有考虑完全，所以，如果映射字段的值为复杂的对象，关联字段的值要尽量与改映射字段的值的数据结构保持一致，以便能够正确地进行赋值"))),(0,l.kt)("h2",{id:"如何使用"},"如何使用"),(0,l.kt)("p",null,"用户手动输入查询条件，然后选中模糊查询结果中的数据，然后程序就可以根据映射配置自动为当前表单完成赋值。"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(32154).Z})))}d.isMDXComponent=!0},2216:function(e,t,n){t.Z=n.p+"assets/images/auto-rely-config-dc48b82dba561cc38653f51451ac1dfb.png"},32154:function(e,t,n){t.Z=n.p+"assets/images/auto-rely-ff000caf7224cf05aa27180d9744d2b1.gif"}}]);