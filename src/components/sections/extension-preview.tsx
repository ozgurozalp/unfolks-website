import Image from "next/image";
import { BadgeCheck, User } from "lucide-react";

import { cn } from "@/lib/utils";

interface Account {
	name: string;
	handle: string;
	verified?: boolean;
	initials?: string;
	tone: string;
}

const accounts: Account[] = [
	{
		name: "İpek Deka",
		handle: "ipekdeka",
		verified: true,
		initials: "İD",
		tone: "from-rose-400 to-orange-300",
	},
	{
		name: "3Monkey's Burger İstanbul",
		handle: "3monkeysburger",
		initials: "3M",
		tone: "from-amber-400 to-red-400",
	},
	{
		name: "Studio Lumen",
		handle: "studio.lumen",
		verified: true,
		initials: "SL",
		tone: "from-sky-400 to-indigo-400",
	},
	{
		name: "Qexta",
		handle: "qextahq",
		tone: "from-zinc-600 to-zinc-700",
	},
	{
		name: "The Daily Grid",
		handle: "thedailygrid",
		initials: "DG",
		tone: "from-emerald-400 to-teal-400",
	},
	{
		name: "Nora Aydın",
		handle: "nora.builds",
		verified: true,
		initials: "NA",
		tone: "from-violet-400 to-fuchsia-400",
	},
];

const tabs = ["All", "Verified accounts", "Normal accounts"] as const;

/**
 * Recreation of the extension popup, used to show the product on the landing
 * page. It keeps the extension's own dark palette in both site themes so it
 * reads as a product shot. Decorative — hidden from assistive tech.
 */
export function ExtensionPreview({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn(
				"w-full max-w-100 select-none overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl shadow-brand-900/20 dark:shadow-black/50",
				className,
			)}
		>
			{/* Profile header */}
			<div className="flex items-center gap-3 px-5 pb-5 pt-6">
				<Image
					src="/ozgur.jpeg"
					alt=""
					width={96}
					height={96}
					className="size-12 shrink-0 rounded-full object-cover"
				/>
				<div className="min-w-0 flex-1">
					<p className="truncate text-lg font-bold leading-tight">
						Özgür ÖZALP
					</p>
					<p className="truncate text-sm leading-tight text-zinc-400">
						ozgurozalp
					</p>
				</div>
				<span className="shrink-0 rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium">
					Go to Instagram
				</span>
			</div>

			<div className="mx-5 border-t border-zinc-800" />

			<div className="space-y-3 px-5 py-5">
				{/* Result count */}
				<p className="text-center text-sm text-zinc-300">
					There are <strong className="font-bold text-white">20</strong> people
					not following you back.
				</p>

				{/* Filter tabs */}
				<div className="flex gap-1 rounded-xl bg-zinc-800/70 p-1">
					{tabs.map((tab, index) => (
						<span
							key={tab}
							className={cn(
								"flex-1 whitespace-nowrap rounded-lg px-2 py-2 text-center text-[0.72rem] font-medium",
								index === 0 ? "bg-zinc-950 text-white" : "text-zinc-400",
							)}
						>
							{tab}
						</span>
					))}
				</div>

				{/* Search */}
				<div className="rounded-xl border border-zinc-800 px-4 py-3 text-sm text-zinc-500">
					Search in accounts
				</div>

				{/* Accounts */}
				<ul className="space-y-2">
					{accounts.map((account) => (
						<li
							key={account.handle}
							className="flex items-center gap-3 rounded-xl border border-zinc-800 px-3 py-2.5"
						>
							<span
								className={cn(
									"grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white/90",
									account.tone,
								)}
							>
								{account.initials ?? <User className="size-5 text-zinc-400" />}
							</span>
							<span className="min-w-0 flex-1">
								<span className="flex items-center gap-1">
									<span className="truncate text-sm font-bold leading-tight">
										{account.name}
									</span>
									{account.verified && (
										<BadgeCheck className="size-4 shrink-0 fill-sky-500 text-zinc-950" />
									)}
								</span>
								<span className="mt-0.5 block truncate text-xs leading-tight text-zinc-400">
									{account.handle}
								</span>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
