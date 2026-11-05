# 分支

分支用来把一组提交和另一组隔开。日常功能开发放在自己的分支上，主分支保持可运行。

## 查看

```bash
git branch
git branch -a
```

`git branch` 只列本地分支，当前分支前有 `*`。`git branch -a` 连同远程跟踪分支一起列出。

## 新建与切换

新建但不切换：

```bash
git branch 名称
```

切换到已有分支：

```bash
git switch 名称
```

新建并立刻切换：

```bash
git switch -c 名称
```

## 删除

删除已经合并过的本地分支：

```bash
git branch -d 名称
```

还没合并就想删，需要 [排障](./troubleshoot) 里的 `git branch -D`。没有特别理由时用 `-d`，Git 会在分支未合并时拒绝删除。

## 和远程配合

新分支要给别人看，或要开 Pull Request 时，首次推送带上 `-u`：

```bash
git push -u origin 名称
```

之后在这个分支上 `git push` / `git pull` 会沿着上游走。合并进当前分支用 `git merge`，见 [日常](./daily)。
