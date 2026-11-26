/**
 * Giscus comment configuration.
 *
 * Setup:
 * 1. Enable Discussions in the repository under
 *    Settings → General → Features
 * 2. Go to https://giscus.app, fill in the repository details and authorise
 *    the Giscus app
 * 3. Copy `repoId`, `categoryId` and `clientID` from the page
 *
 * While any of these are empty the comment section is not rendered at all,
 * so the site builds and deploys fine without them.
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
