"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    return(
        <button className="relative bg-black dark:bg-white text-white dark:text-black rounded-lg min-h-15 min-w-15 max-h-20 max-w-20 justify-items-center place-content-center" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <FaSun className="absolute inset-0 m-auto size-10 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"></FaSun>
            <FaMoon className="absolute inset-0 m-auto size-10 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"></FaMoon>
        </button>
    )
}