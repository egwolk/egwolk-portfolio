"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ThemeToggleIcon() {
    return (
        <>
            <FaSun className="absolute inset-0 m-auto size-8 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute inset-0 m-auto size-8 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </>
    );
}

export function useThemeToggle() {
    const {theme, setTheme} = useTheme();
    return () => setTheme(theme === "light" ? "dark" : "light");
}