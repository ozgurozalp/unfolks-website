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

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	// Pin the workspace root so Turbopack ignores lockfiles above the repo.
	turbopack: { root: import.meta.dirname },
	// The blog index enumerates src/posts from disk while prerendering.
	outputFileTracingIncludes: {
		"/blog": ["./src/posts/**/*"],
		"/blog/[slug]": ["./src/posts/**/*"],
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
