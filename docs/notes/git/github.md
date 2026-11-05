# 认识 GitHub

Git 是本地版本控制工具；GitHub 是基于 Git 的代码托管网站，用来存远程仓库、提 PR、做 Code Review、管 Issues。类似还有 GitLab、Gitee。

## 四个词

### 仓库 Repository

一组代码的远程家，对应一个项目。本地目录里的 `.git` 是这份历史的本地副本，GitHub 上的仓库是它的远程家。

### 远程 origin

本地默认指向的那个远程仓库名，多为 GitHub 上的地址。名字 `origin` 只是约定，可以改，但教程和文档都默认你用这个名字。

查看当前远程：

```bash
git remote -v
```

### PR / Pull Request

请求把你的分支合进主分支，供他人审阅。PR 是 GitHub（以及同类平台）上的合入流程，不是一条 `git` 子命令。本地对应的动作通常是推送分支，再到网页上打开 Pull Request。

### SSH / HTTPS

两种连接方式。SSH 配好密钥后推送更省事；HTTPS 使用仓库的 `https://` 地址，配合凭据管理器或个人访问令牌登录。

同一个仓库可以随时换连接方式，见 [连 GitHub](./connect) 里的 `git remote set-url`。

## 和本地命令怎么配合

| 你想做的事 | 发生在哪里 |
| --- | --- |
| 记录一次修改 | 本地：`add` 与 `commit` |
| 把提交放到 GitHub | 本地执行 `git push`，写入远程仓库 |
| 拿下别人刚推的提交 | `git fetch` 或 `git pull` |
| 请别人审阅并合入 | GitHub 上开 PR |

先把 [命令速查](./cheatsheet) 里的本地命令走顺，再去网页上建仓库。
