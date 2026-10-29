import type { Metadata } from "next";

import { intlLocale, locales, type Locale } from "./config";
import { absoluteUrl, localizedPath } from "./urls";
import { siteConfig, socialImages } from "@/lib/site";

function ogLocale(locale: Locale): string {
	return intlLocale[locale].replace("-", "_");
}

export interface LanguageAlternates {
	canonical: string;
	languages: Record<string, string>;
}

/** Canonical for this locale, plus en / tr / x-default alternates. */
export function pageAlternates(
	locale: Locale,
	path: string,
): LanguageAlternates {
	const en = localizedPath("en", path);
	const tr = localizedPath("tr", path);
	return {
		canonical: locale === "tr" ? tr : en,
		languages: {
			en,
			tr,
			"x-default": en,
		},
	};
}

/** A page that exists in only one language. */
export function singleLanguageAlternates(
	locale: Locale,
	path: string,
): LanguageAlternates {
	const self = localizedPath(locale, path);
	return {
		canonical: self,
		languages: {
			[locale]: self,
			"x-default": self,
		},
	};
}

/** A blog post that has a translation with a different slug. */
export function translatedPostAlternates(
	locale: Locale,
	slug: string,
	other: { locale: Locale; slug: string },
): LanguageAlternates {
	const enSlug = locale === "en" ? slug : other.slug;
	const trSlug = locale === "tr" ? slug : other.slug;
	const en = localizedPath("en", `/blog/${enSlug}`);
	const tr = localizedPath("tr", `/blog/${trSlug}`);
	return {
		canonical: localizedPath(locale, `/blog/${slug}`),
		languages: { en, tr, "x-default": en },
	};
}

interface PageMetaOptions {
	locale: Locale;
	path: string;
	/** Social title. Pass the final string; the title template is not applied. */
	title: string;
	description: string;
	/**
	 * Document title. A string is run through the layout template
	 * (`%s — Unfolks`). Omit to use `title` as-is.
	 */
	documentTitle?: string | { absolute: string };
	alternates?: LanguageAlternates;
	article?: { publishedTime?: string; tags?: string[] };
}

/** Title, description, canonical, hreflang, and matching social tags. */
export function localizedPageMeta({
	locale,
	path,
	title,
	description,
	documentTitle,
	alternates = pageAlternates(locale, path),
	article,
}: PageMetaOptions): Metadata {
	const canonical = alternates.canonical;
	const shared = {
		siteName: siteConfig.name,
		url: canonical,
		locale: ogLocale(locale),
		alternateLocale: locales
			.filter((item) => item !== locale)
			.map((item) => ogLocale(item)),
		title,
		description,
		images: socialImages.openGraph,
	};

	return {
		title: documentTitle ?? { absolute: title },
		description,
		alternates,
		openGraph: article
			? {
					...shared,
					type: "article",
					publishedTime: article.publishedTime,
					tags: article.tags,
				}
			: { ...shared, type: "website" },
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: socialImages.twitter,
		},
	};
}

/** Sitemap `xhtml:link` set for a page that exists in both languages. */
export function sitemapLanguages(path: string): Record<string, string> {
	const en = absoluteUrl(localizedPath("en", path));
	const tr = absoluteUrl(localizedPath("tr", path));
	return { en, tr, "x-default": en };
}
