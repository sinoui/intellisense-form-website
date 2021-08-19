---
id: deployment-independent
title: 部署智能表单
---

## 部署必备环境

1. 核心数据库：mongodb
2. 网关：nginx
3. 需要提供 统一授权服务，工作流设计服务，工作流引擎服务

## mongodb 安装

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

进入 /usr/local/mongodb/ 目录, 在里面创建一个名为 mongodb.conf 的文件

> ```yaml
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

## nginx 使用

### nginx 安装

1. 下载 nginx 稳定版，官网地址：http://nginx.org/
2. 将下载下来的压缩包解压出来 tar -zxvf nginx-version.tar.gz
3. 解压后会生成一个 nginx-version 目录，切换到该目录下，运行./configure 进行初始化配置
4. 运行 make install 进行编译。默认安装到/usr/local/nginx 目录下
5. 如果安装中出现其他问题，可以自行百度

### 意义

目前，智能表单没有集成单点登录功能，但是需要 SSOID（保存在浏览器 cookie 中）进行鉴权，所以一般情况下是在业务系统中加入一个入口按钮或者链接跳转到智能表单首页。由于需要共享 SSOID，两个系统的域名必须是同一个。所以需要借助 nginx 根据不同 url 前缀来做反向代理。

### 思路步骤

- 业务系统在 tomcat 启动的时候，需要绑定 tomcat 的 ip 地址为本地 ip：127.0.0.1。

  具体配置位置在 tomcat /conf 目录下 server.xml 文件中。在标签元素**Connector**标签 添加属性

  address=“127.0.0.1”。 如果业务系统是采用 springboot 框架，在配置文件中，server.address=127.0.0.1

- nginx 关键配置点：

  - server

    ```nginx
    server {
      listen 192.168.80.142:8084 default_server;
      server_name _;
      root /var/www/default;
    }
    ```

    192.168.80.142 是服务器外网或者局域网 IP 地址 8084 是监听端口 和业务系统的端口号，

    保持一致。

    **关键点** _nginx 的监听必须是服务器 ip 地址+端口，否则和业务系统会有冲突_

    root 这个是前端项目放置的物理路径

  - server 下 配置 location 路由代理规则

    - 业务系统

      ```nginx
      location /demo/ {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $http_host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://127.0.0.1:8084;
      }
      ```

      8084 是业务系统的端口 /demo 是业务系统的前缀路由

    - 智能表单 - 后台接口服务

      ```nginx
      location /apis/intellisense-form/ {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Host $http_host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://127.0.0.1:8085;
      }
      ```

    - 智能表单 - 业务前端服务

      ```nginx
      ## 配置主题入口文件不做缓存
      location ~ .\*/remote-entry.js$ {
        add_header Cache-Control no-store;
      }

      location /intellisense-form/ {
        index index.html index.htm;
        try_files $uri $uri/ /intellisense-form/index.html;
        add_header Cache-Control no-store;
      }
      ```

    - 智能表单 - 移动端服务

      ```nginx
      location /intellisense-form-mobile/ {
        index index.html index.htm;
        try_files $uri $uri/ /intellisense-form-mobile/index.html;
        add_header Cache-Control no-store;
      }
      ```

    - 智能表单 - 管理端服务

      ```nginx
      location /intellisense-form-manager/ {
        index index.html index.htm;
        try_files $uri $uri/ /intellisense-form-manager/index.html;
        add_header Cache-Control no-store;
      }
      ```

    - 智能表单 - 静态资源缓存配置

      ```nginx
      location ~ /intellisense-form.*\.(gif|jpg|jpeg|png|bmp|swf|js|css|md|pdf)$ {
        expires 365d;
      }
      ```

## 管理端前端部署

1. 找到 intellisense-form-manager 文件夹
2. 将上述前端文件夹部署到 nginx 配置文件中 server 下 root 指定的目录中

## pc 前端项目部署

1. 找到 intellisense-form 文件夹
2. 将上述前端文件夹部署到 nginx 配置文件中 server 下 root 指定的目录中

## 移动端项目部署

1. 找到 intellisense-mobile 文件夹
2. 将上述前端文件夹部署到 nginx 配置文件中 server 下 root 指定的目录中

## 后端项目部署

### 上传 jar 文件到服务器

智能表单部署文件 intellisenseform-bff-｛version｝.jar 复制到服务器上

### jar 包外的配置文件

为了更方便的修改配置文件，可以在与 jar 文件同级的目录下。自己可以手动的去新建一个 config 文件夹，可以将项目里面的 yml。拷贝一份，放到 config 文件夹下。然后在根据实际情况修改配置文件。原理利用了 springboot 加载配置的优先级不同，外部配置文件属性会覆盖内部配置文件属性。

**注意** !!! config 的目录必须和执行 java -jar 是同一级目录。否则不起作用。本例中，执行 java -jar intellisenseform-bff-｛version｝.jar 有效。 如果执行 java -jar /usr/local/jar/intellisenseform-bff-｛version｝.jar 那就不起作用。除非将 config 放在根目录下

### 请勿使用项目中的 dev 环境

此处强调一下。不要使用 dev 环境 dev 环境有很多特殊处理。如果测试环境使用 test 环境， docker 是 docker 容器部署时候使用的配置文件。

### springboot 参数说明

1. server.port = 8085 #应用启动端口
2. server.context-path: / #应用路径
3. spring.data.mongodb.url mongodb://192.168.80.142/form
4. sso.ssoService: #单点登录服务器
5. url.workflowDesignUrl = #工作流设计器路径
6. url.workflowUrl = #工作流引擎路径
7. url.uiasUrl = # 统一授权管理系统路径
8. configs.systemId = #业务系统的系统 id
9. database.type = {mysql|oracle|mongo} 系统中业务数据存储的数据库类型,配置为空 默认采用 mongodb
10. spring.datasource 业务数据存储的数据库配置信息

### 启动智能表单服务

进入到 jar 文件所在的目录，执行一下启动命令。

nohup java -Dspring.profiles.active=test -jar intellisenseform-bff-{替换为对应的版本}.jar > intellisenseform-bff.log &

## 常见问题

### 业务数据点击“发送”走工作流的时候，出现超时问题

解决方式：需要在 工作流设计器平台---》系统配置 ，找到待办授权服务，清空服务名称，把后面的下拉选项，选择为本地实现类。！！！一定要重启工作流设计器服务

### 工作流标题乱码

原因：tomcat7 之前默认都是 iso-8859-1。

解决方式：设置 workflow 项目的 tomcat 字符集为 utf-8.修改 tomcat 下的 conf/server.xml 文件

```xml
<Connector port="8080"  protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" **URIEncoding="UTF-8"** useBodyEncodingForURI="true""/>


```
