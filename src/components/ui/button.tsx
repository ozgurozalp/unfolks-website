import type * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color,color] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-brand-gradient text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 active:translate-y-0",
				solid:
					"bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-0.5 active:translate-y-0",
				outline:
					"border border-border bg-background/60 backdrop-blur hover:bg-secondary hover:border-foreground/20",
				secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
				ghost: "hover:bg-secondary hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				sm: "h-9 px-4",
				default: "h-11 px-5",
				lg: "h-13 px-7 text-base",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
