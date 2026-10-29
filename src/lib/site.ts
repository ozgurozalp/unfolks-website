export const siteConfig = {
	name: "Unfolks",
	url: "https://unfolks.com",
	chromeStoreUrl:
		"https://chrome.google.com/webstore/detail/idgjpjkoddplmbdepekendpdbaibcgpc",
	author: {
		name: "Özgür Özalp",
		url: "https://ozgurozalp.com",
		email: "mail@ozgurozalp.com",
	},
	/** The extension's public source code and issue tracker. */
	githubUrl: "https://github.com/ozgurozalp/unfolks",
	issuesUrl: "https://github.com/ozgurozalp/unfolks/issues",
	/**
	 * Figures shown on the Chrome Web Store listing. Blog posts and the
	 * homepage both read from here so the site doesn't invent a second set.
	 */
	chromeStore: {
		ratingValue: 4.3,
		ratingCount: 69,
		userCount: 20000,
	},
} as const;

/** Social preview images in `public/`. Pages that set their own `openGraph` must repeat these. */
export const socialImages = {
	openGraph: [
		{
			url: "/opengraph-image.png",
			width: 1200,
			height: 630,
			alt: siteConfig.name,
		},
	],
	twitter: [
		{
			url: "/twitter-image.png",
			width: 1200,
			height: 630,
			alt: siteConfig.name,
		},
	],
};

/** Section anchors and pages in the header; labels live in the dictionaries. */
export const navLinks = [
	{ href: "/#features", key: "features" },
	{ href: "/#how-it-works", key: "howItWorks" },
	{ href: "/#faq", key: "faq" },
	{ href: "/blog", key: "blog" },
] as const;

/** Quotes and roles are translated in the dictionaries, in this order. */
export const testimonialPeople = [
	{ author: "Özgür Özalp", image: "/ozgur.jpeg" },
	{ author: "Vito Konuk", image: "/vito.jpg" },
	{ author: "Batsy Habis", image: "/batsy.jpg" },
] as const;

/** The comparison page for people searching for the Cobanov console script. */
export const comparePage = {
	path: "/alternatives/cobanov-instagram-unfollowers",
	/** When the competitor was last checked, and which version. */
	checkedOn: new Date(Date.UTC(2026, 9, 21)),
	scriptVersion: "2.4.1",
} as const;
