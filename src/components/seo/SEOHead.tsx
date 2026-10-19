import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getOgLocale, SEO_CONFIG } from "../../config/seo";

interface ISEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = SEO_CONFIG.defaultImage,
  url = SEO_CONFIG.siteUrl,
  type = "website",
  locale,
}: ISEOHeadProps) => {
  const { t, i18n } = useTranslation();

  const resolvedTitle = title ?? t("seo.title");
  const resolvedDescription = description ?? t("seo.description");
  const resolvedKeywords = keywords ?? t("seo.keywords");
  const resolvedLocale = locale ?? getOgLocale(i18n.language);

  useEffect(() => {
    if (resolvedTitle) {
      document.title = resolvedTitle;
    }

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

    const updateOGTag = (property: string, content: string) => {
      updateMetaTag(property, content, true);
    };

    const updateTwitterTag = (name: string, content: string) => {
      updateMetaTag(name, content);
    };

    updateMetaTag("description", resolvedDescription);
    updateMetaTag("keywords", resolvedKeywords);

    updateOGTag("og:title", resolvedTitle);
    updateOGTag("og:description", resolvedDescription);
    updateOGTag("og:image", image);
    updateOGTag("og:url", url);
    updateOGTag("og:type", type);
    updateOGTag("og:locale", resolvedLocale);

    updateTwitterTag("twitter:title", resolvedTitle);
    updateTwitterTag("twitter:description", resolvedDescription);
    updateTwitterTag("twitter:image", image);
    updateTwitterTag("twitter:url", url);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [
    resolvedTitle,
    resolvedDescription,
    resolvedKeywords,
    image,
    url,
    type,
    resolvedLocale,
  ]);

  return null;
};

export default SEOHead;
