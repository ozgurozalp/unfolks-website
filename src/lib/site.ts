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
	rating: {
		value: 5,
		count: 25000,
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
