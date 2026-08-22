"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!isMenuOpen) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false);
		};

		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [isMenuOpen]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 transition-colors duration-300",
				isScrolled || isMenuOpen
					? "border-b border-border bg-background/80 backdrop-blur-xl"
					: "border-b border-transparent",
			)}
		>
			<div className="container-page flex h-16 items-center gap-4 lg:h-18">
				<Link
					href="/"
					className="flex items-center gap-2 rounded-lg font-semibold tracking-tight"
				>
					<Logo className="h-8" priority />
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
					className="border-t border-border bg-background px-4 py-4 md:hidden"
				>
					<ul className="flex flex-col gap-1">
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
		</header>
	);
}
