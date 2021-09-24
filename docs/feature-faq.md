---
id: feature-faq
title: 功能常见问题
---

## 1. 表单发布失败，后端报资源同步异常。

### 出现此问题的版本

从 1.11.0 版本开始有此问题。

### 出现场景

智能表单在与新搭建的 sino-matrix 平台使用时，如果 sinomatrix 的系统管理中没有添加任何资源，必出现此问题。

### 问题现象

点击表单发布失败，查看智能表单的后台日志，出现类似下面的异常日志：

```bash
2021-09-22 22:59:06.011  INFO 76403 --- [io-18087-exec-3] c.s.resource.manager.ResourceManager     : 保存资源，
返回值:<html><head><title>Apache Tomcat/7.0.73 - Error report</title><style><!--H1 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,Arial,sans-serif;color:black;background-color:white;} B {font-family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;font-size:12px;}A {color : black;}A.name {color : black;}HR {color : #525D76;}--></style> </head><body><h1>HTTP Status 500 - java.lang.RuntimeException: org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only</h1><HR size="1" noshade="noshade"><p><b>type</b> Exception report</p><p><b>message</b> <u>java.lang.RuntimeException: org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only</u></p><p><b>description</b> <u>The server encountered an internal error that prevented it from fulfilling this request.</u></p><p><b>exception</b> <pre>org.jboss.resteasy.spi.UnhandledException: java.lang.RuntimeException: org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only
org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only
        at org.springframework.transaction.support.AbstractPlatformTransactionManager.commit(AbstractPlatformTransactionManager.java:724)
        at org.springframework.transaction.interceptor.TransactionAspectSupport.commitTransactionAfterReturning(TransactionAspectSupport.java:485)
        at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:291)
        at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:96)
        at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:179)
        at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:208)
        at com.sun.proxy.$Proxy55.saveResource(Unknown Source)
```

上面的日志表示调用创建资源接口错误。再查看一下 uias 服务的异常日志，如果出现类似下面的日志，那么可以断定是此问题：

```bash {2}
2021-09-22 23:01:00 [ ERROR ] - method:com.sinosoft.authorization.module.system.resource.dao.SysResourceDAOImpl.save(SysResourceDAOImpl.java:65)  save failed
org.springframework.dao.DataIntegrityViolationException: not-null property references a null or transient value: com.sinosoft.authorization.module.system.resource.po.SysResource.sysRtypeSub; nested exception is org.hibernate.PropertyValueException: not-null property references a null or transient value: com.sinosoft.authorization.module.system.resource.po.SysResource.sysRtypeSub
        at org.springframework.orm.hibernate4.SessionFactoryUtils.convertHibernateAccessException(SessionFactoryUtils.java:184)
        at org.springframework.orm.hibernate4.HibernateTemplate.doExecute(HibernateTemplate.java:344)
        ... 300 more
```

最重要的是第二行日志，表示 `sysRtypeSub` 字段为空。这个字段是表示资源类型，是从相关联的资源（如父资源、临近资源）中获取到的。所以，当没有找到相关资源时，此字段就会为空。

### 解决方案

:::info

在后期版本中会修复此问题。在问题修复之前，请按照文档进行操作。

:::

需要在系统管理中为自己的应用（即与智能表单集成的应用）创建一个顶级资源，如下图所示：

![](./assets/feature-faq/init-resource.png)
