import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Privacy policy",
	description: `How ${siteConfig.name} collects, uses, and protects your information.`,
	alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "12 December 2024";

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
				<p>We may collect the following types of information:</p>
				<ul>
					<li>
						<strong>Account information:</strong> your Instagram username and
						profile data, if you grant permission.
					</li>
					<li>
						<strong>Usage data:</strong> information about your interaction with
						our extension, including follow and unfollow actions.
					</li>
					<li>
						<strong>Technical data:</strong> browser type, version, and
						operating system.
					</li>
				</ul>

				<h2>2. How we use your information</h2>
				<ul>
					<li>
						To provide the functionality of the extension, such as identifying
						non-followers.
					</li>
					<li>To improve our services and user experience.</li>
					<li>To maintain the security and integrity of our systems.</li>
				</ul>

				<h2>3. Sharing your information</h2>
				<p>
					We do not sell, rent, or share your personal data with third parties,
					except as required by law or to protect our rights.
				</p>

				<h2>4. Data security</h2>
				<p>
					We take reasonable measures to protect your information from
					unauthorised access, use, or disclosure. However, no internet service
					is entirely secure, and we cannot guarantee complete security.
				</p>

				<h2>5. Your choices</h2>
				<ul>
					<li>You can stop using the extension at any time.</li>
					<li>
						You may request deletion of your data by contacting us at{" "}
						<a href={`mailto:${siteConfig.author.email}`}>
							{siteConfig.author.email}
						</a>
						.
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
