export const SEO_CONFIG = {
  siteName: "juats.dev",
  siteUrl: "https://juats.dev",
  defaultTitle: "juats.dev | Desenvolvedor Full-Stack | Juathan Coelho Duarte",
  defaultDescription:
    "Desenvolvedor Full-Stack formado em Ciência da Computação pela UFPel. Especialista em React, TypeScript, Node.js com experiência em produtos de alto impacto e liderança técnica.",
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
  defaultImageAlt: "Juathan Coelho Duarte - Desenvolvedor Full-Stack",
  supportedLanguages: ["pt-BR", "en", "es"],
  defaultLanguage: "pt-BR",
} as const;

export const PERFORMANCE_CONFIG = {
  lazyLoading: {
    rootMargin: "50px",
    threshold: 0.1,
  },

  images: {
    placeholder:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDMyMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDAgMTIwSDE4MFYxNjBIMTQwVjEyMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE2MCAxNDBIMjAwVjE4MEgxNjBWMTQwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K",
    sizes: {
      hero: "(max-width: 1024px) 320px, (max-width: 1280px) 384px, 448px",
      project: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      avatar: "(max-width: 768px) 200px, 300px",
    },
    formats: ["webp", "jpg", "png"],
  },

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
