#!/usr/bin/env node

/**
 * Script para gerar sitemap.xml automaticamente
 * Baseado nas seções do portfólio e idiomas disponíveis
 */

import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://juats.dev";
const SECTIONS = [
  { path: "", priority: "1.0", changefreq: "weekly" }, // Homepage
  { path: "#about", priority: "0.8", changefreq: "monthly" },
  { path: "#technologies", priority: "0.7", changefreq: "monthly" },
  { path: "#projects", priority: "0.9", changefreq: "weekly" },
  { path: "#contact", priority: "0.8", changefreq: "monthly" },
];

const LANGUAGES = ["pt-BR", "en", "es"];

function generateSitemap() {
  const currentDate = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  // Adicionar URLs para cada seção e idioma
  SECTIONS.forEach((section) => {
    // URL padrão (português)
    sitemap += `
  <url>
    <loc>${BASE_URL}/${section.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${section.changefreq}</changefreq>
    <priority>${section.priority}</priority>
  </url>`;

    // URLs para outros idiomas
    LANGUAGES.forEach((lang) => {
      if (lang !== "pt-BR") {
        sitemap += `
  <url>
    <loc>${BASE_URL}/${section.path}?lang=${lang}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${section.changefreq}</changefreq>
    <priority>${section.priority}</priority>
  </url>`;
      }
    });
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

    fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
    console.log("✅ Sitemap gerado com sucesso em:", sitemapPath);
  } catch (error) {
    console.error("❌ Erro ao gerar sitemap:", error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemap();
}

export { generateSitemap, writeSitemap };
