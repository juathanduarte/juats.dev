import { AnimatePresence, motion } from "framer-motion";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex"
                  >
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex"
                  >
                    <HiMenu className="h-6 w-6" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div
              ref={menuRef}
              className="absolute right-4 top-16 w-80 max-w-[90vw] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/60 dark:border-gray-700/60 shadow-xl rounded-xl overflow-visible"
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
        )}
      </div>
    </header>
  );
};

export default Header;
