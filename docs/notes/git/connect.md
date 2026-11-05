# 连 GitHub

在网页创建空仓库，再让本地指向它。也可以反过来：先有本地仓库，再挂上远程。

## 在网页上建仓库

1. 登录 GitHub。打开 [github.com](https://github.com)，登录或注册账号。
2. 新建仓库。右上角 **+** → **New repository**；填写 Repository name；Public / Private 自选。
3. 创建选项。若本地已有代码：不要勾选 **Add a README**（避免首次推送冲突）。空项目可以勾选 README。
4. 创建并复制地址。点击 **Create repository** 后，复制 HTTPS 或 SSH 地址。

HTTPS 地址形如 `https://github.com/用户名/仓库名.git`。SSH 地址形如 `git@github.com:用户名/仓库名.git`。两种都能用，见 [认识 GitHub](./github)。

## 本地已有项目，接到空仓库

1. 进入项目目录。尚未初始化则先 `git init`，并完成至少一次 commit。
2. 添加远程：`git remote add origin <仓库URL>`。
3. 确认：`git remote -v`。
4. 推送：`git push -u origin main`（分支名是 `master` 时写成 `git push -u origin master`）。

```bash
cd /path/to/your-project
git init
git add .
git commit -m "首次提交"
git remote add origin <仓库URL>
git remote -v
git push -u origin main
```

`-u` 会把当前分支的上游设为 `origin` 上的同名分支。之后在这个分支上直接 `git push` 和 `git pull` 即可。

## GitHub 上已有内容，本地还没有

克隆下来，之后照常推送和拉取：

```bash
git clone <仓库URL>
git push
git pull
```

## 改远程地址

地址写错、从 HTTPS 换成 SSH，或仓库改了名字时：

```bash
git remote set-url origin <新URL>
git remote -v
```

删掉重来：

```bash
git remote remove origin
git remote add origin <仓库URL>
```

::: warning
本地已经有提交、远程也因为勾了 README 而有一个初始提交时，第一次 `git push` 会被拒绝。空项目准备承接本地代码时，创建仓库不要勾选 README。
:::
