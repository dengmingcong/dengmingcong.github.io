import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dengmingcong.github.io/",
    title: "dengmingcong",
    description:
      "Notes on Python, automated testing, and engineering practice.",
    author: "dengmingcong",
    profile: "https://github.com/dengmingcong",
    ogImage: "og-default.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/dengmingcong/dengmingcong.github.io/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/dengmingcong" },
    { name: "mail", url: "mailto:mc.deng@outlook.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
