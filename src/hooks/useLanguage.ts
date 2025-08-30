import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language);
    },
    [i18n]
  );

  const currentLanguage = i18n.language;

  const availableLanguages = [
    { code: "pt-BR", name: t("languages.pt"), flag: "🇧🇷" },
    { code: "en", name: t("languages.en"), flag: "🇺🇸" },
    { code: "es", name: t("languages.es"), flag: "🇪🇸" },
  ];

  return {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    t,
  };
};
