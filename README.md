# dengmingcong.github.io

个人博客，基于 [Astro](https://astro.build/) 构建，部署在 GitHub Pages。

站点地址：<https://dengmingcong.github.io>

## 技术栈

| 能力 | 实现 |
| --- | --- |
| 框架 | Astro 7（静态输出，无服务端） |
| 内容 | Markdown / MDX + Content Collections（Zod schema 校验） |
| 代码高亮 | Shiki（内置，双主题 github-light / github-dark） |
| 全文搜索 | [Pagefind](https://pagefind.app/)（构建时生成静态索引） |
| 评论 | [Giscus](https://giscus.app/)（基于 GitHub Discussions） |
| 订阅 | RSS（`@astrojs/rss`） |
| 站点地图 | `@astrojs/sitemap` |
| 部署 | GitHub Actions（`withastro/action`） |

## 本地开发

需要 Node.js >= 22.23.4（推荐 24 LTS）。

```bash
nvm install 24 && nvm use 24
corepack enable        # 启用 pnpm
pnpm install
pnpm dev               # http://localhost:4321
```

### 常用命令

```bash
pnpm dev            # 启动开发服务器
pnpm build          # 构建静态站点到 dist/（会自动跑 pagefind 生成搜索索引）
pnpm preview        # 本地预览构建产物
pnpm exec astro check   # 类型检查
```

> **注意**：搜索索引只在 `pnpm build` 之后生成，`pnpm dev` 下搜索框会提示索引不可用。
> 想在开发环境测试搜索，请运行 `pnpm build && pnpm preview`。

## 目录结构

```
src/
├── assets/           # 图片、字体等资源
├── components/       # Astro 组件
│   ├── BaseHead.astro      # <head> 元信息（SEO / OG / RSS 链接）
│   ├── Comments.astro      # Giscus 评论（未配置时自动隐藏）
│   ├── FormattedDate.astro # 日期格式化
│   ├── Footer.astro
│   ├── Header.astro        # 顶部导航 + 搜索 + 主题切换 + 社交链接
│   ├── HeaderLink.astro
│   ├── PostList.astro      # 文章列表
│   ├── Search.astro        # Pagefind 搜索对话框
│   └── ThemeToggle.astro   # 明暗主题切换
├── content/
│   └── blog/         # 文章（.md / .mdx）
├── icons/            # 本地图标（astro-icon）
├── layouts/
│   └── BlogPost.astro # 文章页布局
├── pages/
│   ├── index.astro       # 首页
│   ├── about.astro       # 关于
│   ├── blog/             # 文章列表 + [slug] 详情
│   ├── tags/             # 标签列表 + [tag] 详情
│   └── rss.xml.js
├── styles/
│   └── global.css    # 全局样式（含明暗主题变量）
├── utils/
│   └── posts.ts      # 文章查询辅助（草稿过滤、排序、标签收集）
├── consts.ts         # 站点信息、社交链接、Giscus 配置
└── content.config.ts # 内容集合 schema
```

## 写文章

在 `src/content/blog/` 下新建 `.md` 或 `.mdx` 文件，文件名即 URL slug。

```markdown
---
title: '文章标题'
description: '文章摘要，用于 SEO 和列表页展示'
pubDate: '2026-11-23'
updatedDate: '2026-12-01'   # 可选
tags: ['Python', '测试']    # 可选
heroImage: '../../assets/xxx.jpg'  # 可选
draft: false               # true 时仅本地可见，不进入生产构建
---
```

`title`、`description`、`pubDate` 为必填字段，schema 校验不通过时构建会报错并给出提示。

### 草稿

`draft: true` 的文章在 `pnpm dev` 下可见，但在 `pnpm build` 时会被排除（不会出现在 `dist/`、RSS 和站点地图中）。

## 明暗主题

- 默认跟随系统 `prefers-color-scheme`
- 用户点击右上角图标可手动切换，选择会存入 `localStorage`
- 主题在首次渲染前通过内联脚本应用，避免闪烁

## 搜索

`pnpm build` 会在 `postbuild` 阶段自动执行 `pagefind --site dist`，生成静态搜索索引。

搜索框支持 `/` 快捷键打开，`Esc` 关闭。

## 评论（Giscus）

评论功能已集成，但需要先完成配置：

1. 在仓库 Settings → General → Features 中开启 **Discussions**
2. 访问 <https://giscus.app>，填写仓库信息并授权 Giscus App
3. 从页面获取 `repoId`、`categoryId`、`clientID`
4. 填入 `src/consts.ts` 的 `GISCUS_CONFIG`：

```ts
export const GISCUS_CONFIG = {
	repo: 'dengmingcong/dengmingcong.github.io',
	repoId: 'R_xxxxxxx',
	category: 'Announcements',
	categoryId: 'DIC_xxxxxxx',
};
```

只要有一项为空，评论区域就不会渲染，站点依然可以正常构建和发布。

## 部署

推送到 `main` 分支即触发 GitHub Actions 自动构建并发布到 GitHub Pages。

首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

工作流定义见 `.github/workflows/deploy.yml`。

### 绑定自定义域名

1. 在 DNS 服务商处添加 `CNAME` 记录指向 `dengmingcong.github.io`
2. 在 `public/CNAME` 中写入你的域名
3. 把 `astro.config.mjs` 的 `site` 和 `src/consts.ts` 的 `SITE_URL` 改成 `https://你的域名`
4. 移除 `base` 配置（当前未设置）
5. 在仓库 Settings → Pages 中开启 **Enforce HTTPS**

## 许可

代码以 MIT 协议开源。
