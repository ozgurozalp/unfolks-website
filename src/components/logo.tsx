import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
	className?: string;
	priority?: boolean;
}

/**
 * Both marks are rendered and swapped with CSS so the logo stays legible on
 * either background without waiting for the theme to resolve on the client.
 */
export function Logo({ className, priority = false }: LogoProps) {
	const classes = cn("w-auto object-contain", className);

	return (
		<>
			<Image
				src="/logo.png"
				alt=""
				width={64}
				height={64}
				priority={priority}
				className={cn(classes, "dark:hidden")}
			/>
			<Image
				src="/white-logo.png"
				alt=""
				width={76}
				height={64}
				priority={priority}
				className={cn(classes, "hidden dark:block")}
			/>
		</>
	);
}
