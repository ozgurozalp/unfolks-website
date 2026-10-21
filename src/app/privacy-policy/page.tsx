import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Privacy policy",
	description: `How ${siteConfig.name} collects, uses, and protects your information.`,
	alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "21 October 2026";

export default function PrivacyPolicyPage() {
	return (
		<div className="px-4 py-14 sm:px-6 sm:py-20">
			<header className="mx-auto max-w-3xl">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Privacy policy
				</h1>
				<p className="mt-3 text-muted-foreground">
					Effective date: {EFFECTIVE_DATE}
				</p>
			</header>

			<div className="prose prose-neutral mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:tracking-tight prose-a:text-brand-600 prose-a:underline-offset-4 hover:prose-a:text-brand-700 dark:prose-a:text-brand-400">
				<p>
					This Privacy Policy explains what information {siteConfig.name}{" "}
					(&ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) handles, and
					how, when you use the {siteConfig.name} Chrome extension and this
					website.
				</p>

				<h2>1. What the extension reads</h2>
				<p>
					The extension reads information that Instagram already shows you while
					you are signed in:
				</p>
				<ul>
					<li>Your Instagram name, username, and profile photo address</li>
					<li>
						The accounts you follow, including their names, usernames, photos,
						and whether they follow you back
					</li>
					<li>
						Your settings: sort and filter choices, scan and unfollow speed,
						accounts you hide from the list, and the time of your last scan
					</li>
					<li>
						The progress of a scan that stopped partway, so you can resume it
					</li>
					<li>
						If you use the data file option: the followers and following files
						from your Instagram data download, which are read in the panel and
						not stored
					</li>
				</ul>
				<p>
					The extension never asks for your Instagram password. It uses the
					session already open in your browser.
				</p>

				<h2>2. Where it is stored</h2>
				<p>
					Scan results, your profile details, hidden accounts, and settings stay
					on your computer, in the extension&apos;s local storage. The progress
					of a stopped scan is kept for up to 24 hours and then removed. Files
					from your Instagram data download are compared in the panel and are
					never uploaded or saved. Nothing is synced to other devices, and we
					run no server that receives your Instagram data.
				</p>

				<h2>3. How it is used</h2>
				<ul>
					<li>To show the accounts that don&apos;t follow you back</li>
					<li>To show your name and photo in the panel</li>
					<li>To unfollow the accounts you choose, at the pace you set</li>
					<li>
						To wait before trying again when Instagram limits requests, and to
						resume a scan that stopped partway
					</li>
				</ul>

				<h2>4. Crash reports</h2>
				<p>
					If the extension runs into an error, a crash report may be sent to{" "}
					<a
						href="https://sentry.io/privacy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sentry
					</a>{" "}
					(Functional Software, Inc.) so the problem can be fixed. A report can
					include the error message, browser version, and extension version. It
					is not used for advertising. This is the only information the
					extension sends anywhere other than Instagram.
				</p>

				<h2>5. Sharing your information</h2>
				<p>
					We do not sell your data, share it for advertising, or use it for any
					purpose other than the extension&apos;s single purpose.
				</p>

				<h2>6. This website</h2>
				<p>
					This website uses Google Analytics, loaded through Google Tag Manager,
					to count visits and see which pages are read. Google Analytics sets
					its own cookies (such as <code>_ga</code>) for this. See{" "}
					<a
						href="https://policies.google.com/technologies/partner-sites"
						target="_blank"
						rel="noopener noreferrer"
					>
						how Google uses data from sites that use its services
					</a>
					.
				</p>
				<p>
					The site also sets one functional cookie,{" "}
					<code>rps-promo-closed</code>, to remember that you dismissed a
					promotional banner. It expires after one day and contains no personal
					information.
				</p>

				<h2>7. Your choices</h2>
				<ul>
					<li>
						Remove the extension&apos;s stored data by uninstalling it, or by
						clearing its data in your browser settings.
					</li>
					<li>You can stop using or uninstall the extension at any time.</li>
					<li>
						You can block or clear this website&apos;s cookies from your browser
						settings.
					</li>
				</ul>

				<h2>8. Instagram</h2>
				<p>
					Instagram is operated by Meta. {siteConfig.name} is not affiliated
					with Meta. Instagram&apos;s terms and privacy policy apply to your
					Instagram account.
				</p>

				<h2>9. Changes to this policy</h2>
				<p>
					We may update this Privacy Policy from time to time. When we do, we
					change the effective date above.
				</p>

				<h2>10. Contact us</h2>
				<p>
					If you have questions about this Privacy Policy, you can reach us:
				</p>
				<ul>
					<li>
						<strong>Email:</strong>{" "}
						<a href={`mailto:${siteConfig.author.email}`}>
							{siteConfig.author.email}
						</a>
					</li>
					<li>
						<strong>Website:</strong>{" "}
						<a
							href={siteConfig.author.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{siteConfig.author.url}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
