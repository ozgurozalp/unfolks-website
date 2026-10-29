import type { Locale } from "./config";

/** Endonym shown on the language switcher. */
export const languageName: Record<Locale, string> = {
	en: "English",
	tr: "Türkçe",
};

/**
 * Copy for the first-visit suggestion, written in the language being offered
 * so a Turkish browser on the English page sees Turkish (and the reverse).
 */
export const localeOffer: Record<
	Locale,
	{ message: string; action: string; dismiss: string }
> = {
	en: {
		message: "This page is also available in English.",
		action: "View in English",
		dismiss: "Dismiss",
	},
	tr: {
		message: "Bu sayfanın Türkçesi de var.",
		action: "Türkçeye geç",
		dismiss: "Kapat",
	},
};
