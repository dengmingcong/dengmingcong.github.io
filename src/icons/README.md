# 本目录用于存放本地图标（astro-icon 的 `src/icons` 约定）。

把 SVG 文件直接放进这个目录即可在 Astro 组件中通过文件名引用，例如：

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="my-icon" />
```

目前站点使用的图标全部来自 Iconify 在线图标集（如 `ri:github-fill`），因此这个目录暂时为空。
