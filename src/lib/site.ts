export const siteConfig = {
	name: "Unfolks",
	url: "https://unfolks.com",
	tagline: "Find who doesn't follow you back on Instagram",
	description:
		"Unfolks is a free Chrome extension that shows exactly who doesn't follow you back on Instagram. Filter non-followers, review them, and unfollow them at a safe pace — no password, no login, and your lists never leave your browser.",
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
			"Unfolks is built to be careful. Bulk unfollows wait a few seconds between each account and take a longer rest every few accounts, and you can slow both down in Settings. If Instagram starts limiting requests, Unfolks stops on its own and waits instead of pushing on. Instagram decides its own limits, so no tool can promise an account will never be restricted, but going slowly is what keeps the risk low.",
	},
	{
		question: "What happens if Instagram stops a scan?",
		answer:
			"Your progress is kept. Unfolks tells you how long to wait, then lets you resume from where the scan stopped instead of starting over. Large accounts can also choose a balanced or careful scan speed.",
	},
	{
		question: "Can I check without sending Instagram any request?",
		answer:
			"Yes. Download your followers and following lists from Instagram's \"Download your information\" page, then drop the file into Unfolks. It finds who doesn't follow you back on your computer, so there is no risk of a block, and the file is never uploaded.",
	},
	{
		question: "Does Unfolks store my followers list on a server?",
		answer:
			"No. The comparison happens in your browser and your lists stay on your computer. The only thing the extension sends anywhere other than Instagram is a crash report if something breaks, so the bug can be fixed. See the privacy policy for details.",
	},
	{
		question: "Can I keep some accounts I don't want to unfollow?",
		answer:
			"Yes. Hide them from the list and they are never included in a bulk unfollow. You can bring them back at any time.",
	},
	{
		question: "Can I unfollow several accounts at once?",
		answer:
			"Yes. Select the accounts you want — or select all — and unfollow them in one batch. You can review the list first and cancel the batch at any time.",
	},
	{
		question: "How much does it cost?",
		answer:
			"Unfolks is completely free. There is no trial, no paid tier, and no credit card involved.",
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
		title: "Open Instagram and the side panel",
		description:
			"Sign in to Instagram as usual, then click the Unfolks icon. The panel opens next to the page and scans the account you're already logged into.",
	},
	{
		title: "Review and clean up",
		description:
			"Search and filter the accounts that don't follow you back, hide the ones you want to keep, and unfollow the rest at a safe pace.",
	},
] as const;
