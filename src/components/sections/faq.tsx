import { Bug, Mail, MessageCircleQuestion, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

/**
 * Questions beside a sticky heading and support card (after the 7ovr
 * "FAQs 4" layout). Support goes to email and GitHub issues; there is no
 * contact form to back.
 */
export async function Faq() {
	const { faq } = await getDictionary();

	return (
		<section
			id="faq"
			className="scroll-mt-24 border-t border-border bg-surface py-20 sm:py-28"
		>
			<div className="container-page grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
				<Reveal className="lg:sticky lg:top-[calc(var(--site-header-height)+2rem)] lg:self-start">
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						{faq.heading}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{faq.intro}</p>

					<div className="mt-8 rounded-3xl border border-border bg-card p-6">
						<span className="grid size-10 place-items-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
							<MessageCircleQuestion className="size-5" aria-hidden />
						</span>
						<h3 className="mt-4 text-lg font-semibold">{faq.supportTitle}</h3>
						<p className="mt-1.5 leading-relaxed text-muted-foreground">
							{faq.supportText}
						</p>
						<div className="mt-5 flex flex-wrap gap-2">
							<Button asChild size="sm">
								<a href={`mailto:${siteConfig.author.email}`}>
									<Mail />
									{faq.supportEmail}
								</a>
							</Button>
							<Button asChild size="sm" variant="outline">
								<a
									href={siteConfig.issuesUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Bug />
									{faq.supportIssues}
								</a>
							</Button>
						</div>
					</div>
				</Reveal>

				<Reveal delay={100}>
					{/* Native disclosures sharing a name form an exclusive accordion;
					    answers stay searchable and deep-linkable while closed. */}
					<div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
						{faq.items.map((item) => (
							<details key={item.question} name="faq" className="faq-item px-6">
								<summary className="flex items-center justify-between gap-4 py-5 text-base font-semibold transition-colors hover:text-primary">
									{item.question}
									<Plus
										aria-hidden
										className="size-5 shrink-0 text-muted-foreground"
									/>
								</summary>
								<p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-muted-foreground">
									{item.answer}
								</p>
							</details>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
