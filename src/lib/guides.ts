import "server-only";

import type { Locale } from "@/i18n/config";
import { getPost, type Post } from "@/lib/posts";

/**
 * How-to posts linked from the homepage and the Cobanov comparison pages.
 * Non-followers and bulk unfollow come first; the rest follow.
 */
export const guideSlugs = {
	en: [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"how-to-mass-unfollow-on-instagram-safely",
		"how-to-check-who-unfollowed-you-on-instagram",
		"find-non-followers-with-instagram-data-download",
		"instagram-follow-and-unfollow-limits",
		"what-to-look-for-in-an-instagram-unfollow-tool",
	],
	tr: [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-toplu-takipten-cikma",
		"instagramda-beni-takipten-cikanlari-gorme",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"instagram-takip-ve-takipten-cikma-limitleri",
		"instagram-takipci-temizligi-nasil-yapilir",
	],
} as const satisfies Record<Locale, readonly string[]>;

/** Guide posts for one language, in the order of `guideSlugs`. */
export async function getGuidePosts(locale: Locale): Promise<Post[]> {
	const slugs = guideSlugs[locale];
	const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
	const missing = slugs.filter((_, index) => posts[index] === null);

	if (missing.length > 0) {
		throw new Error(`Missing guide posts: ${missing.join(", ")}`);
	}

	return posts as Post[];
}
