---
id: config-license
title: License 证书配置
---

## 获取 license.dat 文件

使用 license 生成脚本生成 license.dat 文件，上传至智能表单后端应用所在服务器。

## 配置 license 路径

修改智能表单后端应用的 application.yml 配置文件，添加如下配置：
```yaml
sinoform:
  license-path: license文件绝对路径
```

例如 license.dat 文件在服务器的 /root/cert 目录中，则配置如下：
```yaml
sinoform:
  license-path: /root/cert/license.dat
```

## 重启

重新启动智能表单后端应用