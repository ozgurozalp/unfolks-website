"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { useLocale } from "@/components/locale-provider";
import { localizedPath } from "@/i18n/urls";

/** Markdown links follow the page locale, so Turkish articles stay under `/tr`. */
export function MdxLink({
	href = "",
	...props
}: ComponentPropsWithoutRef<"a">) {
	const locale = useLocale();

	if (href.startsWith("#")) {
		return <a href={href} {...props} />;
	}

	if (!href.startsWith("/")) {
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" {...props} />
		);
	}

	return <Link href={localizedPath(locale, href)} {...props} />;
}
