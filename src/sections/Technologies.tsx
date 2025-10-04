import { useId } from "react";
import { useTranslation } from "react-i18next";
import { FaWindows } from "react-icons/fa";
import {
  SiAntdesign,
  SiBitbucket,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiSqlite,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

interface ITechnology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ITechnologyCategory {
  title: string;
  icon: string;
  technologies: ITechnology[];
}

const Technologies = () => {
  const { t } = useTranslation();
  const sectionId = useId();

  const technologyCategories: ITechnologyCategory[] = [
    {
      title: t("technologies.frontend.title"),
      icon: "",
      technologies: [
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800 dark:text-white",
        },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Zustand", icon: SiRedux, color: "text-orange-600" },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "text-pink-500",
        },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Ant Design", icon: SiAntdesign, color: "text-blue-500" },
        { name: "Vitest", icon: SiVitest, color: "text-green-500" },
      ],
    },
    {
      title: t("technologies.backend.title"),
      icon: "",
      technologies: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        {
          name: "Express",
          icon: SiExpress,
          color: "text-gray-600 dark:text-gray-300",
        },
        { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-800 dark:text-white",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "text-gray-700 dark:text-gray-200",
        },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
        { name: "SQLite", icon: SiSqlite, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Supabase", icon: SiSupabase, color: "text-green-600" },
      ],
    },
    {
      title: t("technologies.mobile.title"),
      icon: "",
      technologies: [
        { name: "React Native", icon: SiReact, color: "text-cyan-500" },
        { name: "Expo", icon: SiExpo, color: "text-gray-800 dark:text-white" },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Zustand", icon: SiRedux, color: "text-orange-600" },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "text-pink-500",
        },
        { name: "Jest", icon: SiJest, color: "text-red-500" },
      ],
    },
    {
      title: t("technologies.others.title"),
      icon: "",
      technologies: [
        { name: "C", icon: SiCplusplus, color: "text-blue-600" },
        { name: "Python", icon: SiPython, color: "text-yellow-600" },
        { name: "Java", icon: SiOpenjdk, color: "text-red-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        {
          name: "GitHub",
          icon: SiGithub,
          color: "text-gray-800 dark:text-white",
        },
        { name: "Bitbucket", icon: SiBitbucket, color: "text-blue-600" },
        { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
        { name: "Jira", icon: SiJira, color: "text-blue-500" },
        { name: "Windows", icon: FaWindows, color: "text-blue-500" },
      ],
    },
  ];

  return (
    <section
      id={`technologies-${sectionId}`}
      className="section-padding bg-gradient-to-br from-white to-primary-50/20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50">
              <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {t("technologies.title")}
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("technologies.subtitle")}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologyCategories.map((category) => (
              <div
                key={`${sectionId}-${category.title}`}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                    {category.technologies.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={`${sectionId}-${category.title}-${tech.name}`}
                          className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/20 dark:hover:to-primary-800/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                          <div className="p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                            <IconComponent
                              className={`w-6 h-6 ${tech.color} group-hover:scale-110 transition-transform duration-200`}
                            />
                          </div>
                          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-2 text-center leading-tight group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
