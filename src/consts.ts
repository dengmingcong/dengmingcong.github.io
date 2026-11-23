// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'dengmingcong · 技术笔记';
export const SITE_DESCRIPTION =
	'Python、自动化测试与工程实践的笔记归档。';

// Canonical URL of the deployed site. Keep in sync with `site` in astro.config.mjs.
export const SITE_URL = 'https://dengmingcong.github.io';

export const GITHUB_USERNAME = 'dengmingcong';

export interface SocialLink {
	/** Icon name from astro-icon / Iconify collection. */
	icon: string;
	label: string;
	href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: 'ri:github-fill',
		label: 'GitHub',
		href: `https://github.com/${GITHUB_USERNAME}`,
	},
	{
		icon: 'ri:mail-fill',
		label: 'Email',
		href: 'mailto:mc.deng@outlook.com',
	},
];

/**
 * Giscus comment configuration.
 *
 * Get these values from https://giscus.app — you need to enable GitHub
 * Discussions on the repository and install the Giscus app first.
 *
 * While any of these are empty the comment section is not rendered at all,
 * so the site builds and works fine without them.
 */
export const GISCUS_CONFIG = {
	repo: '' as `${string}/${string}`,
	repoId: '',
	category: '',
	categoryId: '',
};

/** Whether the Giscus comment section is fully configured. */
export const COMMENTS_ENABLED = Boolean(
	GISCUS_CONFIG.repo &&
		GISCUS_CONFIG.repoId &&
		GISCUS_CONFIG.category &&
		GISCUS_CONFIG.categoryId
);
