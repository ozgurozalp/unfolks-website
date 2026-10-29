"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { isLocale, type Locale } from "@/i18n/config";
import { localeOffer } from "@/i18n/locale-offer";
import { localeSwitchHref } from "@/i18n/urls";

const STORAGE_KEY = "unfolks-locale-suggest";

/** Remember that the visitor picked or dismissed a language, so the bar stays gone. */
export function rememberLocaleChoice() {
	try {
		localStorage.setItem(STORAGE_KEY, "1");
	} catch {
		// Private mode and blocked storage should not break navigation.
	}
}

function hasLocaleChoice() {
	try {
		return localStorage.getItem(STORAGE_KEY) === "1";
	} catch {
		return true;
	}
}

/** First supported language in the browser's preference list. */
function preferredLocale(): Locale | null {
	const list =
		navigator.languages && navigator.languages.length > 0
			? navigator.languages
			: [navigator.language];
	for (const tag of list) {
		const primary = tag.toLowerCase().split("-")[0] ?? "";
		if (isLocale(primary)) return primary;
	}
	return null;
}

function offerFor(locale: Locale): Locale | null {
	if (hasLocaleChoice()) return null;
	const preferred = preferredLocale();
	return preferred && preferred !== locale ? preferred : null;
}

function subscribeLocaleChoice() {
	return () => {};
}

function noOffer() {
	return null;
}

/**
 * One-line suggestion when the browser language and the page language differ.
 * It is client-only and never redirects: crawlers keep receiving the URL they
 * requested, and a dismissal is remembered on this device.
 */
export function LocaleSuggestion({ locale }: { locale: Locale }) {
	const pathname = usePathname() || "/";
	const [dismissed, setDismissed] = useState(false);
	const offered = useSyncExternalStore(
		subscribeLocaleChoice,
		() => offerFor(locale),
		noOffer,
	);
	const target = dismissed ? null : offered;

	if (!target) return null;

	const offer = localeOffer[target];

	return (
		<div className="border-t border-border bg-secondary">
			<div className="container-page flex items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-sm">
				<p className="text-muted-foreground">{offer.message}</p>
				<Link
					href={localeSwitchHref(pathname, target)}
					hrefLang={target}
					lang={target}
					onClick={rememberLocaleChoice}
					className="shrink-0 font-semibold text-foreground underline-offset-4 hover:underline"
				>
					{offer.action}
				</Link>
				<button
					type="button"
					aria-label={offer.dismiss}
					onClick={() => {
						rememberLocaleChoice();
						setDismissed(true);
					}}
					className="grid size-7 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
				>
					<X className="size-3.5" />
				</button>
			</div>
		</div>
	);
}
