import type { MetadataRoute } from "next";

import type { Locale } from "@/i18n/config";
import { absoluteUrl, alternatesFor, postAlternates } from "@/i18n/paths";
import { getAllPosts } from "@/lib/posts";
import { comparePage } from "@/lib/site";

const staticPaths = [
	"/",
	"/blog",
	comparePage.path,
	"/privacy-policy",
] as const;

function languagesOf(languages: Record<string, string>) {
	return Object.fromEntries(
		Object.entries(languages).map(([lang, path]) => [lang, absoluteUrl(path)]),
	);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();
	const latestPost = posts[0]?.frontmatter.date ?? new Date();

	const pages: MetadataRoute.Sitemap = staticPaths.flatMap((path) => {
		const priority =
			path === "/"
				? 1
				: path === "/blog"
					? 0.8
					: path === "/privacy-policy"
						? 0.4
						: 0.7;
		const changeFrequency =
			path === "/blog"
				? "weekly"
				: path === "/privacy-policy"
					? "yearly"
					: "monthly";
		const lastModified =
			path === comparePage.path
				? comparePage.checkedOn
				: path === "/blog"
					? latestPost
					: new Date();

		return (["en", "tr"] as const satisfies readonly Locale[]).map((locale) => {
			const { canonical, languages } = alternatesFor(locale, path);
			return {
				url: absoluteUrl(canonical),
				lastModified,
				changeFrequency,
				priority,
				alternates: { languages: languagesOf(languages) },
			};
		});
	});

	const articles: MetadataRoute.Sitemap = posts.map((post) => {
		const { canonical, languages } = postAlternates({
			slug: post.slug,
			lang: post.frontmatter.lang,
			translation: post.frontmatter.translation,
		});
		return {
			url: absoluteUrl(canonical),
			lastModified: post.frontmatter.date,
			changeFrequency: "monthly",
			priority: 0.7,
			alternates: { languages: languagesOf(languages) },
		};
	});

	return [...pages, ...articles];
}
