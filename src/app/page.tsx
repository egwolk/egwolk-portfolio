import { ThemeToggle } from "@/components/theme-toggle";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <ThemeToggle/>
    </div>
  );
}
