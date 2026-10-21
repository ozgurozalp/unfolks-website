import Image from "next/image";
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
import { BorderBeam } from "@/components/ui/border-beam";
import { getDictionary, getLocale } from "@/i18n/server";

/** One icon per feature, in the order of `features.items` in the dictionaries. */
const icons: LucideIcon[] = [
	Search,
	Hourglass,
	RotateCcw,
	FileArchive,
	ListFilter,
	EyeOff,
];

/** The safe-pace feature leads the bento with a real panel screenshot. */
const LEAD = 1;

function FeatureIcon({ Icon }: { Icon: LucideIcon }) {
	return (
		<span className="grid size-11 place-items-center rounded-2xl border border-border bg-background text-brand-600 shadow-xs transition-colors group-hover:border-brand-300 dark:text-brand-400 dark:group-hover:border-brand-800">
			<Icon className="size-5" aria-hidden />
		</span>
	);
}

/**
 * Features as a bento (after the 7ovr "Bento 1" layout): the lead tile spans
 * two columns and rows and shows the extension's own unfollow confirmation.
 */
export async function Features() {
	const [{ features }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);
	const lead = features.items[LEAD];
	const rest = features.items
		.map((item, index) => ({ ...item, Icon: icons[index] ?? Search }))
		.filter((_, index) => index !== LEAD);

	return (
		<section id="features" className="scroll-mt-24 py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						{features.heading}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground text-pretty">
						{features.intro}
					</p>
				</Reveal>

				<div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Reveal className="md:col-span-2 lg:row-span-2">
						<article className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card sm:flex-row lg:flex-col xl:flex-row">
							<BorderBeam
								size={160}
								duration={10}
								colorFrom="var(--color-brand-500)"
								colorTo="var(--color-accent-600)"
							/>
							<div className="flex flex-col p-7 sm:w-[21rem] sm:shrink-0 sm:p-8 lg:w-auto xl:w-[24rem]">
								<FeatureIcon Icon={icons[LEAD] ?? Hourglass} />
								<h3 className="mt-5 text-xl font-semibold text-balance sm:text-2xl">
									{lead.title}
								</h3>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									{lead.description}
								</p>
							</div>
							<div className="relative -mb-px mt-auto flex min-w-0 flex-1 items-end justify-center px-7 sm:pl-0 sm:pt-8 lg:pl-7 xl:pl-0">
								<div
									aria-hidden
									className="absolute inset-x-8 bottom-0 top-1/3 -z-10 rounded-full bg-brand-500/20 blur-3xl"
								/>
								<Image
									src={`/product/${locale}-unfollow.webp`}
									alt={features.leadImageAlt}
									width={402}
									height={720}
									sizes="(min-width: 1024px) 22rem, 80vw"
									className="h-auto w-full max-w-[19rem] rounded-t-2xl border border-b-0 border-zinc-800 shadow-2xl shadow-brand-900/20 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
								/>
							</div>
						</article>
					</Reveal>

					{rest.map(({ title, description, Icon }, index) => (
						<Reveal
							key={title}
							delay={(index + 1) * 60}
							// Two columns leave the fifth tile alone; let it fill the row.
							className={
								index === rest.length - 1
									? "md:col-span-2 lg:col-span-1"
									: undefined
							}
						>
							<article className="group h-full rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-surface">
								<FeatureIcon Icon={Icon} />
								<h3 className="mt-5 text-lg font-semibold">{title}</h3>
								<p className="mt-2 leading-relaxed text-muted-foreground">
									{description}
								</p>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
