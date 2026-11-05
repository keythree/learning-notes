# 日常

一次普通的修改，按「看状态 → 暂存 → 提交」走。需要对比、翻历史、暂时搁置或合并别人的分支时，用本节后半段的命令。

## 提交一条记录

```bash
git status
git add .
git commit -m "说明"
```

`git status` 告诉你哪些文件改了、哪些已经暂存。`git add .` 把当前目录下的修改放进暂存区。`git commit -m` 用这句话作成一次提交。

说明尽量写「做了什么」，例如 `记录安装 Git 的系统命令`，而不是 `update`。

## 看差异

```bash
git diff
git diff --staged
```

`git diff` 是工作区相对暂存区的差别。`git diff --staged` 是暂存区相对最近一次提交的差别，也就是这次 `commit` 将要收进去的内容。

## 看历史

```bash
git log --oneline
git log --graph --oneline --all
```

`--oneline` 一行一条。加上 `--graph --all` 可以同时看到各分支的分叉和汇合。

## 恢复工作区或暂存

丢掉工作区里还没暂存的修改，让文件回到暂存区或最近一次提交的样子：

```bash
git restore 文件
```

只是把文件撤出暂存区、保留工作区内容：

```bash
git restore --staged 文件
```

::: warning
`git restore 文件` 会覆盖该文件上还没提交的修改。先用 `git diff` 看一眼再执行。
:::

## 搁置

手头的修改还不想提交，又必须切去别的分支时：

```bash
git stash
git stash list
git stash pop
git stash apply
git stash drop
```

`git stash` 把工作区和暂存区的修改收起来，工作区回到干净状态。`list` 查看搁置列表。`pop` 取出最近一次并把它从列表删掉。`apply` 取出但保留那条搁置。`drop` 丢掉一条搁置。

## 合并

把另一条分支合进当前分支：

```bash
git switch main
git merge 功能分支
```

冲突时，Git 会在文件里留下冲突标记。改完文件后：

```bash
git add 冲突文件
git commit
```

合并提交的说明可以沿用 Git 准备好的默认信息。想放弃这次合并、回到合并前：

```bash
git merge --abort
```

`--abort` 只在合并还没完成时使用。已经提交的合并要用 [撤销](./undo) 或 [改历史](./history) 里的办法处理。
