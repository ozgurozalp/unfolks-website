import Image from "next/image";
import {
	ArrowDownUp,
	BadgeCheck,
	ChevronDown,
	Copy,
	EyeOff,
	FileArchive,
	ListChecks,
	RefreshCw,
	Settings2,
	UserMinus,
	UserX,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface Account {
	name: string;
	handle: string;
	verified?: boolean;
	/** Sample photo in /public/sample; omitted for an account without one. */
	photo?: string;
}

// Sample accounts only. The photos are AI-generated and belong to no one.
const accounts: Account[] = [
	{
		name: "Coffee Lab Studio",
		handle: "coffeelab.studio",
		verified: true,
		photo: "coffeelab",
	},
	{ name: "Maya Travels", handle: "maya.travels", photo: "maya" },
	{ name: "Kaan Demir", handle: "kaan.dmr", photo: "kaan" },
	{
		name: "Studio Nine",
		handle: "studio.nine",
		verified: true,
		photo: "studionine",
	},
	{ name: "Lina Park", handle: "lina.park", photo: "lina" },
	{ name: "Daily Plants", handle: "daily.plants" },
];

const chips = ["Verified", "Not verified", "Private", "No photo"] as const;

/**
 * Recreation of the extension's side panel, used to show the product on the
 * landing page. It keeps the extension's own dark palette in both site themes
 * so it reads as a product shot. Decorative — hidden from assistive tech.
 */
export function ExtensionPreview({ className }: { className?: string }) {
	return (
		<div
			aria-hidden
			className={cn(
				"@container w-full min-w-0 max-w-100 select-none overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl shadow-brand-900/20 dark:shadow-black/50",
				className,
			)}
		>
			{/* Profile header */}
			<div className="flex items-center gap-2.5 px-4 pb-4 pt-5 @[21rem]:gap-3 @[21rem]:px-5">
				<Image
					src="/ozgur.jpeg"
					alt=""
					width={96}
					height={96}
					loading="eager"
					className="size-10 shrink-0 rounded-full object-cover"
				/>
				<div className="min-w-0 flex-1">
					<p className="truncate text-base font-bold leading-tight">
						Özgür ÖZALP
					</p>
					<p className="truncate text-xs leading-tight text-zinc-400">
						ozgurozalp
					</p>
				</div>
				<span className="grid size-9 shrink-0 place-items-center rounded-lg border border-zinc-800">
					<Settings2 className="size-4" />
				</span>
				<span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-800 px-2.5 py-2 text-xs font-medium @[24rem]:px-3">
					<RefreshCw className="size-3.5 shrink-0" />
					<span className="hidden whitespace-nowrap @[24rem]:inline">
						Refresh the list
					</span>
				</span>
			</div>

			<div className="mx-4 border-t border-zinc-800 @[21rem]:mx-5" />

			<div className="space-y-2.5 px-4 pb-5 pt-3 @[21rem]:px-5">
				{/* Last scan + data file */}
				<div className="flex items-center justify-between gap-2 text-[0.7rem] text-zinc-400">
					<span className="truncate">Last scan: 2 minutes ago</span>
					<span className="inline-flex min-w-0 items-center gap-1">
						<FileArchive className="size-3 shrink-0" />
						<span className="whitespace-nowrap @[21rem]:hidden">Data file</span>
						<span className="hidden whitespace-nowrap @[21rem]:inline">
							Check with your data file
						</span>
					</span>
				</div>

				{/* Search + sort */}
				<div className="flex gap-2">
					<div className="min-w-0 flex-1 truncate rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-500">
						Search in accounts
					</div>
					<span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-zinc-800 px-2.5 py-2 text-[0.7rem]">
						<ArrowDownUp className="size-3 shrink-0" />
						<span className="hidden whitespace-nowrap @[21rem]:inline">
							Recently followed
						</span>
						<ChevronDown className="size-3 shrink-0 text-zinc-500" />
					</span>
				</div>

				{/* Filter chips */}
				<div className="flex flex-wrap gap-1.5">
					{chips.map((chip) => (
						<span
							key={chip}
							className="rounded-full border border-zinc-800 px-2.5 py-1 text-[0.68rem] text-zinc-400"
						>
							{chip}
						</span>
					))}
				</div>

				{/* Action bar */}
				<div className="flex items-center gap-2 text-[0.7rem] text-zinc-400">
					<span className="inline-flex items-center gap-1.5 whitespace-nowrap">
						<ListChecks className="size-3.5" />
						Select all
					</span>
					<span className="ml-auto inline-flex items-center gap-1">
						<Copy className="size-3" />
						<span className="hidden @[21rem]:inline">Copy</span>
					</span>
					<span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-zinc-800 px-2.5 py-1.5 font-medium text-zinc-100">
						<UserX className="size-3.5" />
						<span className="@[21rem]:hidden">Unfollow (20)</span>
						<span className="hidden @[21rem]:inline">Unfollow all (20)</span>
					</span>
				</div>

				{/* Accounts */}
				<ul className="space-y-2">
					{accounts.map((account) => (
						<li
							key={account.handle}
							className="flex items-center gap-2 rounded-xl border border-zinc-800 px-2.5 py-2 @[21rem]:gap-3 @[21rem]:px-3"
						>
							{account.photo ? (
								<Image
									src={`/sample/${account.photo}.jpg`}
									alt=""
									width={80}
									height={80}
									className="size-10 shrink-0 rounded-full object-cover"
								/>
							) : (
								<span className="grid size-10 shrink-0 place-items-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-300">
									{account.name.slice(0, 1)}
								</span>
							)}
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
							<EyeOff className="size-4 shrink-0 text-zinc-500" />
							<span className="grid shrink-0 place-items-center rounded-lg border border-zinc-800 p-1.5 text-[0.7rem] font-medium @[21rem]:px-2.5">
								<UserMinus className="size-3.5 @[21rem]:hidden" />
								<span className="hidden @[21rem]:inline">Unfollow</span>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
