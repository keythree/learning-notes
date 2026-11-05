# 初始化

新目录要先变成 Git 仓库，并写上提交时用的身份。

## 配置作用域

`git config` 有三层，范围从大到小：

| 作用域 | 含义 | 配置文件 |
| --- | --- | --- |
| `--system` | 整机所有用户 | 系统级配置 |
| `--global` | 当前用户所有仓库 | `~/.gitconfig` |
| `--local` | 仅当前仓库（默认） | `.git/config` |

冲突时：**local > global > system**。日常用 `--global` 写姓名和邮箱；某个仓库要单独用别的邮箱时，在仓库里再执行不带 `--global` 的 `git config user.email`。

## 步骤

```bash
git init
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
git config --list
```

`git init` 会在当前目录创建 `.git`。姓名和邮箱建议在第一次 `commit` 之前设好，否则提交记录里的作者是空的或来自环境变量。

查看某一项时可以收窄输出：

```bash
git config --show-origin --get user.email
```

`--show-origin` 会告诉你这项值来自哪一层配置文件。

## 和远程的关系

`git init` 只建立本地仓库，还没有 GitHub 上的远程。接下来：

- 还没有远程仓库：按 [连 GitHub](./connect) 在网页创建空仓库，再 `git remote add origin`。
- 远程已经有内容：不必 `init`，直接 `git clone`。

各系统的安装命令见 [安装 Git](./install)。
