import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

import { siteConfig } from "@/lib/site";

const TURKISH_PREFIX = "/tr";

function splitHref(href: string): { path: string; suffix: string } {
	const hash = href.indexOf("#");
	const query = href.indexOf("?");
	const cuts = [hash, query].filter((index) => index >= 0);
	const cut = cuts.length > 0 ? Math.min(...cuts) : href.length;
	return { path: href.slice(0, cut), suffix: href.slice(cut) };
}

/**
 * Public path for one locale. English stays unprefixed (`/blog/post`).
 * Turkish lives under `/tr` (`/tr/blog/post`). Hash and query are kept.
 * `href` may already include a locale prefix.
 */
export function localePath(locale: Locale, href: string): string {
	if (!href.startsWith("/")) return href;

	const { path, suffix } = splitHref(href);
	const bare = path.length > 1 ? path.replace(/\/+$/, "") : path;

	if (locale === defaultLocale) {
		if (bare === TURKISH_PREFIX) return `/${suffix}`;
		if (bare.startsWith(`${TURKISH_PREFIX}/`)) {
			return `${bare.slice(TURKISH_PREFIX.length)}${suffix}`;
		}
		return `${bare}${suffix}`;
	}

	if (bare === TURKISH_PREFIX || bare.startsWith(`${TURKISH_PREFIX}/`)) {
		return `${bare}${suffix}`;
	}
	if (bare === "/") return `${TURKISH_PREFIX}${suffix}`;
	return `${TURKISH_PREFIX}${bare}${suffix}`;
}

export function absoluteUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

/** Hreflang for a page that exists in both locales. `path` is unprefixed. */
export function alternatesFor(locale: Locale, path: string) {
	const en = localePath("en", path);
	const tr = localePath("tr", path);
	return {
		canonical: localePath(locale, path),
		languages: {
			en,
			tr,
			"x-default": en,
		},
	};
}

export function postPath(lang: Locale, slug: string): string {
	return localePath(lang, `/blog/${slug}`);
}

/** Canonical and hreflang for one post. Counterparts are linked only when both exist. */
export function postAlternates(post: {
	slug: string;
	lang: Locale;
	translation?: string;
}) {
	const canonical = postPath(post.lang, post.slug);

	if (!post.translation) {
		return {
			canonical,
			languages: {
				[post.lang]: canonical,
				"x-default": canonical,
			},
		};
	}

	const enSlug = post.lang === "en" ? post.slug : post.translation;
	const trSlug = post.lang === "tr" ? post.slug : post.translation;
	const en = postPath("en", enSlug);
	const tr = postPath("tr", trSlug);

	return {
		canonical,
		languages: {
			en,
			tr,
			"x-default": en,
		},
	};
}
