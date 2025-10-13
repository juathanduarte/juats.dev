# 🚀 juats.dev - Portfólio Pessoal

Portfólio profissional de **Juathan Coelho Duarte** - Desenvolvedor Full-Stack formado em Ciência da Computação pela Universidade Federal de Pelotas.

## ✨ Características

- **🎨 Design Moderno**: Interface responsiva e acessível com dark mode
- **⚡ Performance Otimizada**: Lazy loading, otimização de imagens e WebP
- **🌍 Internacionalização**: Suporte a Português, Inglês e Espanhol
- **📱 PWA Ready**: Manifest e funcionalidades de Progressive Web App
- **🔍 SEO Otimizado**: Meta tags, Open Graph, Twitter Cards e structured data
- **♿ Acessibilidade**: WCAG compliant com navegação por teclado
- **🎭 Animações**: Transições suaves com Framer Motion

## 🛠️ Tecnologias

### Frontend
- **React 19** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS
- **Framer Motion** - Animações

### Internacionalização
- **i18next** - Sistema de tradução
- **react-i18next** - Integração React

### Ferramentas
- **Biome** - Linter e formatter
- **React Icons** - Ícones
- **React Scroll** - Navegação suave

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Header, Footer
│   ├── ui/             # Componentes de UI
│   └── seo/            # Componentes de SEO
├── sections/           # Seções principais do site
├── hooks/              # Custom hooks
├── config/             # Configurações
├── constants/          # Constantes e dados
├── locales/            # Traduções
├── types/              # Definições TypeScript
└── utils/              # Utilitários
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone https://github.com/juathanduarte/juats-dev.git
cd juats-dev

# Instale as dependências
pnpm install

# Execute em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 📊 SEO e Performance

### Meta Tags
- ✅ Meta tags completas
- ✅ Open Graph para redes sociais
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URLs

### Performance
- ✅ Lazy loading de imagens
- ✅ Otimização de imagens com WebP
- ✅ Preconnect para recursos externos
- ✅ Intersection Observer para lazy loading
- ✅ Responsive images com srcset

### Arquivos de SEO
- `public/sitemap.xml` - Mapa do site
- `public/robots.txt` - Instruções para crawlers
- `public/manifest.json` - Manifest PWA

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview

# Linting e formatação
pnpm lint
pnpm format
pnpm check

# Gerar sitemap
pnpm generate-sitemap
```

## 🌐 Internacionalização

O site suporta três idiomas:
- 🇧🇷 Português (pt-BR) - Padrão
- 🇺🇸 English (en)
- 🇪🇸 Español (es)

As traduções estão em `src/locales/` e são carregadas dinamicamente.

## 📱 PWA Features

- Manifest configurado
- Theme color personalizada
- Ícones para diferentes tamanhos
- Suporte offline (quando implementado)

## 🔧 Configurações

### SEO
Configurações centralizadas em `src/config/seo.ts`:
- Meta tags padrão
- URLs e imagens
- Configurações de performance

### Performance
Configurações de otimização em `src/config/seo.ts`:
- Lazy loading
- Cache strategies
- Image optimization

## 📈 Próximas Melhorias

- [ ] Service Worker para offline
- [ ] Google Analytics
- [ ] Blog/Artigos
- [ ] Testimonials
- [ ] Certificações
- [ ] GitHub Stats em tempo real

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📄 Licença

Este projeto é pessoal e não possui licença específica.

## 📞 Contato

- **Email**: juathanduarte13@gmail.com
- **LinkedIn**: [juathanduarte](https://www.linkedin.com/in/juathanduarte)
- **GitHub**: [juathanduarte](https://github.com/juathanduarte)