import { useTranslation } from "react-i18next";

interface IStatItem {
  id: string;
  number: string;
  suffix?: string;
  labelKey: string;
}

const Stats = () => {
  const { t } = useTranslation();

  const stats: IStatItem[] = [
    {
      id: "years",
      number: "3",
      suffix: "+",
      labelKey: "about.stats.years",
    },
    {
      id: "projects",
      number: "5",
      suffix: "+",
      labelKey: "about.stats.projects",
    },
    {
      id: "users",
      number: "15.000",
      suffix: "+",
      labelKey: "about.stats.users",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="text-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-700 dark:to-primary-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 dark:border-primary-600"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <span className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-white">
                {stat.number}
                {stat.suffix && (
                  <span className="text-3xl md:text-4xl text-primary-500 dark:text-primary-100">
                    {stat.suffix}
                  </span>
                )}
              </span>
            </div>
            <p className="text-lg font-medium text-primary-500 dark:text-primary-100">
              {t(stat.labelKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
