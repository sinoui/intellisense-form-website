---
id: deployment-independent
title: 独立部署智能表单
---

## mongodb安装

### 下载安装包

wget http://downloads.mongodb.org/linux/mongodb-linux-x86_64-rhel70-latest.tgz

### 解压安装包

tar -zxf mongodb-linux-x86_64-rhel70-latest.tgz

### 将 mongodb 部署到特定目录

mv mongodb-linux-x86_64-rhel70-4.3.2-48-gd455f65/ /usr/local/mongodb

### 创建必要的目录

cd /usr/local/mongodb/
mkdir logs
mkdir -p data/

### 编写配置文件

进入 /usr/local/mongodb/ 目录, 在里面创建一个名为mongodb.conf的文件

> ``` yaml
> #数据文件存放目录
> dbpath = data
> #日志文件存放目录
> logpath = logs/mongodb.log
> #端口
> port = 27017
> #以守护进程的方式启用，即后台运行;默认false
> fork = true
> # 关闭web管理访问，默认关闭27018端口访问，这个是在prot端口上加1000
> #httpinterface = true
> #是否开启权限验证
> auth = false
> #绑定ip，让其能够通过外网访问， 0.0.0.0代表所有
> bind_ip = 0.0.0.0
> ```

### 启动 mongodb

bin/mongod -f mongodb.conf



## nginx使用

### 意义

目前，智能表单没有集成单点登录系统，需要依托业务系统来完成授权（使用同一个SSOID），所以需要在同一个域名下访问。因此借用nginx完成代理转发

### 思路步骤

* 业务系统在tomcat启动的时候，需要绑定tomcat的ip地址为本地ip：127.0.0.1。

  具体配置位置在tomcat /conf目录下server.xml 文件中。在标签元素**Connector**标签 添加属性

  address=“127.0.0.1”

* nginx关键配置点：

  - server {
          listen       192.168.80.142:8084 default_server;
          server_name  _;
          root         /var/www/default;

    192.168.80.142 是服务器外网或者局域网地址 8084 是监听端口 和业务系统的端口号，

    保持一致。

    root 这个是前端项目放置的物理路径

  - server下 配置 location 路由代理规则

    - 业务系统
      `location /demo/ {`
        		`proxy_set_header Host $host;`
        		`proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`
        		`proxy_set_header X-Forwarded-Host $http_host;`
        		`proxy_set_header X-Forwarded-Port $server_port;`
        		`proxy_set_header X-Forwarded-Proto $scheme;`
        		`proxy_set_header X-Real-IP $remote_addr;`
        		`proxy_pass http://127.0.0.1:8084;`
      `}`
      8084是业务系统的端口 /demo是业务系统的前缀路由
    - 智能表单 - 后台接口服务
      location /apis/ {
         proxy_set_header Host $host;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Host $http_host;
         proxy_set_header X-Forwarded-Port $server_port;
         proxy_set_header X-Forwarded-Proto $scheme;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_pass http://127.0.0.1:8085;
       }
    - 智能表单 - 业务前端服务
        location /intellisense-form/ {
        	index index.html index.htm;
        	try_files $uri $uri/ /intellisense-form/index.html;
        	add_header Cache-Control no-store;
        }
    - 智能表单 - 管理端服务
        location /intellisense-form-manager/ {
          index index.html index.htm;
          try_files $uri $uri/ /intellisense-form-manager/index.html;
          add_header Cache-Control no-store;
         }

## 前端项目部署

1. 找到intellisense-form 和intellisense-form-manger 文件夹
2. 将这2个前端文件夹部署到nginx配置文件中server 下root 指定的目录中

## 后端项目部署

### 上传jar文件到服务器

智能表单部署文件intellisenseform-bff-｛version｝.jar  复制到服务器上

### jar包外的配置文件

为了更方便的修改配置文件，可以在与jar文件同级的目录下。自己可以手动的去新建一个config文件夹，可以将项目里面的yml。拷贝一份，放到config文件夹下。然后在根据实际情况修改配置文件。原理利用了springboot加载配置的优先级不同，外部配置文件属性会覆盖内部配置文件属性。

**注意** !!!   config的目录必须和执行java -jar 是同一级目录。否则不起作用。本例中，执行java -jar intellisenseform-bff-｛version｝.jar 有效。 如果执行 java -jar  /usr/local/jar/intellisenseform-bff-｛version｝.jar 那就不起作用。除非将config 放在根目录下

### 请勿使用项目中的dev环境

此处强调一下。不要使用dev环境 dev环境有很多特殊处理。如果测试环境使用test环境， docker是docker容器部署时候使用的配置文件。

### springboot参数说明

1. server.port = 8085  #应用启动端口
2. server.context-path: / #应用路径
3. spring.data.mongodb.url mongodb://192.168.80.142/form
4. sso.ssoService:  #单点登录服务器
5. url.workflowDesignUrl = #工作流设计器路径
6. url.workflowUrl = #工作流引擎路径
7. url.uiasUrl = # 统一授权管理系统路径
8. configs.systemId = #业务系统的系统id
9. database.type = {mysql|oracle|mongo} 系统中业务数据存储的数据库类型,配置为空 默认采用mongodb
10. spring.datasource 业务数据存储的数据库配置信息

### 启动智能表单服务

进入到jar文件所在的目录，执行一下启动命令。

nohup java  -Dspring.profiles.active=test -jar intellisenseform-bff-{替换为对应的版本}.jar > intellisenseform-bff.log &

## 常见问题

### 业务数据点击“发送”走工作流的时候，出现超时问题

解决方式：需要在 工作流设计器平台---》系统配置 ，找到待办授权服务，清空服务名称，把后面的下拉选项，选择为本地实现类。！！！一定要重启工作流设计器服务

### 工作流标题乱码 

原因：tomcat7之前默认都是iso-8859-1。

解决方式：设置workflow项目的tomcat字符集为utf-8.修改tomcat下的conf/server.xml文件

```
<Connector port="8080"  protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" **URIEncoding="UTF-8"** useBodyEncodingForURI="true""/>


```

