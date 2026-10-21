import {
	EyeOff,
	FileArchive,
	Hourglass,
	ListFilter,
	RotateCcw,
	Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";

/** One icon per feature, in the order of `features.items` in the dictionaries. */
const icons: LucideIcon[] = [
	Search,
	Hourglass,
	RotateCcw,
	FileArchive,
	ListFilter,
	EyeOff,
];

export async function Features() {
	const { features } = await getDictionary();

	return (
		<section id="features" className="scroll-mt-24 py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						{features.heading}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{features.intro}</p>
				</Reveal>

				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.items.map((feature, index) => {
						const Icon = icons[index] ?? Search;
						return (
							<Reveal key={feature.title} delay={index * 60}>
								<article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-800">
									<div className="inline-flex rounded-2xl bg-brand-gradient p-[1.5px]">
										<span className="grid size-11 place-items-center rounded-[calc(1rem-1px)] bg-card transition-colors group-hover:bg-transparent">
											<Icon className="size-5 text-brand-600 transition-colors group-hover:text-white dark:text-brand-400" />
										</span>
									</div>
									<h3 className="mt-5 text-lg font-semibold">
										{feature.title}
									</h3>
									<p className="mt-2 leading-relaxed text-muted-foreground">
										{feature.description}
									</p>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
