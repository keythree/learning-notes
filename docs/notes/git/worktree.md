# 工作区

同一份仓库有时需要两份工作目录同时打开，例如一个目录停在主分支修紧急问题，另一个目录继续做功能。用 `git worktree`，不必再克隆一整份。

## 列出、添加、移除

```bash
git worktree list
git worktree add ../另一个目录 分支名
git worktree remove ../另一个目录
```

`list` 显示已有工作树及其检出的提交。`add` 在新路径检出一份工作区，并关联到指定分支。`remove` 在工作区干净时删掉这份附加工作树；目录里还有未提交修改时，Git 会拒绝，避免误删。

## 限制

同一分支不能同时被两棵工作树检出。需要并行改同一分支上的内容时，先为第二份工作树建一个新分支：

```bash
git worktree add -b 临时分支 ../另一个目录
```

附加工作树里的提交写进同一个 `.git` 数据库，在原来的目录里用 `git log` 和 `git branch` 都能看见。

## 稀疏检出

仓库很大、只需要其中几个目录时，可以用稀疏检出，而不是把所有文件都展开到工作区。

```bash
git sparse-checkout init --cone
git sparse-checkout set 目录
git sparse-checkout add 另一个目录
git sparse-checkout disable
```

`init --cone` 启用锥形模式，按目录收窄工作区。`set` 把工作区设为列出的目录。`add` 在现有集合上再加目录。`disable` 关闭稀疏检出，工作区恢复为完整树。

稀疏检出改变的是工作区里有哪些文件，不改变提交历史本身。
