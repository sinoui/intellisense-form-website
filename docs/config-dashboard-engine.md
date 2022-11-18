---
id: config-dashboard-engine
title: 仪表盘统计引擎配置
---

## 首发版本

**`1.17.0`**

## 开启统计引擎配置

```yaml
sinoform:
  # 开启统计引擎， 默认关闭
  enable-kafka-data-collect: true
```

## kafka 及 ksql 配置

数据引擎使用 kafka + ksql 实现实时统计（[部署 ksql](./deployment-ksql)），所以需要配置 kafka 及 ksql：
```yaml
################  kafka及ksql配置 ################
spring:
  kafka:
    bootstrap-servers:
      - 192.168.90.128:9092
    producer:
      properties:
        request.timeout.ms: 300000
    consumer:
      # 消费组ID，订阅的topic下的每个分区只能分配给同一个group下的一个consumer
      group-id: sinoform
      properties:
        request.timeout.ms: 300000
    listener:
      # 批量消费kafka消息
      type: batch
  ksql:
    # ksql 
    server-host: 192.168.90.128
    server-port: 8088
```