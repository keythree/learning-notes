# 从零到第一次推送

按这个顺序做完，本地项目会出现在 GitHub 上。每一步的细节分别在对应专题里。

## 1. 安装并配置 Git

确认命令可用，并写上全局姓名和邮箱：

```bash
git --version
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
```

安装包和各系统命令见 [安装 Git](./install)。

## 2. 在 GitHub 建空仓库

打开 GitHub，新建仓库并填写名字。本地已经有代码时，不要勾选 **Add a README**，否则远程会多出一个提交，第一次推送容易冲突。

创建完成后复制 HTTPS 或 SSH 地址。页面上的点击路径见 [连 GitHub](./connect)。

## 3. 本地初始化并提交

目录还不是仓库时：

```bash
git init
git add .
git commit -m "首次提交"
```

如果 GitHub 上已经有你要的内容，改用克隆，不必再 `init`：

```bash
git clone <仓库URL>
```

## 4. 连接远程

```bash
git remote add origin <仓库URL>
git remote -v
```

`git remote -v` 应能看到 `origin` 的 fetch 与 push 地址。地址写错时用 `git remote set-url`，或 `git remote remove origin` 之后重新 `add`。

克隆下来的仓库已经有 `origin`，这一步可以跳过。

## 5. 首次推送

```bash
git push -u origin main
```

当前分支叫 `master` 时，把 `main` 换成 `master`。`-u` 记住上游之后，以后在这个分支上执行 `git push` 和 `git pull` 即可。

推送成功后，刷新 GitHub 仓库页面，应能看到刚才的提交和文件。接下来的日常循环是 [日常](./daily) 里的 `status` → `add` → `commit`，需要同步时用 [同步](./sync) 里的 `pull` 与 `push`。
