export const locales = ["en", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags for `Intl` formatting and `<html lang>`. */
export const intlLocale: Record<Locale, string> = {
	en: "en-US",
	tr: "tr-TR",
};

/**
 * Pick the site language from an `Accept-Language` header. Languages are
 * tried in the browser's order of preference (by q-value); the first one we
 * support wins, matching on the primary subtag so `tr-TR` and `en-GB` count.
 */
export function pickLocale(acceptLanguage: string | null | undefined): Locale {
	if (!acceptLanguage) return defaultLocale;

	const ranked = acceptLanguage
		.split(",")
		.map((part, index) => {
			const [tag, ...params] = part.trim().split(";");
			const q = params
				.map((param) => param.trim())
				.find((param) => param.startsWith("q="));
			const quality = q ? Number(q.slice(2)) : 1;
			return {
				language: tag.trim().toLowerCase().split("-")[0],
				quality: Number.isFinite(quality) ? quality : 0,
				index,
			};
		})
		.filter((entry) => entry.language && entry.quality > 0)
		.sort((a, b) => b.quality - a.quality || a.index - b.index);

	for (const { language } of ranked) {
		if (isLocale(language)) return language;
	}
	return defaultLocale;
}
