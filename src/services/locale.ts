"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
	const allCookies = await cookies();
	return allCookies.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
	const allCookies = await cookies();
	allCookies.set(COOKIE_NAME, locale);
}
