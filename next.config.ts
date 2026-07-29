import createMDXPlugin from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = createMDXPlugin({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
	},
});

export default withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	transpilePackages: ["renoun"],
	// renoun reads tsconfig.json and the posts directory from disk at runtime;
	// Vercel's file tracing misses them, so include them in the lambda bundle.
	outputFileTracingIncludes: {
		"/blog": ["./tsconfig.json", "./src/posts/**/*"],
		"/blog/[slug]": ["./tsconfig.json", "./src/posts/**/*"],
	},
});
