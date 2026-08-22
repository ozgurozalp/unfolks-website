"use client";

import {
	useEffect,
	useRef,
	type CSSProperties,
	type ElementType,
	type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
	children: ReactNode;
	className?: string;
	/** Stagger, in milliseconds, applied before this element animates in. */
	delay?: number;
	as?: ElementType;
}

/**
 * Fades and lifts its children into view once they are scrolled to.
 * Content is visible without JavaScript and for reduced-motion users — the
 * hidden starting state lives on `[data-reveal]`, which is only set here.
 */
export function Reveal({
	children,
	className,
	delay = 0,
	as: Tag = "div",
}: RevealProps) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Anything already on screen renders straight away. Only content below
		// the fold is hidden, so above-the-fold copy never depends on the
		// observer firing and there is no flash on first paint.
		if (element.getBoundingClientRect().top < window.innerHeight) return;

		element.dataset.reveal = "hidden";

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					(entry.target as HTMLElement).dataset.reveal = "shown";
					observer.unobserve(entry.target);
				}
			},
			{ rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			className={cn(className)}
			style={
				delay
					? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
					: undefined
			}
		>
			{children}
		</Tag>
	);
}
