import Stats from "@components/ui/Stats";
import Timeline from "@components/ui/Timeline";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-primary-50/30 to-primary-100/30 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50">
              <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {t("about.journey.title")}
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("about.bio.paragraph")}
            </p>
          </div>

          <div className="card">
            <Stats />
          </div>

          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
