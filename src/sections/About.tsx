import Timeline from "@components/ui/Timeline";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section
      id="about"
      className="min-h-[calc(100vh)] py-6 flex items-center bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center">
            {t("about.journey.title")}
          </h3>

          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-center md:text-left">
              {t("about.bio.paragraph")}
            </p>
          </div>

          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
