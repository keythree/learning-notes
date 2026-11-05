# 安装 Git

命令行和大多数 IDE 的 Git 功能都依赖本机已安装 Git。装好后在终端执行下面的命令，能显示版本号即可。

```bash
git --version
```

## Windows

从 [git-scm.com](https://git-scm.com/downloads) 下载安装包，一路 Next。也可以用 winget：

```bash
winget install Git.Git
```

## macOS

已安装 Homebrew 时：

```bash
brew install git
```

也可以安装 Xcode Command Line Tools：

```bash
xcode-select --install
```

## Linux

Debian / Ubuntu：

```bash
sudo apt install git
```

Fedora：

```bash
sudo dnf install git
```

## 先配置身份

装完先配身份：`git config --global user.name` 与 `user.email`，再去做 init / clone / 连 GitHub。

```bash
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
```

查看是否写上：

```bash
git config --global --get user.name
git config --global --get user.email
```

::: tip
这组姓名和邮箱会进入之后每次提交。邮箱与 GitHub 账号一致时，网页上的提交记录才能对上你的头像。配置作用域的差别见 [初始化](./init)。
:::
