---
id: mongo-k8s
title: 部署 mongodb
---

:::warning 警告

由于大部分 helm 和 operator 方案（包括 MongoDB 官方）都没有 arm64 镜像，所以这里只提供在开发和测试环境中简单地在 kubernetes 中部署单节点 MongoDB。

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

## 三、访问 mongo

在 `application.yaml` 添加 mongo 连接信息：

```yaml
spring:
  data:
    mongodb:
      uri: mongodb://sinoform-mongo-srv/form
```
