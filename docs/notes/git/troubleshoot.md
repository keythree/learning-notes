# 排障

提交看起来丢了、某个 bug 不知道从哪一次开始，或只想恢复文件的某一部分时，用下面这些命令。它们不改变「日常提交」的基本流程，但能把历史找回来。

## reflog：找回移走的提交

HEAD 每次移动都会记在 reflog 里，包括 reset、切换分支和变基。

```bash
git reflog
```

从某一条记录拉出一条救援分支，原分支保持不动：

```bash
git switch -c 救援 HEAD@{3}
```

确认那就是要回去的位置后，也可以直接重置当前分支：

```bash
git reset --hard HEAD@{n}
```

把 `n` 换成 `git reflog` 里看到的序号。`reset --hard` 会丢掉当前工作区里还没提交的修改。

## bisect：二分定位

知道以前是好的、现在是坏的，要找出引入问题的那一次提交：

```bash
git bisect start
git bisect bad
git bisect good <已知正常的哈希>
```

Git 会检出中间的某一次提交。验证后继续标记 `git bisect good` 或 `git bisect bad`，直到它指出第一次变坏的提交。结束后回到原来的分支：

```bash
git bisect reset
```

## 进阶日志

在 `git log` 上加条件：

```bash
git log --author="名字"
git log --grep="关键字"
git log -- 文件
git log main..feature
```

`--author` 按作者过滤。`--grep` 在提交说明里搜索。`-- 文件` 只看影响该文件的提交。`main..feature` 列出 `feature` 上有、`main` 上还没有的提交。

这些条件可以和 `--oneline` 一起用，例如 `git log --oneline -- 文件`。

## 进阶恢复

从上一提交取出文件的版本，写回工作区：

```bash
git restore --source=HEAD~1 -- 文件
```

只交互地挑选块来恢复：

```bash
git restore -p 文件
```

删除分支：

```bash
git branch -d 名称
git branch -D 名称
```

`-d` 只删除已合并的分支。`-D` 强制删除，未合并的提交若没有别的引用，之后只能靠 reflog 再找。

重命名当前所在的分支，或给指定分支改名：

```bash
git branch -m 新名字
git branch -m 旧名字 新名字
```
