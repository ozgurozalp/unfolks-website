import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";
import { comparePage, siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();

	return [
		{
			url: siteConfig.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${siteConfig.url}/blog`,
			lastModified: posts[0]?.frontmatter.date ?? new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${siteConfig.url}${comparePage.path}`,
			lastModified: comparePage.checkedOn,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${siteConfig.url}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.4,
		},
		...posts.map((post) => ({
			url: `${siteConfig.url}/blog/${post.slug}`,
			lastModified: post.frontmatter.date,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];
}
