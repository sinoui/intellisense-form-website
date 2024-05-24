"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[7771],{3905:function(n,e,o){o.d(e,{Zo:function(){return c},kt:function(){return d}});var t=o(67294);function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function m(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function s(n,e){if(null==n)return{};var o,t,a=function(n,e){if(null==n)return{};var o,t,a={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(a[o]=n[o]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var l=t.createContext({}),i=function(n){var e=t.useContext(l),o=e;return n&&(o="function"==typeof n?n(e):m(m({},e),n)),o},c=function(n){var e=i(n.components);return t.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var o=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),g=i(o),d=a,u=g["".concat(l,".").concat(d)]||g[d]||p[d]||r;return o?t.createElement(u,m(m({ref:e},c),{},{components:o})):t.createElement(u,m({ref:e},c))}));function d(n,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=o.length,m=new Array(r);m[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,m[1]=s;for(var i=2;i<r;i++)m[i]=o[i];return t.createElement.apply(null,m)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},96921:function(n,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return g}});var t=o(87462),a=o(63366),r=(o(67294),o(3905)),m=["components"],s={id:"mongo-cluster-k8s",title:"部署 mongodb 集群（手动）"},l=void 0,i={unversionedId:"dep-k8s/mongo-cluster-k8s",id:"dep-k8s/mongo-cluster-k8s",title:"部署 mongodb 集群（手动）",description:"部署 mongodb 介绍如何安装单节点的 mongodb，本文介绍如何安装 mongodb 集群。由于没有找到支持 arm64 的 helm 和 operator 方案，所以本文介绍的是手动安装方案。",source:"@site/docs/dep-k8s/4-mongo-cluster-k8s.md",sourceDirName:"dep-k8s",slug:"/dep-k8s/mongo-cluster-k8s",permalink:"/intellisense-form-website/docs/dep-k8s/mongo-cluster-k8s",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"mongo-cluster-k8s",title:"部署 mongodb 集群（手动）"},sidebar:"someSidebar",previous:{title:"部署智能表单(Helm)",permalink:"/intellisense-form-website/docs/dep-k8s/helm-k8s"},next:{title:"与 spring-cloud-gateway 集成",permalink:"/intellisense-form-website/docs/dep-k8s/dep-spring-cloud-gateway"}},c=[{value:"一、分配磁盘空间",id:"一分配磁盘空间",children:[],level:2},{value:"二、安装 mongo",id:"二安装-mongo",children:[],level:2},{value:"三、初始化 mongo 集群",id:"三初始化-mongo-集群",children:[],level:2},{value:"四、访问 mongo",id:"四访问-mongo",children:[],level:2}],p={toc:c};function g(n){var e=n.components,o=(0,a.Z)(n,m);return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/intellisense-form-website/docs/dep-k8s/mongo-k8s"},"部署 mongodb")," 介绍如何安装单节点的 mongodb，本文介绍如何安装 mongodb 集群。由于没有找到支持 arm64 的 helm 和 operator 方案，所以本文介绍的是手动安装方案。"),(0,r.kt)("h2",{id:"一分配磁盘空间"},"一、分配磁盘空间"),(0,r.kt)("p",null,"首先需要为 mongodb 分配存储空间。与 ",(0,r.kt)("a",{parentName:"p",href:"/intellisense-form-website/docs/dep-k8s/mongo-k8s"},"部署 mongodb")," 的“三、分配存储空间”章节介绍的内容是相似的。如果采用 “3.1. 手动维护本地存储卷” 章节介绍的方案，则需要创建至少三个 pv（有几个 mongo 节点，就创建几个 pv），如下所示："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{6,24,32,48,56,72,80} title="mongo-local-storage.yaml"',"{6,24,32,48,56,72,80}":!0,title:'"mongo-local-storage.yaml"'},"----\n# 创建 本地存储卷\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: mongo-local-storage\nprovisioner: kubernetes.io/no-provisioner\nvolumeBindingMode: WaitForFirstConsumer\n---\n# 在 192.168.90.100:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: sinoform-mongo-pv-100\nspec:\n  capacity:\n    storage: 100Gi\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: mongo-local-storage\n  local:\n    path: /var/lib/mongo\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: kubernetes.io/hostname\n              operator: In\n              values:\n                - 192.168.90.100\n---\n# 在 192.168.90.101:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: sinoform-mongo-pv-101\nspec:\n  capacity:\n    storage: 100Gi\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: mongo-local-storage\n  local:\n    path: /var/lib/mongo\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: kubernetes.io/hostname\n              operator: In\n              values:\n                - 192.168.90.101\n---\n# 在 192.168.90.102:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: sinoform-mongo-pv-101\nspec:\n  capacity:\n    storage: 100Gi\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: mongo-local-storage\n  local:\n    path: /var/lib/mongo\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: kubernetes.io/hostname\n              operator: In\n              values:\n                - 192.168.90.102\n")),(0,r.kt)("h2",{id:"二安装-mongo"},"二、安装 mongo"),(0,r.kt)("p",null,"以下配置将安装三节点 mongo："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mongo-cluster.yaml"',title:'"mongo-cluster.yaml"'},'---\n# mongod 启动配置\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mongod-config\ndata:\n  mongod.yaml: |-\n    replication:\n      replSetName: "sinoform-mongo"\n    net:\n      # 绑定所有的本地IP\n      bindIpAll: true\n---\n# mongo 无头服务\napiVersion: v1\nkind: Service\nmetadata:\n  name: mongo\n  labels:\n    name: mongo\nspec:\n  ports:\n    - port: 27017\n      targetPort: 27017\n  clusterIP: None\n  selector:\n    role: mongo\n---\n# 部署 mongo 节点\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: mongo\nspec:\n  serviceName: "mongo"\n  replicas: 3\n  selector:\n    matchLabels:\n      role: mongo\n  template:\n    metadata:\n      labels:\n        role: mongo\n    spec:\n      terminationGracePeriodSeconds: 10\n      containers:\n        - name: mongo\n          image: mongo:4.2.6\n          command:\n            - mongod\n            - "--config"\n            - "/etc/mongod.yaml"\n          ports:\n            - containerPort: 27017\n          volumeMounts:\n            - name: mongo-persistent-storage\n              mountPath: /data/db\n            - name: mongod-config\n              mountPath: /etc/mongod.yaml\n              subPath: mongo.yaml\n      volumes:\n        - name: mongod-config\n          configMap:\n            name: mongod-config\n            items:\n              - key: mongod.yaml\n                path: mongo.yaml\n  volumeClaimTemplates:\n    - metadata:\n        name: mongo-persistent-storage\n      spec:\n        storageClassName: local-path\n        accessModes: ["ReadWriteOnce"]\n        resources:\n          requests:\n            storage: 100Gi\n')),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"注意")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"注意配置中的 ",(0,r.kt)("inlineCode",{parentName:"p"},"storageClassName: local-path"),"，需要调整为实际存在的存储类。"))),(0,r.kt)("p",null,"应用以上 yaml 配置文件："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f mongo-cluster.yaml\n")),(0,r.kt)("h2",{id:"三初始化-mongo-集群"},"三、初始化 mongo 集群"),(0,r.kt)("p",null,"进入一个 mongo 容器，例如："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it mongo-0 -- /bin/bash\n")),(0,r.kt)("p",null,"然后执行以下命令，完成 mongo 集群初始化："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'rs.initiate({\n  _id : "sinoform-mongo",\n  members: [\n    { _id: 0, host: "mongo-0.mongo:27017" },\n    { _id: 1, host: "mongo-1.mongo:27017" },\n    { _id: 2, host: "mongo-2.mongo:27017" }\n  ]\n})\n')),(0,r.kt)("h2",{id:"四访问-mongo"},"四、访问 mongo"),(0,r.kt)("p",null,"在 ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yaml")," 添加 mongo 连接信息："),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  data:\n    mongodb:\n      uri: mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo/form\n")))}g.isMDXComponent=!0}}]);