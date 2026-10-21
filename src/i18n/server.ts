import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { isLocale, type Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";

const dictionaries: Record<Locale, Dictionary> = { en, tr };

/** The locale of the current request, from the `app/[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
	const value = await lang();
	if (!isLocale(value)) notFound();
	return value;
}

export async function getDictionary(): Promise<Dictionary> {
	return dictionaries[await getLocale()];
}
