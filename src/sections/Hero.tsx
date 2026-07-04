import { ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const avatarWebp = "/avatar.webp";
const avatarJpg = "/avatar.jpg";

const avatarProps = {
  alt: "Juathan Coelho Duarte",
  width: 350,
  height: 470,
  fetchPriority: "high" as const,
  decoding: "async" as const,
  className:
    "w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500 ease-out scale-100 hover:scale-[1.02]",
};

const HeroAvatar = ({ className }: { className?: string }) => (
  <picture>
    <source srcSet={avatarWebp} type="image/webp" />
    <img
      {...avatarProps}
      src={avatarJpg}
      alt="Juathan Coelho Duarte"
      className={`${avatarProps.className} ${className ?? ""}`}
    />
  </picture>
);

const Hero = () => {
  const { t } = useTranslation();

  const links = [
    {
      name: t("hero.cta.github"),
      url: "https://github.com/juathanduarte",
      icon: Github,
    },
    {
      name: t("hero.cta.linkedin"),
      url: "https://www.linkedin.com/in/juathanduarte",
      icon: Linkedin,
    },
    {
      name: t("hero.cta.cv"),
      url: "https://drive.google.com/file/d/1Gu7oQmcLx0UFqUKQ8OpyqPiv_-QJBU04/view?usp=sharing",
      icon: FileText,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 flex flex-col gap-8">
            <div className="block md:hidden">
              <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden rounded-none border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
                <HeroAvatar />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {t("hero.tagline")}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05]">
              {t("hero.name")}
            </h1>

            <div className="border-l-2 border-zinc-900 dark:border-zinc-100 pl-4 py-1">
              <p className="text-base sm:text-lg md:text-xl font-mono text-zinc-600 dark:text-zinc-300 tracking-tight leading-relaxed">
                &gt; {t("hero.impact")}
              </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-col md:inline-flex md:flex-row p-1 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-850/60 rounded-none relative w-full md:w-auto">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full md:w-auto px-4 py-3 md:py-2 text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors focus:outline-none flex items-center justify-center md:justify-start gap-2 group border-b border-zinc-200/50 dark:border-zinc-800/30 md:border-b-0 last:border-b-0 hover:bg-white dark:hover:bg-zinc-800/80"
                      aria-label={`Visit ${link.name}`}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-4 justify-end items-center">
            <div className="relative w-full max-w-[320px] h-[400px] lg:max-w-[350px] lg:h-[470px] overflow-hidden rounded-none border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl transition-all duration-500 ease-out hover:border-zinc-400 dark:hover:border-zinc-700 group">
              <HeroAvatar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
