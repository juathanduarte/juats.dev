import { SKILLS } from "@constants/index";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const skillCategories = [
    { name: "frontend", color: "primary" },
    { name: "backend", color: "secondary" },
    { name: "tools", color: "green" },
    { name: "languages", color: "purple" },
  ];

  const getSkillsByCategory = (category: string) => {
    return SKILLS.filter((skill) => skill.category === category.toLowerCase());
  };

  const getSkillLevelBars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i.toString()}
        className={`w-3 h-3 rounded-full ${i < level ? "bg-primary-500" : "bg-gray-200"}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">{t("about.journey.title")}</h3>
            <p className="text-gray-600 leading-relaxed">{t("about.journey.description1")}</p>
            <p className="text-gray-600 leading-relaxed">{t("about.journey.description2")}</p>
            <p className="text-gray-600 leading-relaxed">{t("about.journey.description3")}</p>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 text-center lg:text-left">
              {t("about.skills.title")}
            </h3>

            <div className="space-y-6">
              {skillCategories.map((category) => {
                const categorySkills = getSkillsByCategory(category.name.toLowerCase());

                return (
                  <div key={category.name} className="space-y-3">
                    <h4 className="font-medium text-gray-700">
                      {t(`about.skills.${category.name}`)}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.id} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{skill.name}</span>
                          <div className="flex space-x-1">{getSkillLevelBars(skill.level)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">{t("about.stats.years")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">{t("about.stats.projects")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-gray-600">{t("about.stats.clients")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">{t("about.stats.satisfaction")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
