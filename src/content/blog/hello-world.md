---
title: '开篇：为什么要写这个博客'
description: '记录一些技术笔记、项目实践与日常思考，顺便练手 Astro 和 GitHub Pages 的搭建。'
pubDate: '2026-11-23'
tags: ['随笔']
---

欢迎来到我的博客。

这里主要用来存放两类东西：

- **技术笔记** —— 平时开发中遇到的问题、排查过程和最终解法，尤其是 Python 和自动化测试相关的。
- **项目实践** —— 自己写的一些小工具，记录它们的设计思路和使用方式。

## 搭建过程

这个站点用 [Astro](https://astro.build/) 构建，部署在 GitHub Pages 上：

- 内容用 Markdown（偶尔用 MDX）写在 `src/content/blog/` 下
- 通过 Content Collections 做 frontmatter 校验
- 搜索用 [Pagefind](https://pagefind.app/)，构建时生成静态索引
- 评论用 [Giscus](https://giscus.app/)，基于 GitHub Discussions
- 主题切换跟随系统，也支持手动选择

整体是纯静态的，没有服务端，加载很快。

## 接下来

先写几篇真正想写的东西，把 `src/content/blog/` 下的示例文章替换掉就行了。
