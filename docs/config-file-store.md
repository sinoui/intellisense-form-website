---
id: config-file-store
title: 文件存储定制
---


## 首发版本

#### **`1.14.0`**

## 文件存储到 mongodb

无需配置，智能表单默认将文件存储至mongodb。

## 文件存储到 s3

在 application.yml 中添加如下配置：

```yaml
sinoform:
  file:
    type: s3  # 类型 s3、fs、http
    access-key: sinoform  # 用户名
    secret-key: sinoform  # 密码
    bucket: test  # 存储桶名称
    endpoint: http://172.28.174.5:9000/  # 存储地址
    skip-cert-verify: false   # 是否跳过证书验证，默认为 true，http地址可以去掉该配置
    # 证书从，若 skip-cert-verify 配置为 true ，需要配置该证书；若 skip-cert-verify 配置为 false ，可去掉该配置
    ca-cert: |-
      -----BEGIN CERTIFICATE-----
      MIICDDCCAXUCAQEwDQYJKoZIhvcNAQELBQAwWDELMAkGA1UEBhMCQVUxEzARBgNV
      BAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0
      ZDERMA8GA1UEAwwIc2lub2Zvcm0wHhcNMjIwMzE4MDQxMTMxWhcNMjMwMzE4MDQx
      MTMxWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UE
      CgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIGfMA0GCSqGSIb3DQEBAQUAA4GN
      ADCBiQKBgQDO1z8WWrhjFzeyjOjlup0M9/S1Lx/kAFOspK6wU4QJ8V3j8mqNST2i
      wKccfymiC9CkYZ+PliPDybgLGnqPXB37NaTM/ZRh1IB6AeibyiiEmj9OQjggwpbl
      u1uPAS4cnybjo8pUITShFkRW13Omnmjvn4Yr9FlOAwDuwiSkUGUfhwIDAQABMA0G
      CSqGSIb3DQEBCwUAA4GBAI88sDF3Z/FTtyOKJ209nGbLX2VBKheT0AegD9cnnmBf
      BsxPz/H4x5IJagzHLvTEt91jgHPSAgBRcPNMM27J1bdhjMlivmG674aYnX26vt19
      lIml/PVNOAQNt0laMNqlr+dI9/FDdB32vJVP0Rw5NI8wDV81+gi/9P+AaEZGLlX7
      -----END CERTIFICATE-----
```

## 文件存储到 本地/共享目录/共享存储

在 application.yml 中添加如下配置：

```yaml
sinoform:
  file:
    type: fs  # 类型 s3、fs、http
    path: /apps/sino-intellisense-form/files  # 存储路径
```

## 文件存储到 http 接口

若需要将文件推送至指定接口，需要在 application.yml 中添加如下配置：

```yaml
sinoform:
  file:
    type: http  # 类型 s3、fs、http
    content-type: multipart/form-data  # 接口文件参数类型 multipart/form-data、application/octet-stream
    upload-url: http://127.0.0.1:8088/test/upload/files   # 上传文件的接口
    download-url: http://127.0.0.1:8088/test/download/files  # 下载文件的接口
```
### 上传文件接口说明

上传文件接口在接收完文件后需要返回文件的唯一 id，此 id 可以是 uuid 或编号等，注意 id 中不要出现影响 url 的特殊字符，如：`/`。

返回的报文格式如下：
```json
{"id": "543fd45be3e346e68e5267266fddb16d"}
```

#### 上传文件接口示例：

当配置接口参数类型为 `multipart/form-data` 时：

```java
@PostMapping("/test/upload/files")
public ResponseEntity<JSONObject> uploadFile(@RequestParam("file") MultipartFile file) {
  // 获取fileName
  String fileName = URLDecoder.decode(file.getOriginalFilename(),"UTF-8");
  // 获取文件流
  InputStream inputStream = file.getInputStream();
  // 存储文件（根据实际情况保存文件）
  String id = saveFile(inputStream, fileName);
  // 返回文件id
  JSONObject returnId = new JSONObject();
  returnId.put("id", id);
  return ResponseEntity.ok(returnId);
}

```

当配置接口参数类型为 `application/octet-stream` 时：

```java
@PostMapping("/test/upload/files")
public ResponseEntity<JSONObject> uploadFile(HttpServletRequest request) {
  // 获取fileName
  String fileName = URLDecoder.decode(request.getHeader("fileName"),"UTF-8");
  // 获取文件流
  InputStream inputStream = request.getInputStream();
  // 存储文件（根据实际情况保存文件，注意要将流中的文件截取出来）
  String id = saveFile(inputStream, fileName);
  // 返回文件id
  JSONObject returnId = new JSONObject();
  returnId.put("id", id);
  return ResponseEntity.ok(returnId);
}
```
### 下载文件接口说明

下载文件接口需要实现根据文件 id 将对应的`文件流`和`文件名`返回给智能表单。

#### 下载文件接口示例：

```java
@GetMapping("/test/download/files/{fileId}")
public ResponseEntity<Object> downloadFile(@PathVariable("fileId") String fileId)
    // 获取文件信息（自定义FileInfo）
    FileInfo fileInfo = getFileInfo(fileId);
    // 文件名
    String fileName = fileInfo.getFilename();
    // 文件流
    FileInputStream fis = fileInfo.getFileInputStream();
    
    return ResponseEntity
    .ok()
    .header("fileName", URLEncoder.encode(fileName, "UTF-8"))  // 返回文件名
    .body(new InputStreamResource(fis)); // 返回文件流
}
```
