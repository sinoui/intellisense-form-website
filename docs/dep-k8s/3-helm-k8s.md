---
id: helm-k8s
title: 部署智能表单(Helm)
---

## values.yaml配置

### 基本配置

```yaml, title=values.yaml
# 镜像拉取策略（默认IfNotPresent）
#imagePullPolicy: IfNotPresent

# 应用副本数量（默认1）
#replicaCount: 1

# 前端服务配置
web: {}
  # 镜像仓库地址（默认阿里云仓库）
#  image: registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-web
  # 镜像版本（默认v1.15.0-alpha.11）
#  version:
  # 内存及CPU分配(没有默认值，为空的话不分配资源)
#  memory: "128Mi"
#  cpu: "500m"

# 后端服务配置
backend: {}
  # 镜像仓库地址（默认阿里云仓库）
#  image: registry.cn-hangzhou.aliyuncs.com/sinoform/sinoform-backend
  # 镜像版本（默认v1.15.0-alpha.11）
#  version:
  # 内存及CPU分配(没有默认值，为空的话不分配资源)
#  memory: "4096Mi"
#  cpu: "2000m"

# Ingress配置
ingress: {}
  # 访问域名（默认为空）
#  host:

####################################################
#  config将作为智能表单后端服务的启动配置文件             #
#  注意：无需指定端口号，使用默认值即可                   #
####################################################
config: {}
```

### 后端服务启动配置文件

智能表单依赖 `MongoDB` 和关系型数据库才能运行。所以需要准备智能表单的配置。作为智能表单后端服务的启动配置文件。

将这部分配置写入`values.yaml`中的`config`配置下。

:::warning
 配置中**不可以**指定端口号，最终访问智能的端口号为`nginx-ingress`的`NodePort`，因此智能表单服务的端口号，对于用户没有意义。

 配置内容不仅限下面示例中的配置，只要是智能表单可配置的支持的配置项，均可写入文件。
:::

```yaml, title=values.yaml
####################################################
#  此文件将作为智能表单后端服务的启动配置文件              #
#  注意：无需指定端口号，使用默认值即可                   #
####################################################
config: 
    # 指定spring.datasource数据库类型（>=1.15.0版本可省略）
    database:
      type: mysql

    spring:
      data:
        # 智能表单mongodb数据库配置
        mongodb:
          uri: mongodb://192.168.90.128:27017/form?waitQueueMultiple=1000
      # 智能表单业务库配置
      datasource:
        url: jdbc:mysql://192.168.90.128:3306/form?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false&allowPublicKeyRetrieval=true
        username: form
        password: form
        driver-class-name: com.mysql.cj.jdbc.Driver
        druid:
          # 指定测试数据库连接的连通性 SQL 语句
          validation-query: select 1

    sinomatrix:
      datasource:
        url: jdbc:mysql://192.168.90.128:3306/sinoepuias?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false&allowPublicKeyRetrieval=true
        username: root
        password: root
        driver-class-name: com.mysql.cj.jdbc.Driver
        type: com.alibaba.druid.pool.DruidDataSource
        druid:
          initial-size: 1
          #最小连接池数量
          #spring.datasource.druid
          min-idle: 1
          #最大连接池数量 maxIdle已经不再使用
          max-active: 20
          #获取连接时最大等待时间，单位毫秒
          max-wait: 60000

    # 指定单点登录服务链接
    sso:
      ssoService: http://192.168.90.128/sso
      # 令牌在cookie中的参数名
      cookieName: SSOID
    sinoform:
      # 指定工作流设计器服务链接
      workflow-design-server-uri: 192.168.90.128
      # 指定工作流引擎链接
      workflow-server-uri: 192.168.90.128:18003
      # 指定统一授权服务链接
      uias-server-uri: 192.168.90.128
```



## 部署智能表单

### 安装Chart

可通过以下命令安装chart

```bash
helm install sinoform sinoform-0.0.1.tgz
```

:::info
 sinoform为本次安装、发布的`release`的名称。如果不写这个名称，则必须添加参数`--generate-name`(或者简写`-g`)，helm会自动生成一个`release`名称。
:::

出现如下内容，

```bash
[root@master helm]# helm install sinoform sinoform-0.0.1.tgz
NAME: sinoform
LAST DEPLOYED: Fri Mar 18 11:31:45 2022
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
...
```

:::info
 命令执行后，helm客户端会立即退出，但是此时不代表已经安装完成。

 此时可以查看`kubectl get pod`结果，确定是否所有的`pod`都已经启动。
:::

#### 自定义配置文件

项目组在拿到`sinoform`的chart安装包后，一般需要修改里面配置。

可以根据本文档，自定义一个`yaml`文件，安装chart时，指定该文件，可以覆盖chart中的`values.yaml`部分配置。

例如，项目组自定义一个`myvalues.yaml`，内容如下：

```yaml
backend: 
    # 镜像版本（默认latest）
    version: "1.15.0"
```

chart安装包中的`values.yaml`中对应默认配置如下：

```yaml
backend: 
    # 镜像版本（默认latest）
    version: ""
```

那么，可以如下命令安装这个chart：

```bash
helm install sinoform sinoform-0.0.1.tgz -f myvalues.yaml
```

此时安装智能表单后端服务版本为`1.15.0`，默认版本为`latest`。其他配置不会改变，仍将使用默认值。

#### 验证配置文件格式是否正确

项目组可以通过以下命令验证，自定义的`myvalues.yaml`是否有格式错误。

```bash
helm lint sinoform-0.0.1.tgz -f myvalues.yaml
```

若出现如下提示，则表示没有问题：

```bash
...
1 chart(s) linted, 0 chart(s) failed
```

:::info
 使用`lint`命令验证通过后，并不代表安装不会出错，验证结果只能作为参考。
:::

### 访问

查看ingress端口号

```bash
[root@master sinoform]# kubectl get svc -n ingress-nginx
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             NodePort    10.98.134.213   <none>        80:32400/TCP,443:31962/TCP   41h
ingress-nginx-controller-admission   ClusterIP   10.102.7.116    <none>        443/TCP                      41h
```

其中`32400`即为外部访问的端口号。

稍等所有的`pod`都已启动后，即可访问智能表单应用：http://[ingress 地址:端口号]/intellisense-form 。

### 卸载Chart

可通过以下命令卸载Chart

```bash
helm uninstall sinoform
```

:::info
 `sinoform`为安装时指定的`release`名称，如果安装时没有指定名称，则可通过`helm list`命令查看已安装的`release`，找到`sinoform`的`release`名称，然后执行卸载命令。
:::
