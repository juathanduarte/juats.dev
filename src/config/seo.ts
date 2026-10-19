export const getOgLocale = (language: string): string => {
  if (language === "pt-BR") {
    return "pt_BR";
  }
  if (language === "en") {
    return "en_US";
  }
  return "es_ES";
};

export const SEO_CONFIG = {
  siteName: "juats.dev",
  siteUrl: "https://juats.dev",
  defaultTitle: "Juathan C. Duarte | Engenheiro de Software",
  defaultDescription:
    "Engenheiro de Software formado em Ciência da Computação pela UFPel. Especialista em React, TypeScript, Node.js com experiência em produtos de alto impacto e liderança técnica.",
  defaultKeywords: [
    "desenvolvedor full-stack",
    "react",
    "typescript",
    "nodejs",
    "frontend",
    "backend",
    "javascript",
    "juathan coelho duarte",
    "juats",
    "portfólio",
    "ufpel",
    "ciência da computação",
  ],
  author: "Juathan Coelho Duarte",
  twitterHandle: "@juathanduarte",
  defaultImage: "https://juats.dev/src/assets/images/avatar.jpg",
  defaultImageAlt: "Juathan C. Duarte - Engenheiro de Software",
  supportedLanguages: ["pt-BR", "en", "es"],
  defaultLanguage: "pt-BR",
} as const;

export const PERFORMANCE_CONFIG = {
  cache: {
    staticAssets: 31536000,
    api: 3600,
    images: 86400,
  },
} as const;

export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: "",
  },

  performance: {
    enabled: true,
    sampleRate: 0.1,
  },
} as const;
