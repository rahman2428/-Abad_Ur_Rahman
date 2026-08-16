"use client";

import React from "react";
import { useTheme } from "./theme-context";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-slate-800 dark:border-slate-800 hover:border-blue-500/50 bg-slate-900/60 dark:bg-slate-900/60 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-blue-400" />
      )}
    </button>
  );
}
