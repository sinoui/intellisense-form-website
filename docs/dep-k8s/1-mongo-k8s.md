---
id: mongo-k8s
title: 部署 mongodb
---

:::warning 警告

本章节介绍的是在 kubernetes 部署单节点 mongodb 的方案。如果需要部署 mongodb 集群，请移步[《部署 mongodb 集群（手动）》](./4-mongo-cluster-k8s.md)

:::

## 一、准备离线镜像

需要准备以下离线镜像：

- docker.io/library/mongo:4.2.6

## 二、部署 MongoDB

将以下配置保存为 `mongo.yaml` 文件：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sinoform-mongo
spec:
  selector:
    matchLabels:
      app: sinoform-mongo
  template:
    metadata:
      labels:
        app: sinoform-mongo
    spec:
      containers:
        - name: sinoform-mongo
          image: docker.io/library/mongo:4.2.6
          resources:
            limits:
              memory: "512Mi"
              cpu: "1000m"
          ports:
            - containerPort: 27107
          volumeMounts:
            - name: sinoform-mongo-data
              mountPath: /var/lib/mongodb
            - name: sinoform-mongo-config
              mountPath: /etc/mongod.conf
              subPath: mongod.conf
      volumes:
        - name: sinoform-mongo-data
          emptyDir: {}
          persistentVolumeClaim:
            claimName: sinoform-mongo-pvc
        - name: sinoform-mongo-config
          configMap:
            name: sinoform-mongo-config
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: sinoform-mongo-pvc
spec:
  resources:
    requests:
      storage: 10Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
---
apiVersion: v1
kind: Service
metadata:
  name: sinoform-mongo-srv
spec:
  selector:
    app: sinoform-mongo
  ports:
    - port: 27017
      targetPort: 27017
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: sinoform-mongo-config
data:
  mongod.conf: |-
    #日志配置
    systemLog:
      destination: file
      path: /var/log/mongodb/mongod.log
      logAppend: true

    #后台运行
    processManagement:
      fork: true

    #监听所有ip(0.0.0.0),端口27017
    net:
      bindIpAll: true
      port: 27017

    #配置不需要密码即可访问数据库
    security:
      authorization: disabled

    #数据存储位置，journal 日志用来数据恢复
    storage:
      dbPath: /var/lib/mongodb
      journal:
        enabled: true
```

启动 mongo：

```bash
kubectl apply -f mongo.yaml
```

## 三、分配存储空间

需要为 mongodb 分配存储空间，即为 `sinoform-mongo-pvc` 分配存储空间。如果已经有自动分配存储空间的 storageclass，则可以跳过。如果没有，则可以手动为 `sinoform-mongo-pvc` 创建 [pv](https://kubernetes.io/zh-cn/docs/concepts/storage/persistent-volumes/)。本章节给出两种方案，大家根据自身的情况参考其中一个即可。

### 3.1. 手动维护本地存储卷

```yaml {24,32} title="mongo-local-storage.yaml"
----
# 创建 本地存储卷
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: mongo-local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
# 在 192.168.90.100:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中
apiVersion: v1
kind: PersistentVolume
metadata:
  name: sinoform-mongo-pv-100
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: mongo-local-storage
  local:
    path: /var/lib/mongo
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
                - 192.168.90.100
```

然后调整 `sinoform-mongo-pvc`，绑定 `mongo-local-storage` 存储卷：

```yaml {6} title="sinoform-mongo-pvc.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: sinoform-mongo-pvc
spec:
  storageClassName: mongo-local-storage
  resources:
    requests:
      storage: 10Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
```

最后应用以上两个 yaml 文件：

```bash
kubectl apply -f mongo-local-storage.yaml
kubectl apply -f sinoform-mongo-pvc.yaml
```

### 3.2. 自动创建本地存储卷

可以使用 [rancher/local-path-provisioner](https://github.com/rancher/local-path-provisioner) 自动维护本地存储卷。

:::info 提示

如果离线安装，需下载以下两个镜像：

- docker.io/library/busy
- docker.io/rancher/local-path-provisioner:v0.0.22

:::

复制以下 yaml 配置，创建一个名称为 `local-path` 的本地存储卷：

```yaml title="local-path-storage.yaml"
apiVersion: v1
kind: Namespace
metadata:
  name: local-path-storage

---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: local-path-provisioner-service-account
  namespace: local-path-storage

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: local-path-provisioner-role
rules:
  - apiGroups: [""]
    resources: ["nodes", "persistentvolumeclaims", "configmaps"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["endpoints", "persistentvolumes", "pods"]
    verbs: ["*"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
  - apiGroups: ["storage.k8s.io"]
    resources: ["storageclasses"]
    verbs: ["get", "list", "watch"]

---
apiVersion: v1
kind: Namespace
metadata:
  name: local-path-storage

---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: local-path-provisioner-service-account
  namespace: local-path-storage

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: local-path-provisioner-role
rules:
  - apiGroups: [""]
    resources: ["nodes", "persistentvolumeclaims", "configmaps"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["endpoints", "persistentvolumes", "pods"]
    verbs: ["*"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
  - apiGroups: ["storage.k8s.io"]
    resources: ["storageclasses"]
    verbs: ["get", "list", "watch"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: local-path-provisioner-bind
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: local-path-provisioner-role
subjects:
  - kind: ServiceAccount
    name: local-path-provisioner-service-account
    namespace: local-path-storage

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: local-path-provisioner
  namespace: local-path-storage
spec:
  replicas: 1
  selector:
    matchLabels:
      app: local-path-provisioner
  template:
    metadata:
      labels:
        app: local-path-provisioner
    spec:
      serviceAccountName: local-path-provisioner-service-account
      containers:
        - name: local-path-provisioner
          image: rancher/local-path-provisioner:v0.0.22
          imagePullPolicy: IfNotPresent
          command:
            - local-path-provisioner
            - --debug
            - start
            - --config
            - /etc/config/config.json
          volumeMounts:
            - name: config-volume
              mountPath: /etc/config/
          env:
            - name: POD_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
      volumes:
        - name: config-volume
          configMap:
            name: local-path-config

---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-path
provisioner: rancher.io/local-path
volumeBindingMode: WaitForFirstConsumer
reclaimPolicy: Delete

---
kind: ConfigMap
apiVersion: v1
metadata:
  name: local-path-config
  namespace: local-path-storage
data:
  config.json: |-
    {
            "nodePathMap":[
            {
                    "node":"DEFAULT_PATH_FOR_NON_LISTED_NODES",
                    "paths":["/opt/local-path-provisioner"]
            }
            ]
    }
  setup: |-
    #!/bin/sh
    set -eu
    mkdir -m 0777 -p "$VOL_DIR"
  teardown: |-
    #!/bin/sh
    set -eu
    rm -rf "$VOL_DIR"
  helperPod.yaml: |-
    apiVersion: v1
    kind: Pod
    metadata:
      name: helper-pod
    spec:
      containers:
      - name: helper-pod
        image: busybox
        imagePullPolicy: IfNotPresent
```

应用以上的 yaml 配置文件：

```bash
kubectl apply -f local-path-storage.yaml
```

然后调整 `sinoform-mongo-pvc`，绑定 `local-path` 存储卷：

```yaml {6} title="sinoform-mongo-pvc.yaml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: sinoform-mongo-pvc
spec:
  storageClassName: local-path
  resources:
    requests:
      storage: 10Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
```

应用以上的 yaml 配置文件：

```bash
kubectl apply -f sinoform-mongo-pvc.yaml
```

## 四、访问 mongo

在 `application.yaml` 添加 mongo 连接信息：

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://sinoform-mongo-srv/form
```
