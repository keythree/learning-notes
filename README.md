# 学习笔记

基于 [VitePress](https://vitepress.dev/) 的中文学习笔记。当前收录 **Git 常用命令教程**：先熟练本地版本管理，再按「建仓库 → 连远程 → 推送」把本地接到 GitHub。

站点 `base` 为 `/learning-notes/`，对应 GitHub Pages 项目站点地址：

https://keythree.github.io/learning-notes/

## 本地运行

需要 Node.js 22。

```bash
npm install
npm run dev
```

终端会给出本地地址。开发服务器同样使用 `/learning-notes/` 前缀，请打开带此前缀的链接。

构建静态站点：

```bash
npm run build
```

产物位于 `docs/.vitepress/dist`。预览构建结果：

```bash
npm run preview
```

## 发布到 GitHub Pages

工作流文件是 `.github/workflows/deploy.yml`。推送到 `main` 后，GitHub Actions 会执行 `npm ci` 与 `npm run build`，再把 `docs/.vitepress/dist` 部署到 Pages。

仓库的 Pages 来源需要设为 **GitHub Actions**（REST API 中 `build_type` 为 `workflow`）。设置路径：仓库 **Settings → Pages → Build and deployment → Source** 选择 GitHub Actions。

也可以用 API 开启（需要对仓库有管理权限）：

```bash
gh api --method POST /repos/keythree/learning-notes/pages \
  -f build_type=workflow
```

若站点已存在、只需把来源改成 Actions：

```bash
gh api --method PUT /repos/keythree/learning-notes/pages \
  -f build_type=workflow
```

开启后，每次推送到 `main` 都会触发名为 “Deploy VitePress site to Pages” 的工作流。也可在 Actions 页手动 **Run workflow**。首次部署通常需要一两分钟，完成后访问：

https://keythree.github.io/learning-notes/

## 目录

| 路径 | 内容 |
| --- | --- |
| `docs/` | 笔记正文与首页 |
| `docs/.vitepress/config.mts` | VitePress 配置，`base` 为 `/learning-notes/` |
| `docs/notes/git/` | Git 教程全文 |
| `.github/workflows/deploy.yml` | GitHub Pages 部署工作流 |
