import type { MDXComponents } from "mdx/types";

import { MdxLink } from "@/components/mdx-link";

/**
 * Required by @next/mdx in the App Router. Prose styling comes from the
 * Tailwind typography plugin on the page wrapper; this only overrides the
 * elements that need real behaviour.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: (props) => <MdxLink {...props} />,
		...components,
	};
}
