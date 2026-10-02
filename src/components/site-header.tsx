"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, siteConfig } from "@/lib/site";

/**
 * Header surface is styled by a `scroll-state(stuck: top)` container query in
 * globals.css. Browsers without scroll-state queries (Safari, Firefox) get
 * the same stuck styling from `data-stuck`, set here from an
 * IntersectionObserver instead of a scroll listener.
 *
 * The observer watches a 1px sentinel pinned to the top of the document: the
 * header is stuck exactly when that sentinel has scrolled out of view.
 */
function useStuckFallback(
	headerRef: React.RefObject<HTMLElement | null>,
	sentinelRef: React.RefObject<HTMLElement | null>,
) {
	useEffect(() => {
		const header = headerRef.current;
		const sentinel = sentinelRef.current;
		if (!header || !sentinel) return;
		if (CSS.supports("container-type", "scroll-state")) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				delete header.dataset.stuck;
			} else {
				header.dataset.stuck = "";
			}
		});

		observer.observe(sentinel);
		return () => observer.disconnect();
	}, [headerRef, sentinelRef]);
}

export function SiteHeader() {
	const headerRef = useRef<HTMLElement>(null);
	const sentinelRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useStuckFallback(headerRef, sentinelRef);

	useEffect(() => {
		if (!isMenuOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [isMenuOpen]);

	return (
		<>
			{/* Positioned against the initial containing block (no positioned
			    ancestor), so it marks the very top of the document. */}
			<div
				ref={sentinelRef}
				aria-hidden
				className="pointer-events-none absolute top-0 left-0 h-px w-px"
			/>
			<header
				ref={headerRef}
				className="site-header"
				data-menu-open={isMenuOpen ? "" : undefined}
			>
				<div className="site-header-surface">
					<div className="container-page flex h-16 items-center gap-4 lg:h-18">
						<Link
							href="/"
							className="flex items-center gap-2 rounded-lg font-semibold tracking-tight"
						>
							<Logo className="h-8" />
							<span className="text-lg">{siteConfig.name}</span>
						</Link>

						<nav
							aria-label="Main"
							className="ml-6 hidden items-center gap-1 md:flex"
						>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								>
									{link.label}
								</Link>
							))}
						</nav>

						<div className="ml-auto flex items-center gap-1.5">
							<ThemeToggle />
							<Button asChild size="sm" className="hidden sm:inline-flex">
								<a
									href={siteConfig.chromeStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Add to Chrome
								</a>
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full md:hidden"
								aria-expanded={isMenuOpen}
								aria-controls="mobile-nav"
								aria-label={isMenuOpen ? "Close menu" : "Open menu"}
								onClick={() => setIsMenuOpen((open) => !open)}
							>
								{isMenuOpen ? (
									<X className="size-5" />
								) : (
									<Menu className="size-5" />
								)}
							</Button>
						</div>
					</div>

					{isMenuOpen && (
						<nav
							id="mobile-nav"
							aria-label="Mobile"
							className="border-t border-border px-4 py-4 md:hidden"
						>
							<ul role="list" className="flex flex-col gap-1">
								{navLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											onClick={() => setIsMenuOpen(false)}
											className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
							<Button asChild className="mt-3 w-full sm:hidden">
								<a
									href={siteConfig.chromeStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Add to Chrome — it&apos;s free
								</a>
							</Button>
						</nav>
					)}
				</div>
			</header>
		</>
	);
}
