import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Terminal, ArrowUpRight } from "lucide-react";

interface IVolunteerItem {
  key: string;
  url: string;
}

const Volunteer = () => {
  const { t } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items: IVolunteerItem[] = [
    {
      key: "experience",
      url: "https://amigo-de-pelo-937434044574.us-west1.run.app",
    },
    {
      key: "experience_gc",
      url: "https://gamersclub-booster.github.io/",
    },
  ];

  return (
    <section
      id="volunteer"
      className="section-padding bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col gap-12">
          
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              {t("volunteer.title")}
            </h2>
          </div>

          <div className="relative border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/20 backdrop-blur-sm">
            
            <div className="hidden md:grid grid-cols-[220px_1fr] gap-8 px-6 py-4 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-900/30 text-xs font-mono uppercase tracking-wider text-zinc-500 select-none">
              <div>{t("common.organizationOrRole")}</div>
              <div>{t("common.detailsAndImpact")}</div>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-900">
              {items.map((item, idx) => {
                const title = t(`volunteer.${item.key}.title`);
                const company = t(`volunteer.${item.key}.company`);
                const description = t(`volunteer.${item.key}.description`);

                return (
                  <div
                    key={item.key}
                    className="relative grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 px-6 py-6 transition-colors duration-200 focus-within:bg-zinc-100/50 dark:focus-within:bg-zinc-900/40 outline-none"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    tabIndex={0}
                    aria-label={`${title} at ${company}`}
                  >
                    {hoveredIdx === idx && (
                      <motion.div
                        layoutId="active-volunteer-bg"
                        className="absolute inset-0 bg-zinc-100/40 dark:bg-zinc-900/50 border-y border-zinc-200/50 dark:border-zinc-800/40 z-0 pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative z-10 self-center flex flex-col gap-0.5">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {title}
                      </h4>
                      <div className="text-xs font-mono text-zinc-550 dark:text-zinc-400">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-50 inline-flex items-center gap-1 group/link"
                          aria-label={`Visit ${company} website`}
                        >
                          {company}
                          <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>

                    <div className="relative z-10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed self-center">
                      {description}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Volunteer;
