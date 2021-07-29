# 智能表单产品站点

外网地址：[http://sinoui.gitee.io/intellisense-form-website/](http://sinoui.gitee.io/intellisense-form-website/)

## 写文档

在写文档时，需要启动此站点项目：

```shell
# 第一次使用，需要安装依赖
$ yarn install
# 启动
$ yarn start
```

## 部署文档

文档编写完成后，就可以发布到外网。需要两个步骤完成文档部署：

### 第一步：发布文档

通过下面的命令行即可发布文档：

```shell
yarn cross-env GIT_USER=<你的gitee账号> USE_SSH=true docusaurus deploy
```

也可以在环境变量中配置 `GIT_USER` 值。配置完成后，即可通过下面的简单命令发布文档：

```shell
yarn deploy
```

### 第二步：在 gitee 上同步发布的文档

文档发布后，还需要在 gitee 上同步发布的文档。

首先打开： [https://gitee.com/sinoui/intellisense-form-website/pages](https://gitee.com/sinoui/intellisense-form-website/pages)

然后点击页面中的更新按钮，完成同步，如下图所示：

![同步发布的文档](images/update-page.png)
