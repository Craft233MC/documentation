---
order: 1
---

# 安装游戏🎮

Craft233 为 Java 版服务器，支持 `1.21.x` 至 `26.2` 的客户端。服务器列表 MOTD 会标注当前支持的版本范围。

Minecraft `26.2` 需要 Java 25；仅游玩 `1.21.x` 时 Java 21 即可。

::: info
本页教程仅供学习交流使用。如有能力，建议购买正版 Minecraft。
:::

## 平台与版本

| 平台 | 运行方式 |
| --- | --- |
| Windows | 官方启动器、PCL、HMCL |
| Linux | HMCL 等第三方启动器 |
| macOS | 官方启动器、HMCL |
| Android | FCL、PojavLauncher |

## Android 安卓

Android 平台通过第三方 Java 版启动器运行，推荐以下两款：

- [FCL](https://foldcraftlauncher.cn/down)
- [PojavLauncher](https://github.com/PojavLauncherTeam/PojavLauncher/releases/latest)

安装完成后在启动器内登录账号并下载对应版本的游戏即可。

## Linux

### 使用包管理器安装 Java

非重度使用场景下，发行版提供的 OpenJDK 即可满足需求。

apt 包管理器（Debian、Ubuntu、Deepin 等）：

```bash
sudo apt-get install openjdk-25-jdk
```

dnf 包管理器（Fedora、CentOS 等）：

```bash
sudo dnf install java-25-openjdk
```

pacman 包管理器（Arch、Manjaro 等）：

```bash
sudo pacman -S jdk25-openjdk
```

### 手动安装 Java（通用）

需要更高性能时，可使用 GraalVM。

1. 打开 [GraalVM 下载页](https://www.graalvm.org/downloads/)。
2. 按系统与 CPU 架构下载 Java 25 版本。
3. 将得到的 `.tar.gz` 解压至任意目录。
4. 进入解压目录的 `bin` 目录，在该路径打开终端。

临时加入环境变量：

```bash
export PATH=$PATH:$PWD
```

需要长期生效时，将上述内容写入 `~/.bashrc` 或 `~/.zshrc`。

执行 `java -version`，输出 Java 版本信息即安装成功。

### 使用 HMCL 启动

打开 [HMCL Jenkins CI](https://ci.huangyuhui.net/job/HMCL/)，下载 `.jar` 结尾的文件，存放在单独目录中。

```bash
java -jar HMCL文件.jar
```

## Windows

### 使用安装包安装 Java

不使用 GraalVM 时，推荐安装 zuluJDK。

打开 [zuluJDK 下载页](https://www.azul.com/downloads)，按主机 CPU 架构选择 `.msi` 安装包，运行后按提示完成安装。

### 手动安装 Java（通用）

1. 打开 [GraalVM 下载页](https://www.graalvm.org/downloads/)，按系统与架构下载 Java 25 版本。
2. 将 `.zip` 解压至任意目录。
3. 进入解压目录的 `bin` 目录，复制资源管理器地址栏中的路径。
4. 右键「此电脑」，进入「高级系统设置」→「环境变量」。
5. 在系统变量中选中 `Path`，点击「编辑」→「新建」，粘贴刚才复制的路径。
6. 保存后重新打开 `cmd`，执行 `java -version` 验证。

### 启动器

Windows 推荐 PCL 启动器，也可使用 HMCL。

## macOS

### 使用安装包安装 Java

安装方式与 Windows 相同，参考 [Windows 安装包安装](#使用安装包安装-java)。

### 手动安装 Java（通用）

安装方式与 Linux 相同，参考 [Linux 手动安装](#手动安装-java-通用)。

### 使用 HMCL 启动

将 HMCL 的 `.jar` 文件放入单独目录。

- 使用安装包安装的 Java：双击 `HMCL.jar` 运行。
- 使用手动安装的 Java：参考 [Linux 使用 HMCL 启动](#使用-hmcl-启动)。
