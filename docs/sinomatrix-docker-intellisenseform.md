---
id: sinomatrix-docker-intellisenseform
title: 基于sinomatrix智能表单的docker部署
---

## 智能表单 在docker-compose.yml中的配置详解

```yaml
bff:
    image: sinomatrix/sinoform-bff:1.4.0
    depends_on:
      - mongodb
    links: 
      - workflowdesign
    ports: 
      - "8085:8085"
    volumes:
      - /usr/local/sino-matrix/bff/config/:/config/
    environment:
      mongodb.address: mongodb://mongodb:27017/form
      uploadFile.path: /usr/local/uploadFile
      SSOService: http://sso:8080/sso
      workflowDesignUrl: http://workflowdesign:8081/workflowDesign
      workflowUrl: http://workflow:18003/workflow
      uiasUrl: http://uias:18001/uias
```

* image: 采用的镜像名称以及版本 sinomatrix/sinoform-bff是名称 1.4.0是版本号。根据自己项目组的计划选择版本

* depends_on： 依赖的容器是 mongodb容器,docker-compose里面必须定义了mongodb容器

* links: 依赖的链接容器

* ports：端口映射，实例中的配置是将主机的端口8085和bff容器的端口8085做了映射

* volumes： 主机和容器目录挂载。主机的目录是/usr/local/sino-matrix/bff/config/ ,宿主机的目录是/config/

  这样操作的目的是可以将springboot的配置文件外放。 因为在容器中执行的启动表单服务命令是在/根目录下，所以才这样映射

* environment 环境变量配置  该配置 需要配合springboot的配置项来发挥作用。在docker中 运行智能表单，一般会使用application-docker这个配置文件。

### application-docker和环境变量的配合使用
application-docker 关键点展示

```yaml
url:
  workflowDesignUrl:  ${workflowDesignUrl} #工作流设计器路径 
  workflowUrl: ${workflowUrl} #工作流引擎路径 
  uiasUrl:  ${uiasUrl} #统一授权管理系统路径 
  resourceUrl: ${uiasUrl} #资源路径
  syncWorkflowItemsUrl:
```



yaml中的${workflowDesignUrl} 可以读取到environment 中的workflowDesignUrl内容。达到灵活配置的目的



### 启动

在docker-compose编辑好的情况下，在docker-compose.yml 

使用命令 docker-compose up -d

### 排查问题逻辑

1. docker  ps -a 查看所有docker容器的运行状态
2. 如果有容器未启动。通过docker logs 容器id 查看报错信息
3. 如果需要进入容器里 可以使用命令 docker exec -it 容器id /bin/sh进入容器
4. 退出容器 可以使用 exit 命令