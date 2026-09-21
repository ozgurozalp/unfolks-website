import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Privacy policy",
	description: `How ${siteConfig.name} collects, uses, and protects your information.`,
	alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "21 September 2026";

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
					This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;,
					&ldquo;our&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects
					your information when you use our services, including our Chrome
					extension.
				</p>

				<h2>1. Information we collect</h2>
				<p>
					We do not collect, store, or transmit any personal data. The extension
					works entirely in your browser, and nothing it processes is sent to our
					servers or to any third party.
				</p>

				<h2>2. How the extension works</h2>
				<p>
					The extension runs locally in your browser to provide its
					functionality, such as identifying non-followers. We operate no backend
					that receives your Instagram data, account details, or activity.
				</p>

				<h2>3. Sharing your information</h2>
				<p>
					Because we do not hold any of your data, we have nothing to sell, rent,
					or share with third parties.
				</p>

				<h2>4. Cookies on this website</h2>
				<p>
					This website sets a single functional cookie,{" "}
					<code>rps-promo-closed</code>, to remember that you dismissed a
					promotional banner. It expires after one day and contains no personal
					information. We do not use analytics or tracking cookies.
				</p>

				<h2>5. Your choices</h2>
				<ul>
					<li>You can stop using or uninstall the extension at any time.</li>
					<li>
						You can clear the promo cookie at any time from your browser settings.
					</li>
				</ul>

				<h2>6. Third-party services</h2>
				<p>
					Our extension interacts with Instagram. Please review Instagram&apos;s
					privacy policy to understand how they manage your data.
				</p>

				<h2>7. Changes to this policy</h2>
				<p>
					We may update this Privacy Policy from time to time. Changes will be
					effective immediately upon posting the revised policy.
				</p>

				<h2>8. Contact us</h2>
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
