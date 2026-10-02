import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
	className?: string;
}

/**
 * Both marks are rendered and swapped with CSS so the logo stays legible on
 * either background without waiting for the theme to resolve on the client.
 *
 * The marks sit above the fold, so neither is lazy-loaded in the normal
 * sense: the one that is hidden for the current theme is fetched at low
 * priority so it never competes with the content the visitor can see.
 */
export function Logo({ className }: LogoProps) {
	const classes = cn("w-auto object-contain", className);

	return (
		<>
			<Image
				src="/logo.png"
				alt=""
				width={64}
				height={64}
				loading="eager"
				fetchPriority="low"
				className={cn(classes, "dark:hidden")}
			/>
			<Image
				src="/white-logo.png"
				alt=""
				width={76}
				height={64}
				loading="eager"
				fetchPriority="low"
				className={cn(classes, "hidden dark:block")}
			/>
		</>
	);
}
