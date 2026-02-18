"use client";

import BottomNav from "@/components/ui/bottom-nav";
import { FaCode, FaInfo, FaPhone } from "react-icons/fa";
import { ThemeToggleIcon, useThemeToggle } from "@/components/ui/theme-toggle";

export function BottomNavWrapper() {
  const toggleTheme = useThemeToggle();
  
  return (
    <BottomNav
      items={[
        { label: <FaCode className="h-10 w-10"/>, onClick: () => {console.log("click")} },
        { label: <FaInfo className="h-10 w-10" />, onClick: () => {console.log("click")} },
        { label: <FaPhone className="h-10 w-10"/>, onClick: () => {console.log("click")} },
        { label: <ThemeToggleIcon />, onClick: toggleTheme },
      ]}
    />
  );
}