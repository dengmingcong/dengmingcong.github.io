/**
 * Giscus 评论配置。
 *
 * 获取步骤：
 * 1. 在仓库 Settings → General → Features 中开启 Discussions
 * 2. 访问 https://giscus.app 填写仓库信息并授权 Giscus App
 * 3. 从页面复制 repoId、categoryId、clientID
 *
 * 任意一项为空时，评论区不会渲染，站点构建与发布不受影响。
 */
export const GISCUS_CONFIG = {
  repo: "" as `${string}/${string}`,
  repoId: "",
  category: "",
  categoryId: "",
};

export const COMMENTS_ENABLED = Boolean(
  GISCUS_CONFIG.repo &&
  GISCUS_CONFIG.repoId &&
  GISCUS_CONFIG.category &&
  GISCUS_CONFIG.categoryId
);
