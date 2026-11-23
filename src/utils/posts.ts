import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Returns blog posts sorted by publish date (newest first).
 *
 * Draft posts are excluded from production builds but visible in dev, so
 * you can preview an unfinished article locally.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog');
	const filtered = import.meta.env.PROD
		? posts.filter((post) => !post.data.draft)
		: posts;

	return filtered.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}

/** Returns every distinct tag used across the published posts, sorted. */
export async function getAllTags(): Promise<string[]> {
	const posts = await getPublishedPosts();
	const tags = new Set<string>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			tags.add(tag);
		}
	}
	return [...tags].sort((a, b) => a.localeCompare(b, 'zh-CN'));
}
