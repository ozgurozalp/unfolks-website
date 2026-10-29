import { NextResponse, type NextRequest } from "next/server";

import { pickLocale } from "@/i18n/config";

/**
 * English is unprefixed (`/`, `/blog/...`) and rewritten to `app/en`.
 * Turkish is public at `/tr`. A browser that prefers Turkish is sent from an
 * unprefixed URL to `/tr` with a temporary redirect, so the two languages
 * stay on separate URLs for hreflang. `/tr` itself is never redirected away:
 * crawlers must be able to read it whatever language they send.
 * `/en` is not public; it redirects to the unprefixed English URL.
 */
export function proxy(request: NextRequest) {
	const { pathname, search } = request.nextUrl;
	const first = pathname.split("/")[1] ?? "";

	if (first === "tr") {
		return NextResponse.next();
	}

	if (first === "en") {
		const url = request.nextUrl.clone();
		url.pathname = pathname.slice("/en".length) || "/";
		return NextResponse.redirect(url, 308);
	}

	const locale = pickLocale(request.headers.get("accept-language"));
	if (locale === "tr") {
		const url = request.nextUrl.clone();
		url.pathname = pathname === "/" ? "/tr" : `/tr${pathname}`;
		const response = NextResponse.redirect(url, 302);
		response.headers.set("Vary", "Accept-Language");
		return response;
	}

	const target = new URL(`/en${pathname}${search}`, request.url);
	const response = NextResponse.rewrite(target);
	response.headers.set("Vary", "Accept-Language");
	return response;
}

export const config = {
	// Skip Next internals and any path with a file extension (images, robots,
	// sitemap, icons), which are the same in every language.
	matcher: ["/((?!_next|api|.*\\..*).*)"],
};
