"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			className="rounded-full text-muted-foreground hover:text-foreground"
			aria-label="Toggle colour theme"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
		>
			{/* Both icons are rendered and swapped with CSS, so the markup matches
			    on the server and after hydration regardless of the active theme. */}
			<Sun className="hidden size-[1.15rem] dark:block" />
			<Moon className="size-[1.15rem] dark:hidden" />
		</Button>
	);
}
