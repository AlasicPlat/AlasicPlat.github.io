# Alasic

Alasic 的个人网站与 macOS 软件主页，使用 Astro 构建并发布到 GitHub Pages。

## 本地开发

```sh
npm install
npm run dev
```

## 构建

```sh
npm run build
```

推送到 `main` 分支后，GitHub Actions 会自动构建并发布网站。

个人介绍和产品文案集中在 `src/data/site.ts`，产品截图位于 `public/images/`。
