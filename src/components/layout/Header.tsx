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
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md border-b border-neutral-150 dark:border-neutral-900 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-80}
                className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white transition-opacity duration-200 hover:opacity-85 cursor-pointer focus:outline-none"
                aria-label="Go to home section"
              >
                {t("header.logo")}
              </Link>
              <div className="w-px h-5 bg-neutral-300 dark:bg-neutral-800" />
              <AnimatedIcon />
            </div>
          </div>

          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {["home", "about", "technologies", "projects", "volunteer", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={800}
                offset={-80}
                className="text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer focus:outline-none font-mono"
              >
                {t(`header.navigation.${section}`)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
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
              className="p-2 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white focus:outline-none"
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
            className={`absolute right-4 top-16 w-64 max-w-[90vw] bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-850 rounded-none shadow-sm overflow-visible transition-all duration-200 origin-top ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="px-3 py-4 flex flex-col gap-1">
              {["home", "about", "technologies", "projects", "volunteer", "contact"].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="block w-full text-left px-4 py-2 text-sm uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-none transition-all duration-150 cursor-pointer focus:outline-none font-mono"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`header.navigation.${section}`)}
                </Link>
              ))}
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800 mx-4"></div>
            <div className="px-4 py-4 flex items-center justify-center gap-6">
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
