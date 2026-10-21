import { notFound } from "next/navigation";

/**
 * Every URL is rewritten under `[lang]`, so an unknown path lands here and
 * shows the localized 404 from `[lang]/not-found.tsx`.
 */
export default function CatchAll() {
	notFound();
}
