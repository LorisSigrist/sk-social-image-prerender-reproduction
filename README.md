# Social Image Prerender Reproduction

This repo showcases a (in my opinion) bug, where dynamic endpoints do not get included in prerendering, if they are only used in the `meta` tags of a page.

URLs in meta tags should be crawled, but they are not.


This is incredibly inconvenient when you want to generate social-images programmatically.

## The Setup
`/src/routes/og/[image].jpg/+server.ts` Generates a very nice image on the fly.
`/src/routes/+page.svelte` Uses the image as it's `og:image`. This should trigger prerendering of the image, but it doesn't. View the file for details.