"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[4568],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),u=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=u(n.components);return o.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),f=u(t),m=r,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return t?o.createElement(g,l(l({ref:e},p),{},{components:t})):o.createElement(g,l({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:r,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33656:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],a={id:"nginx-location",title:"nginx的location匹配规则"},c=void 0,u={unversionedId:"nginx-location",id:"nginx-location",title:"nginx的location匹配规则",description:"Nginx 的 location 语法",source:"@site/docs/nginx-location.mdx",sourceDirName:".",slug:"/nginx-location",permalink:"/intellisense-form-website/docs/nginx-location",tags:[],version:"current",frontMatter:{id:"nginx-location",title:"nginx的location匹配规则"},sidebar:"someSidebar",previous:{title:"用户信息",permalink:"/intellisense-form-website/docs/config-user-info"},next:{title:"License 证书配置",permalink:"/intellisense-form-website/docs/config-license"}},p=[{value:"Nginx 的 location 语法",id:"nginx-的-location-语法",children:[],level:2},{value:"示例说明",id:"示例说明",children:[],level:2},{value:"规则总结",id:"规则总结",children:[],level:2}],s={toc:p};function f(n){var e=n.components,t=(0,r.Z)(n,l);return(0,i.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"nginx-的-location-语法"},"Nginx 的 location 语法"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"location [=|~|~*|^~] /uri/ { … }"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"= 严格匹配。如果请求匹配这个 location，那么将停止搜索并立即处理此请求"),(0,i.kt)("li",{parentName:"ul"},"~ 区分大小写匹配(可用正则表达式)"),(0,i.kt)("li",{parentName:"ul"},"~","_"," 不区分大小写匹配(可用正则表达式)"),(0,i.kt)("li",{parentName:"ul"},"^~ 如果把这个前缀用于一个常规字符串，那么只要匹配该规则，nginx 会停止搜索其他匹配")),(0,i.kt)("h2",{id:"示例说明"},"示例说明"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx"},"location  = / {\n  # 精确匹配 / ，主机名后面不能带任何字符串\n  ...\n}\n\nlocation  / {\n  # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求\n  # 但是正则和最长字符串会优先匹配\n  ...\n}\n\nlocation /documents/ {\n  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索\n  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条\n  ...\n}\n\nlocation ~ .*/remote-entry.js$ {\n  # 匹配此规则之后，nginx就不再匹配后面的正则\n  add_header Cache-Control no-store;\n}\n\nlocation ^~ /images/ {\n  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。\n  ...\n}\n\nlocation ~* \\.(gif|jpg|jpeg)$ {\n  # 匹配所有以 gif,jpg或jpeg 结尾的请求\n  # 然而，所有请求 /images/ 下的图片会被 ^~ /images/ 处理，因为 ^~ 到达不了这一条正则\n  ...\n}\n\nlocation ~ /intellisense-form.*\\.(gif|jpg|jpeg|png|bmp|swf|js|css|md|pdf|ttf|ttc|eot|woff2|woff|svg)$ {\n  # 此规则为intellisense-form文件夹下所有以上述后缀结尾的文件，都要缓存\n  # 但remote-entry.js在上一个正则表达式已经被匹配，所以不会执行改规则\n  expires 365d;\n}\n")),(0,i.kt)("h2",{id:"规则总结"},"规则总结"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"先普通，再正则。"),(0,i.kt)("li",{parentName:"ol"},"普通 location 之间的匹配顺序：按最大前缀匹配。如 location /a/{}，location /a/b/ {},请求 http://a/b/c.html 匹配的是 location /a/b/ {}。"),(0,i.kt)("li",{parentName:"ol"},"正则 location 之间的匹配顺序：按配置文件中的物理顺序匹配，只要匹配到一条正则，就不再考虑后面的。"),(0,i.kt)("li",{parentName:"ol"},"若普通 location 匹配到 精确匹配= 或 非正则匹配 ^~, 则不再进行后续的正则匹配。"),(0,i.kt)("li",{parentName:"ol"},"普通 location 与正则 location 之间的匹配结果选择： 普通 location 先匹配，匹配到之后，会作为一个临时结果；然后继续正则 location 的匹配，如果匹配到正则，则用匹配到的正则结果；如果没有匹配到正则，则继续用普通匹配的那个结果。")))}f.isMDXComponent=!0}}]);