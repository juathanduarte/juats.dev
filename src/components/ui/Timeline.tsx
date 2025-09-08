import { useTranslation } from "react-i18next";

interface ITimelineItem {
  id: string;
  title: string;
  company: string;
  description: string;
  period: string;
  isLast?: boolean;
}

const Timeline = () => {
  const { t } = useTranslation();

  const experiences: ITimelineItem[] = [
    {
      id: "experience1",
      title: t("about.journey.experience1.title"),
      company: t("about.journey.experience1.company"),
      description: t("about.journey.experience1.description"),
      period: t("about.journey.experience1.period"),
    },
    {
      id: "experience2",
      title: t("about.journey.experience2.title"),
      company: t("about.journey.experience2.company"),
      description: t("about.journey.experience2.description"),
      period: t("about.journey.experience2.period"),
    },
    {
      id: "experience3",
      title: t("about.journey.experience3.title"),
      company: t("about.journey.experience3.company"),
      description: t("about.journey.experience3.description"),
      period: t("about.journey.experience3.period"),
      isLast: true,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-400 to-transparent md:from-primary-500 md:via-primary-400 md:to-primary-300 transform md:-translate-x-0.5"></div>

      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-start ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-0 md:left-1/2 top-0 z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg transform md:-translate-x-4">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div
              className={`pl-12 md:pl-0 w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      {experience.company}
                    </p>
                    <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
