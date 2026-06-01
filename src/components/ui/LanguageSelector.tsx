import { useEffect, useRef, useState } from "react";
import { HiCheck, HiChevronDown } from "react-icons/hi2";
import { useLanguage } from "../../hooks/useLanguage";

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLang = availableLanguages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-450 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-semibold">
          {currentLang?.code === "pt-BR"
            ? "PT-BR"
            : currentLang?.code.toUpperCase()}
        </span>
        <HiChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-950 rounded-none border border-zinc-200 dark:border-zinc-850 py-1.5 z-50 transition-all duration-200 origin-top shadow-xl ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        role="menu"
        aria-hidden={!isOpen}
      >
        {availableLanguages.map((language, index) => (
          <button
            key={language.code}
            type="button"
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors focus:outline-none text-xs font-mono uppercase tracking-wider ${
              currentLanguage === language.code
                ? "bg-zinc-100/50 dark:bg-zinc-900/60 text-zinc-950 dark:text-zinc-50 font-bold"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
            role="menuitem"
          >
            <span>{language.name}</span>
            {currentLanguage === language.code && (
              <HiCheck
                size={14}
                className="text-zinc-950 dark:text-zinc-50"
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
