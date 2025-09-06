import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { SOCIAL_LINKS } from "../../constants";
import LanguageSelector from "../ui/LanguageSelector";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      handleToggleMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-pointer"
              tabIndex={0}
              aria-label="Go to home section"
            >
              {t("header.logo")}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              tabIndex={0}
            >
              {t("header.navigation.home")}
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              tabIndex={0}
            >
              {t("header.navigation.about")}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              tabIndex={0}
            >
              {t("header.navigation.projects")}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              tabIndex={0}
            >
              {t("header.navigation.contact")}
            </Link>
          </nav>

          {/* Right side - Theme Toggle, Language Selector and Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSelector />

            {/* Social Links */}
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                tabIndex={0}
                aria-label={`Visit ${link.name}`}
              >
                <span className="sr-only">{link.name}</span>
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
              onClick={handleToggleMenu}
              onKeyDown={handleKeyDown}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                tabIndex={0}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.home")}
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                tabIndex={0}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.about")}
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                tabIndex={0}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.projects")}
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                tabIndex={0}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.navigation.contact")}
              </Link>

              {/* Mobile Theme Toggle and Language Selector */}
              <div className="px-3 py-2 flex items-center space-x-4">
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
