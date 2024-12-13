import type { MetadataRoute } from "next";
import { posts } from "@/collections";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const allPosts = await posts.getEntries();

	const mainUrls: MetadataRoute.Sitemap = [
		{
			url: "https://unfolks.com",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://unfolks.com/privacy-policy",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://unfolks.com/blog",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];

	for (const post of allPosts) {
		const path = post.getPath();

		mainUrls.push({
			url: `https://unfolks.com/blog${path}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		});
	}

	return mainUrls;
}
