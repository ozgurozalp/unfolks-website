import type { Metadata } from "next";

import {
	CheckedPill,
	CompareFaq,
	Disclaimer,
	FairAndSwitch,
	SectionTitle,
	SharedFeatures,
	VersusBadge,
} from "@/components/compare/compare-sections";
import { DifferencesBento } from "@/components/compare/differences-bento";
import { ScriptComparison } from "@/components/compare/script-comparison";
import { Cta } from "@/components/sections/cta";
import { FaqJsonLd } from "@/components/structured-data";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { alternatesFor } from "@/i18n/paths";
import { getDictionary, getLocale } from "@/i18n/server";
import { comparePage, socialImages } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
	const [{ compare }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);
	const { canonical, languages } = alternatesFor(locale, comparePage.path);
	return {
		title: { absolute: compare.metaTitle },
		description: compare.metaDescription,
		alternates: { canonical, languages },
		openGraph: {
			title: compare.metaTitle,
			description: compare.metaDescription,
			url: canonical,
			locale: intlLocale[locale].replace("-", "_"),
			alternateLocale: locale === "en" ? ["tr_TR"] : ["en_US"],
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
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
	const { compare } = dict;
	const date = new Intl.DateTimeFormat(intlLocale[locale], {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(comparePage.checkedOn);

	return (
		<>
			<FaqJsonLd items={compare.faq} />
			<article className="relative isolate overflow-hidden">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] overflow-hidden"
				>
					<div className="absolute -top-48 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-600/15" />
					<div className="absolute inset-0 bg-dot-grid text-foreground/[0.06] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
				</div>

				<div className="container-page py-14 sm:py-20">
					<header className="mx-auto flex max-w-3xl flex-col items-center text-center">
						<VersusBadge table={compare.table} />
						<h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							{compare.title}
						</h1>
						<p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
							{compare.intro}
						</p>
						<div className="mt-6">
							<CheckedPill>
								{format(compare.checked, {
									date,
									version: comparePage.scriptVersion,
								})}
							</CheckedPill>
						</div>
					</header>

					<div className="mx-auto max-w-4xl">
						<ScriptComparison text={compare.table} />

						<div className="mt-6 space-y-16">
							<SharedFeatures text={compare} />

							<section>
								<SectionTitle>{compare.diffTitle}</SectionTitle>
								<div className="mt-6">
									<DifferencesBento text={compare} />
								</div>
							</section>

							<FairAndSwitch
								text={compare}
								ctaLabel={dict.nav.addToChromeFree}
							/>

							<CompareFaq text={compare} />

							<Disclaimer>{format(compare.disclaimer, { date })}</Disclaimer>
						</div>
					</div>
				</div>
			</article>
			<Cta />
		</>
	);
}
