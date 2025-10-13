import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IUseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

export const useSEO = ({
  title,
  description,
  keywords,
  image = "https://juats.dev/src/assets/images/avatar.jpg",
  url = "https://juats.dev",
  type = "website",
}: IUseSEOProps = {}) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language;
    const baseTitle =
      "juats.dev | Desenvolvedor Full-Stack | Juathan Coelho Duarte";
    const baseDescription =
      "Desenvolvedor Full-Stack formado em Ciência da Computação pela UFPel. Especialista em React, TypeScript, Node.js com experiência em produtos de alto impacto e liderança técnica.";

    const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const finalDescription = description || baseDescription;
    const finalUrl =
      url + (currentLanguage !== "pt-BR" ? `?lang=${currentLanguage}` : "");

    document.title = finalTitle;

    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const selector = isProperty
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", finalDescription);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", finalUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag(
      "og:locale",
      currentLanguage === "pt-BR"
        ? "pt_BR"
        : currentLanguage === "en"
          ? "en_US"
          : "es_ES",
      true
    );

    updateMetaTag("twitter:title", finalTitle);
    updateMetaTag("twitter:description", finalDescription);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:url", finalUrl);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", finalUrl);
  }, [title, description, keywords, image, url, type, i18n.language]);
};

export default useSEO;
