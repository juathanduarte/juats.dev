import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import AnimatedIcon from "../ui/AnimatedIcon";
import Button from "../ui/Button";
import LanguageSelector from "../ui/LanguageSelector";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) return;
      const target = event.target as Node;
      if (triggerRef.current?.contains(target)) {
        return;
      }
      if (!menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b-2 border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer focus:outline-none"
                aria-label="Go to home section"
              >
                {t("header.logo")}
              </Link>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <AnimatedIcon />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer focus:outline-none"
            >
              {t("header.navigation.home")}
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer focus:outline-none"
            >
              {t("header.navigation.about")}
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer focus:outline-none"
            >
              {t("header.navigation.technologies")}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer focus:outline-none"
            >
              {t("header.navigation.projects")}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer focus:outline-none"
            >
              {t("header.navigation.contact")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>

          <div className="md:hidden">
            <Button
              ref={triggerRef}
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleToggleMenu}
              className="p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 ring-0 focus:ring-0 -visible:ring-0focus ring-offset-0 focus:ring-offset-0 focus-visible:ring-offset-0 outline-none focus:outline-none focus-visible:outline-none active:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="relative inline-flex w-6 h-6">
                <span
                  className={`absolute inset-0 inline-flex items-center justify-center transition-all duration-200 ${
                    isMenuOpen
                      ? "opacity-0 -rotate-90 scale-90"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                  aria-hidden={isMenuOpen}
                >
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </span>
                <span
                  className={`absolute inset-0 inline-flex items-center justify-center transition-all duration-200 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 rotate-90 scale-90"
                  }`}
                  aria-hidden={!isMenuOpen}
                >
                  <HiX className="h-6 w-6" aria-hidden="true" />
                </span>
              </span>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <div
            ref={menuRef}
            className={`absolute right-4 top-16 w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-2 border-gray-200/60 dark:border-gray-700/60 rounded-xl overflow-visible transition-all duration-200 origin-top ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-4 py-6 space-y-2">
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.home")}
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.about")}
              </Link>
              <Link
                to="technologies"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.technologies")}
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.projects")}
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.contact")}
              </Link>
            </div>
            <div className="border-t border-gray-200/50 dark:border-gray-700/50 mx-4"></div>
            <div className="px-4 py-4 flex items-center justify-center space-x-6">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
