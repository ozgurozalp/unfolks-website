import { NextResponse, type NextRequest } from "next/server";

import { isLocale, pickLocale } from "@/i18n/config";

/**
 * The site has one set of URLs. The language comes from the browser's
 * `Accept-Language` header and is applied by rewriting to the matching
 * `app/[lang]` route, so the address bar never changes and there is no
 * switcher. The internal `/en` and `/tr` paths are not public: a request for
 * one is sent back to the plain URL.
 */
export function proxy(request: NextRequest) {
	const { pathname, search } = request.nextUrl;
	const first = pathname.split("/")[1] ?? "";

	if (isLocale(first)) {
		const url = request.nextUrl.clone();
		url.pathname = pathname.slice(first.length + 1) || "/";
		return NextResponse.redirect(url, 308);
	}

	const locale = pickLocale(request.headers.get("accept-language"));
	const target = new URL(`/${locale}${pathname}${search}`, request.url);
	const response = NextResponse.rewrite(target);
	// Shared caches must keep one copy per language.
	response.headers.set("Vary", "Accept-Language");
	return response;
}

export const config = {
	// Skip Next internals and any path with a file extension (images, robots,
	// sitemap, icons), which are the same in every language.
	matcher: ["/((?!_next|api|.*\\..*).*)"],
};
