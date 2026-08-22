import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Required by @next/mdx in the App Router. Prose styling comes from the
 * Tailwind typography plugin on the page wrapper; this only overrides the
 * elements that need real behaviour.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
			const isInternal = href.startsWith("/") || href.startsWith("#");

			if (isInternal) {
				return <Link href={href} {...props} />;
			}

			return (
				<a href={href} target="_blank" rel="noopener noreferrer" {...props} />
			);
		},
		...components,
	};
}
