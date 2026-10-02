import { Plus } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/site";

export function Faq() {
	return (
		<section
			id="faq"
			className="scroll-mt-24 border-t border-border bg-surface py-20 sm:py-28"
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6">
				<Reveal className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Frequently asked questions
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Everything people usually want to know before installing.
					</p>
				</Reveal>

				<Reveal delay={100}>
					{/* Native disclosures sharing a name form an exclusive accordion;
					    answers stay searchable and deep-linkable while closed. */}
					<div className="mt-12 space-y-3">
						{faqs.map((faq) => (
							<details
								key={faq.question}
								name="faq"
								className="faq-item rounded-2xl border border-border bg-card/60 px-5 transition-colors open:bg-card"
							>
								<summary className="flex items-center justify-between gap-4 rounded-lg py-5 text-base font-semibold transition-colors hover:text-primary">
									{faq.question}
									<Plus
										aria-hidden
										className="size-5 shrink-0 text-muted-foreground"
									/>
								</summary>
								<p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-muted-foreground">
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
