"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const { resolvedTheme, systemTheme, setTheme } = useTheme();

	// Two-state control: follow the OS, or pin the opposite scheme. Toggling
	// back to whatever the OS currently uses returns to "system" so the site
	// keeps tracking the OS from then on instead of freezing that value.
	const toggleTheme = () => {
		const next = resolvedTheme === "dark" ? "light" : "dark";
		setTheme(next === systemTheme ? "system" : next);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			className="rounded-full text-muted-foreground hover:text-foreground"
			aria-label="Toggle colour theme"
			onClick={toggleTheme}
		>
			{/* Both icons are rendered and swapped with CSS, so the markup matches
			    on the server and after hydration regardless of the active theme. */}
			<Sun className="hidden size-[1.15rem] dark:block" />
			<Moon className="size-[1.15rem] dark:hidden" />
		</Button>
	);
}
