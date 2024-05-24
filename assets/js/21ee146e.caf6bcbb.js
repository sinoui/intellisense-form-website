"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[541],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64919:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"detail-page",title:"详情页集成"},p=void 0,c={unversionedId:"mobile/detail-page",id:"mobile/detail-page",title:"详情页集成",description:"本文档介绍移动端应用通过 webview 展示详情页的一些集成点。",source:"@site/docs/mobile/detail-page.mdx",sourceDirName:"mobile",slug:"/mobile/detail-page",permalink:"/intellisense-form-website/docs/mobile/detail-page",tags:[],version:"current",frontMatter:{id:"detail-page",title:"详情页集成"},sidebar:"someSidebar",previous:{title:"ksql统计性能测试报告",permalink:"/intellisense-form-website/docs/ksql-performance-test"}},d=[{value:"1. 详情页链接",id:"1-详情页链接",children:[],level:2},{value:"2. 隐藏详情页 AppBar",id:"2-隐藏详情页-appbar",children:[],level:2},{value:"3. 设置 document title",id:"3-设置-document-title",children:[],level:2},{value:"4. 发送成功的回退",id:"4-发送成功的回退",children:[],level:2}],u={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"本文档介绍移动端应用通过 webview 展示详情页的一些集成点。"),(0,a.kt)("h2",{id:"1-详情页链接"},"1. 详情页链接"),(0,a.kt)("p",null,"新建页面的链接：/intellisense-form-mobile/form/",(0,a.kt)("strong",{parentName:"p"},":formId"),"/create"),(0,a.kt)("p",null,"待办、已办详情页的链接：/intellisense-form-mobile/form/",(0,a.kt)("strong",{parentName:"p"},":formId"),"/detail?id=",(0,a.kt)("strong",{parentName:"p"},"表单数据 idid"),"&workItemId=",(0,a.kt)("strong",{parentName:"p"},"待办、已办事项 id")),(0,a.kt)("p",null,"参数说明："),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"参数名"),(0,a.kt)("th",{parentName:"tr",align:null},"描述"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"formId"),(0,a.kt)("td",{parentName:"tr",align:null},"表单配置 id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"表单数据的 id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"workItemId"),(0,a.kt)("td",{parentName:"tr",align:null},"待办、已办事项的 id")))),(0,a.kt)("h2",{id:"2-隐藏详情页-appbar"},"2. 隐藏详情页 AppBar"),(0,a.kt)("p",null,"详情页默认会显示 AppBar。如果应用本身已经有 AppBar，那么就会出现双 AppBar 的问题。这种情况下，可以通过下面的方式隐藏掉详情页的 AppBar："),(0,a.kt)("p",null,"在页面链接中添加 ",(0,a.kt)("inlineCode",{parentName:"p"},"hideAppBar")," 请求参数即可，如下所示："),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://121.30.232.162:18880/intellisense-form-mobile/form/5f0c300ac9327f2f7b81c52c/detail?id=5f48b04fec2ee7cb94176e21&workItemId=1d917c69eeb84279b61bbbdbd1537c06&hideAppBar"},"http://121.30.232.162:18880/intellisense-form-mobile/form/5f0c300ac9327f2f7b81c52c/detail?id=5f48b04fec2ee7cb94176e21&workItemId=1d917c69eeb84279b61bbbdbd1537c06&hideAppBar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://121.30.232.162:18880/intellisense-form-mobile/form/5f0c300ac9327f2f7b81c52c/create?hideAppBar"},"http://121.30.232.162:18880/intellisense-form-mobile/form/5f0c300ac9327f2f7b81c52c/create?hideAppBar"))),(0,a.kt)("h2",{id:"3-设置-document-title"},"3. 设置 document title"),(0,a.kt)("p",null,"如果您的应用需要使用定制的详情页 title，可以通过 ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," 请求参数指定。"),(0,a.kt)("h2",{id:"4-发送成功的回退"},"4. 发送成功的回退"),(0,a.kt)("p",null,"因为详情页是通过 webview 嵌入的，所以点击详情页发送按钮，发送成功后的回退，需要与应用原生部分进行一次交互，告知需要关闭 webview。"),(0,a.kt)("p",null,"方案：webview 中嵌入 js 脚本，监听 window 自定义事件 ",(0,a.kt)("strong",{parentName:"p"},"sinoform.CLOSE_WORKFLOW_SEND_SUCCESS_DIALOG_EVENT"),"，在监听器中调用原生方法，完成关闭 webview 的事情。"),(0,a.kt)("p",null,"以 Android WebView 为例说明："),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="js 脚本"',title:'"js','脚本"':!0},'const EVENT_NAME = "sinoform.CLOSE_WORKFLOW_SEND_SUCCESS_DIALOG_EVENT";\nlet isClosed = false;\nwindow.addEventListener(\n  EVENT_NAME,\n  () => {\n    if (!isClosed) {\n      // 防止重复发送的事件（例如多次点击关闭按钮）\n      isClosed = true;\n      // 调用 webview 注入的 js 方法，关闭 webview\n      window.app.closeWebView();\n    }\n  },\n  false\n);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android 原生应用部分"',title:'"android','原生应用部分"':!0},'public class MyAppWebViewClient extends WebViewClient {\n\n    @Override\n    public boolean shouldOverrideUrlLoading(WebView view, String url) {\n        view.loadUrl(url);\n        return true;\n    }\n\n    @Override\n    public void onPageFinished(WebView view, String url) {\n        view.addJavascriptInterface(this, "app");\n        view.evaluateJavascript("将 js 脚本的内容放在这个地方");\n        super.onPageFinished(view, url);\n    }\n\n    @JavascriptInterface\n    public void closeWebView() {\n        //调用关闭 webView 的方法\n    }\n}\n')),(0,a.kt)("p",null,"注意，需要启用 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," 的 JavaScript，如下所示："),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Enable Javascript\nwebView.getSettings().setJavaScriptEnabled(true);\n")))}s.isMDXComponent=!0}}]);