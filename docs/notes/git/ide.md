# JetBrains IDE

JetBrains 系列 IDE（IntelliJ IDEA、WebStorm、PyCharm 等）的 Git 菜单，底层仍是这些命令。菜单名字和命令的对应关系如下。

| 菜单 | 命令 |
| --- | --- |
| 提交 | `git commit` |
| 推送 | `git push` |
| 更新项目 | 类似 `git pull` |
| 拉取 | `git pull` |
| 提取 | `git fetch` |
| 合并 | `git merge` |
| 变基 | `git rebase` |
| 新建分支 | `git switch -c` |
| 重置 HEAD | `git reset` |
| 显示 Git 日志 | `git log` |
| 管理远程 | `git remote` |
| 克隆 | `git clone` |

## 使用时注意

- **更新项目**在不同版本里可能先 `fetch`，再按你的设置合并或变基，效果接近 `git pull`，但不总是同一种策略。不确定时看 IDE 的 Git 日志，或在终端执行 `git status`。
- **变基**对应 `git rebase`。共享分支上慎用，说明见 [改历史](./history)。
- **重置 HEAD**会打开 reset 模式选择。`hard` 会丢掉工作区修改，和终端里的 `git reset --hard` 一样。
- 菜单不可用时，先确认本机 `git --version` 有输出，并且项目根目录已经 `git init` 或由 **克隆** 得到。安装见 [安装 Git](./install)。

终端里能完成的事，IDE 里都能找到对应入口；反过来，脚本和排障仍然建议直接用命令，输出更完整。
