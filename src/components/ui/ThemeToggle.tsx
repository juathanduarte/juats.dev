import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeStore } from "../../stores/themeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transform-gpu active:scale-95"
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
