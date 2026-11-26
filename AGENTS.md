## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project

Personal blog built with [AstroPaper](https://github.com/satnaing/astro-paper).
Site config lives in `astro-paper.config.ts` — read it before changing site
metadata, features, social links or share links.

UI strings live in `src/i18n/lang/en.ts` (English is the only locale). Keep the
interface in English when adding new strings. Article content under
`src/content/posts/` is written in Chinese and should stay that way.

## Upgrading the theme

AstroPaper is consumed as a source fork, not a dependency. To pull in upstream
changes:

```bash
git remote add upstream https://github.com/satnaing/astro-paper.git
git fetch upstream
git diff upstream/main -- src/
```

Files in `src/custom/`, `astro-paper.config.ts` and `src/i18n/lang/en.ts` are
ours and rarely conflict.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
