"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[8919],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?t.createElement(f,i(i({ref:n},p),{},{components:a})):t.createElement(f,i({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98448:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},97225:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(87462),r=a(67294),o=a(51048),i=a(22713);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(35242),m=a(86010),p="tabItem_1uMI";function c(e){var n,a,o,i=e.lazy,c=e.block,u=e.defaultValue,d=e.values,f=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,s.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(n=null!=u?u:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),N=y.tabGroupChoices,w=y.setTabGroupChoices,P=(0,r.useState)(b),x=P[0],C=P[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=N[f];null!=E&&E!==x&&g.some((function(e){return e.value===E}))&&C(E)}var z=function(e){var n=e.currentTarget,a=T.indexOf(n),t=g[a].value;t!==x&&(O(n),C(t),null!=f&&w(f,t))},I=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=T.indexOf(e.currentTarget)+1;a=T[t]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":c},k)},g.map((function(e){var n=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:z,onClick:z},o,{className:(0,m.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,o.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},6486:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(67294),r=a(51048),o=function(e){var n=(0,t.lazy)(e);return function(e){return(0,r.Z)()?t.createElement(t.Suspense,{fallback:null},t.createElement(n,e)):null}}((function(){return Promise.all([a.e(532),a.e(4043),a.e(4063),a.e(283),a.e(1199),a.e(6471)]).then(a.bind(a,46471))}))},23343:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(97225),l=a(98448),s=a(6486),m=["components"],p={id:"form-k8s",title:"部署智能表单"},c=void 0,u={unversionedId:"dep-k8s/form-k8s",id:"dep-k8s/form-k8s",title:"部署智能表单",description:"一、准备镜像",source:"@site/docs/dep-k8s/2-form-k8s.mdx",sourceDirName:"dep-k8s",slug:"/dep-k8s/form-k8s",permalink:"/intellisense-form-website/docs/dep-k8s/form-k8s",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"form-k8s",title:"部署智能表单"},sidebar:"someSidebar",previous:{title:"部署 mongodb",permalink:"/intellisense-form-website/docs/dep-k8s/mongo-k8s"},next:{title:"部署智能表单(Helm)",permalink:"/intellisense-form-website/docs/dep-k8s/helm-k8s"}},d=[{value:"一、准备镜像",id:"一准备镜像",children:[{value:"1.1. 在外网电脑上准备镜像包",id:"11-在外网电脑上准备镜像包",children:[],level:3},{value:"1.2. 在内网服务器上导入并上传镜像",id:"12-在内网服务器上导入并上传镜像",children:[],level:3}],level:2},{value:"二、准备智能表单配置",id:"二准备智能表单配置",children:[],level:2},{value:"三、运行智能表单",id:"三运行智能表单",children:[],level:2},{value:"四、部署文档转换服务",id:"四部署文档转换服务",children:[{value:"4.1 准备镜像",id:"41-准备镜像",children:[],level:3},{value:"4.2 部署",id:"42-部署",children:[],level:3}],level:2},{value:"五、异常情况处理",id:"五异常情况处理",children:[{value:"5.1 访问<code>503</code>响应错误",id:"51-访问503响应错误",children:[],level:3}],level:2}],f={toc:d};function k(e){var n=e.components,a=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"一准备镜像"},"一、准备镜像"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"如果是离线安装，需要完成这一步骤。如果是在线安装，则跳过这个步骤。")),(0,o.kt)("h3",{id:"11-在外网电脑上准备镜像包"},"1.1. 在外网电脑上准备镜像包"),(0,o.kt)("p",null,"智能表单应用镜像如下："),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest"),(0,o.kt)("li",{parentName:"ul"},"registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest")),(0,o.kt)("p",null,"下载镜像的命令（下载镜像时先判定 CPU 架构）："),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"amd64",label:"amd/x86",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull --platform=amd64 registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest\ndocker pull --platform=amd64 registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest\n"))),(0,o.kt)(l.Z,{value:"arm64",label:"arm64",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull --platform=arm64 registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest\ndocker pull --platform=arm64 registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest\n")))),(0,o.kt)("p",null,"然后生成镜像离线包："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker save -o sinoform-latest.tar registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest\n")),(0,o.kt)("p",null,"上面的命令行会生成 ",(0,o.kt)("inlineCode",{parentName:"p"},"sinoform-latest.tar")," 镜像包文件。"),(0,o.kt)("h3",{id:"12-在内网服务器上导入并上传镜像"},"1.2. 在内网服务器上导入并上传镜像"),(0,o.kt)("p",null,"首先将 ",(0,o.kt)("inlineCode",{parentName:"p"},"sinoform-latest.tar")," 文件拷贝到内网服务器上。然后导入并上传镜像到私有镜像仓库中："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nerdctl load < sinoform-latest.tar\nnerdctl push registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest\nnerdctl push registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest\n")),(0,o.kt)("h2",{id:"二准备智能表单配置"},"二、准备智能表单配置"),(0,o.kt)("p",null,"智能表单依赖 MongoDB 和关系型数据库才能运行。所以需要准备智能表单的配置。"),(0,o.kt)("p",null,"如果",(0,o.kt)("strong",{parentName:"p"},"已经有了配置文件"),"，那么可以通过下面的命令行生成智能表单 ConfigMap："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create configmap sinoform-backend-config --from-file=application.yaml\n")),(0,o.kt)("p",null,"上面的命令行指定配置文件名称",(0,o.kt)("strong",{parentName:"p"},"必须"),"为 ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yaml"),"。"),(0,o.kt)("p",null,"如果",(0,o.kt)("strong",{parentName:"p"},"没有配置文件"),"，可以通过下面的方式生成配置文件。"),(0,o.kt)(s.Z,{type:"k8s",mdxType:"ConfigTools"}),(0,o.kt)("p",null,"生成配置文件之后，可以通过下面的命令行创建 ConfigMap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f sinoform-backend-config.yaml\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"如果修改了Kubernetes的命名空间，且命名空间不存在，需要自行添加命名空间："),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=sinoform-backend-namespace.yaml",title:"sinoform-backend-namespace.yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  # 命名空间名称\n  name: default\n")),(0,o.kt)("p",{parentName:"div"},"以下服务的部署文件，也需要同步修改",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")))),(0,o.kt)("h2",{id:"三运行智能表单"},"三、运行智能表单"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"yaml文件，除",(0,o.kt)("inlineCode",{parentName:"li"},"namespace"),"及资源配置以外，不要改动核心配置")))),(0,o.kt)("p",null,"将下面的配置保存到 ",(0,o.kt)("inlineCode",{parentName:"p"},"sinoform-k8s.yaml")," 文件中，并上传到服务器上："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# 部署智能表单前端\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sinoformweb\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: sinoformweb\n  template:\n    metadata:\n      labels:\n        app: sinoformweb\n    spec:\n      containers:\n        - name: sinoformweb\n          image: registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web:latest\n          imagePullPolicy: Always\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "500m"\n          ports:\n            - containerPort: 80\n---\n# 智能表单前端服务（ClusterIP）\napiVersion: v1\nkind: Service\nmetadata:\n  name: sinoformweb\n  namespace: default\nspec:\n  selector:\n    app: sinoformweb\n  ports:\n    - port: 80\n      targetPort: 80\n---\n# 部署智能表单后端\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sinoform-backend\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: sinoform-backend\n  template:\n    metadata:\n      labels:\n        app: sinoform-backend\n    spec:\n      containers:\n        - name: sinoform-backend\n          image: registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend:latest\n          imagePullPolicy: Always\n          resources:\n            limits:\n              memory: "4096Mi"\n              cpu: "2000m"\n          ports:\n            - containerPort: 8080\n          volumeMounts:\n            # 因为文件上传的缓存会放在 /tmp 目录中，所以/tmp目录需要挂载到镜像之外\n            - name: temp-storage\n              mountPath: /tmp\n            - mountPath: /app/config\n              name: config\n          env:\n            - name: SPRING_PROFILE_ACTIVE\n              value: prod\n      volumes:\n        - name: temp-storage\n          emptyDir: {}\n        - configMap:\n            name: sinoform-backend-config\n          name: config\n---\n# 智能表单后端服务（ClusterIP）\napiVersion: v1\nkind: Service\nmetadata:\n  name: sinoform-backend\n  namespace: default\nspec:\n  selector:\n    app: sinoform-backend\n  ports:\n    - port: 8080\n---\n# ingress\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: sinoform-ingress\n  namespace: default\n  labels:\n    name: sinoform-ingress\n  annotations:\n    # 去掉上传文件大小限制\n    nginx.ingress.kubernetes.io/proxy-body-size: "0"\nspec:\n  ingressClassName: nginx\n  rules:\n    - http:\n        paths:\n          # 智能表单前端（PC端表单应用）\n          - path: "/intellisense-form"\n            pathType: Prefix\n            backend:\n              service:\n                name: sinoformweb\n                port:\n                  number: 80\n          # 智能表单前端（移动端表单应用）\n          - path: "/intellisense-form-mobile"\n            pathType: Prefix\n            backend:\n              service:\n                name: sinoformweb\n                port:\n                  number: 80\n          # 智能表单前端（表单管理）\n          - path: "/intellisense-form-manager"\n            pathType: Prefix\n            backend:\n              service:\n                name: sinoformweb\n                port:\n                  number: 80\n          # 智能表单后端\n          - path: "/apis/intellisense-form"\n            pathType: Prefix\n            backend:\n              service:\n                name: sinoform-backend\n                port:\n                  number: 8080\n')),(0,o.kt)("p",null,"然后执行以下命令启动项目："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl apply -f sinoform-k8s.yaml\n")),(0,o.kt)("p",null,"稍等片刻，即可访问智能表单应用：http://","[ingress 地址:端口号]","/intellisense-form 。"),(0,o.kt)("h2",{id:"四部署文档转换服务"},"四、部署文档转换服务"),(0,o.kt)("p",null,"如果智能表单需要启用附件预览功能，则需要安装文档转换服务。服务镜像地址："),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"registry.cn-hangzhou.aliyuncs.com/sinoform/office-to-pdf:latest")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"文档转换服务暂不支持",(0,o.kt)("strong",{parentName:"p"},"arm64"),"架构的系统部署"))),(0,o.kt)("h3",{id:"41-准备镜像"},"4.1 准备镜像"),(0,o.kt)("p",null,"安装上述准备智能表单镜像包的步骤准备转换服务的镜像包"),(0,o.kt)("h3",{id:"42-部署"},"4.2 部署"),(0,o.kt)("p",null,"将下面的配置保存到",(0,o.kt)("inlineCode",{parentName:"p"},"office-to-pdf-k8s.yaml"),"文件中，并上传到服务器上："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=office-to-pdf-k8s.yaml",title:"office-to-pdf-k8s.yaml"},'# 文档转换服务\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: office-to-pdf\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: office-to-pdf\n  template:\n    metadata:\n      labels:\n        app: office-to-pdf\n    spec:\n      containers:\n        - name: office-to-pdf\n          image: registry.cn-hangzhou.aliyuncs.com/sinoform/office-to-pdf:latest\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n          env:\n            - name: SPRING_PROFILE_ACTIVE\n              value: prod\n---\n# 文档转换服务（ClusterIP）\napiVersion: v1\nkind: Service\nmetadata:\n  name: office-to-pdf\n  namespace: default\nspec:\n  selector:\n    app: office-to-pdf\n  ports:\n    - port: 8080\n---\n# ingress\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: office-to-pdf-ingress\n  namespace: default\n  labels:\n    name: office-to-pdf-ingress\n  annotations:\n    # 去掉上传文件大小限制\n    nginx.ingress.kubernetes.io/proxy-body-size: "0"\nspec:\n  ingressClassName: nginx\n  rules:\n    - http:\n        paths:\n          # 智能表单后端\n          - path: "/office-to-pdf"\n            pathType: Prefix\n            backend:\n              service:\n                name: office-to-pdf\n                port:\n                  number: 8080\n')),(0,o.kt)("p",null,"执行以下命令启动服务："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f office-to-pdf-k8s.yaml\n")),(0,o.kt)("p",null,"稍等片刻，服务 pod 启动后，可通过 POST 请求访问接口：http://","[ingress 地址:端口号]","/office-to-pdf ，测试服务是否可用。"),(0,o.kt)("h2",{id:"五异常情况处理"},"五、异常情况处理"),(0,o.kt)("h3",{id:"51-访问503响应错误"},"5.1 访问",(0,o.kt)("inlineCode",{parentName:"h3"},"503"),"响应错误"),(0,o.kt)("p",null,"有可能 ingress 配置有问题。可以检查一下 ingress 的路径映射是否正确"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  温馨提示：kubernetes 可以有多个 ingress 配置，相互之间可以共存"))))}k.isMDXComponent=!0}}]);