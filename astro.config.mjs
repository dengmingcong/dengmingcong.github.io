// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	// The repository is named `<username>.github.io`, so the site is served
	// from the domain root and no `base` path is required.
	site: 'https://dengmingcong.github.io',
	integrations: [
		mdx(),
		sitemap(),
		icon({
			include: {
				// Remix Icon — only the icons actually used are bundled.
				ri: [
					'github-fill',
					'mail-fill',
					'moon-fill',
					'sun-fill',
					'search-line',
					'close-line',
				],
			},
		}),
	],
	markdown: {
		shikiConfig: {
			// Emit both themes as custom properties so the CSS can swap them
			// based on the active color scheme.
			defaultColor: false,
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			wrap: true,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
