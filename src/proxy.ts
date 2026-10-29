import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

/**
 * English is the unprefixed public URL (`/`, `/blog`). Turkish is public at
 * `/tr` (`/tr`, `/tr/blog`). `/en/...` permanently redirects to the unprefixed
 * English URL so there is one canonical address per language.
 *
 * Nothing here reads `Accept-Language`. A crawler that requests `/` or `/tr`
 * always receives that page. A first-visit suggestion for the other language
 * is rendered on the client instead of a redirect.
 */
export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const first = pathname.split("/")[1] ?? "";

	if (first === defaultLocale) {
		const url = request.nextUrl.clone();
		const rest = pathname.slice(defaultLocale.length + 1);
		url.pathname = rest || "/";
		return NextResponse.redirect(url, 308);
	}

	if (isLocale(first)) {
		return NextResponse.next();
	}

	const url = request.nextUrl.clone();
	url.pathname =
		pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
	return NextResponse.rewrite(url);
}

export const config = {
	// Skip Next internals and any path with a file extension (images, robots,
	// sitemap, icons), which are the same in every language.
	matcher: ["/((?!_next|api|.*\\..*).*)"],
};
