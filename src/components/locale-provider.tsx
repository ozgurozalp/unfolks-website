"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Locale } from "@/i18n/config";

const LocaleContext = createContext<Locale>("en");

/** The locale of this render, including statically prerendered pages. */
export function LocaleProvider({
	locale,
	children,
}: {
	locale: Locale;
	children: ReactNode;
}) {
	return (
		<LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
	);
}

export function useLocale(): Locale {
	return useContext(LocaleContext);
}
