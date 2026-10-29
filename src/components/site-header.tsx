"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import {
	LocaleSuggestion,
	rememberLocaleChoice,
} from "@/components/locale-suggestion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { languageName } from "@/i18n/locale-offer";
import { localizedPath, localeSwitchHref } from "@/i18n/urls";
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

export function SiteHeader({
	text,
	locale,
}: {
	text: Dictionary["nav"];
	locale: Locale;
}) {
	const headerRef = useRef<HTMLElement>(null);
	const sentinelRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname() || "/";
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
							href={localizedPath(locale, "/")}
							className="flex items-center gap-2 rounded-lg font-semibold tracking-tight"
						>
							<Logo className="h-8" />
							<span className="text-lg">{siteConfig.name}</span>
						</Link>

						<nav
							aria-label={text.mainLabel}
							className="ml-6 hidden items-center gap-1 md:flex"
						>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={localizedPath(locale, link.href)}
									className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								>
									{text[link.key]}
								</Link>
							))}
						</nav>

						<div className="ml-auto flex items-center gap-1.5">
							<nav
								aria-label={text.languageLabel}
								className="flex items-center rounded-full border border-border p-0.5"
							>
								{locales.map((code) => {
									const active = code === locale;
									return (
										<Link
											key={code}
											href={localeSwitchHref(pathname, code)}
											hrefLang={code}
											lang={code}
											aria-current={active ? "page" : undefined}
											onClick={(event) => {
												rememberLocaleChoice();
												const hash = window.location.hash;
												if (!hash) return;
												event.preventDefault();
												window.location.assign(
													localeSwitchHref(pathname, code, hash),
												);
											}}
											className={[
												"rounded-full px-2 py-1 text-xs font-semibold tracking-wide transition-colors",
												active
													? "bg-secondary text-foreground"
													: "text-muted-foreground hover:text-foreground",
											].join(" ")}
										>
											<span className="sr-only">{languageName[code]}</span>
											<span aria-hidden>{code.toUpperCase()}</span>
										</Link>
									);
								})}
							</nav>
							<ThemeToggle label={text.toggleTheme} />
							<Button asChild size="sm" className="hidden sm:inline-flex">
								<a
									href={siteConfig.chromeStoreUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{text.addToChrome}
								</a>
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className="rounded-full md:hidden"
								aria-expanded={isMenuOpen}
								aria-controls="mobile-nav"
								aria-label={isMenuOpen ? text.closeMenu : text.openMenu}
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
							aria-label={text.mobileLabel}
							className="border-t border-border px-4 py-4 md:hidden"
						>
							<ul role="list" className="flex flex-col gap-1">
								{navLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={localizedPath(locale, link.href)}
											onClick={() => setIsMenuOpen(false)}
											className="block rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
										>
											{text[link.key]}
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
									{text.addToChromeFree}
								</a>
							</Button>
						</nav>
					)}
				</div>
				<LocaleSuggestion locale={locale} />
			</header>
		</>
	);
}
