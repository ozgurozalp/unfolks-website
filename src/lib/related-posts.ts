import "server-only";

import { cache } from "react";

import { getAllPosts, type Post } from "@/lib/posts";

/**
 * Off-topic post. It can link out to the Instagram guides, and nothing
 * recommends it.
 */
const EXCLUDED_SLUG = "fun-ways-to-stay-connected-with-friends-online";

/**
 * Two to four other posts in the same language. Mapped by hand so a limits
 * article points at the pace guide, and a "who left" article points at
 * snapshots, rather than at whatever happens to share a tag.
 */
const relatedPostSlugs: Record<string, readonly string[]> = {
	"how-to-see-who-doesnt-follow-you-back-on-instagram": [
		"how-to-mass-unfollow-on-instagram-safely",
		"find-non-followers-with-instagram-data-download",
		"how-to-check-who-unfollowed-you-on-instagram",
		"what-to-look-for-in-an-instagram-unfollow-tool",
	],
	"how-to-mass-unfollow-on-instagram-safely": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"instagram-follow-and-unfollow-limits",
		"find-non-followers-with-instagram-data-download",
		"what-to-look-for-in-an-instagram-unfollow-tool",
	],
	"how-to-check-who-unfollowed-you-on-instagram": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"find-non-followers-with-instagram-data-download",
		"instagram-follow-and-unfollow-limits",
		"how-to-mass-unfollow-on-instagram-safely",
	],
	"find-non-followers-with-instagram-data-download": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"how-to-check-who-unfollowed-you-on-instagram",
		"how-to-mass-unfollow-on-instagram-safely",
		"instagram-follow-and-unfollow-limits",
	],
	"instagram-follow-and-unfollow-limits": [
		"how-to-mass-unfollow-on-instagram-safely",
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"find-non-followers-with-instagram-data-download",
		"what-to-look-for-in-an-instagram-unfollow-tool",
	],
	"what-to-look-for-in-an-instagram-unfollow-tool": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"how-to-mass-unfollow-on-instagram-safely",
		"find-non-followers-with-instagram-data-download",
		"cobanov-instagram-unfollowers-vs-unfolks",
	],
	"cobanov-instagram-unfollowers-vs-unfolks": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"what-to-look-for-in-an-instagram-unfollow-tool",
		"how-to-mass-unfollow-on-instagram-safely",
		"instagram-follow-and-unfollow-limits",
	],
	"fun-ways-to-stay-connected-with-friends-online": [
		"how-to-see-who-doesnt-follow-you-back-on-instagram",
		"how-to-check-who-unfollowed-you-on-instagram",
		"how-to-mass-unfollow-on-instagram-safely",
	],
	"instagramda-geri-takip-etmeyenleri-bulma": [
		"instagram-toplu-takipten-cikma",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"instagramda-beni-takipten-cikanlari-gorme",
		"instagram-takipci-temizligi-nasil-yapilir",
	],
	"instagram-toplu-takipten-cikma": [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-takip-ve-takipten-cikma-limitleri",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"instagram-takipci-temizligi-nasil-yapilir",
	],
	"instagramda-beni-takipten-cikanlari-gorme": [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"instagram-takip-ve-takipten-cikma-limitleri",
		"instagram-toplu-takipten-cikma",
	],
	"instagram-verilerini-indirerek-takip-etmeyenleri-bulma": [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagramda-beni-takipten-cikanlari-gorme",
		"instagram-toplu-takipten-cikma",
		"instagram-takip-ve-takipten-cikma-limitleri",
	],
	"instagram-takip-ve-takipten-cikma-limitleri": [
		"instagram-toplu-takipten-cikma",
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"instagram-takipci-temizligi-nasil-yapilir",
	],
	"instagram-takipci-temizligi-nasil-yapilir": [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-toplu-takipten-cikma",
		"instagram-verilerini-indirerek-takip-etmeyenleri-bulma",
		"cobanov-instagram-unfollowers-ve-unfolks",
	],
	"cobanov-instagram-unfollowers-ve-unfolks": [
		"instagramda-geri-takip-etmeyenleri-bulma",
		"instagram-takipci-temizligi-nasil-yapilir",
		"instagram-toplu-takipten-cikma",
		"instagram-takip-ve-takipten-cikma-limitleri",
	],
};

function assertRelatedMap(posts: readonly Post[]) {
	const bySlug = new Map(posts.map((post) => [post.slug, post]));
	const missing = posts
		.filter((post) => relatedPostSlugs[post.slug] === undefined)
		.map((post) => post.slug);
	const unknown = Object.keys(relatedPostSlugs).filter(
		(slug) => !bySlug.has(slug),
	);

	if (missing.length > 0 || unknown.length > 0) {
		throw new Error(
			`Related guides map is out of date. Missing: ${missing.join(", ") || "none"}. Unknown: ${unknown.join(", ") || "none"}.`,
		);
	}

	for (const [slug, targets] of Object.entries(relatedPostSlugs)) {
		if (targets.length < 2 || targets.length > 4) {
			throw new Error(
				`${slug} must link to 2–4 related guides, got ${targets.length}`,
			);
		}

		const post = bySlug.get(slug);
		if (!post) continue;

		const unique = new Set(targets);
		if (unique.size !== targets.length) {
			throw new Error(`${slug} repeats a related guide`);
		}

		for (const target of targets) {
			if (target === slug) {
				throw new Error(`${slug} links to itself`);
			}
			if (target === EXCLUDED_SLUG) {
				throw new Error(`${slug} recommends the off-topic post ${target}`);
			}
			const other = bySlug.get(target);
			if (!other) {
				throw new Error(`${slug} links to missing post ${target}`);
			}
			if (other.frontmatter.lang !== post.frontmatter.lang) {
				throw new Error(
					`${slug} (${post.frontmatter.lang}) links to ${target} (${other.frontmatter.lang})`,
				);
			}
		}
	}
}

const loadPosts = cache(async () => {
	const posts = await getAllPosts();
	assertRelatedMap(posts);
	return posts;
});

/** Related guides for one post, in the mapped order. */
export async function getRelatedPosts(slug: string): Promise<Post[]> {
	const posts = await loadPosts();
	const targets = relatedPostSlugs[slug];
	if (!targets) {
		throw new Error(`No related guides for ${slug}`);
	}

	return targets.map((target) => {
		const post = posts.find((item) => item.slug === target);
		if (!post) {
			throw new Error(`Missing related post ${target}`);
		}
		return post;
	});
}
