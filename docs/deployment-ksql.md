---
id: deployment-ksql
title: 部署 ksql
---

## 单机部署 ksql （ubuntu）

### 1. 部署 jdk

若已安装 jdk 则跳过该步骤。

```shell
# 安装 jdk
$ apt install -y openjdk-8-jdk
```

### 2. 部署 kafka

```shell
# 下载 kafka 安装包，若想使用其他版本 kafka 需要从 kafka 官网获取下载链接
$ wget https://dlcdn.apache.org/kafka/3.3.1/kafka_2.13-3.3.1.tgz
# 解压
$ tar zxvf kafka_2.12-3.2.1.tgz
# 启动 zookeeper
$ cd kafka_2.12-3.2.1
$ bin/zookeeper-server-start.sh -daemon config/zookeeper.properties
# 启动 kafka
$ bin/kafka-server-start.sh -daemon config/server.properties
```

### 3. 部署 ksql

```shell
# Install basic software
sudo apt update
sudo apt install -y software-properties-common curl gnupg

# Import the public key
curl -sq http://ksqldb-packages.s3.amazonaws.com/deb/0.28/archive.key | sudo apt-key add -

# Add the ksqlDB apt repository
sudo add-apt-repository "deb http://ksqldb-packages.s3.amazonaws.com/deb/0.28 stable main"
sudo apt update

# Install the package
sudo apt install confluent-ksqldb

# 启动 ksql
/usr/bin/ksql-server-start -daemon /etc/ksqldb/ksql-server.properties
```

## k8s 部署 ksql

### 1. 准备离线镜像

- quay.io/strimzi/operator:0.31.1
- quay.io/strimzi/kafka:0.31.1-kafka-3.2.3
- docker.io/confluentinc/cp-ksqldb-server:6.1.0 
- docker.io/confluentinc/cp-schema-registry:6.1.0
- solsson/kafka-prometheus-jmx-exporter@sha256:6f82e2b0464f50da8104acd7363fb9b995001ddff77d248379f8788e78946143

### 2. 准备离线文件

- [strimzi-0.31.1.tar.gz](https://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/deploy-files/strimzi-0.31.1.tar.gz)
- [cp-helm-charts-master.tar.gz](https://sino-intellisense-form.oss-cn-beijing.aliyuncs.com/deploy-files/cp-helm-charts-master.tar.gz)

### 3. 部署 kafka 集群

#### 3.1 创建 namespace

```shell
$ kubectl create ns kafka
```

#### 3.2 解压 strimzi

```shell
$ tar zxvf strimzi-0.31.1.tar.gz
$ cd strimzi-0.31.1
```

#### 3.3 部署 kafka 集群

创建 kafka.yaml：

```yaml
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: my-cluster
  namespace: kafka
spec:
  kafka:
    version: 3.2.3
    replicas: 3
    listeners:
      - name: plain
        port: 9092
        type: internal
        tls: false
      - name: tls
        port: 9093
        type: internal
        tls: true
    config:
      offsets.topic.replication.factor: 1
      transaction.state.log.replication.factor: 1
      transaction.state.log.min.isr: 1
      default.replication.factor: 1
      min.insync.replicas: 1
    storage:
      type: jbod
      volumes:
      - id: 0
        type: persistent-claim
        class: nfs-retain-storage
        size: 10Gi
        deleteClaim: false
  zookeeper:
    replicas: 3
    storage:
      type: persistent-claim
      class: nfs-retain-storage
      size: 10Gi
      deleteClaim: false
  entityOperator:
    topicOperator: {}
    userOperator: {}
```

创建 kafka 集群：

```shell
$ kubectl create -f install/cluster-operator/ -n kafka
$ kubectl apply -f kafka.yaml
```

### 4. 部署 ksql

#### 4.1 解压 helm 文件包

```shell
$ tar zxvf cp-helm-charts-master.tar.gz
$ cd cp-helm-charts-master
```

#### 4.2 部署 ksql

```shell
$ helm install kafka-schema-registry --set kafka.bootstrapServers="PLAINTEXT://my-cluster-kafka-bootstrap:9092" . -n kafka
$ helm install ksql-server --set cp-schema-registry.url="http://kafka-schema-registry-cp-schema-registry:8081",kafka.bootstrapServers="PLAINTEXT://my-cluster-kafka-bootstrap:9092",ksql.headless=false . -n kafka
```

