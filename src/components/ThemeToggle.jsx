import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
  onClick={toggleTheme}
  className="fixed top-2 right-25 z-50
             p-2 rounded-lg
             border border-gray-300 dark:border-gray-700
             bg-gray-50 dark:bg-gray-900
             hover:bg-gray-200 dark:hover:bg-gray-800
             transition" >
    {theme === "dark" ? (
    <Sun className="w-5 h-5 text-yellow-400" />
    ) : (
    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    )}
    </button>
  );
}
