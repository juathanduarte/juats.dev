import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-3 py-6 border-y border-neutral-150 dark:border-neutral-900 w-full font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-450">
      <div>
        <span className="text-neutral-950 dark:text-white font-bold mr-1">3+</span>
        {t("about.stats.years")}
      </div>
      <span className="hidden md:inline text-neutral-350 dark:text-neutral-800">//</span>
      <div>
        <span className="text-neutral-950 dark:text-white font-bold mr-1">5+</span>
        {t("about.stats.projects")}
      </div>
      <span className="hidden md:inline text-neutral-350 dark:text-neutral-800">//</span>
      <div>
        <span className="text-neutral-950 dark:text-white font-bold mr-1">15.000+</span>
        {t("about.stats.users")}
      </div>
    </div>
  );
};

export default Stats;
