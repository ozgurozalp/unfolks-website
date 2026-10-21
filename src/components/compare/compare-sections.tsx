import Image from "next/image";
import {
	CalendarCheck,
	Check,
	Info,
	Lightbulb,
	Plus,
	TerminalSquare,
} from "lucide-react";

import { ChromeIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { siteConfig } from "@/lib/site";

type Compare = Dictionary["compare"];

/** Section heading shared by every block on the comparison page. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
			{children}
		</h2>
	);
}

/** "Unfolks vs Cobanov" badge above the page title. */
export function VersusBadge({ table }: { table: Compare["table"] }) {
	return (
		<div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 p-1.5 pr-4 shadow-sm backdrop-blur">
			<span className="flex items-center gap-2 rounded-full bg-brand-500/10 py-1 pl-1 pr-3 text-sm font-semibold text-brand-700 dark:text-brand-300">
				<Image
					src="/logo.png"
					alt=""
					width={24}
					height={24}
					className="size-6 dark:hidden"
				/>
				<Image
					src="/white-logo.png"
					alt=""
					width={28}
					height={24}
					className="hidden h-6 w-auto dark:block"
				/>
				{siteConfig.name}
			</span>
			<span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
				vs
			</span>
			<span className="flex items-center gap-2 text-sm font-semibold">
				<span className="grid size-6 place-items-center rounded-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
					<TerminalSquare className="size-3.5" aria-hidden />
				</span>
				{table.scriptName}
			</span>
		</div>
	);
}

/** When the comparison was last checked, as a small pill. */
export function CheckedPill({ children }: { children: React.ReactNode }) {
	return (
		<p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground">
			<CalendarCheck
				className="size-4 shrink-0 text-brand-600 dark:text-brand-400"
				aria-hidden
			/>
			{children}
		</p>
	);
}

/** The features both tools share, as a grid of checks. */
export function SharedFeatures({ text }: { text: Compare }) {
	return (
		<section>
			<SectionTitle>{text.sharedTitle}</SectionTitle>
			<p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
				{text.sharedText}
			</p>
			<ul
				role="list"
				className="mt-6 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 sm:gap-3 lg:grid-cols-4"
			>
				{text.sharedItems.map((item) => (
					<li
						key={item}
						className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-3 py-3 text-[0.8125rem] font-medium leading-snug sm:gap-3 sm:px-4 sm:py-3.5 sm:text-sm"
					>
						<span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
							<Check className="size-3.5" strokeWidth={3} aria-hidden />
						</span>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
}

/** When the script is the better pick, beside how to switch. */
export function FairAndSwitch({
	text,
	ctaLabel,
}: {
	text: Compare;
	ctaLabel: string;
}) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<section className="flex flex-col rounded-3xl border border-border bg-card p-7 sm:p-8">
				<span className="grid size-10 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
					<Lightbulb className="size-5" aria-hidden />
				</span>
				<h2 className="mt-5 text-xl font-semibold">{text.fairTitle}</h2>
				<p className="mt-3 leading-relaxed text-muted-foreground">
					{text.fairText}
				</p>
			</section>

			<section className="relative flex flex-col overflow-hidden rounded-3xl border border-brand-500/25 bg-gradient-to-br from-brand-500/[0.07] via-card to-accent-500/[0.07] p-7 sm:p-8">
				<h2 className="text-xl font-semibold">{text.switchTitle}</h2>
				<ol role="list" className="mt-5 flex flex-col gap-4">
					{text.switchSteps.map((step, index) => (
						<li key={step} className="flex items-start gap-3.5">
							<span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white tabular-nums">
								{index + 1}
							</span>
							<span className="pt-0.5 leading-relaxed">{step}</span>
						</li>
					))}
				</ol>
				<Button asChild className="mt-7 self-start">
					<a
						href={siteConfig.chromeStoreUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ChromeIcon />
						{ctaLabel}
					</a>
				</Button>
			</section>
		</div>
	);
}

/** The page's questions, in the same accordion as the home page FAQ. */
export function CompareFaq({ text }: { text: Compare }) {
	return (
		<section>
			<SectionTitle>{text.faqTitle}</SectionTitle>
			<div className="mt-6 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
				{text.faq.map((item) => (
					<details
						key={item.question}
						name="compare-faq"
						className="faq-item px-6"
					>
						<summary className="flex items-center justify-between gap-4 py-5 text-base font-semibold transition-colors hover:text-primary">
							{item.question}
							<Plus
								aria-hidden
								className="size-5 shrink-0 text-muted-foreground"
							/>
						</summary>
						<p className="pb-5 pr-8 leading-relaxed text-muted-foreground">
							{item.answer}
						</p>
					</details>
				))}
			</div>
		</section>
	);
}

/** The no-affiliation note. */
export function Disclaimer({ children }: { children: React.ReactNode }) {
	return (
		<p className="flex gap-3 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
			<Info className="mt-0.5 size-4 shrink-0" aria-hidden />
			<span>{children}</span>
		</p>
	);
}
