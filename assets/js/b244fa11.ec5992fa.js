"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[1047],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return o}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),m=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=m(a),o=r,g=N["".concat(i,".").concat(o)]||N[o]||u[o]||l;return a?n.createElement(g,p(p({ref:e},k),{},{components:a})):n.createElement(g,p({ref:e},k))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,p[1]=d;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},47323:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return k},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],d={id:"extra-field",title:"扩展字段"},i=void 0,m={unversionedId:"extra-field",id:"extra-field",title:"扩展字段",description:"应用场景",source:"@site/docs/extra-field.md",sourceDirName:".",slug:"/extra-field",permalink:"/intellisense-form-website/docs/extra-field",tags:[],version:"current",frontMatter:{id:"extra-field",title:"扩展字段"},sidebar:"someSidebar",previous:{title:"定制列表数据转换",permalink:"/intellisense-form-website/docs/guide-list-page-transform-data"},next:{title:"应用角色授权",permalink:"/intellisense-form-website/docs/app-role-manager"}},k=[{value:"应用场景",id:"应用场景",children:[],level:2},{value:"字段设计",id:"字段设计",children:[],level:2},{value:"默认值表达式",id:"默认值表达式",children:[{value:"插值表达式",id:"插值表达式",children:[],level:3},{value:"公式",id:"公式",children:[],level:3}],level:2},{value:"值同步",id:"值同步",children:[],level:2},{value:"使用方法",id:"使用方法",children:[{value:"插值表达式支持的字段",id:"插值表达式支持的字段",children:[],level:3},{value:"公式支持的字段",id:"公式支持的字段",children:[],level:3},{value:"公式支持的方法",id:"公式支持的方法",children:[{value:"字符串操作方法",id:"字符串操作方法",children:[],level:4},{value:"日期操作方法",id:"日期操作方法",children:[],level:4},{value:"数组操作方法",id:"数组操作方法",children:[],level:4},{value:"对象操作方法",id:"对象操作方法",children:[],level:4},{value:"逻辑操作方法",id:"逻辑操作方法",children:[],level:4}],level:3},{value:"管道操作符 |",id:"管道操作符-",children:[],level:3}],level:2},{value:"注意事项",id:"注意事项",children:[],level:2}],u={toc:k};function N(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"应用场景"},"应用场景"),(0,l.kt)("p",null,"扩展字段可以视为隐藏表单项，即业务中需要用到这个字段，但是这个字段无需在表单详情页中展示。与普通的表单项一样，可以参与公式运算，作为查询条件，用于打印输出（自定义布局打印）。"),(0,l.kt)("h2",{id:"字段设计"},"字段设计"),(0,l.kt)("p",null,"扩展字段配置表单中配置项说明："),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"属性名称"),(0,l.kt)("th",{parentName:"tr",align:null},"属性说明"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"字段标题"),(0,l.kt)("td",{parentName:"tr",align:null},"中文标题")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"字段标识"),(0,l.kt)("td",{parentName:"tr",align:null},"具有唯一性，需要注意不要与其他扩展字段或普通的表单项标识重复")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"默认值表达式"),(0,l.kt)("td",{parentName:"tr",align:null},"用于生成扩展字段的默认值")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"值同步"),(0,l.kt)("td",{parentName:"tr",align:null},"实时计算扩展字段的值")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"备注"),(0,l.kt)("td",{parentName:"tr",align:null},"扩展字段的校验提示信息")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"数据尺寸"),(0,l.kt)("td",{parentName:"tr",align:null},"扩展字段在数据库中保存的数据长度")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"查询条件渲染组件"),(0,l.kt)("td",{parentName:"tr",align:null},"扩展字段作为查询条件时，展示的表单项")))),(0,l.kt)("h2",{id:"默认值表达式"},"默认值表达式"),(0,l.kt)("p",null,"扩展字段的默认值表达式与普通的字段中",(0,l.kt)("inlineCode",{parentName:"p"},"默认值"),"中的",(0,l.kt)("inlineCode",{parentName:"p"},"插值表达式"),"一样，支持",(0,l.kt)("strong",{parentName:"p"},"插值表达式"),"和",(0,l.kt)("strong",{parentName:"p"},"公式"),"两种表达方式。"),(0,l.kt)("h3",{id:"插值表达式"},"插值表达式"),(0,l.kt)("p",null,"以花括号包裹的默认值表达式我们就会认为是插值表达式。格式",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"{表达式的值}")),"。插值表达式只能是获取单个对象的值。下面章节中会详细介绍插值表达式支持的字段。"),(0,l.kt)("h3",{id:"公式"},"公式"),(0,l.kt)("p",null,"非花括号包裹的默认值公式我们都认为是公式表达式，可以使用",(0,l.kt)("inlineCode",{parentName:"p"},"javaScript"),"的编码方式来编写业务逻辑。比如说扩展字段的默认值格式为：",(0,l.kt)("inlineCode",{parentName:"p"},"当前登录人的部门名称全路径+登录人姓名"),"，我们可以使用如下的公式来表达："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"currentUser.deptInfoName.join('/') + '/' + currentUser.userName;\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"默认值表达式只在表单新建的时候触发一次，后续表单流转过程中不会再次调用"))),(0,l.kt)("h2",{id:"值同步"},"值同步"),(0,l.kt)("p",null,"值同步允许我们采用公式的方式来根据当前表单的值和用户信息实时生成对应的值。与默认值表达式中的公式使用方法一样。 下面章节中会详细介绍公式中支持的字段和方法。"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"值同步只要表单值发生变化就会触发解析并生成对应的值"))),(0,l.kt)("h2",{id:"使用方法"},"使用方法"),(0,l.kt)("h3",{id:"插值表达式支持的字段"},"插值表达式支持的字段"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"表达式"),(0,l.kt)("th",{parentName:"tr",align:null},"值"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"办理人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"发送人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人姓名")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"完整部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的完整部门名称全路径")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建人完整部门"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的完整部门名称全路径")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"创建时间"),(0,l.kt)("td",{parentName:"tr",align:null},"表单的起草时间")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"拟稿时间"),(0,l.kt)("td",{parentName:"tr",align:null},"表单的起草时间")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"年份"),(0,l.kt)("td",{parentName:"tr",align:null},"当前时间的年份")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"季度"),(0,l.kt)("td",{parentName:"tr",align:null},"当前时间的季度")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"月份"),(0,l.kt)("td",{parentName:"tr",align:null},"当前时间的月份")))),(0,l.kt)("h3",{id:"公式支持的字段"},"公式支持的字段"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"表达式"),(0,l.kt)("th",{parentName:"tr",align:null},"值"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人"),(0,l.kt)("td",{parentName:"tr",align:null},"表单起草人名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人角色"),(0,l.kt)("td",{parentName:"tr",align:null},"表单起草人角色")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人单位"),(0,l.kt)("td",{parentName:"tr",align:null},"表单起草人的部门信息")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报人单位类型"),(0,l.kt)("td",{parentName:"tr",align:null},"表单起草人的部门类型：总行、分行")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"填报时间"),(0,l.kt)("td",{parentName:"tr",align:null},"表单起草时间")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的名称")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人单位"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门信息")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发起人单位类型"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人的部门类型：总行、分行")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"流程发送时间"),(0,l.kt)("td",{parentName:"tr",align:null},"当前系统时间")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"已经途经节点"),(0,l.kt)("td",{parentName:"tr",align:null},"表单流转中途经的节点名称集合")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentUser"),(0,l.kt)("td",{parentName:"tr",align:null},"当前登录人")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"各个表单项的 fieldName"),(0,l.kt)("td",{parentName:"tr",align:null},"对应的表单项的值")))),(0,l.kt)("h3",{id:"公式支持的方法"},"公式支持的方法"),(0,l.kt)("h4",{id:"字符串操作方法"},"字符串操作方法"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"方法名"),(0,l.kt)("th",{parentName:"tr",align:null},"说明"),(0,l.kt)("th",{parentName:"tr",align:null},"使用示例"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trim"),(0,l.kt)("td",{parentName:"tr",align:null},"去除字符串前后空格。参数：要处理的字符串"),(0,l.kt)("td",{parentName:"tr",align:null},'trim(" abc ")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replace"),(0,l.kt)("td",{parentName:"tr",align:null},"替换字符串中的字串。参数：需要处理的字符串；被替换的字串；替换后的内容"),(0,l.kt)("td",{parentName:"tr",align:null},'replace("abc","c","z")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"split"),(0,l.kt)("td",{parentName:"tr",align:null},"拆分字符串。参数：需要拆分的字符串；分隔符"),(0,l.kt)("td",{parentName:"tr",align:null},'split("a.b.c",".")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"substring"),(0,l.kt)("td",{parentName:"tr",align:null},"字符串截取。参数：需要被截取的字符串；截取开始位置；截取结束位置，不指定则截取到字符串末尾。（注意：截取的字串是不包含结束位置对应的字符的）"),(0,l.kt)("td",{parentName:"tr",align:null},'substring("abc",0,1)')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toLower"),(0,l.kt)("td",{parentName:"tr",align:null},"转换成小写的字符串。参数：需要转换的字符串"),(0,l.kt)("td",{parentName:"tr",align:null},'toLower("ABC")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toUpper"),(0,l.kt)("td",{parentName:"tr",align:null},"转换成大写的字符串。参数：需要转换的字符串"),(0,l.kt)("td",{parentName:"tr",align:null},'toUpper("abc")')))),(0,l.kt)("h4",{id:"日期操作方法"},"日期操作方法"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"方法名"),(0,l.kt)("th",{parentName:"tr",align:null},"说明"),(0,l.kt)("th",{parentName:"tr",align:null},"使用示例"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"now"),(0,l.kt)("td",{parentName:"tr",align:null},"返回当前时间"),(0,l.kt)("td",{parentName:"tr",align:null},"now()")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"格式化日期，返回日期字符串。参数：要格式化的日期；日期格式"),(0,l.kt)("td",{parentName:"tr",align:null},'dateFormat("2022-05-12","YYYY-MM")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parseDate"),(0,l.kt)("td",{parentName:"tr",align:null},"以指定的日期格式解析日期字符串，返回日期。参数：日期字符串；日期格式"),(0,l.kt)("td",{parentName:"tr",align:null},'parseDate("2022-05-12","YYYY-MM-DD")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateYear"),(0,l.kt)("td",{parentName:"tr",align:null},"获取年度。参数：日期或日期格式的字符串"),(0,l.kt)("td",{parentName:"tr",align:null},"dateYear('2022-05-12')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateMonth"),(0,l.kt)("td",{parentName:"tr",align:null},"获取月份。参数：日期或日期格式的字符串"),(0,l.kt)("td",{parentName:"tr",align:null},'dateMonth("2022-05-12")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateQuarter"),(0,l.kt)("td",{parentName:"tr",align:null},"获取季度"),(0,l.kt)("td",{parentName:"tr",align:null},'dateQuarter("2022-05-12")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateDiff"),(0,l.kt)("td",{parentName:"tr",align:null},"获取两个日期之间的差异。参数：需要比较的日期；需要比较的日期；差异的单位"),(0,l.kt)("td",{parentName:"tr",align:null},'dateDiff("2022-05-12","2022-06-15","day")')))),(0,l.kt)("h4",{id:"数组操作方法"},"数组操作方法"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"方法名"),(0,l.kt)("th",{parentName:"tr",align:null},"说明"),(0,l.kt)("th",{parentName:"tr",align:null},"使用示例"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"every"),(0,l.kt)("td",{parentName:"tr",align:null},"判断数组中的每一条数据是否都满足断言。参数：要遍历的数据；断言方法"),(0,l.kt)("td",{parentName:"tr",align:null},"every(","[1,2]",",(item)=> item>1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"返回数组中满足断言的所有元素。参数：要遍历的数据；断言方法"),(0,l.kt)("td",{parentName:"tr",align:null},"filter(","[1,2]",",(item)=> item > 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"find"),(0,l.kt)("td",{parentName:"tr",align:null},"遍历数组，返回第一个满足断言的元素。参数：要遍历的数据；断言方法"),(0,l.kt)("td",{parentName:"tr",align:null},"find(","[1,2]",",(item)=> item > 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"join"),(0,l.kt)("td",{parentName:"tr",align:null},"将数组中所有元素使用指定的分隔符拼接成字符串。参数：要拼接的数据；分隔符"),(0,l.kt)("td",{parentName:"tr",align:null},"join(","[1,2]",',",")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"根据迭代函数生成新的数组。参数：原始的数组；生成新元素的迭代函数"),(0,l.kt)("td",{parentName:"tr",align:null},"map(","[1,2]",",(item)=> item","*","2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reduce"),(0,l.kt)("td",{parentName:"tr",align:null},"对数据进行累计运算，得到一个最终值。参数：数组；迭代函数；初始值"),(0,l.kt)("td",{parentName:"tr",align:null},"reduce(","[1,2]",",(pre, cur)=>pre + cur, 0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reverse"),(0,l.kt)("td",{parentName:"tr",align:null},"反转数组或字符串。参数：数组"),(0,l.kt)("td",{parentName:"tr",align:null},"reverse(","[1,2]",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip"),(0,l.kt)("td",{parentName:"tr",align:null},"跳过数组中的前几个元素，组成新的列表。参数：数组；需要跳过的元素数量"),(0,l.kt)("td",{parentName:"tr",align:null},"skip(","[1,2]",",1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"some"),(0,l.kt)("td",{parentName:"tr",align:null},"判断数组中的元素是否有一条数据满足断言。参数：数组；断言方法"),(0,l.kt)("td",{parentName:"tr",align:null},"some(","[1,2]",",(item)=> item > 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"take"),(0,l.kt)("td",{parentName:"tr",align:null},"从数组的起始位置开始提取指定数量的元素生成一个新的数组。参数：数组；要提取的元素个数"),(0,l.kt)("td",{parentName:"tr",align:null},"take(","[1,2]",",1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"peek"),(0,l.kt)("td",{parentName:"tr",align:null},"获取指定索引的元素。参数：数组；索引"),(0,l.kt)("td",{parentName:"tr",align:null},"peek(","[1,2]",",1)")))),(0,l.kt)("h4",{id:"对象操作方法"},"对象操作方法"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"方法名"),(0,l.kt)("th",{parentName:"tr",align:null},"说明"),(0,l.kt)("th",{parentName:"tr",align:null},"使用示例"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keys"),(0,l.kt)("td",{parentName:"tr",align:null},"获取对象所有的属性名称。参数：对象"),(0,l.kt)("td",{parentName:"tr",align:null},"keys({a:1,b:2})")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prop"),(0,l.kt)("td",{parentName:"tr",align:null},"获取对象属性值。参数：对象；属性名或属性名路径"),(0,l.kt)("td",{parentName:"tr",align:null},'prop({a:{b:{c:3}}},"a","b","c")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toPairs"),(0,l.kt)("td",{parentName:"tr",align:null},"获取对象所有的属性名和属性值。参数：对象"),(0,l.kt)("td",{parentName:"tr",align:null},"toPairs({a:1,b:2})")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"获取对象所有的值。参数：对象"),(0,l.kt)("td",{parentName:"tr",align:null},"values({a:1,b:2})")))),(0,l.kt)("h4",{id:"逻辑操作方法"},"逻辑操作方法"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"方法名"),(0,l.kt)("th",{parentName:"tr",align:null},"说明"),(0,l.kt)("th",{parentName:"tr",align:null},"使用示例"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultTo"),(0,l.kt)("td",{parentName:"tr",align:null},"如果值为空，则返回默认值。参数：可能为空的值;默认值"),(0,l.kt)("td",{parentName:"tr",align:null},'defaultTo("","xxx")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isNull"),(0,l.kt)("td",{parentName:"tr",align:null},"判断值是否为 null 或 undefined。参数：需要判断的值"),(0,l.kt)("td",{parentName:"tr",align:null},'isNull("xxx")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isEmpty"),(0,l.kt)("td",{parentName:"tr",align:null},"判断值是否为为 null 或者是空数组、空字符串。参数：需要判断的值"),(0,l.kt)("td",{parentName:"tr",align:null},"isEmpty('xxx')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isIn"),(0,l.kt)("td",{parentName:"tr",align:null},"判断数组是否包含指定项。参数：数组；指定项"),(0,l.kt)("td",{parentName:"tr",align:null},"isIn(","[1,2]",",2)")))),(0,l.kt)("h3",{id:"管道操作符-"},"管道操作符 |"),(0,l.kt)("p",null,"管道操作符的作用是将上一个表达式的值作为参数交给下一个表达式。对于比较复杂的公式，如果使用普通的编码方式可能会产生很多方法的嵌套，导致可读性比较差，这个时候使用管道操作符改写，可以让代码的可读性大大提升。"),(0,l.kt)("p",null,"下面我们以一个实际的需求来演示一下两种不同的写法。"),(0,l.kt)("p",null,"需求：获取当前用户信息中的二级部门，如果没有的话，就使用用户的当前部门。"),(0,l.kt)("p",null,"传统的编码方式："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"peek(reverse(currentUser.deptInfo), 1) || currentUser.deptId;\n")),(0,l.kt)("p",null,"使用管道符："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"currentUser.deptInfo | reverse | peek(1) | defaultTo(currentUser.deptId);\n")),(0,l.kt)("h2",{id:"注意事项"},"注意事项"),(0,l.kt)("p",null,"公式暂不支持解析单引号"))}N.isMDXComponent=!0}}]);