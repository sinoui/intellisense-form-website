---
id: deployment-chrome
title: 安装 chrome
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

本文介绍如何在 Linux 服务器上安装 Chrome。Windows 操作系统自带的 edge 可以充当 chrome 浏览器，所以不需要单独安装 chrome。

## 一、在 Ubuntu 中安装 Chrome（在线安装）

### 1.1. 使用国内 apt 镜像源

:::tip 提示

如果服务器已经采用了国内 apt 镜像源，那么可以跳过此步骤。

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

## 二、在 centos 中安装 Chrome（在线安装）

### 2.1. 使用国内 yum 镜像源

:::tip 提示

如果服务器已经采用了国内 yum 镜像源，那么可以跳过此步骤。

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

需要先[在外网环境安装好 Chrome](#一、在-ubuntu-中安装-chrome（在线安装）)，然后制作 `apt-get` 离线源，在内网环境中就可以通过相同的步骤安装 Chrome。

### 3.1. 制作 apt-get 离线源

首先，找一台可以访问互联网的 Ubuntu 服务器，按照[在 Ubuntu 中安装 Chrome（在线安装）](#一、在-ubuntu-中安装-chrome（在线安装）)教程，安装好 Chrome 浏览器，然后在此机器上制作 apt-get 离线源。

首先，需要将 ubuntu 官方源加入到 `/etc/apt/sources.list` 中：

```bash
deb http://archive.ubuntu.com/ubuntu hirsute main restricted
deb http://archive.ubuntu.com/ubuntu hirsute-updates main restricted
deb http://archive.ubuntu.com/ubuntu hirsute universe
deb http://archive.ubuntu.com/ubuntu hirsute-updates universe
deb http://archive.ubuntu.com/ubuntu hirsute multiverse
deb http://archive.ubuntu.com/ubuntu hirsute-updates multiverse
deb http://archive.ubuntu.com/ubuntu hirsute-backports main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu hirsute-security main restricted
deb http://archive.ubuntu.com/ubuntu hirsute-security universe
deb http://archive.ubuntu.com/ubuntu hirsute-security multiverse
```

然后执行 apt 更新操作：

```bash
apt update
```

拷贝 apt 缓存的安装包到指定目录（这里假设为 `/root/offline-packages`，可以自定义。注意此目录非常重要，在内网环境中使用离线包时，目录要保持一致）：

```bahs
mkdir /root/offline-packages
cp -r /var/cache/apt/archives /root/offline-packages
chmod 777 -R /root/offline-packages
```

然后制作软件包的依赖关系：

```bash
apt-get install dpkg-dev
cd /root/offline-packages
dpkg-scanpackages ./archives /dev/null > archives/Packages
```

然后将 `/root/offline-packages` 制作成压缩包：

```bash
cd /root
tar -czvf /root/offline-packages.tar.gz offline-packages
```

将离线包 `offline-packages.tar.gz` 和 `google-chrome-stable_current_amd64.deb` 两个文件拷贝到 U 盘中，复制到内网环境服务器的 `/root` 目录中。

### 3.2. 在内网环境中使用离线源

解压缩 `offline-packages.tar.gz`：

```bash
cd /root
tar -zxvf offline-packages.tar.gz
```

替换离线 apt 源配置：

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
echo "deb file:///root/offline-packages archives/" > /etc/apt/sources.list
apt-get update --allow-insecure-repositories
```

### 3.3. 安装 Chrome

安装 Chrome：

```bash
sudo apt-get install libxss1 libappindicator1 libindicator7
dpkg -i google-chrome*.deb
apt-get --fix-broken install
```

然后验证 Chrome 是否安装成功：

```bash
$ google-chrome-stable --version
Google Chrome 96.0.4664.110
```

## 四、centos 离线安装 Chrome

需要[在外网环境安装好 Chrome](#二、在-centos-中安装-chrome（在线安装）)，然后制作 `yum` 离线源，在内网环境中就可以通过相同的步骤安装 Chrome。

### 4.1. 制作 yum 离线源

1. Chrome 的依赖包比较多，手动查找依赖包太麻烦，推荐使用`downloadonly`对依赖包进行管理。

```shell
# 安装downloadonly
yum install yum-plugin-downloadonly

# 创建空文件夹做为Chrome的依赖包存放路径
mkdir -p /root/offline-packages

# 下载Chrome的依赖
yum install --downloadonly --downloaddir=/root/offline-packages  google-chrome-stable_current_x86_64.rpm

# 如果服务器上没有安装wget，需要添加wget离线包
yum install --downloadonly --downloaddir=/root/offline-packages  wget

# 将Chrome的安装包添加到文件中
mv google-chrome-stable_current_x86_64.rpm /root/offline-packages
```

2. 将`/root/offline-packages`制作成压缩包

```bash
cd /root
tar -czvf /root/offline-packages.tar.gz offline-packages
```

将离线包 offline-packages.tar.gz 拷贝到 U 盘中，复制到内网环境服务器的 /root 目录中

### 4.2. 在内网环境中使用离线源

解压缩 `offline-packages.tar.gz`：

```bash
cd /root
tar -zxvf offline-packages.tar.gz
```

### 4.3. 安装 Chrome

1. 解压缩 `offline-packages.tar.gz`：

```bash
cd /root
tar -zxvf offline-packages.tar.gz
```

2. 执行下面命令进行离线安装。

```shell
cd /root/offline-packages
sudo rpm -ivh --force *.rpm
```

3. 脚本执行完成之后验证。

```shell
$ google-chrome --version
Google Chrome 96.0.4664.110
```
