"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[6733],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=f(t),m=i,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var f=2;f<l;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},30082:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},default:function(){return s}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],a={id:"config-file-online-preview",title:"附件预览功能"},c=void 0,f={unversionedId:"config-file-online-preview",id:"config-file-online-preview",title:"附件预览功能",description:"环境准备",source:"@site/docs/config-file-online-preview.md",sourceDirName:".",slug:"/config-file-online-preview",permalink:"/intellisense-form-website/docs/config-file-online-preview",tags:[],version:"current",frontMatter:{id:"config-file-online-preview",title:"附件预览功能"},sidebar:"someSidebar",previous:{title:"业务数据导入",permalink:"/intellisense-form-website/docs/sinoform-import"},next:{title:"CAS 单点登录集成配置",permalink:"/intellisense-form-website/docs/config-cas-login"}},p=[{value:"环境准备",id:"环境准备",children:[{value:"Ubuntu 安装 LibreOffice",id:"ubuntu-安装-libreoffice",children:[],level:3},{value:"Redhat 安装 LibreOffice",id:"redhat-安装-libreoffice",children:[],level:3},{value:"添加字体",id:"添加字体",children:[],level:3}],level:2},{value:"开启附件预览功能",id:"开启附件预览功能",children:[],level:2},{value:"常见问题",id:"常见问题",children:[{value:"预览展示效果有问题",id:"预览展示效果有问题",children:[],level:3}],level:2}],u={toc:p};function s(e){var n=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"环境准备"},"环境准备"),(0,l.kt)("p",null,"智能表单生成 word 和 ppt 文件的预览文件时依赖 LibreOffice 软件，所以",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"要求部署智能表单后端的服务器需要安装 LibreOffice 软件")),"。"),(0,l.kt)("h3",{id:"ubuntu-安装-libreoffice"},"Ubuntu 安装 LibreOffice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# 切换临时目录\ncd /tmp\n# 下载\n$ wget  https://kkfileview.keking.cn/LibreOffice_7.1.4_Linux_x86-64_deb.tar.gz  -cO LibreOffice_7_deb.tar.gz\n# 解压\n$ tar -zxf /tmp/LibreOffice_7_deb.tar.gz\n# 安装\n$ cd /tmp/LibreOffice_7.1.4.2_Linux_x86-64_deb/DEBS\n$ apt-get install -y libxinerama1 libcairo2 libcups2 libx11-xcb1\n$ dpkg -i *.deb\n")),(0,l.kt)("h3",{id:"redhat-安装-libreoffice"},"Redhat 安装 LibreOffice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# 切换临时目录\ncd /tmp\n# 下载\n$ wget https://kkfileview.keking.cn/LibreOffice_7.1.4_Linux_x86-64_rpm.tar.gz -cO LibreOffice_7_rpm.tar.gz\n# 解压\n$ tar -zxf /tmp/LibreOffice_7_rpm.tar.gz\n# 安装\n$ cd /tmp/LibreOffice_7.1.4.2_Linux_x86-64_rpm/RPMS\n$ yum install -y libXext.x86_64\n$ yum groupinstall -y  "X Window System"\n$ yum localinstall *.rpm\n')),(0,l.kt)("h3",{id:"添加字体"},"添加字体"),(0,l.kt)("p",null,"此处提供同步本地 windows 字体的方法。"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"将本地字体拷贝到智能表单后端服务器"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# 打开本地cmd命令行窗口，执行以下命令， 需要将以下 192.168.88.88 替换为智能表单后端所在服务器的ip\n$ scp -r C:\\Windows\\Fonts\\* root@192.168.88.88:/usr/share/fonts\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"添加字体"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# 使用root用户登录智能表单后端所在服务器， 执行以下命令\n$ mkfontscale\n$ mkfontdir\n$ fc-cache -fv\n")))),(0,l.kt)("h2",{id:"开启附件预览功能"},"开启附件预览功能"),(0,l.kt)("p",null,"修改智能表单后端的 application.yml 并重启，配置如下："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"sinoform:\n  file-online-preview:\n    # 是否开启附件预览功能， 默认false\n    enable: true\n    # libreOffice服务的端口，一个端口对应一个进程，默认2000\n    port-numbers:\n      - 2000\n      - 2001\n    # office 转换超时时间，单位秒，置默认300\n    task-execution-timeout: 300\n")),(0,l.kt)("h2",{id:"常见问题"},"常见问题"),(0,l.kt)("h3",{id:"预览展示效果有问题"},"预览展示效果有问题"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"问题描述： 预览的部分文字不显示，或字体发生变化。"),(0,l.kt)("li",{parentName:"ul"},"问题原因： 服务器缺少对应字体，可通过智能表单后端日志，查看具体缺少哪些字体，如下图所示为缺少 STSong-Light 字体：\n",(0,l.kt)("img",{src:t(56e3).Z})),(0,l.kt)("li",{parentName:"ul"},"解决： 下载相关字体文件，通过以上添加字体的方法将字体添加到智能表单后端服务器，并重启智能表单后端。")))}s.isMDXComponent=!0},56e3:function(e,n,t){n.Z=t.p+"assets/images/fonts-lost-log-aa487c432caf07b22dc77bf6ca263ec2.png"}}]);