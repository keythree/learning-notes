# Git 常用命令教程

Git 管本地版本；GitHub 是托管与协作平台。先熟练常用命令，再按「建仓库 → 连远程 → 推送」把本地接到 GitHub。

命令行和大多数 IDE 的 Git 功能，都依赖本机已经装好的 Git。身份配置好之后，再做 `init`、`clone` 和连接远程。

## 怎么读

1. [安装 Git](./install)，确认 `git --version` 能出版本号，并写上 `user.name` 与 `user.email`。
2. [认识 GitHub](./github)，分清本地工具和托管网站。
3. 用 [命令速查](./cheatsheet) 记住日常会敲的那一组。
4. 按 [连 GitHub](./connect) 把本地仓库指到远程。
5. 想一次走通时，直接看 [从零到第一次推送](./first-push)。

## 常用

| 主题 | 你会用到 |
| --- | --- |
| [安装 Git](./install) | 各系统安装方式，以及全局姓名和邮箱 |
| [认识 GitHub](./github) | 仓库、origin、PR、SSH / HTTPS |
| [命令速查](./cheatsheet) | 按场景列出的短命令 |
| [连 GitHub](./connect) | 建空仓库、添加远程、首次推送 |
| [初始化](./init) | `git init` 与 config 的三层作用域 |
| [同步](./sync) | clone、fetch、pull、push、remote |
| [分支](./branch) | 新建、切换、删除 |
| [日常](./daily) | status、add、commit、diff、log、stash、merge |
| [撤销](./undo) | amend、reset、tag |
| [JetBrains IDE](./ide) | 菜单项对应的 Git 命令 |

## 不常用

| 主题 | 你会用到 |
| --- | --- |
| [改历史](./history) | rebase、cherry-pick、revert、force-with-lease |
| [排障](./troubleshoot) | reflog、bisect、按条件查日志、按补丁恢复 |
| [工作区](./worktree) | worktree 与稀疏检出 |
| [其它](./other) | submodule 与 hooks |

已推到共享分支上的撤销，放在 [改历史](./history)，不要和本地还没推送时的 `amend` / `reset` 混在一起用。
