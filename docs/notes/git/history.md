# 改历史

共享分支慎改历史：已经推送的提交，优先 `revert`；必须改历史时，再用 `--force-with-lease`。

改历史会更换提交哈希。别人如果已经基于旧哈希继续开发，强制推送会让他们的分支对不齐。

## 变基

把当前分支的提交接到另一条分支的最新提交之后：

```bash
git rebase main
```

最近 3 条提交要改说明、拆开或调换顺序时，使用交互式变基：

```bash
git rebase -i HEAD~3
```

变基过程中遇到冲突，改完文件后 `git add`，再 `git rebase --continue`。想回到变基开始前，执行 `git rebase --abort`。

## 摘取一条提交

把另一条分支上的某一个提交应用到当前分支：

```bash
git cherry-pick <哈希>
```

哈希可以从 `git log --oneline` 复制。

## 用新提交抵消旧提交

已经推送到共享分支、又不想改写历史时：

```bash
git revert HEAD
git push
```

`revert` 新增一次提交，内容是指定提交的反向补丁。历史仍然保留，协作者只需普通 `git pull`。

## 必须改写远程时

本地已经用 `rebase`、`amend` 等方式改过已经推送的提交，推送会被拒绝。确认远程没有别人的新提交后：

```bash
git push --force-with-lease
```

::: danger
`--force-with-lease` 仍会改写远程分支上已有的提交。它比 `--force` 多一层检查：远程如果出现了你还没拉取的新提交，这次推送会失败，而不是直接盖掉。共享主分支上默认不要使用。
:::

## PR 不是 Git 子命令

Pull Request 是平台上的合入流程：你把分支 `push` 到 GitHub，在网页上请求合进主分支，供他人审阅。本地没有 `git pr` 这一步。开 PR 之前，分支需要已经存在于远程，见 [分支](./branch) 与 [同步](./sync)。
