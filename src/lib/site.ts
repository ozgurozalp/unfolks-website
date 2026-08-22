export const siteConfig = {
	name: "Unfolks",
	url: "https://unfolks.com",
	tagline: "Find who doesn't follow you back on Instagram",
	description:
		"Unfolks is a free Chrome extension that shows exactly who doesn't follow you back on Instagram. Filter non-followers, review them, and unfollow in bulk — no password, no login, no data leaves your browser.",
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

export const navLinks = [
	{ href: "/#features", label: "Features" },
	{ href: "/#how-it-works", label: "How it works" },
	{ href: "/#faq", label: "FAQ" },
	{ href: "/blog", label: "Blog" },
] as const;

export const faqs = [
	{
		question: "Do I need to give Unfolks my Instagram password?",
		answer:
			"No. Unfolks runs inside your own browser session on instagram.com, so it uses the login you already have. You never type your password into the extension, and there is no Unfolks account to create.",
	},
	{
		question: "Is it safe for my Instagram account?",
		answer:
			"Unfolks works within Instagram's normal rate limits and paces bulk actions instead of firing them all at once. It behaves like a person clicking through the interface, which is what keeps accounts out of trouble.",
	},
	{
		question: "Does Unfolks store my followers list on a server?",
		answer:
			"No. The comparison between your followers and the people you follow happens locally in your browser. Your lists are not uploaded to us or to anyone else.",
	},
	{
		question: "How much does it cost?",
		answer:
			"Unfolks is completely free. There is no trial, no paid tier, and no credit card involved.",
	},
	{
		question: "Can I unfollow several accounts at once?",
		answer:
			"Yes. Filter down to the accounts that don't follow you back, select the ones you want to remove, and unfollow them in one batch. You can review the list before anything happens.",
	},
	{
		question: "Which browsers are supported?",
		answer:
			"Any Chromium-based browser that supports Chrome Web Store extensions — Chrome, Edge, Brave, Opera, Arc and Vivaldi all work.",
	},
] as const;

export const testimonials = [
	{
		quote:
			"Best tool for managing Instagram followers. It does one thing and it does it properly.",
		author: "Özgür Özalp",
		role: "Software Engineer",
		image: "/ozgur.jpeg",
	},
	{
		quote:
			"Finally found out who wasn't following me back. So helpful — and it took about a minute.",
		author: "Vito Konuk",
		role: "Fashion Designer",
		image: "/vito.jpg",
	},
	{
		quote:
			"Clean interface and works perfectly. Helped me clean up a following list I'd ignored for years.",
		author: "Batsy Habis",
		role: "Fashion Model",
		image: "/batsy.jpg",
	},
] as const;

export const steps = [
	{
		title: "Add the extension",
		description:
			"Install Unfolks from the Chrome Web Store. One click, no sign-up, no configuration.",
	},
	{
		title: "Open your Instagram profile",
		description:
			"Unfolks reads your followers and following lists straight from the page you're already logged into.",
	},
	{
		title: "Filter and clean up",
		description:
			"See the exact count of non-followers, split them by verified or normal, and clear out the ones you don't want.",
	},
] as const;
