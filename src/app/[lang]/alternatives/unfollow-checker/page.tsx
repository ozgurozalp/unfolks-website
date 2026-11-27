import type { Metadata } from "next";
import { BellRing, FileArchive, FileCheck2, Gift, UserMinus } from "lucide-react";

import {
	CheckedPill,
	CompareFaq,
	Disclaimer,
	FairAndSwitch,
	SectionTitle,
	SharedFeatures,
	VersusBadge,
} from "@/components/compare/compare-sections";
import { CompetitorDifferences } from "@/components/compare/competitor-differences";
import { ScriptComparison } from "@/components/compare/script-comparison";
import { Cta } from "@/components/sections/cta";
import { RelatedGuides } from "@/components/sections/guides";
import { FaqJsonLd } from "@/components/structured-data";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { localizedPageMeta } from "@/i18n/seo";
import { getDictionary, getLocale } from "@/i18n/server";
import { unfollowCheckerComparePage } from "@/lib/site";

/** In the order of `compareUnfollowChecker.diffs`. */
const DIFF_ICONS = [FileCheck2, Gift, UserMinus, BellRing];

export async function generateMetadata(): Promise<Metadata> {
	const [{ compareUnfollowChecker: text }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);
	return localizedPageMeta({
		locale,
		path: unfollowCheckerComparePage.path,
		documentTitle: { absolute: text.metaTitle },
		title: text.metaTitle,
		description: text.metaDescription,
	});
}

export default async function UnfollowCheckerComparePage() {
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
	const text = dict.compareUnfollowChecker;
	const date = new Intl.DateTimeFormat(intlLocale[locale], {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	}).format(unfollowCheckerComparePage.checkedOn);

	return (
		<>
			<FaqJsonLd items={text.faq} />
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
						<VersusBadge table={text.table} icon={FileArchive} />
						<h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
							{text.title}
						</h1>
						<p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
							{text.intro}
						</p>
						<div className="mt-6">
							<CheckedPill>{format(text.checked, { date })}</CheckedPill>
						</div>
					</header>

					<div className="mx-auto max-w-4xl">
						<ScriptComparison text={text.table} />

						<div className="mt-6 space-y-16">
							<SharedFeatures text={text} />

							<section>
								<SectionTitle>{text.diffTitle}</SectionTitle>
								<div className="mt-6">
									<CompetitorDifferences items={text.diffs} icons={DIFF_ICONS} />
								</div>
							</section>

							<FairAndSwitch text={text} ctaLabel={dict.nav.addToChromeFree} />

							<CompareFaq text={text} />

							<RelatedGuides heading={text.guidesTitle} intro={text.guidesText} />

							<Disclaimer>{format(text.disclaimer, { date })}</Disclaimer>
						</div>
					</div>
				</div>
			</article>
			<Cta />
		</>
	);
}
