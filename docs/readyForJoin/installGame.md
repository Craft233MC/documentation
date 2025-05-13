# 安装游戏🎮
支持游玩Minecraft的平台有很多，但是受限于实际可以测试的设备，我们在此只能提供手机，Linux, Windows, MacOS的安装教程

对于游玩Craft233，我们只推荐安装`最新正式版`的基岩版。

对于Java版，我们支持1.20及以上的版本进入，但是优先推荐最新的版本。

::: info
当然，此教材仅供学习交流使用，如有能力，请尽量支持正版
:::

## 手机平台
### Android安卓
#### 基岩版
对于安卓平台，如果你拥有来自Google Play商店的正版Minecraft基岩版，那么你只需要在Google Play商店搜索`Minecraft`，并安装即可。

如果没有正版Minecraft，也可以从国内论坛的下载站获取，这里推荐两个站点

::: warning
不同下载站间的游戏签名不同，后续更新也需要从相同的下载站获取
:::

- [MineBBS](https://mcbedl.com/)

- [KLPBBS](https://mcapks.net/)
#### Java版
对于游玩Java版，需要通过第三方启动器运行，这里推荐如下的启动器

- [FCL](https://foldcraftlauncher.cn/down)

- [PoJav](https://github.com/PojavLauncherTeam/PojavLauncher/releases/latest)

下载安装后正常登录账号并下载游戏即可

## Linux
### 使用包管理器
对于Linux平台，你需要先安装Java。一般来说可以通过软件源安装，非重度发烧用户openjdk足够使用

这里可以通过以下命令安装

apt包管理器(debian,ubuntu,deepin等)
```bash
sudo apt-get install openjdk-21-jdk
```

dnf包管理器(fedora,centos等)
```bash
sudo dnf install java-21-openjdk
```

pacman包管理器(arch,manjaro等)
```bash
sudo pacman -S jdk21-openjdk
```

### 手动安装(通用)
如果非以上的包管理器或需要手动安装，则可以一步到位，使用优化较好的jvm虚拟机，如`graalvm`

首先打开[GraalVM官网](https://www.graalvm.org/downloads/#)，并按照自己系统和架构下载java21的版本。

之后会得到一个`.tar.gz`的文件，解压到你喜欢的目录，然后进入解压后目录的`bin`目录，并在此路径打开终端

执行如下命令设置到临时的环境变量中

```bash
export PATH=$PATH:$PWD
```

如果想将更改保存到终端的变量中，请将以上内容添加到`~/.bashrc`或`~/.zshrc`文件中

最后运行java命令，如果出现java帮助信息，则安装成功

### 使用HMCL启动
接着下载`HMCL`启动器

打开[HMCL Jenkins CI](https://ci.huangyuhui.net/job/HMCL/)，下载`.jar`结尾的文件，建议保存在一个单独的文件夹

接着使用如下命令即可启动

```bash
java -jar HMCL文件.jar
```

## Windows
### Java安装包安装
对于Windows平台，如果不使用`GraalVM`的java，推荐安装`zuluJDK`

打开[zuluJDK下载页](https://www.azul.com/downloads)，按照主机CPU架构选择下载，下载选择`.msi`

接着运行安装包，按照提示进行安装即可

### 手动安装(通用)
手动安装可以选择`GraalVM`的java，这里使用`GraalVM`作为示例，除了下载，其他步骤都是一样的

首先打开[GraalVM官网](https://www.graalvm.org/downloads/#)，并按照自己系统和架构下载java21的版本。

将得到的`.zip`文件解压到你喜欢的目录，然后进入解压后目录的`bin`目录，点击资源管理器中的路径，复制当前路径

接着右键`此电脑`,在新的界面中选择`高级系统设置`,接着选择`环境变量`，在环境变量中选择系统变量，选中`Path`，然后点击编辑

在变量列表中新建一条，并粘贴刚刚复制的路径，然后点击确定，保存退出即可

重新打开`cmd`，运行java命令有帮助信息，则安装成功

### 启动器
Windows下推荐PCL启动器，也可以使用HMCL等启动器

其他正常安装即可

## MacOS
### Java安装包安装
对于MacOS平台，如果不使用`GraalVM`的java，推荐安装`zuluJDK`

安装的方式与Windows平台类似，这里不再赘述

请移步[Windows.Java安装包安装](#java安装包安装)
### 手动安装(通用)
安装方式与Linux平台类似，这里不再赘述

请移步[Linux.手动安装(通用)](#手动安装通用)

### 使用HMCL启动
将HMCL的`.jar`文件放在一个文件夹中

对于使用Java安装包安装的java，直接双击`HMCL.jar`即可运行

对于使用手动安装的java，需要参考Linux的启动方式，请移步[Linux.使用HMCL启动](#使用HMCL启动)