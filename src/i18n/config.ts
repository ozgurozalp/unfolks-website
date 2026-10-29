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
