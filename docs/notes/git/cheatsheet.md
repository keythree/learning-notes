# 命令速查

下面按使用场景列出常用命令。每条的步骤说明在后面的专题页。

## 速查表

| 场景 | 命令 |
| --- | --- |
| 初始化 | `git init` |
| 配置身份 | `git config --global user.name` / `user.email` |
| 克隆 | `git clone <URL>` |
| 状态 / 暂存 / 提交 | `git status` · `git add` · `git commit` |
| 同步 | `git fetch` · `git pull` · `git push` |
| 分支 | `git branch` · `git switch` |
| 差异 / 历史 | `git diff` · `git log --oneline` |
| 恢复 / 搁置 | `git restore` · `git stash` |
| 合并 / 远程 | `git merge` · `git remote -v` |
| 改提交 / 标签 | `git commit --amend` · `git reset` · `git tag` |

## 连 GitHub

在网页创建空仓库，再让本地指向它（或反过来：先有本地，再挂上远程）。

建仓库：

1. 登录 GitHub：打开 github.com，登录或注册账号。
2. 新建仓库：右上角 **+** → **New repository**，填写 Repository name，Public / Private 自选。
3. 创建选项：若本地已有代码，不要勾选 **Add a README**（避免首次推送冲突）。空项目可以勾选 README。
4. 创建并复制地址：点击 **Create repository** 后，复制 HTTPS 或 SSH 地址。

本地已有项目接到空仓库：

```bash
git remote add origin <仓库URL>
git remote -v
git push -u origin main
```

分支若仍叫 `master`，把上面的 `main` 换成 `master`。完整说明见 [连 GitHub](./connect)。

## 分组入口

- [初始化](./init)：`git init`，以及 `--system` / `--global` / `--local`
- [同步](./sync)：clone、fetch、pull、push、remote
- [分支](./branch)：新建、切换、删除
- [日常](./daily)：status、add、commit、diff、log、restore、stash、merge
- [撤销](./undo)：amend、reset、tag
- [改历史](./history)：已推送到共享分支时怎么收回
- [JetBrains IDE](./ide)：菜单和命令的对照
