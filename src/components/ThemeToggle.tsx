"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-10 w-10 rounded-full bg-secondary/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground group-hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-foreground group-hover:rotate-90 transition-transform duration-300" />
      )}
    </button>
  );
}