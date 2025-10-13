import { useEffect } from "react";

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
  title = "juats.dev | Desenvolvedor Full-Stack | Juathan Coelho Duarte",
  description = "Desenvolvedor Full-Stack formado em Ciência da Computação pela UFPel. Especialista em React, TypeScript, Node.js com experiência em produtos de alto impacto e liderança técnica.",
  keywords = "desenvolvedor full-stack, react, typescript, nodejs, frontend, backend, javascript, juathan coelho duarte, juats, portfólio",
  image = "https://juats.dev/src/assets/images/avatar.jpg",
  url = "https://juats.dev",
  type = "website",
  locale = "pt_BR",
}: ISEOHeadProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
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

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:image", image);
    updateOGTag("og:url", url);
    updateOGTag("og:type", type);
    updateOGTag("og:locale", locale);

    updateTwitterTag("twitter:title", title);
    updateTwitterTag("twitter:description", description);
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
  }, [title, description, keywords, image, url, type, locale]);

  return null;
};

export default SEOHead;
