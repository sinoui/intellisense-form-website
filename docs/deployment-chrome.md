---
id: deployment-chrome
title: 安装 chrome
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

本文介绍如何在 Linux 服务器上安装 Chrome。Windows 操作系统自带的 edge 可以充当 chrome 浏览器，所以不需要单独安装 chrome。

## 一、在 Ubuntu 中安装 Chrome

### 1.1. 使用国内 apt 镜像源

:::tip 提示

如果已经服务器已经采用了国内 apt 镜像源，那么可以跳过此步骤。

:::

首先备份一下 apt 镜像源配置文件，以防出错，然后删除 sources.list：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
rm /etc/apt/sources.list
```

然后使用 vim、vi 或者其他编辑器打开 /etc/apt/sources.list 文件，加入如下的内容：

```bash
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security multiverse
```

刷新软件源信息：

```bash
sudo apt update
```

### 1.2. 安装依赖

```bash
sudo apt-get install libxss1 libappindicator1 libindicator7
```

### 1.3. 下载 Chrome 安装包

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

### 1.4. 安装 Chrome

```bash
sudo dpkg -i google-chrome*.deb
sudo apt-get install -f
```

### 1.5. 验证 Chrome

```bash
$ google-chrome-stable --version
Google Chrome 96.0.4664.110
```

## 二、在 centos 中安装 Chrome

### 2.1. 使用国内 yum 镜像源

:::tip 提示

如果已经服务器已经采用了国内 yum 镜像源，那么可以跳过此步骤。

:::

首先备份一下 yum 镜像源配置文件，以防出错：

<Tabs
defaultValue="centos-7"
groupId="centos"
values={[
{ label: "centos 7", value: "centos-7" },
{ label: "centos 8", value: "centos-8" },
]}>
<TabItem value="centos-7">

```bash
cp -a /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

  </TabItem>
  <TabItem value="centos-8">

```bash
cd /etc/yum.repos.d/
mkdir repo_bak/
mv *.repo repo_bak/
```

</TabItem>
</Tabs>

然后使用国内镜像：

<Tabs
defaultValue="centos-7"
groupId="centos"
values={[
{ label: "centos 7", value: "centos-7" },
{ label: "centos 8", value: "centos-8" },
]}>
<TabItem value="centos-7">

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo https://repo.huaweicloud.com/repository/conf/CentOS-7-reg.repo
```

  </TabItem>
  <TabItem value="centos-8">

```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/centos-8.repo
```

  </TabItem>
</Tabs>

更新 yum：

<Tabs
defaultValue="centos-7"
groupId="centos"
values={[
{ label: "centos 7", value: "centos-7" },
{ label: "centos 8", value: "centos-8" },
]}>
<TabItem value="centos-7">

```bash
yum clean all
yum makecache
```

</TabItem>
<TabItem value="centos-8">

```bash
dnf -y install epel-release
dnf clean all
dnf makecache
dnf repolist
```

</TabItem>
</Tabs>

### 2.2. 下载 Chrome

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

### 2.3. 安装 Chrome

<Tabs
defaultValue="centos-7"
groupId="centos"
values={[
{ label: "centos 7", value: "centos-7" },
{ label: "centos 8", value: "centos-8" },
]}>
<TabItem value="centos-7">

```bash
yum install -y google-chrome-stable_current_x86_64.rpm
yum update glib2 -y
```

  </TabItem>
  <TabItem value="centos-8">

```bash
sudo dnf localinstall google-chrome-stable_current_x86_64.rpm
```

</TabItem>
</Tabs>

### 2.4. 验证 Chrome

```bash
$ google-chrome --version
Google Chrome 96.0.4664.110
```

## 三、Ubuntu 离线安装 Chrome

需要在外网环境安装好 Chrome，然后制作 `apt-get` 离线源，在内网环境中就可以通过相同的步骤安装 Chrome。

### 3.1. 制作 apt-get 离线源

### 3.2. 在内网环境中使用离线源

### 3.3. 安装 Chrome

## 四、centos 离线安装 Chrome

需要在外网环境安装好 Chrome，然后制作 `yum` 离线源，在内网环境中就可以通过相同的步骤安装 Chrome。

### 3.1. 制作 yum 离线源

### 3.2. 在内网环境中使用离线源

### 3.3. 安装 Chrome
