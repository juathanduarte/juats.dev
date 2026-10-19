import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getOgLocale, SEO_CONFIG } from "../config/seo";

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
  image = SEO_CONFIG.defaultImage,
  url = SEO_CONFIG.siteUrl,
  type = "website",
}: IUseSEOProps = {}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language;
    const baseTitle = t("seo.title");
    const baseDescription = t("seo.description");
    const baseKeywords = t("seo.keywords");

    const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const finalDescription = description ?? baseDescription;
    const finalKeywords = keywords ?? baseKeywords;
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
    updateMetaTag("keywords", finalKeywords);

    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", finalUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:locale", getOgLocale(currentLanguage), true);

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
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    i18n.language,
    t,
  ]);
};

export default useSEO;
