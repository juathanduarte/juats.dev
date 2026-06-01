import { useId } from "react";
import { useTranslation } from "react-i18next";
import { Cpu } from "lucide-react";
import { FaWindows } from "react-icons/fa";
import {
  SiAntdesign,
  SiBitbucket,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSqlite,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

const SiPlaywright = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.753 11.233c.414-.239.556-.769.317-1.183l-2.02-3.498a.798.798 0 0 0-.256-.282.802.802 0 0 0-1.127.202l-2.072 2.825a16.892 16.892 0 0 0-3.324-.766l.322-3.486a.795.795 0 0 0-.462-.806.797.797 0 0 0-.916.241L8.76 8.01a16.924 16.924 0 0 0-3.398.986l-2.31-2.634c-.161-.184-.395-.29-.641-.29a.801.801 0 0 0-.742 1.101l1.583 3.714c-.66.602-1.258 1.272-1.782 1.998l-3.21-.926a.798.798 0 0 0-.92.38.797.797 0 0 0 .167.933l2.84 2.05a16.93 16.93 0 0 0.174 3.535L.302 18.064c-.198.143-.314.372-.302.616a.798.798 0 0 0 .866.721l3.5-.164c.531.637 1.134 1.21 1.796 1.706l-1.077 3.326a.8.8 0 0 0 .399.967c.105.05.219.075.332.075a.799.799 0 0 0 .614-.287l2.584-3.056c1.076.326 2.2.494 3.332.497 4.14 0 7.933-2.18 10.024-5.748.163-.277.164-.619.004-.897l-1.637-2.836zm-8.22 6.643c-3.13 0-5.67-2.54-5.67-5.67s2.54-5.67 5.67-5.67 5.67 2.54 5.67 5.67-2.54 5.67-5.67 5.67z" />
  </svg>
);

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
        { name: "HTML5", icon: SiHtml5, color: "group-hover:text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "group-hover:text-blue-500" },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "group-hover:text-yellow-500",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "group-hover:text-blue-600",
        },
        { name: "React", icon: SiReact, color: "group-hover:text-cyan-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        { name: "Redux", icon: SiRedux, color: "group-hover:text-purple-500" },
        {
          name: "Zustand",
          icon: SiRedux,
          color: "group-hover:text-orange-650",
        },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "group-hover:text-pink-500",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "group-hover:text-cyan-400",
        },
        {
          name: "Ant Design",
          icon: SiAntdesign,
          color: "group-hover:text-blue-500",
        },
        {
          name: "shadcn/ui",
          icon: SiShadcnui,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        {
          name: "Radix UI",
          icon: SiRadixui,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        {
          name: "Material UI",
          icon: SiMui,
          color: "group-hover:text-blue-500",
        },
        { name: "Vitest", icon: SiVitest, color: "group-hover:text-green-500" },
        { name: "Jest", icon: SiJest, color: "group-hover:text-red-500" },
        {
          name: "Playwright",
          icon: SiPlaywright,
          color: "group-hover:text-green-600 dark:group-hover:text-green-500",
        },
      ],
    },
    {
      title: t("technologies.backend.title"),
      icon: "",
      technologies: [
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "group-hover:text-yellow-500",
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
          color: "group-hover:text-blue-600",
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "group-hover:text-green-600",
        },
        {
          name: "Express",
          icon: SiExpress,
          color:
            "group-hover:text-neutral-600 dark:group-hover:text-neutral-300",
        },
        { name: "NestJS", icon: SiNestjs, color: "group-hover:text-red-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        {
          name: "Prisma",
          icon: SiPrisma,
          color:
            "group-hover:text-neutral-700 dark:group-hover:text-neutral-200",
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "group-hover:text-blue-700",
        },
        { name: "SQLite", icon: SiSqlite, color: "group-hover:text-blue-500" },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "group-hover:text-green-500",
        },
        {
          name: "Supabase",
          icon: SiSupabase,
          color: "group-hover:text-green-600",
        },
        {
          name: "Firebase",
          icon: SiFirebase,
          color: "group-hover:text-amber-500",
        },
      ],
    },
    {
      title: t("technologies.mobile.title"),
      icon: "",
      technologies: [
        {
          name: "React Native",
          icon: SiReact,
          color: "group-hover:text-cyan-500",
        },
        {
          name: "Expo",
          icon: SiExpo,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        { name: "Redux", icon: SiRedux, color: "group-hover:text-purple-500" },
        {
          name: "Zustand",
          icon: SiRedux,
          color: "group-hover:text-orange-650",
        },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "group-hover:text-pink-500",
        },
        { name: "Jest", icon: SiJest, color: "group-hover:text-red-500" },
      ],
    },
    {
      title: t("technologies.others.title"),
      icon: "",
      technologies: [
        { name: "C", icon: SiCplusplus, color: "group-hover:text-blue-600" },
        {
          name: "Python",
          icon: SiPython,
          color: "group-hover:text-yellow-600",
        },
        { name: "Java", icon: SiOpenjdk, color: "group-hover:text-red-600" },
        { name: "Docker", icon: SiDocker, color: "group-hover:text-blue-500" },
        { name: "Git", icon: SiGit, color: "group-hover:text-orange-500" },
        {
          name: "GitHub",
          icon: SiGithub,
          color: "group-hover:text-neutral-900 dark:group-hover:text-white",
        },
        {
          name: "Bitbucket",
          icon: SiBitbucket,
          color: "group-hover:text-blue-600",
        },
        { name: "Linux", icon: SiLinux, color: "group-hover:text-yellow-600" },
        { name: "Jira", icon: SiJira, color: "group-hover:text-blue-500" },
        {
          name: "Windows",
          icon: FaWindows,
          color: "group-hover:text-blue-500",
        },
      ],
    },
  ];

  return (
    <section
      id="technologies"
      className="section-padding bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col gap-12">
          
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              {t("technologies.title")}
            </h2>
          </div>

          <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-900">
            {technologyCategories.map((category) => (
              <div
                key={`${sectionId}-${category.title}`}
                className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-10 border-b border-zinc-200 dark:border-zinc-900 gap-6 items-start"
              >
                <div className="md:col-span-4">
                  <h3 className="text-xs uppercase tracking-wider font-mono text-neutral-450 dark:text-neutral-500">
                    {category.title}
                  </h3>
                </div>

                <div className="md:col-span-8 flex flex-wrap gap-2">
                  {category.technologies.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={`${sectionId}-${category.title}-${tech.name}`}
                        className="group flex items-center gap-2 px-3 py-1.5 border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200 bg-white dark:bg-zinc-950/20 backdrop-blur-sm"
                      >
                        <IconComponent
                          className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-550 transition-colors duration-200"
                        />
                        <span className="text-xs font-mono tracking-tight">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
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
