import { notFound } from "next/navigation";

/**
 * Unknown paths land here: public English URLs are rewritten to `/en/...`,
 * and `/tr/...` is already under `[lang]`. The localized 404 from
 * `[lang]/not-found.tsx` is what the visitor sees.
 */
export default function CatchAll() {
	notFound();
}
