import createMDXPlugin from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDXPlugin({
	extension: /\.mdx?$/,
	options: {
		// Plugins are referenced by name rather than by import so that Turbopack
		// (the default bundler since Next 16) can resolve them in its own worker.
		remarkPlugins: [
			["remark-frontmatter", "yaml"],
			["remark-mdx-frontmatter", {}],
			["remark-gfm", {}],
		],
		rehypePlugins: [],
	},
});

/**
 * Retired English posts. Each public prefix redirects permanently to the
 * closest current guide in that language. Deleted from `src/posts`, so they
 * are not in the sitemap.
 */
const retiredPosts = [
	{
		slug: "boost-your-instagram-engagement-with-our-chrome-extension-unfolks",
		en: "/blog/how-to-see-who-doesnt-follow-you-back-on-instagram",
		tr: "/tr/blog/instagramda-geri-takip-etmeyenleri-bulma",
	},
	{
		slug: "simplify-your-social-media-management-with-our-chrome-extension-unfolks",
		en: "/blog/how-to-mass-unfollow-on-instagram-safely",
		tr: "/tr/blog/instagram-toplu-takipten-cikma",
	},
] as const;

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	async redirects() {
		return [
			...retiredPosts.flatMap((post) => [
				{
					source: `/blog/${post.slug}`,
					destination: post.en,
					permanent: true,
				},
				{
					source: `/en/blog/${post.slug}`,
					destination: post.en,
					permanent: true,
				},
				{
					source: `/tr/blog/${post.slug}`,
					destination: post.tr,
					permanent: true,
				},
			]),
			// Applies only when this host reaches the app. The production 307
			// from www to the apex is a Vercel domain redirect and runs first.
			{
				source: "/:path*",
				has: [{ type: "host", value: "www\\.unfolks\\.com" }],
				destination: "https://unfolks.com/:path*",
				permanent: true,
			},
		];
	},
	// Pin the workspace root so Turbopack ignores lockfiles above the repo.
	turbopack: { root: import.meta.dirname },
	// The blog index enumerates src/posts from disk while prerendering.
	outputFileTracingIncludes: {
		"/[lang]/blog": ["./src/posts/**/*"],
		"/[lang]/blog/[slug]": ["./src/posts/**/*"],
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
				],
			},
		];
	},
};

export default withMDX(nextConfig);
