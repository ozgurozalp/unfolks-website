import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { getDictionary, getLocale } from "@/i18n/server";

/**
 * Steps on a vertical timeline (after the 7ovr "How It Works 2" layout),
 * beside the side panel the steps lead to.
 */
export async function HowItWorks() {
	const [{ howItWorks }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);

	return (
		<section
			id="how-it-works"
			className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28"
		>
			<div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-20">
				<div>
					<Reveal>
						<span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
							{howItWorks.eyebrow}
						</span>
						<h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
							{howItWorks.heading}
						</h2>
					</Reveal>

					<ol role="list" className="mt-12 flex flex-col">
						{howItWorks.steps.map((step, index) => {
							const isLast = index === howItWorks.steps.length - 1;
							return (
								<Reveal
									key={step.title}
									delay={index * 100}
									as="li"
									className="flex gap-5"
								>
									<div className="flex flex-col items-center">
										<span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white tabular-nums shadow-lg shadow-brand-500/25">
											{index + 1}
										</span>
										{!isLast && (
											<span
												aria-hidden
												className="mt-2 w-px flex-1 bg-gradient-to-b from-brand-300 to-border dark:from-brand-800"
											/>
										)}
									</div>
									<div className={isLast ? "pt-1.5" : "pb-10 pt-1.5"}>
										<h3 className="text-lg font-semibold">{step.title}</h3>
										<p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
											{step.description}
										</p>
									</div>
								</Reveal>
							);
						})}
					</ol>
				</div>

				<Reveal delay={150} className="relative mx-auto w-full max-w-sm">
					<div
						aria-hidden
						className="absolute inset-6 -z-10 rounded-full bg-brand-500/25 blur-3xl dark:bg-brand-600/20"
					/>
					<Image
						src={`/product/${locale}-list.webp`}
						alt={howItWorks.imageAlt}
						width={402}
						height={720}
						sizes="(min-width: 1024px) 24rem, 90vw"
						className="h-auto w-full rounded-[1.75rem] border border-zinc-800 shadow-2xl shadow-brand-900/25 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
					/>
				</Reveal>
			</div>
		</section>
	);
}
