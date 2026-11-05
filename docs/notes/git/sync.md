# 同步

同步是本地仓库和远程仓库之间交换提交。先分清「只下载」和「下载并合并」。

## 克隆

GitHub 已有内容、本地还没有目录时：

```bash
git clone <URL>
```

克隆会创建目录、复制历史，并把远程命名为 `origin`，当前分支的上游也一并设好。

## 下载、拉取、推送

| 命令 | 作用 |
| --- | --- |
| `git fetch` | 只下载远程上的新提交，不改工作区 |
| `git pull` | `fetch` 再加上合并到当前分支 |
| `git push` | 把本地提交推到远程 |
| `git push -u origin 分支` | 首次推送并设置上游 |

第一次把本地分支送到远程：

```bash
git push -u origin main
```

上游设置好之后，在该分支上：

```bash
git push
git pull
```

`git fetch` 适合先看远程有什么变化、自己决定何时合并。`git pull` 适合确认要直接并进当前分支。

## 查看远程

```bash
git remote
git remote -v
```

`git remote` 只列名字。加上 `-v` 会同时列出抓取（fetch）和推送（push）用的 URL。

修改或删除远程地址的命令在 [连 GitHub](./connect)。
