import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/site";

export function HowItWorks() {
	return (
		<section
			id="how-it-works"
			className="relative scroll-mt-24 overflow-hidden border-y border-border bg-surface py-20 sm:py-28"
		>
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
						How it works
					</span>
					<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
						Three steps, about a minute
					</h2>
				</Reveal>

				<ol className="mt-14 grid gap-6 md:grid-cols-3">
					{steps.map((step, index) => (
						<Reveal key={step.title} delay={index * 100} as="li">
							<div className="relative h-full rounded-3xl border border-border bg-card p-7">
								<span
									className="text-5xl font-bold leading-none text-gradient tabular-nums"
									aria-hidden
								>
									{String(index + 1).padStart(2, "0")}
								</span>
								<h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
								<p className="mt-2 leading-relaxed text-muted-foreground">
									{step.description}
								</p>
							</div>
						</Reveal>
					))}
				</ol>
			</div>
		</section>
	);
}
