"use client";
import { FaMessage } from "react-icons/fa6";
import BottomNav from "@/components/ui/bottom-nav";
import { FaCode, FaPhone} from "react-icons/fa";
import { ThemeToggleIcon, useThemeToggle } from "@/components/ui/theme-toggle";

export function BottomNavWrapper() {
  const toggleTheme = useThemeToggle();
  
  return (
    <BottomNav
      items={[
        { label: <FaCode className="h-8 w-8"/>, onClick: () => {console.log("click")} },
        { label: <FaPhone className="h-8 w-8" />, onClick: () => {console.log("click")} },
        { label: <FaMessage className="h-8 w-8"/>, onClick: () => {console.log("click")} },
        { label: <ThemeToggleIcon />, onClick: toggleTheme },
      ]}
    />
  );
}