import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Short date, e.g. "Mar 4, 2026" or "4 Mar 2026", in the given BCP 47 locale. */
export function formatDate(date: Date, locale = "en-US"): string {
	return new Intl.DateTimeFormat(locale, {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC",
	}).format(date);
}
