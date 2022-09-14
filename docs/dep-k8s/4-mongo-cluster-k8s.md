---
id: mongo-cluster-k8s
title: 部署 mongodb 集群（手动）
---

[部署 mongodb](./1-mongo-k8s.md) 介绍如何安装单节点的 mongodb，本文介绍如何安装 mongodb 集群。由于没有找到支持 arm64 的 helm 和 operator 方案，所以本文介绍的是手动安装方案。

## 一、分配磁盘空间

首先需要为 mongodb 分配存储空间。与 [部署 mongodb](./1-mongo-k8s.md) 的“三、分配存储空间”章节介绍的内容是相似的。如果采用 “3.1. 手动维护本地存储卷” 章节介绍的方案，则需要创建至少三个 pv（有几个 mongo 节点，就创建几个 pv），如下所示：

```yaml {6,24,32,48,56,72,80} title="mongo-local-storage.yaml"
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
---
# 在 192.168.90.101:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中
apiVersion: v1
kind: PersistentVolume
metadata:
  name: sinoform-mongo-pv-101
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
                - 192.168.90.101
---
# 在 192.168.90.102:/var/lib/mongo 上创建 pv，并绑定到 mongo-local-storage 中
apiVersion: v1
kind: PersistentVolume
metadata:
  name: sinoform-mongo-pv-101
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
                - 192.168.90.102
```

## 二、安装 mongo

以下配置将安装三节点 mongo：

```yaml title="mongo-cluster.yaml"
---
# mongod 启动配置
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongod-config
data:
  mongod.yaml: |-
    replication:
      replSetName: "sinoform-mongo"
    net:
      # 绑定所有的本地IP
      bindIpAll: true
---
# mongo 无头服务
apiVersion: v1
kind: Service
metadata:
  name: mongo
  labels:
    name: mongo
spec:
  ports:
    - port: 27017
      targetPort: 27017
  clusterIP: None
  selector:
    role: mongo
---
# 部署 mongo 节点
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongo
spec:
  serviceName: "mongo"
  replicas: 3
  selector:
    matchLabels:
      role: mongo
  template:
    metadata:
      labels:
        role: mongo
    spec:
      terminationGracePeriodSeconds: 10
      containers:
        - name: mongo
          image: mongo:4.2.6
          command:
            - mongod
            - "--config"
            - "/etc/mongod.yaml"
          ports:
            - containerPort: 27017
          volumeMounts:
            - name: mongo-persistent-storage
              mountPath: /data/db
            - name: mongod-config
              mountPath: /etc/mongod.yaml
              subPath: mongo.yaml
      volumes:
        - name: mongod-config
          configMap:
            name: mongod-config
            items:
              - key: mongod.yaml
                path: mongo.yaml
  volumeClaimTemplates:
    - metadata:
        name: mongo-persistent-storage
      spec:
        storageClassName: local-path
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 100Gi
```

:::warning 注意

注意配置中的 `storageClassName: local-path`，需要调整为实际存在的存储类。

:::

应用以上 yaml 配置文件：

```bash
kubectl apply -f mongo-cluster.yaml
```

## 三、初始化 mongo 集群

进入一个 mongo 容器，例如：

```bash
kubectl exec -it mongo-0 -- /bin/bash
```

然后执行以下命令，完成 mongo 集群初始化：

```bash
rs.initiate({
  _id : "sinoform-mongo",
  members: [
    { _id: 0, host: "mongo-0.mongo:27017" },
    { _id: 1, host: "mongo-1.mongo:27017" },
    { _id: 2, host: "mongo-2.mongo:27017" }
  ]
})
```

## 四、访问 mongo

在 `application.yaml` 添加 mongo 连接信息：

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo/form
```
