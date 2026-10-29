import { defaultLocale, type Locale } from "./config";
import { siteConfig } from "@/lib/site";

/**
 * Public path for one locale. English stays unprefixed (`/`, `/blog`);
 * Turkish is under `/tr` (`/tr`, `/tr/blog`). Hash fragments are preserved.
 */
export function localizedPath(locale: Locale, path: string): string {
	const hashIndex = path.indexOf("#");
	const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
	const raw = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
	const pathname = raw === "" ? "/" : raw.startsWith("/") ? raw : `/${raw}`;
	const prefixed =
		locale === defaultLocale
			? pathname
			: pathname === "/"
				? `/${locale}`
				: `/${locale}${pathname}`;
	return `${prefixed}${hash}`;
}

/**
 * Path with any locale prefix removed. Accepts the public URL (`/blog`,
 * `/tr/blog`) and the internal `/en/...` path a rewrite can expose.
 */
export function unlocalizedPath(path: string): string {
	const hashIndex = path.indexOf("#");
	const pathname = (hashIndex >= 0 ? path.slice(0, hashIndex) : path) || "/";
	const first = pathname.split("/")[1] ?? "";
	if (first === "en" || first === "tr") {
		const rest = pathname.slice(first.length + 1);
		return rest || "/";
	}
	return pathname;
}

/** Same page in another locale, keeping a hash when the browser has one. */
export function localeSwitchHref(
	pathname: string,
	target: Locale,
	hash = "",
): string {
	const suffix = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";
	return localizedPath(target, `${unlocalizedPath(pathname)}${suffix}`);
}

/** Absolute URL, without a trailing slash on the homepage. */
export function absoluteUrl(path: string): string {
	if (path === "/") return siteConfig.url;
	return `${siteConfig.url}${path}`;
}
