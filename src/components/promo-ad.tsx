"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const COOKIE_NAME = "rps-promo-closed";
const COOKIE_MAX_AGE_DAYS = 1;
const APPEAR_DELAY_MS = 1200;
/** Matches the `.promo-card` transition in globals.css, plus a little slack. */
const EXIT_FALLBACK_MS = 400;

function isPromoDismissed() {
	return document.cookie
		.split("; ")
		.some((entry) => entry === `${COOKIE_NAME}=true`);
}

function rememberDismissal() {
	const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
	document.cookie = `${COOKIE_NAME}=true;max-age=${maxAge};path=/;samesite=lax`;
}

function supportsPopover(element: HTMLElement) {
	return "showPopover" in element;
}

type Status = "hidden" | "visible" | "closing";

/**
 * Promotional card in the bottom corner. Where the Popover API exists the
 * card is a manual popover, so it lives in the top layer and never fights
 * the header for stacking order; elsewhere it is a plain fixed element.
 * Entry and exit animate through CSS; the card is only unmounted once the
 * exit transition has finished.
 */
export function PromoAd() {
	const cardRef = useRef<HTMLElement>(null);
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

	useEffect(() => {
		const card = cardRef.current;
		if (status !== "visible" || !card || !supportsPopover(card)) return;

		card.showPopover();
	}, [status]);

	useEffect(() => {
		const card = cardRef.current;
		if (status !== "closing" || !card) return;

		const finish = () => {
			if (supportsPopover(card) && card.matches(":popover-open")) {
				card.hidePopover();
			}
			setStatus("hidden");
		};

		// Only the card's own exit transition counts; hover transitions on the
		// buttons inside bubble up too and would otherwise end it early.
		const onTransitionEnd = (event: TransitionEvent) => {
			if (event.target === card) finish();
		};

		// The timer covers browsers that skip transitions entirely, so the
		// card can never get stuck in the closing state.
		card.addEventListener("transitionend", onTransitionEnd);
		const timer = window.setTimeout(finish, EXIT_FALLBACK_MS);

		return () => {
			card.removeEventListener("transitionend", onTransitionEnd);
			window.clearTimeout(timer);
		};
	}, [status]);

	const handleClose = () => {
		rememberDismissal();
		setStatus("closing");
	};

	if (status === "hidden") return null;

	return (
		<aside
			ref={cardRef}
			popover="manual"
			data-status={status}
			aria-label="Promotion"
			className="promo-card z-50 max-w-[calc(100vw-2rem)] md:max-w-xs"
		>
			<div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 text-card-foreground shadow-2xl shadow-black/10 dark:shadow-black/50">
				<div
					aria-hidden
					className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-accent-500/15 blur-2xl"
				/>

				<button
					type="button"
					onClick={handleClose}
					aria-label="Close promotion"
					className="absolute right-3 top-3 z-10 grid size-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
