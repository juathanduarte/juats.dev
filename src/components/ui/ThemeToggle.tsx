import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none transform-gpu active:scale-95 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] ${
            theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
          }`}
          aria-hidden={theme !== "light"}
        >
          <FiSun size={20} />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] ${
            theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
          }`}
          aria-hidden={theme !== "dark"}
        >
          <FiMoon size={20} />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
