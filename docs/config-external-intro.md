---
id: config-external-intro
title: 外部配置
---

智能表单产品是按照[**微服务十二要素**](https://12factor.net/zh_cn/)构建的，所以同样遵循以下两个原则：

- 一份基准代码（即智能表单产品提供的前端和后端包），多份部署
- 可以在不改变代码的情况下指定配置，如数据库、外部服务等配置

智能表单采用 Spring Boot 开发的，所以同样也继承了 Spring Boot 的强大的配置可定制化能力。如果您已经非常了解 Spring Boot 的配置相关知识，可以跳过此章节。

## Spring Boot 外化配置特性介绍

Spring Boot 允许您将配置定义在 jar 包之外，以便您可以在不同的环境运行同一份 jar 包。Spring Boot 提供了多种外部配置方式，包括 Java 属性文件（`.properties` 文件）、YAML 文件（`.yml` 文件）、环境变量和命令行参数。Spring Boot 定义了严格的配置方式优先级，确保外部配置优先级高于内部配置。

## 配置优先级

Spring Boot 应用的配置来源有很多处，所以需要按照优先级顺序，高优先级的覆盖低优先级的配置。Spring Boot 配置的优先级如下（优先级从低到高）：

1. 默认属性 （通过 `SpringApplication.setDefaultProperties` 定义的）。
2. `@Configuration` 类上的 [@PropertySource](https://docs.spring.io/spring-framework/docs/5.3.10/javadoc-api/org/springframework/context/annotation/PropertySource.html) 注解。
3. 来自配置文件的数据（例如 `application.yml` 文件）
4. 来自 `RandomValuePropertySource` 中的 `random.*` 属性。
5. 操作系统中的环境变量。
6. Java 系统属性（通过 `System.getProperties()` 获取）。
7. 来自 `java:comp/env` 的 JNDI 属性。
8. `ServletContext` 初始化参数。
9. `ServletConfig` 初始化参数。
10. 来自 `SPRING_APPLICATION_JSON` 的属性。
11. 命令行参数。
12. 在测试中定义的属性。（只在运行测试时有效）
13. `@TestPropertySource` 定义的属性。（只在运行测试时有效）
14. 当启用了 devtools 时，在 `$HOME/.config/spring-boot` 文件夹定义的 Devtools 相关配置。

其中 `3`、`5`、`11` 是最常用，而 `3` 是最复杂的，在下个章节介绍不同配置文件的优先级。

## 配置文件优先级

配置文件需要遵循以下的优先级（按照从低到高排序）：

1. 在 jar 包中的应用配置（如 `application.yml`）
2. 在 jar 包中的特定环境的应用配置（如 `application-dev.yml`、`application-prod.yml`）
3. 在 jar 包之外定义的应用配置（如 `config/application.yml`）
4. 在 jar 包之外定义的特定环境的应用配置（如 `config/application-dev.yml`、`config/application-prod.yml`）

## 配置文件路径

Spring Boot 会自动从以下路径查找 `application.yaml` 和 `application.properties` 文件（优先级从低到高排序）：

1. 从类路径中获取
   1. 根类路径
   2. 在类路径的 `/config` 包下
1. 从当前运行目录中获取（指运行 jar 包的目录）
   1. 当前运行目录
   2. 当前运行目录的 `config` 子目录
   3. `config` 子目录中的直接子目录

## 指定外部配置文件路径

可以在执行 jar 包时，通过命令行参数 `spring.config.location` 指定查找配置文件的路径，如下所示：

```bash
$ java -Dspring.profile.active=dev \
        -Dspring.config.location=classpath:/ \
        -Dspring.config.location=file:/apps/sino-intellisense-form/backend/config/ \
        -jar sino-intellisense-form-1.12.0.jar
```

上面的示例通过 `spring.config.location` 指定了两个查找配置文件的路径，即：

- 根类路径
- `/apps/sino-intellisense-form/backend/config/` 目录

## 特定环境的配置文件

Spring Boot 允许我们为不同的环境定义不同的配置文件。最典型的场景就是为开发、测试、生产单独指定配置文件。例如我们分别为三个环境定义了配置文件：

- `applicaiton.yaml` （默认配置文件）
- `application-dev.yaml` （开发环境配置文件）
- `application-test.yaml` （测试环境配置文件）
- `application-prod.yaml` （生产环境配置文件）

我们在运行 jar 包时，可以通过 `spring.profile.active` 参数来指定采用哪种环境的配置文件。例如在生产环境中启动时，我们通过下面的命令行启动：

```bash {2}
$ java
  -Dspring.profile.active=prod \
  -jar sino-intellisense-form-1.12.0.jar
```

这样，在生产环境中，Spring Boot 就会去查找 `application.yaml` 和 `application-prod.yaml` 文件，而不会去找 `application-dev.yaml` 和 `application-test.yaml` 文件。

## 参考文档

- [Spring Boot externalized configuration](https://docs.spring.io/spring-boot/docs/2.4.11/reference/html/spring-boot-features.html#boot-features-external-config)
