import Timeline from "@components/ui/Timeline";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center">
            {t("about.journey.title")}
          </h3>

          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
