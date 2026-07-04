import dhauzLogo from "@/assets/images/dhauz_logo.jpeg";
import hut8Logo from "@/assets/images/hut8_logo.jpeg";
import meupassLogo from "@/assets/images/meupass_logo.jpeg";
import murabeiLogo from "@/assets/images/murabei_logo.jpeg";
import quantumRiseLogo from "@/assets/images/quantumrise_logo.png";
import smartnxLogo from "@/assets/images/smartnx_logo.webp";
import { ArrowUpRight, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

interface IExperienceItem {
  key: string;
  url?: string | string[];
  logo?: string | string[];
}

const Experience = () => {
  const { t } = useTranslation();

  const items: IExperienceItem[] = [
    {
      key: "experience3",
      url: ["https://dhauz.com/pt/", "https://www.quantumrise.com/"],
      logo: [dhauzLogo, quantumRiseLogo],
    },
    { key: "experience5", url: "https://murabei.com/", logo: murabeiLogo },
    { key: "experience1", url: "https://www.smartnx.com/", logo: smartnxLogo },
    {
      key: "experience2",
      url: "https://parceiros.meupass.com.br/",
      logo: meupassLogo,
    },
    { key: "experience4", url: "https://www.hut8.com.br/", logo: hut8Logo },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              {t("about.title")}
            </h2>
          </div>

          <div className="relative border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/20 backdrop-blur-sm">
            <div className="hidden md:grid grid-cols-[160px_220px_1fr] gap-8 px-6 py-4 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-900/30 text-xs font-mono uppercase tracking-wider text-zinc-500 select-none">
              <div>{t("about.stats.years")}</div>
              <div>{t("common.about")}</div>
              <div>{t("common.detailsAndImpact")}</div>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-900">
              {items.map((item) => {
                const title = t(`about.journey.${item.key}.title`);
                const company = t(`about.journey.${item.key}.company`);
                const description = t(`about.journey.${item.key}.description`);
                const period = t(`about.journey.${item.key}.period`);

                return (
                  <article
                    key={item.key}
                    className="group relative grid grid-cols-1 md:grid-cols-[160px_220px_1fr] gap-2 md:gap-8 px-6 py-6 transition-colors duration-200 focus-within:bg-zinc-100/50 dark:focus-within:bg-zinc-900/40"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-zinc-100/40 dark:bg-zinc-900/50 border-y border-zinc-200/50 dark:border-zinc-800/40 z-0 pointer-events-none opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                    />

                    <div className="relative z-10 text-xs font-mono text-zinc-550 dark:text-zinc-450 self-center">
                      {period}
                    </div>

                    <div className="relative z-10 self-center flex flex-col gap-0.5">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {title}
                      </h4>
                      <div className="text-xs font-mono text-zinc-555 dark:text-zinc-400 flex flex-wrap items-center gap-x-1">
                        {(() => {
                          const companyParts = company.split(" | ");
                          const urls = Array.isArray(item.url)
                            ? item.url
                            : item.url
                              ? [item.url]
                              : [];
                          const logos = Array.isArray(item.logo)
                            ? item.logo
                            : item.logo
                              ? [item.logo]
                              : [];

                          return companyParts.map((part, index) => {
                            const url = urls[index];
                            const logo = logos[index];
                            const isLast = index === companyParts.length - 1;
                            return (
                              <span
                                key={part}
                                className="inline-flex items-center"
                              >
                                {url ? (
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-50 inline-flex items-center gap-1 group/link"
                                    aria-label={`Visit ${part} website`}
                                  >
                                    {logo && (
                                      <img
                                        src={logo}
                                        alt=""
                                        className="w-4 h-4 rounded-sm object-contain shrink-0 grayscale opacity-70 group-hover/link:grayscale-0 group-hover/link:opacity-100 transition-all duration-200"
                                      />
                                    )}
                                    {part}
                                    <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                                  </a>
                                ) : (
                                  <span className="inline-flex items-center gap-1">
                                    {logo && (
                                      <img
                                        src={logo}
                                        alt=""
                                        className="w-4 h-4 rounded-sm object-contain shrink-0 opacity-80"
                                      />
                                    )}
                                    {part}
                                  </span>
                                )}
                                {!isLast && (
                                  <span className="select-none text-zinc-400 dark:text-zinc-700">
                                    |
                                  </span>
                                )}
                              </span>
                            );
                          });
                        })()}
                      </div>
                    </div>

                    <div className="relative z-10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed self-center">
                      {description}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
