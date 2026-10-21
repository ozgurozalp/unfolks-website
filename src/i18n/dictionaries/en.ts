/**
 * English copy. `Dictionary` is derived from this object, so the Turkish
 * dictionary must have the same shape; a missing string fails type-checking.
 * `{name}` placeholders are filled in with `format()` from `@/i18n/format`.
 */
export const en = {
	meta: {
		tagline: "Find who doesn't follow you back on Instagram",
		description:
			"Unfolks is a free Chrome extension that shows exactly who doesn't follow you back on Instagram. Filter non-followers, review them, and unfollow them at a safe pace — no password, no login, and your lists never leave your browser.",
		skipToContent: "Skip to content",
	},
	nav: {
		features: "Features",
		howItWorks: "How it works",
		faq: "FAQ",
		blog: "Blog",
		addToChrome: "Add to Chrome",
		addToChromeFree: "Add to Chrome — it's free",
		mainLabel: "Main",
		mobileLabel: "Mobile",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		toggleTheme: "Toggle colour theme",
	},
	hero: {
		badge: "Free forever · No password required",
		titleBefore: "See who doesn't",
		titleHighlight: "follow you back",
		titleAfter: "on Instagram",
		intro:
			"Unfolks compares your followers and following lists right inside your browser, flags every account that never followed back, and lets you unfollow them in bulk.",
		howItWorks: "How it works",
		rating: "{value}/5 from {count}+ Instagram users",
	},
	preview: {
		refresh: "Refresh the list",
		lastScan: "Last scan: 2 minutes ago",
		dataFileShort: "Data file",
		dataFile: "Check with your data file",
		search: "Search in accounts",
		sort: "Recently followed",
		chips: ["Verified", "Not verified", "Private", "No photo"],
		selectAll: "Select all",
		copy: "Copy",
		unfollowAll: "Unfollow all (20)",
		unfollowAllShort: "Unfollow (20)",
		unfollow: "Unfollow",
	},
	features: {
		heading: "Everything you need to clean up your following",
		intro:
			"No dashboards, no subscriptions, and your lists stay on your computer. Just the one job, done well.",
		items: [
			{
				title: "Exact results",
				description:
					"Checks every account you follow against your followers and lists only the ones that really don't follow you back. Refresh later and it tells you how many may have unfollowed you since the last scan.",
			},
			{
				title: "Unfollow at a safe pace",
				description:
					"Select a few accounts or all of them. By default Unfolks waits 4–6 seconds between unfollows and rests 3 minutes after every 5, and you can change both in Settings.",
			},
			{
				title: "Resume where it stopped",
				description:
					"If Instagram limits a scan, your progress is kept. Unfolks shows how long to wait, then you resume from where it stopped instead of starting over.",
			},
			{
				title: "No-risk data file check",
				description:
					"Drop the file from Instagram's \"Download your information\" and see who doesn't follow you back without sending Instagram a single request.",
			},
			{
				title: "Filter, sort and keep",
				description:
					"Filter by verified, not verified, private or no profile photo, sort by when you followed them, and search. Hide the accounts you want to keep so they're never unfollowed in bulk.",
			},
			{
				title: "No password, ever",
				description:
					"Unfolks uses the Instagram session already open in your browser. There is no login form, no account to create, and your lists stay on your computer.",
			},
		],
	},
	howItWorks: {
		eyebrow: "How it works",
		heading: "Three steps to a cleaner following list",
		steps: [
			{
				title: "Add the extension",
				description:
					"Install Unfolks from the Chrome Web Store. One click, no sign-up, no configuration.",
			},
			{
				title: "Open Instagram and the side panel",
				description:
					"Sign in to Instagram as usual, then click the Unfolks icon. The side panel opens next to the page; click Show unfollowers to scan the account you're signed in to.",
			},
			{
				title: "Review and clean up",
				description:
					"Search and filter the accounts that don't follow you back, hide the ones you want to keep, and unfollow the rest at a safe pace.",
			},
		],
	},
	testimonials: {
		heading: "Loved by Instagram users",
		intro: "{count}+ people use Unfolks to keep their following list honest.",
		items: [
			{
				quote:
					"Best tool for managing Instagram followers. It does one thing and it does it properly.",
				role: "Software Engineer",
			},
			{
				quote:
					"Finally found out who wasn't following me back. So helpful — and it took about a minute.",
				role: "Fashion Designer",
			},
			{
				quote:
					"Clean interface and works perfectly. Helped me clean up a following list I'd ignored for years.",
				role: "Fashion Model",
			},
		],
	},
	faq: {
		heading: "Frequently asked questions",
		intro: "Everything people usually want to know before installing.",
		items: [
			{
				question: "Do I need to give Unfolks my Instagram password?",
				answer:
					"No. Unfolks runs inside your own browser session on instagram.com, so it uses the login you already have. You never type your password into the extension, and there is no Unfolks account to create.",
			},
			{
				question: "Is it safe for my Instagram account?",
				answer:
					"Unfolks is built to be careful. By default, bulk unfollows wait 4–6 seconds between accounts and rest for 3 minutes after every 5, and you can slow both down in Settings. If Instagram starts refusing unfollows, Unfolks stops on its own and shows when you can try again instead of pushing on. Instagram decides its own limits, so no tool can promise an account will never be restricted, but going slowly is what keeps the risk low.",
			},
			{
				question: "What happens if Instagram stops a scan?",
				answer:
					"Your progress is kept. Short limits are waited out automatically. For longer ones, Unfolks tells you how long to wait, then lets you resume from where the scan stopped instead of starting over. Large accounts can also choose the balanced or careful scan speed in Settings.",
			},
			{
				question: "Can I check without sending Instagram any request?",
				answer:
					"Yes. Download your followers and following lists from Instagram's \"Download your information\" page, then drop the file into Unfolks. It finds who doesn't follow you back on your computer, so there is no risk of a block, and the file is never uploaded. Accounts found this way can't be unfollowed from that screen: open the profile, or run a scan to unfollow them from the list.",
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
					"Yes. Double-click an account to start selecting, or use Select all, then unfollow the selected accounts in one batch. You can stop the batch at any time, and copy the selected usernames too.",
			},
			{
				question: "How much does it cost?",
				answer:
					"Unfolks is completely free. There is no trial, no paid tier, and no credit card involved.",
			},
			{
				question: "Which browsers are supported?",
				answer:
					"Unfolks opens in the browser's side panel, so it needs a Chromium browser that supports extension side panels, such as Chrome, Edge or Brave. Browsers without that support, like Opera, can't open it.",
			},
		],
	},
	cta: {
		heading: "Stop guessing who follows you back",
		text: "Install Unfolks, open Instagram, and see the whole picture right in your browser. Free, no account, no password.",
	},
	footer: {
		blurb:
			"A free Chrome extension that shows who doesn't follow you back on Instagram — and lets you do something about it.",
		product: "Product",
		resources: "Resources",
		chromeStore: "Chrome Web Store",
		privacy: "Privacy policy",
		contact: "Contact",
		rights: "All rights reserved.",
		builtBy: "Built by",
		compare: "Unfolks vs Cobanov",
	},
	promo: {
		label: "Promotion",
		close: "Close promotion",
		title: "Try our Rock Paper Scissors game",
		text: "Settling an argument with a friend? Play a quick round online and let fate decide.",
		play: "Play now",
	},
	blog: {
		metaDescription:
			"Guides and tips on managing your Instagram followers, cleaning up your following list, and getting more out of Unfolks.",
		eyebrow: "Blog",
		heading: "Instagram, minus the guesswork",
		intro:
			"Practical writing on followers, unfollowing, and keeping your account healthy.",
		empty: "No posts published yet — check back soon.",
		readingTime: "{minutes} min read",
		allPosts: "All posts",
		ctaHeading: "Curious who doesn't follow you back?",
		ctaText:
			"Unfolks shows you right in your browser. Free, no password needed.",
	},
	compare: {
		metaTitle:
			"Cobanov Instagram Unfollowers alternative: Unfolks vs console scripts",
		metaDescription:
			"How Unfolks compares with Cobanov Instagram Unfollowers and other console scripts: how each one runs, what they share, and where a Chrome extension is easier and safer.",
		eyebrow: "Comparison",
		title: "Unfolks vs Cobanov Instagram Unfollowers",
		intro:
			"Cobanov Instagram Unfollowers and similar console scripts, such as InstagramUnfollowers, find who doesn't follow you back by running code you paste into the browser console. Unfolks does the same job as a Chrome extension. Here is how they compare.",
		checked: "Checked on {date} against version {version} of the script.",
		tableCaption: "Unfolks compared with a console script",
		colFeature: "Feature",
		colScript: "Console script",
		rows: [
			{
				label: "How you start it",
				unfolks: "Install once, then click the icon",
				script: "Copy the code, open the console and paste it, every visit",
			},
			{
				label: "Updates",
				unfolks: "Automatic, through the Chrome Web Store",
				script: "Copy the newest code yourself",
			},
			{
				label: "Where it shows",
				unfolks: "The browser's side panel, next to Instagram",
				script: "A box drawn on top of the Instagram page",
			},
			{
				label: "Check without sending Instagram requests",
				unfolks: "Yes, with your data file",
				script: "No",
			},
			{
				label: "Warns when someone may have unfollowed you",
				unfolks: "Yes, after each refresh",
				script: "No",
			},
			{
				label: "Filters, hide list, copy usernames",
				unfolks: "Yes",
				script: "Yes",
			},
			{
				label: "Resume a stopped scan",
				unfolks: "Yes",
				script: "Yes",
			},
			{
				label: "Password needed",
				unfolks: "No",
				script: "No",
			},
			{
				label: "Price",
				unfolks: "Free and open source",
				script: "Free and open source",
			},
		],
		sharedTitle: "What they have in common",
		sharedText:
			"Both are free, never ask for your Instagram password, and keep your lists in your browser. Both wait between unfollows, let you hide the accounts you want to keep, and can pick up a scan that Instagram stopped.",
		diffTitle: "Where they differ",
		diffs: [
			{
				title: "No code in the console",
				text: "A console script only runs after you paste it into the browser's developer console. Instagram shows a warning there telling people not to paste code, because scammers use the same trick to take over accounts. The scripts on this page are open source and do what they say, but pasting code on every visit is an easy habit to exploit. Unfolks is installed once from the Chrome Web Store, which reviews extensions before publishing them.",
			},
			{
				title: "Always the current version",
				text: "When Instagram changes something, a script keeps working only if you copy the fixed code again. Unfolks updates itself in the background.",
			},
			{
				title: "A panel that stays out of the way",
				text: "Unfolks opens in the side panel, so Instagram stays usable next to your list. The scan keeps running if you close the panel, as long as the Instagram tab stays open.",
			},
			{
				title: "A no-risk check",
				text: "Drop the file from Instagram's \"Download your information\" into Unfolks and see who doesn't follow you back without sending Instagram a single request.",
			},
		],
		fairTitle: "When a script makes sense",
		fairText:
			"If you can't install extensions, for example on a managed work computer, or you only want to check once, a console script needs no installation. Read the code before you paste it.",
		switchTitle: "Switching takes a minute",
		switchSteps: [
			"Add Unfolks from the Chrome Web Store.",
			"Open Instagram and click the Unfolks icon.",
			"Click Show unfollowers. You don't need the script any more.",
		],
		faqTitle: "Questions",
		faq: [
			{
				question: "Is Unfolks made by Cobanov?",
				answer:
					"No. Unfolks is built by Özgür Özalp and isn't affiliated with Cobanov Instagram Unfollowers or InstagramUnfollowers.",
			},
			{
				question: "Is it safe to paste a script into the console?",
				answer:
					"Only if you have read the code and trust it. Instagram warns against it because scammers ask people to paste code that takes over their account. An extension from the Chrome Web Store skips that step.",
			},
			{
				question: "Do I lose anything by switching?",
				answer:
					"No. Neither tool keeps your lists on a server, so there is nothing to move. Install Unfolks and run a scan.",
			},
		],
		disclaimer:
			"Cobanov Instagram Unfollowers and InstagramUnfollowers belong to their authors, and Unfolks isn't affiliated with them. This page describes their public versions on {date}; they may have changed since.",
	},
	notFound: {
		title: "This page doesn't follow us back",
		text: "The page you were looking for doesn't exist or has moved.",
		home: "Back to home",
		blog: "Read the blog",
	},
	privacy: {
		title: "Privacy policy",
		metaDescription:
			"How Unfolks collects, uses, and protects your information.",
		effective: "Effective date: {date}",
	},
};

/** Plain strings in place of the literal types, so other languages can differ. */
type Widen<T> = T extends string
	? string
	: T extends readonly (infer U)[]
		? Widen<U>[]
		: { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
