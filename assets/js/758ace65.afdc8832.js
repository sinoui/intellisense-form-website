"use strict";(self.webpackChunkintellisense_form_docs=self.webpackChunkintellisense_form_docs||[]).push([[9341],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58553:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),a=["components"],o={id:"config-file-store",title:"文件存储定制"},p=void 0,c={unversionedId:"config-file-store",id:"config-file-store",title:"文件存储定制",description:"首发版本",source:"@site/docs/config-file-store.md",sourceDirName:".",slug:"/config-file-store",permalink:"/intellisense-form-website/docs/config-file-store",tags:[],version:"current",frontMatter:{id:"config-file-store",title:"文件存储定制"},sidebar:"someSidebar",previous:{title:"License 证书配置",permalink:"/intellisense-form-website/docs/config-license"},next:{title:"智能表单配置数据整体迁移",permalink:"/intellisense-form-website/docs/sinofrom-sinomatrix-import-export"}},s=[{value:"首发版本",id:"首发版本",children:[{value:"<strong><code>1.14.0</code></strong>",id:"1140",children:[],level:4}],level:2},{value:"文件存储到 mongodb",id:"文件存储到-mongodb",children:[],level:2},{value:"文件存储到 s3",id:"文件存储到-s3",children:[],level:2},{value:"文件存储到 本地/共享目录/共享存储",id:"文件存储到-本地共享目录共享存储",children:[],level:2},{value:"文件存储到 http 接口",id:"文件存储到-http-接口",children:[{value:"上传文件接口说明",id:"上传文件接口说明",children:[{value:"上传文件接口示例：",id:"上传文件接口示例",children:[],level:4}],level:3},{value:"下载文件接口说明",id:"下载文件接口说明",children:[{value:"下载文件接口示例：",id:"下载文件接口示例",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"首发版本"},"首发版本"),(0,l.kt)("h4",{id:"1140"},(0,l.kt)("strong",{parentName:"h4"},(0,l.kt)("inlineCode",{parentName:"strong"},"1.14.0"))),(0,l.kt)("h2",{id:"文件存储到-mongodb"},"文件存储到 mongodb"),(0,l.kt)("p",null,"无需配置，智能表单默认将文件存储至mongodb。"),(0,l.kt)("h2",{id:"文件存储到-s3"},"文件存储到 s3"),(0,l.kt)("p",null,"在 application.yml 中添加如下配置："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"sinoform:\n  file:\n    type: s3  # 类型 s3、fs、http\n    access-key: sinoform  # 用户名\n    secret-key: sinoform  # 密码\n    bucket: test  # 存储桶名称\n    endpoint: http://172.28.174.5:9000/  # 存储地址\n    skip-cert-verify: false   # 是否跳过证书验证，默认为 true，http地址可以去掉该配置\n    # 证书配置，若 skip-cert-verify 配置为 false ，需要配置该证书；若 skip-cert-verify 配置为 true ，可去掉该配置\n    ca-cert: |-\n      -----BEGIN CERTIFICATE-----\n      MIICDDCCAXUCAQEwDQYJKoZIhvcNAQELBQAwWDELMAkGA1UEBhMCQVUxEzARBgNV\n      BAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0\n      ZDERMA8GA1UEAwwIc2lub2Zvcm0wHhcNMjIwMzE4MDQxMTMxWhcNMjMwMzE4MDQx\n      MTMxWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE\n      CgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIGfMA0GCSqGSIb3DQEBAQUAA4GN\n      ADCBiQKBgQDO1z8WWrhjFzeyjOjlup0M9/S1Lx/kAFOspK6wU4QJ8V3j8mqNST2i\n      wKccfymiC9CkYZ+PliPDybgLGnqPXB37NaTM/ZRh1IB6AeibyiiEmj9OQjggwpbl\n      u1uPAS4cnybjo8pUITShFkRW13Omnmjvn4Yr9FlOAwDuwiSkUGUfhwIDAQABMA0G\n      CSqGSIb3DQEBCwUAA4GBAI88sDF3Z/FTtyOKJ209nGbLX2VBKheT0AegD9cnnmBf\n      BsxPz/H4x5IJagzHLvTEt91jgHPSAgBRcPNMM27J1bdhjMlivmG674aYnX26vt19\n      lIml/PVNOAQNt0laMNqlr+dI9/FDdB32vJVP0Rw5NI8wDV81+gi/9P+AaEZGLlX7\n      -----END CERTIFICATE-----\n")),(0,l.kt)("h2",{id:"文件存储到-本地共享目录共享存储"},"文件存储到 本地/共享目录/共享存储"),(0,l.kt)("p",null,"在 application.yml 中添加如下配置："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"sinoform:\n  file:\n    type: fs  # 类型 s3、fs、http\n    path: /apps/sino-intellisense-form/files  # 存储路径\n")),(0,l.kt)("h2",{id:"文件存储到-http-接口"},"文件存储到 http 接口"),(0,l.kt)("p",null,"若需要将文件推送至指定接口，需要在 application.yml 中添加如下配置："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"sinoform:\n  file:\n    type: http  # 类型 s3、fs、http\n    content-type: multipart/form-data  # 接口文件参数类型 multipart/form-data、application/octet-stream\n    upload-url: http://127.0.0.1:8088/test/upload/files   # 上传文件的接口\n    download-url: http://127.0.0.1:8088/test/download/files  # 下载文件的接口\n")),(0,l.kt)("h3",{id:"上传文件接口说明"},"上传文件接口说明"),(0,l.kt)("p",null,"上传文件接口在接收完文件后需要返回文件的唯一 id，此 id 可以是 uuid 或编号等，注意 id 中不要出现影响 url 的特殊字符，如：",(0,l.kt)("inlineCode",{parentName:"p"},"/"),"。"),(0,l.kt)("p",null,"返回的报文格式如下："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"id": "543fd45be3e346e68e5267266fddb16d"}\n')),(0,l.kt)("h4",{id:"上传文件接口示例"},"上传文件接口示例："),(0,l.kt)("p",null,"当配置接口参数类型为 ",(0,l.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," 时："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/test/upload/files")\npublic ResponseEntity<JSONObject> uploadFile(@RequestParam("file") MultipartFile file) {\n  // 获取fileName\n  String fileName = URLDecoder.decode(file.getOriginalFilename(),"UTF-8");\n  // 获取文件流\n  InputStream inputStream = file.getInputStream();\n  // 存储文件（根据实际情况保存文件）\n  String id = saveFile(inputStream, fileName);\n  // 返回文件id\n  JSONObject returnId = new JSONObject();\n  returnId.put("id", id);\n  return ResponseEntity.ok(returnId);\n}\n\n')),(0,l.kt)("p",null,"当配置接口参数类型为 ",(0,l.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," 时："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/test/upload/files")\npublic ResponseEntity<JSONObject> uploadFile(HttpServletRequest request) {\n  // 获取fileName\n  String fileName = URLDecoder.decode(request.getHeader("fileName"),"UTF-8");\n  // 获取文件流\n  InputStream inputStream = request.getInputStream();\n  // 存储文件（根据实际情况保存文件，注意要将流中的文件截取出来）\n  String id = saveFile(inputStream, fileName);\n  // 返回文件id\n  JSONObject returnId = new JSONObject();\n  returnId.put("id", id);\n  return ResponseEntity.ok(returnId);\n}\n')),(0,l.kt)("h3",{id:"下载文件接口说明"},"下载文件接口说明"),(0,l.kt)("p",null,"下载文件接口需要实现根据文件 id 将对应的",(0,l.kt)("inlineCode",{parentName:"p"},"文件流"),"和",(0,l.kt)("inlineCode",{parentName:"p"},"文件名"),"返回给智能表单。"),(0,l.kt)("h4",{id:"下载文件接口示例"},"下载文件接口示例："),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping("/test/download/files/{fileId}")\npublic ResponseEntity<Object> downloadFile(@PathVariable("fileId") String fileId)\n    // 获取文件信息（自定义FileInfo）\n    FileInfo fileInfo = getFileInfo(fileId);\n    // 文件名\n    String fileName = fileInfo.getFilename();\n    // 文件流\n    FileInputStream fis = fileInfo.getFileInputStream();\n    \n    return ResponseEntity\n    .ok()\n    .header("fileName", URLEncoder.encode(fileName, "UTF-8"))  // 返回文件名\n    .body(new InputStreamResource(fis)); // 返回文件流\n}\n')))}d.isMDXComponent=!0}}]);