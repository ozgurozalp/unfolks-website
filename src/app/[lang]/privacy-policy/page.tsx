import type { Metadata } from "next";

import { PolicyEn } from "@/components/privacy/policy-en";
import { PolicyTr } from "@/components/privacy/policy-tr";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";

/** When the policy text last changed, in both languages. */
const EFFECTIVE_DATE = new Date(Date.UTC(2026, 9, 21));

export async function generateMetadata(): Promise<Metadata> {
	const { privacy } = await getDictionary();
	return {
		title: privacy.title,
		description: privacy.metaDescription,
		alternates: { canonical: "/privacy-policy" },
	};
}

export default async function PrivacyPolicyPage() {
	const [{ privacy }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);
	const date = new Intl.DateTimeFormat(intlLocale[locale], {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(EFFECTIVE_DATE);

	return (
		<div className="px-4 py-14 sm:px-6 sm:py-20">
			<header className="mx-auto max-w-3xl">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
					{privacy.title}
				</h1>
				<p className="mt-3 text-muted-foreground">
					{format(privacy.effective, { date })}
				</p>
			</header>

			<div className="prose prose-neutral mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:tracking-tight prose-a:text-brand-600 prose-a:underline-offset-4 hover:prose-a:text-brand-700 dark:prose-a:text-brand-400">
				{locale === "tr" ? <PolicyTr /> : <PolicyEn />}
			</div>
		</div>
	);
}
