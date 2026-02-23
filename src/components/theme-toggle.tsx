"use client";
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
  return (
    <div>
        <button className="border cursor-pointer" onClick={() => {setTheme( theme === "light" ? "dark" : "light")}}>
        toggle theme
        </button>
    </div>
  )
}
