import type { ReactNode } from "react";
import {
	BellRing,
	CircleCheck,
	PanelRight,
	RefreshCw,
	TerminalSquare,
	UserMinus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

type Text = Dictionary["compare"];

/**
 * The "where they differ" cards as a bento, after Magic UI's bento grid:
 * a picture on top, then icon, title and text. Ported rather than installed,
 * since the registry version needs links on every card, fixes the row height
 * and would replace our Button.
 */
export function DifferencesBento({ text }: { text: Text }) {
	const v = text.diffVisuals;
	const [noConsole, current, sidePanel, changes] = text.diffs;
	const cards: {
		title: string;
		body: string;
		Icon: LucideIcon;
		visual: ReactNode;
		wide: boolean;
	}[] = [
		{
			...noConsole,
			body: noConsole.text,
			Icon: TerminalSquare,
			visual: <ConsoleVisual stop={v.consoleStop} line={v.consoleText} />,
			wide: true,
		},
		{
			...current,
			body: current.text,
			Icon: RefreshCw,
			visual: <UpdatedVisual label={v.upToDate} />,
			wide: false,
		},
		{
			...sidePanel,
			body: sidePanel.text,
			Icon: PanelRight,
			visual: <SidePanelVisual />,
			wide: false,
		},
		{
			...changes,
			body: changes.text,
			Icon: BellRing,
			visual: <ToastVisual label={v.toast} />,
			wide: true,
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-2">
			{cards.map(({ title, body, Icon, visual, wide }) => (
				<article
					key={title}
					className={cn(
						"group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-500/5",
						wide && "md:col-span-2 md:flex-row md:items-stretch",
					)}
				>
					<div
						aria-hidden
						className={cn(
							"relative flex h-48 items-center justify-center overflow-hidden border-b border-border bg-surface p-6",
							wide &&
								"md:order-last md:h-auto md:w-[46%] md:shrink-0 md:border-b-0 md:border-l",
						)}
					>
						<div className="absolute inset-0 bg-dot-grid text-foreground/[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
						<div className="relative w-full transition-transform duration-300 group-hover:-translate-y-1">
							{visual}
						</div>
					</div>
					<div className="flex flex-1 flex-col p-7">
						<span className="grid size-10 place-items-center rounded-xl border border-border bg-background text-brand-600 dark:text-brand-400">
							<Icon className="size-5" aria-hidden />
						</span>
						<h3 className="mt-4 text-lg font-semibold">{title}</h3>
						<p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
					</div>
				</article>
			))}
		</div>
	);
}

/** A developer console showing the warning Instagram prints there. */
function ConsoleVisual({ stop, line }: { stop: string; line: string }) {
	return (
		<div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-300 shadow-lg">
			<div className="flex items-center gap-1.5 border-b border-zinc-800 px-3 py-2">
				<span className="size-2 rounded-full bg-zinc-700" />
				<span className="size-2 rounded-full bg-zinc-700" />
				<span className="size-2 rounded-full bg-zinc-700" />
				<span className="ml-2 text-[0.65rem] text-zinc-500">Console</span>
			</div>
			<div className="space-y-2 px-3.5 py-3">
				<p className="text-2xl font-black tracking-tight text-red-500 [-webkit-text-stroke:0.5px_black]">
					{stop}
				</p>
				<p className="leading-relaxed text-zinc-400">{line}</p>
				<p className="flex items-center gap-1.5 text-zinc-500">
					<span className="text-sky-400">&gt;</span>
					<span className="inline-block h-3.5 w-1.5 animate-pulse bg-zinc-400 motion-reduce:animate-none" />
				</p>
			</div>
		</div>
	);
}

/** The extension tile, marked as updated in the background. */
function UpdatedVisual({ label }: { label: string }) {
	return (
		<div className="mx-auto flex max-w-60 items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-lg">
			{/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative logo */}
			<img src="/logo.png" alt="" className="size-9 rounded-lg dark:hidden" />
			{/* eslint-disable-next-line @next/next/no-img-element -- tiny decorative logo */}
			<img
				src="/white-logo.png"
				alt=""
				className="hidden size-9 rounded-lg object-contain dark:block"
			/>
			<div className="min-w-0">
				<p className="text-sm font-semibold">Unfolks</p>
				<p className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
					<CircleCheck className="size-3.5 shrink-0" />
					<span className="truncate">{label}</span>
				</p>
			</div>
		</div>
	);
}

/** A browser window: Instagram on the left, the Unfolks side panel on the right. */
function SidePanelVisual() {
	return (
		<div className="mx-auto max-w-64 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
			<div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5">
				<span className="size-1.5 rounded-full bg-border" />
				<span className="size-1.5 rounded-full bg-border" />
				<span className="size-1.5 rounded-full bg-border" />
				<span className="ml-1.5 h-2.5 flex-1 rounded-full bg-muted" />
			</div>
			<div className="flex h-28">
				<div className="grid flex-1 grid-cols-3 gap-1 p-2">
					{Array.from({ length: 9 }, (_, i) => (
						<span key={i} className="rounded-[3px] bg-muted" />
					))}
				</div>
				<div className="w-[38%] space-y-1.5 border-l border-brand-500/30 bg-brand-500/[0.07] p-2">
					{Array.from({ length: 4 }, (_, i) => (
						<span key={i} className="flex items-center gap-1">
							<span className="size-2.5 shrink-0 rounded-full bg-brand-500/40" />
							<span className="h-1.5 flex-1 rounded-full bg-brand-500/25" />
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

/** The notice Unfolks shows after a refresh. */
function ToastVisual({ label }: { label: string }) {
	return (
		<div className="mx-auto flex max-w-72 items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-lg">
			<span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
				<UserMinus className="size-4.5" />
			</span>
			<p className="text-sm font-medium">{label}</p>
		</div>
	);
}
