/**
 * English copy. `Dictionary` is derived from this object, so the Turkish
 * dictionary must have the same shape; a missing string fails type-checking.
 * `{name}` placeholders are filled in with `format()` from `@/i18n/format`.
 */
export const en = {
	meta: {
		title: "Instagram Unfollowers Chrome Extension (Free) | Unfolks",
		tagline: "Find who doesn't follow you back on Instagram",
		description:
			"Free Chrome extension that shows who doesn't follow you back on Instagram. No password. Unfollow in bulk at a safe pace. Lists stay on your computer.",
		skipToContent: "Skip to content",
		keywords: [
			"Instagram",
			"who doesn't follow me back",
			"unfollow",
			"non-followers",
			"ghost followers",
			"Chrome extension",
			"bulk unfollow",
			"Unfolks",
		],
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
		languageLabel: "Language",
	},
	hero: {
		badge: "Free forever · No password required",
		titleBefore: "See who doesn't",
		titleHighlight: "follow you back",
		titleAfter: "on Instagram",
		intro:
			"Unfolks compares your followers and following lists right inside your browser, flags every account that never followed back, and lets you unfollow them in bulk. Or drop in the file from Instagram's Download your information and check without sending Instagram a single request.",
		howItWorks: "How it works",
		rating: "{value}/5 · {users}+ users",
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
	stats: {
		heading: "Unfolks in numbers",
		items: [
			{ key: "users", prefix: "", suffix: "+", label: "Instagram users" },
			{ key: "rating", prefix: "", suffix: "/5", label: "Average rating" },
			{
				key: "passwords",
				prefix: "",
				suffix: "",
				label: "Passwords asked for",
			},
			{
				key: "local",
				prefix: "",
				suffix: "%",
				label: "Of your lists stay on your computer",
			},
		],
	},
	browsers: {
		label: "Works in",
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
		leadImageAlt:
			"The Unfolks panel asking to confirm unfollowing 3 accounts, with 4–6 seconds between each and a 3 minute rest after every 5.",
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
		imageAlt:
			"The Unfolks side panel listing accounts that don't follow back, with filters, search and an Unfollow button on each row.",
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
		supportTitle: "Didn't find your answer?",
		supportText:
			"Email us and a person will answer. Found a bug? Open an issue on GitHub.",
		supportEmail: "Email us",
		supportIssues: "Report a bug",
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
		compareUnfollowChecker: "Unfolks vs UnfollowChecker",
		sourceCode: "Source code on GitHub",
		email: "Email",
	},
	promo: {
		label: "Promotion",
		close: "Close promotion",
		title: "Try our Rock Paper Scissors game",
		text: "Settling an argument with a friend? Play a quick round online and let fate decide.",
		play: "Play now",
	},
	blog: {
		metaTitle: "Instagram Unfollowers Guides, Free in 2026 | Unfolks",
		metaDescription:
			"Free 2026 guides on who doesn't follow you back, how to mass unfollow at a safe pace, and what an Instagram limit looks like. No password. Works in Chrome.",
		eyebrow: "Blog",
		heading: "Instagram, minus the guesswork",
		intro:
			"Practical writing on followers, unfollowing, and keeping your account healthy.",
		empty: "No posts published yet — check back soon.",
		readingTime: "{minutes} min read",
		allPosts: "All posts",
		faqHeading: "Frequently asked questions",
		relatedHeading: "Related guides",
		ctaHeading: "Curious who doesn't follow you back?",
		ctaText:
			"Unfolks shows you right in your browser. Free, no password needed.",
	},
	compare: {
		metaTitle: "Cobanov Instagram Unfollowers Alternative | Unfolks",
		metaDescription:
			"Free Chrome alternative to the Cobanov Instagram Unfollowers script. No password and no console code. See who doesn't follow you back, then unfollow slowly.",
		eyebrow: "Comparison",
		title: "Unfolks vs Cobanov Instagram Unfollowers",
		intro:
			"Cobanov Instagram Unfollowers is a console script, based on the idea of the InstagramUnfollowers project on GitHub, that finds who doesn't follow you back once you paste its code into the browser console. Unfolks does the same job as a Chrome extension. Here is how they compare.",
		checked:
			"Checked on {date} against version {version} of the script and its website.",
		table: {
			title: "At a glance",
			description:
				"Switch on Only differences to hide what both tools do the same way.",
			unfolksCaption: "Chrome extension",
			scriptName: "Cobanov",
			scriptCaption: "Console script",
			cta: "Add to Chrome",
			labels: {
				feature: "Feature",
				included: "Included",
				partial: "Partial",
				notIncluded: "Not included",
				onlyDifferences: "Only differences",
				compareWith: "Compare {name} with",
				showingDifferences: "Showing only rows that differ",
				showingAll: "Showing all rows",
			},
			sections: [
				{
					id: "setup",
					title: "Getting started",
					rows: [
						{
							id: "start",
							feature: "How you start it",
							unfolks: "Install once, click the icon",
							script: "Paste the code into the console each visit",
						},
						{
							id: "updates",
							feature: "Updates",
							unfolks: "Automatic",
							script: "Copy the new code yourself",
						},
						{
							id: "where",
							feature: "Where it shows",
							unfolks: "Side panel, next to Instagram",
							script: "Floating panel over Instagram",
						},
						{
							id: "browsers",
							feature: "Browsers",
							unfolks: "Chrome, Edge, Brave",
							script: "Desktop browsers with a console",
						},
					],
				},
				{
					id: "features",
					title: "Features",
					rows: [
						{
							id: "datafile",
							feature: "Data file check",
							hint: "Sends Instagram nothing. Unfolks has it in the panel, the script on a separate page.",
							unfolks: true,
							script: true,
						},
						{
							id: "warn",
							feature: "Warns when someone may have unfollowed you",
							unfolks: true,
							script: false,
						},
						{
							id: "filters",
							feature: "Filters and search",
							unfolks: true,
							script: true,
						},
						{
							id: "hide",
							feature: "Hide accounts you want to keep",
							unfolks: true,
							script: true,
						},
						{
							id: "copy",
							feature: "Copy usernames",
							unfolks: true,
							script: true,
						},
						{
							id: "pacing",
							feature: "Waits between unfollows",
							unfolks: true,
							script: true,
						},
						{
							id: "resume",
							feature: "Resume a stopped scan",
							unfolks: true,
							script: true,
						},
					],
				},
				{
					id: "trust",
					title: "Privacy and price",
					rows: [
						{
							id: "password",
							feature: "Works without your password",
							unfolks: true,
							script: true,
						},
						{
							id: "local",
							feature: "Lists stay in your browser",
							unfolks: true,
							script: true,
						},
						{
							id: "languages",
							feature: "Languages",
							unfolks: "English, Turkish",
							script: "English, Turkish",
						},
						{
							id: "price",
							feature: "Price",
							unfolks: "Free",
							script: "Free",
						},
						{
							id: "source",
							feature: "Source code",
							unfolks: "Open source (MIT)",
							script: "Public on GitHub",
						},
					],
				},
			],
		},
		sharedTitle: "What they have in common",
		sharedText:
			"Both are free, never ask for your Instagram password, and keep your lists in your browser. Both wait between unfollows, let you hide the accounts you want to keep, can pick up a scan that Instagram stopped, and offer a data-file check that sends Instagram nothing.",
		sharedItems: [
			"Free",
			"No password",
			"Lists stay in your browser",
			"Waits between unfollows",
			"Hide accounts to keep",
			"Resume a stopped scan",
			"Data file check",
			"English and Turkish",
		],
		diffTitle: "Where they differ",
		diffs: [
			{
				title: "No code in the console",
				text: "A console script only runs after you paste it into the browser's developer console, and again each time you reload Instagram. Instagram prints a warning there: if someone told you to paste something, it's a scam that gives them your account. Cobanov's script is public, and its site publishes a hash and a Semgrep report so you can check it, but pasting code is the habit scammers rely on. Unfolks is installed once from the Chrome Web Store, which reviews extensions before publishing them.",
			},
			{
				title: "Always the current version",
				text: "When Instagram changes something, a script keeps working only if you copy the fixed code again. Unfolks updates itself in the background.",
			},
			{
				title: "Next to Instagram, not over it",
				text: "Unfolks opens in the browser's side panel, so the Instagram page stays fully visible. The scan keeps running if you close the panel, as long as the Instagram tab stays open.",
			},
			{
				title: "Knows what changed",
				text: "After each refresh, Unfolks tells you how many accounts may have unfollowed you since the last scan. The script shows the latest result only.",
			},
		],
		/** Text inside the decorative pictures on the difference cards. */
		diffVisuals: {
			consoleStop: "Stop!",
			consoleText: "This is a browser feature intended for developers.",
			upToDate: "Updated automatically",
			toast: "3 people may have unfollowed you",
		},
		fairTitle: "When the script makes sense",
		fairText:
			"The script needs nothing installed, so it suits Firefox or Safari users and anyone who only wants to check once. Its data-file page is an ordinary web page, so it needs no install either. Read the code before you paste it.",
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
					"No. Unfolks is built by Özgür Özalp and isn't affiliated with Cobanov Instagram Unfollowers or the InstagramUnfollowers project.",
			},
			{
				question: "Is it safe to paste a script into the console?",
				answer:
					"Only if you have read the code and trust it. Instagram's console warns that if someone told you to paste something there, it's a scam, and Cobanov's own security page says not to paste code you don't trust. An extension from the Chrome Web Store skips that step.",
			},
			{
				question: "Do I lose anything by switching?",
				answer:
					"No. Neither tool keeps your lists on a server, so there is nothing to move. Install Unfolks and run a scan.",
			},
		],
		guidesTitle: "Guides",
		guidesText:
			"The same questions, written as steps: who doesn't follow you back, how to unfollow in bulk at a safe pace, and what to do when Instagram limits the account.",
		disclaimer:
			"Cobanov Instagram Unfollowers and the InstagramUnfollowers project belong to their authors, and Unfolks isn't affiliated with them. This page describes their public versions on {date}; they may have changed since.",
	},
	compareUnfollowChecker: {
		metaTitle: "UnfollowChecker Alternative, Full List Free | Unfolks",
		metaDescription:
			"Free alternative to UnfollowChecker. Unfolks reads Instagram's data file too, shows the whole non-followers list free, and unfollows at a slow pace. No password.",
		title: "Unfolks vs UnfollowChecker",
		intro:
			"UnfollowChecker is a website that reads the data export you download from Instagram and shows who doesn't follow you back. Unfolks is a free Chrome extension that can read the same data file, or scan the Instagram session already open in your browser, and then unfollow at a slow pace. Here is how they compare.",
		checked: "Checked on {date} against UnfollowChecker's public website.",
		table: {
			title: "At a glance",
			description:
				"Switch on Only differences to hide what both tools do the same way.",
			unfolksCaption: "Chrome extension",
			scriptName: "UnfollowChecker",
			scriptCaption: "Website",
			cta: "Add to Chrome",
			labels: {
				feature: "Feature",
				included: "Included",
				partial: "Partial",
				notIncluded: "Not included",
				onlyDifferences: "Only differences",
				compareWith: "Compare {name} with",
				showingDifferences: "Showing only rows that differ",
				showingAll: "Showing all rows",
			},
			sections: [
				{
					id: "setup",
					title: "Getting started",
					rows: [
						{
							id: "lists",
							feature: "How it gets your lists",
							unfolks: "Your data file, or a scan of your open session",
							script: "Your data file only",
						},
						{
							id: "install",
							feature: "What you install",
							unfolks: "An extension, once",
							script: "Nothing",
						},
						{
							id: "devices",
							feature: "Where it runs",
							unfolks: "Chrome, Edge, Brave on a computer",
							script: "Any browser, phones included",
						},
						{
							id: "wait",
							feature: "Waits for Instagram's export",
							hint: "Instagram prepares the export first. That can take minutes or many hours.",
							unfolks: "Only if you use the data file",
							script: "Every time",
						},
					],
				},
				{
					id: "features",
					title: "Features",
					rows: [
						{
							id: "nonfollowers",
							feature: "Full list of who doesn't follow you back",
							unfolks: "Free",
							script: "$2.99 one-time",
						},
						{
							id: "datafile",
							feature: "Data file check",
							hint: "Reads the file in your browser and sends Instagram nothing.",
							unfolks: true,
							script: true,
						},
						{
							id: "unfollowed",
							feature: "Who may have unfollowed you",
							unfolks: "A count after each refresh",
							script: "By comparing two exports",
						},
						{
							id: "unfollow",
							feature: "Unfollow from the list, at a slow pace",
							unfolks: true,
							script: false,
						},
						{
							id: "hide",
							feature: "Hide accounts so a bulk unfollow skips them",
							unfolks: true,
							script: false,
						},
						{
							id: "mutuals",
							feature: "Mutuals and fans",
							unfolks: false,
							script: "$3 add-on",
						},
						{
							id: "csv",
							feature: "CSV download",
							unfolks: false,
							script: true,
						},
						{
							id: "otherApps",
							feature: "Threads and TikTok exports",
							unfolks: false,
							script: true,
						},
					],
				},
				{
					id: "trust",
					title: "Privacy and price",
					rows: [
						{
							id: "password",
							feature: "Works without your password",
							unfolks: true,
							script: true,
						},
						{
							id: "local",
							feature: "Lists stay in your browser",
							unfolks: true,
							script: true,
						},
						{
							id: "account",
							feature: "No account to create",
							unfolks: true,
							script: true,
						},
						{
							id: "price",
							feature: "Price",
							unfolks: "Free, no paid tier",
							script: "Free tier, paid lists",
						},
					],
				},
			],
		},
		sharedTitle: "What they have in common",
		sharedText:
			"Both read the data file Instagram lets you download, check it inside your browser, and send Instagram nothing while they do. Neither asks for your password or makes you create an account.",
		sharedItems: [
			"No password",
			"No account to create",
			"Lists stay in your browser",
			"Data file check",
		],
		diffTitle: "Where they differ",
		diffs: [
			{
				title: "The data file or a scan, your choice",
				text: "UnfollowChecker works only from the export, so every check starts with asking Instagram for it and waiting. Unfolks reads the same file and sends Instagram nothing. When you don't want to wait, it can scan the session already open in your browser instead.",
			},
			{
				title: "The whole list is free",
				text: "UnfollowChecker shows the count and a preview for free, and charges $2.99 for the full list of who doesn't follow you back, plus $3 for mutuals and fans. Unfolks has no paid tier: the full list is free.",
			},
			{
				title: "You can act on the list",
				text: "UnfollowChecker shows the names and leaves the unfollowing to you, one profile at a time. Unfolks unfollows from the list at a slow pace: 4–6 seconds between unfollows and a 3 minute rest after every 5, both adjustable. Hidden accounts are skipped, and you can stop a batch at any time.",
			},
			{
				title: "It tells you what changed",
				text: "To see who unfollowed you, UnfollowChecker compares two exports you downloaded at different times. After each refresh, Unfolks tells you how many accounts may have unfollowed you since your last scan.",
			},
		],
		fairTitle: "When UnfollowChecker makes sense",
		fairText:
			"It runs in any browser, so it suits phones, Firefox and Safari, where Unfolks doesn't run. It also gives you CSV files, mutuals and fans, and reads Threads and TikTok exports, which Unfolks doesn't. If you only want the names, never want to unfollow from a tool, and don't mind waiting for the export, it does that job.",
		switchTitle: "Trying Unfolks takes a minute",
		switchSteps: [
			"Add Unfolks from the Chrome Web Store.",
			"Open Instagram and click the Unfolks icon.",
			"Drop in the data file you already have, or click Show unfollowers.",
		],
		faqTitle: "Questions",
		faq: [
			{
				question: "Is Unfolks made by UnfollowChecker?",
				answer:
					"No. Unfolks is built by Özgür Özalp and isn't affiliated with UnfollowChecker.",
			},
			{
				question: "Can Unfolks read my Instagram data export?",
				answer:
					"Yes. Open the panel, choose Check with your data file, and select the file from Instagram's Download your information. It is read in your browser and Unfolks sends Instagram nothing while it does.",
			},
			{
				question: "Is a scan riskier than the data file?",
				answer:
					"Reading your lists during a scan works like scrolling them on instagram.com while you are signed in. What gets accounts limited is unfollowing many accounts quickly, which is why Unfolks waits between unfollows and rests after every 5. If you want no requests at all, use the data file.",
			},
			{
				question: "Does Unfolks cost anything?",
				answer:
					"No. Every feature is free, there is no paid tier and no account to create.",
			},
			{
				question: "Does Unfolks work on my phone?",
				answer:
					"No. Unfolks opens in the side panel of Chrome, Edge or Brave on a computer. On a phone, a website that reads the data export, such as UnfollowChecker, is the option.",
			},
		],
		guidesTitle: "Guides",
		guidesText:
			"The same questions, written as steps: who doesn't follow you back, how to use Instagram's data download, and how to unfollow in bulk at a safe pace.",
		disclaimer:
			"UnfollowChecker belongs to its owners, and Unfolks isn't affiliated with it. This page describes its public website on {date}, including its prices; it may have changed since.",
	},
	guides: {
		eyebrow: "Guides",
		heading: "Guides for your following list",
		intro:
			"How to see who doesn't follow you back, unfollow at a safe pace, and check the rest without handing over your password.",
	},
	notFound: {
		title: "This page doesn't follow us back",
		text: "The page you were looking for doesn't exist or has moved.",
		home: "Back to home",
		blog: "Read the blog",
	},
	privacy: {
		title: "Privacy policy",
		metaTitle: "Privacy Policy: Lists Stay on Your Computer | Unfolks",
		metaDescription:
			"How Unfolks collects, uses, and protects your information.",
		effective: "Effective date: {date}",
	},
};

/** Plain strings in place of the literal types, so other languages can differ. */
type Widen<T> = T extends string
	? string
	: T extends boolean
		? boolean
		: T extends readonly (infer U)[]
			? Widen<U>[]
			: { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof en>;
