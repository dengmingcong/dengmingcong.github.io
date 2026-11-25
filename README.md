# dengmingcong.github.io

个人博客，基于 [Astro](https://astro.build/) + [AstroPaper](https://github.com/satnaing/astro-paper) 主题构建，部署在 GitHub Pages。

站点地址：<https://dengmingcong.github.io>

## 技术栈

| 能力     | 实现                                                         |
| -------- | ------------------------------------------------------------ |
| 框架     | Astro 7（静态输出，无服务端）                                |
| 主题     | [AstroPaper](https://github.com/satnaing/astro-paper)（MIT） |
| 样式     | Tailwind CSS 4                                               |
| 内容     | Markdown / MDX + Content Collections（Zod schema 校验）      |
| 代码高亮 | Shiki（min-light / night-owl 双主题）                        |
| 全文搜索 | [Pagefind](https://pagefind.app/)（构建时生成静态索引）      |
| 评论     | [Giscus](https://giscus.app/)（基于 GitHub Discussions）     |
| 订阅     | RSS                                                          |
| 站点地图 | `@astrojs/sitemap`                                           |
| 部署     | GitHub Actions（`withastro/action`）                         |
| 界面语言 | 中文（`src/i18n/lang/zh-CN.ts`）                             |

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
pnpm build          # 类型检查 + 构建 + 生成搜索索引
pnpm preview        # 本地预览构建产物
pnpm lint           # ESLint
pnpm format         # Prettier 格式化
```

> **注意**：搜索索引只在 `pnpm build` 之后生成，`pnpm dev` 下搜索框会提示需要先构建。
> 想在开发环境测试搜索，请运行 `pnpm build && pnpm preview`。

## 目录结构

```
src/
├── assets/           # 图标、图片
├── components/       # Astro 组件
├── config/
│   └── giscus.ts     # Giscus 评论配置
├── content/
│   ├── pages/        # 独立页面（about.md）
│   └── posts/        # 文章（.md / .mdx）
├── custom/           # 主题留给你的钩子文件（AstroPaper 不会改动）
│   ├── BodyEnd.astro # </body> 前插入
│   ├── Head.astro    # <head> 内插入
│   └── PostEnd.astro # 文章页末尾插入（评论区就挂在这里）
├── i18n/
│   └── lang/zh-CN.ts # 界面文案
├── layouts/          # 页面布局
├── pages/            # 路由
├── scripts/          # 客户端脚本
├── styles/           # 全局样式与主题变量
├── types/            # 配置类型
├── utils/            # 工具函数
├── astro-paper.config.ts # ← 站点配置主入口
└── content.config.ts # 内容集合 schema
```

## 站点配置

绝大多数配置集中在 `astro-paper.config.ts`：

```ts
export default defineAstroPaperConfig({
  site: {
    url: "https://dengmingcong.github.io/",
    title: "dengmingcong · 技术笔记",
    description: "Python、自动化测试与工程实践的笔记归档。",
    author: "dengmingcong",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    ogImage: "og-default.jpg",
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,   // 每篇文章自动生成 OG 图
    showArchives: true,     // 归档页
    showBackButton: true,
    editPost: { enabled: true, url: "..." },  // 「编辑此页」链接
    search: "pagefind",
    toc: true,              // 文章侧边目录
  },
  socials: [...],
  shareLinks: [...],
});
```

## 写文章

在 `src/content/posts/` 下新建 `.md` 或 `.mdx` 文件，文件名即 URL slug。

```markdown
---
pubDatetime: 2026-11-23T00:00:00.000Z
title: 文章标题
description: 文章摘要，用于 SEO 和列表页展示
tags:
  - Python
featured: false # true 则在首页单独展示
draft: false # true 则不进入生产构建
ogImage: ../../assets/xxx.jpg # 可选
---

正文内容…
```

### 草稿

`draft: true` 的文章不会出现在生产构建中，也不会进 RSS、站点地图和搜索索引。

### 标签

标签页会自动生成：`/tags/` 是标签列表，`/tags/<标签>/` 是该标签下的文章。

## 明暗主题

- 默认跟随系统 `prefers-color-scheme`
- 点击右上角图标可手动切换，选择存入 `localStorage`
- 主题在首次渲染前通过内联脚本应用，避免闪烁
- 配色在 `src/styles/theme.css` 中调整（`--accent` 等 CSS 变量）

## 搜索

`pnpm build` 会在构建后自动执行 `pagefind --site dist`，生成静态搜索索引。

搜索界面文案已汉化，翻译键在 `src/pages/search.astro` 的 `translations` 选项中。

按 `/` 可快速聚焦搜索框。

## 评论（Giscus）

评论功能已集成，需要先完成配置：

1. 仓库 Settings → General → Features 开启 **Discussions**
2. 访问 <https://giscus.app>，填写仓库信息并授权 Giscus App
3. 从页面获取 `repoId`、`categoryId`、`clientID`
4. 填入 `src/config/giscus.ts`：

```ts
export const GISCUS_CONFIG = {
  repo: "dengmingcong/dengmingcong.github.io",
  repoId: "R_xxxxxxx",
  category: "Announcements",
  categoryId: "DIC_xxxxxxx",
};
```

只要有一项为空，评论区就不会渲染，站点依然可以正常构建和发布。

## 部署

推送到 `main` 分支即触发 GitHub Actions 自动构建并发布到 GitHub Pages。

首次使用需要在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

工作流定义见 `.github/workflows/deploy.yml`。

### 绑定自定义域名

1. 在 DNS 服务商处添加 `CNAME` 记录指向 `dengmingcong.github.io`
2. 在 `public/` 下创建 `CNAME` 文件，内容为你的域名
3. 把 `astro-paper.config.ts` 的 `site.url` 改成 `https://你的域名`
4. 在仓库 Settings → Pages 中开启 **Enforce HTTPS**

## 升级主题

AstroPaper 的升级方式是「比对上游 + 手动合并」：

```bash
git remote add upstream https://github.com/satnaing/astro-paper.git
git fetch upstream
git diff upstream/main -- src/          # 查看上游改动
```

主题把留给用户定制的部分放在了 `src/custom/`、`astro-paper.config.ts` 和
`src/i18n/lang/zh-CN.ts` 里，这些文件升级时通常不会冲突。

## 许可

本站代码以 MIT 协议开源。主题 [AstroPaper](https://github.com/satnaing/astro-paper) 亦为 MIT。
