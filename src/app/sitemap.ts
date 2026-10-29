import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { sitemapLanguages } from "@/i18n/seo";
import { absoluteUrl, localizedPath } from "@/i18n/urls";
import { getAllPosts } from "@/lib/posts";
import { comparePage } from "@/lib/site";

const STATIC_PAGES: {
	path: string;
	changeFrequency: "weekly" | "monthly" | "yearly";
	priority: number;
}[] = [
	{ path: "/", changeFrequency: "monthly", priority: 1 },
	{ path: "/blog", changeFrequency: "weekly", priority: 0.8 },
	{ path: comparePage.path, changeFrequency: "monthly", priority: 0.7 },
	{ path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
];

function staticEntry(
	path: string,
	lastModified: Date,
	changeFrequency: "weekly" | "monthly" | "yearly",
	priority: number,
): MetadataRoute.Sitemap {
	const languages = sitemapLanguages(path);
	return locales.map((locale) => ({
		url: absoluteUrl(localizedPath(locale, path)),
		lastModified,
		changeFrequency,
		priority,
		alternates: { languages },
	}));
}

function postLanguages(
	posts: Awaited<ReturnType<typeof getAllPosts>>,
	post: (typeof posts)[number],
): Record<string, string> {
	const self = absoluteUrl(
		localizedPath(post.frontmatter.lang, `/blog/${post.slug}`),
	);
	const translation = post.frontmatter.translation
		? posts.find((item) => item.slug === post.frontmatter.translation)
		: undefined;

	if (!translation || translation.frontmatter.lang === post.frontmatter.lang) {
		return { [post.frontmatter.lang]: self, "x-default": self };
	}

	const enSlug = post.frontmatter.lang === "en" ? post.slug : translation.slug;
	const trSlug = post.frontmatter.lang === "tr" ? post.slug : translation.slug;
	const en = absoluteUrl(localizedPath("en", `/blog/${enSlug}`));
	const tr = absoluteUrl(localizedPath("tr", `/blog/${trSlug}`));
	return { en, tr, "x-default": en };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();
	const updated = posts[0]?.frontmatter.date ?? new Date();

	return [
		...STATIC_PAGES.flatMap((page) =>
			staticEntry(
				page.path,
				page.path === "/blog" ? updated : new Date(),
				page.changeFrequency,
				page.priority,
			),
		),
		...posts.map((post) => ({
			url: absoluteUrl(
				localizedPath(post.frontmatter.lang, `/blog/${post.slug}`),
			),
			lastModified: post.frontmatter.date,
			changeFrequency: "monthly" as const,
			priority: 0.7,
			alternates: { languages: postLanguages(posts, post) },
		})),
	];
}
