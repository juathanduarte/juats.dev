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
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-medium">
          {currentLang?.code === "pt-BR"
            ? "PT-BR"
            : currentLang?.code.toUpperCase()}
        </span>
        <HiChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-all duration-200 origin-top ${
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
            className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none ${
              currentLanguage === language.code
                ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
            role="menuitem"
          >
            <span className="text-sm font-medium">{language.name}</span>
            {currentLanguage === language.code && (
              <HiCheck
                size={16}
                className="ml-auto text-primary-600 dark:text-primary-400"
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
