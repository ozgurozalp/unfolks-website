"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const COOKIE_NAME = "rps-promo-closed";
const COOKIE_MAX_AGE_DAYS = 1;
const APPEAR_DELAY_MS = 1200;

function isPromoDismissed() {
	return document.cookie
		.split("; ")
		.some((entry) => entry === `${COOKIE_NAME}=true`);
}

function rememberDismissal() {
	const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
	document.cookie = `${COOKIE_NAME}=true;max-age=${maxAge};path=/;samesite=lax`;
}

type Status = "hidden" | "visible" | "closing";

const EXIT_DURATION_MS = 300;

export function PromoAd() {
	const [status, setStatus] = useState<Status>("hidden");

	// The dismissal cookie is read on the client so that every page can stay
	// statically prerendered. The card appears shortly after paint so it
	// doesn't compete with the hero.
	useEffect(() => {
		if (isPromoDismissed()) return;

		const timer = window.setTimeout(
			() => setStatus("visible"),
			APPEAR_DELAY_MS,
		);
		return () => window.clearTimeout(timer);
	}, []);

	const handleClose = () => {
		rememberDismissal();
		setStatus("closing");
		window.setTimeout(() => setStatus("hidden"), EXIT_DURATION_MS);
	};

	if (status === "hidden") return null;

	return (
		<aside
			aria-label="Promotion"
			className={cn(
				"fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] duration-300 ease-out md:bottom-6 md:right-6 md:max-w-xs",
				status === "closing"
					? "pointer-events-none animate-out fade-out slide-out-to-bottom-4"
					: "animate-in fade-in slide-in-from-bottom-4",
			)}
		>
			<div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-black/10 dark:shadow-black/50">
				<div
					aria-hidden
					className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-accent-500/15 blur-2xl"
				/>

				<button
					type="button"
					onClick={handleClose}
					aria-label="Close promotion"
					className="absolute right-3 top-3 grid size-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
				>
					<X className="size-4" />
				</button>

				<div className="relative flex items-start gap-3">
					{/* eslint-disable-next-line @next/next/no-img-element -- remote SVG served by the partner site, not optimisable */}
					<img
						src="https://taskagitmakas.online/game-icons/game-image.svg"
						alt=""
						width={40}
						height={40}
						className="mt-0.5 size-10 shrink-0"
					/>
					<div className="min-w-0 pr-5">
						<p className="text-sm font-semibold leading-snug">
							Try our Rock Paper Scissors game
						</p>
						<p className="mt-1 text-xs leading-relaxed text-muted-foreground">
							Settling an argument with a friend? Play a quick round online and
							let fate decide.
						</p>
					</div>
				</div>

				<a
					href="https://rock.paperscissors.online/?utm_source=unfolks.com&utm_medium=referral"
					target="_blank"
					rel="noopener noreferrer"
					className="relative mt-4 flex h-10 w-full items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
				>
					Play now
				</a>
			</div>
		</aside>
	);
}
