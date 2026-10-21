import type { Metadata } from "next";

import { DifferencesBento } from "@/components/compare/differences-bento";
import { ScriptComparison } from "@/components/compare/script-comparison";
import { Cta } from "@/components/sections/cta";
import { FaqJsonLd } from "@/components/structured-data";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";
import { comparePage, socialImages } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
	const { compare } = await getDictionary();
	return {
		title: { absolute: compare.metaTitle },
		description: compare.metaDescription,
		alternates: { canonical: comparePage.path },
		openGraph: {
			title: compare.metaTitle,
			description: compare.metaDescription,
			url: comparePage.path,
			images: socialImages.openGraph,
		},
		twitter: {
			title: compare.metaTitle,
			description: compare.metaDescription,
			images: socialImages.twitter,
		},
	};
}

export default async function ComparePage() {
	const [{ compare }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);
	const date = new Intl.DateTimeFormat(intlLocale[locale], {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(comparePage.checkedOn);

	return (
		<>
			<FaqJsonLd items={compare.faq} />
			<article className="container-page py-14 sm:py-20">
				<header className="mx-auto max-w-3xl text-center">
					<span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
						{compare.eyebrow}
					</span>
					<h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
						{compare.title}
					</h1>
					<p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
						{compare.intro}
					</p>
					<p className="mt-3 text-sm text-muted-foreground">
						{format(compare.checked, {
							date,
							version: comparePage.scriptVersion,
						})}
					</p>
				</header>

				<div className="mx-auto mt-4 max-w-4xl">
					<ScriptComparison text={compare.table} />
				</div>

				<div className="mx-auto mt-6 max-w-3xl space-y-14">
					<section>
						<h2 className="text-2xl font-bold tracking-tight">
							{compare.sharedTitle}
						</h2>
						<p className="mt-3 leading-relaxed text-muted-foreground">
							{compare.sharedText}
						</p>
					</section>
				</div>

				<section className="mx-auto mt-14 max-w-4xl">
					<h2 className="text-2xl font-bold tracking-tight">
						{compare.diffTitle}
					</h2>
					<div className="mt-6">
						<DifferencesBento text={compare} />
					</div>
				</section>

				<div className="mx-auto mt-14 max-w-3xl space-y-14">
					<section>
						<h2 className="text-2xl font-bold tracking-tight">
							{compare.fairTitle}
						</h2>
						<p className="mt-3 leading-relaxed text-muted-foreground">
							{compare.fairText}
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-bold tracking-tight">
							{compare.switchTitle}
						</h2>
						<ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-muted-foreground marker:font-semibold marker:text-brand-600">
							{compare.switchSteps.map((step) => (
								<li key={step}>{step}</li>
							))}
						</ol>
					</section>

					<section>
						<h2 className="text-2xl font-bold tracking-tight">
							{compare.faqTitle}
						</h2>
						<dl className="mt-6 space-y-6">
							{compare.faq.map((item) => (
								<div key={item.question}>
									<dt className="font-semibold">{item.question}</dt>
									<dd className="mt-1.5 leading-relaxed text-muted-foreground">
										{item.answer}
									</dd>
								</div>
							))}
						</dl>
					</section>

					<p className="border-t border-border pt-6 text-sm text-muted-foreground">
						{format(compare.disclaimer, { date })}
					</p>
				</div>
			</article>
			<Cta />
		</>
	);
}
