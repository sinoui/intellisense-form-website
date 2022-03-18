---
id: config-license
title: License 证书配置
---

## 获取 license.dat 文件

联系智能表单项目组，获取 `license.dat` 文件，并将文件上传至部署智能表单后端的服务器的 `/apps/sino-intellisense-form` 目录下。

## 配置 license 路径

修改智能表单后端应用的 `application.yml` 配置文件，添加如下配置：
```yaml
sinoform:
  license-verify: true
  license-path: /apps/sino-intellisense-form/license.dat
```

## 重启

重新启动智能表单后端应用