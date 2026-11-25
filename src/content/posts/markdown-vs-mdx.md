---
pubDatetime: 2026-11-23T00:00:00.000Z
title: 写作备忘：Markdown 与 MDX 的选择
description: 什么时候用纯 Markdown，什么时候需要 MDX，以及一些常用写法示例。
tags:
  - Astro
  - 写作
---

绝大多数技术文章其实用纯 Markdown 就够了。MDX 是在 Markdown 基础上加了 JSX 语法，
适合需要嵌入交互组件的场景。

## 纯 Markdown 够用的场合

- 代码示例、命令输出
- 表格、引用、列表
- 图片和链接

```python
from httprunner import HttpRunner


class TestApi(HttpRunner):
    def test_case(self):
        self.get("https://example.com/api/users", name="get users")
```

## 需要 MDX 的场合

当你希望在文章里插入真正可交互的组件时，比如一个可折叠的对比表格、
或者一个能实时计算的示例。

```mdx
import { Tabs, TabItem } from "@astrojs/starlight/components";
```

> 提示：MDX 里可以混用普通 Markdown 语法，标题、列表、代码块都正常工作。

## 常用语法速查

| 语法           | 用途                 |
| -------------- | -------------------- |
| `# 标题`       | 一级标题             |
| `**粗体**`     | 强调                 |
| `[文字](链接)` | 超链接               |
| `> 引用`       | 引用块               |
| ` ```python `  | 代码块并指定语法高亮 |

代码块支持行内高亮和 diff 标记：

```python title="example.py" {2-3}
def greet(name):
    # 这两行会高亮
    message = f"Hello, {name}"
    return message
```
