import { PROJECTS } from "@constants/index";
import { useTranslation } from "react-i18next";
import appMeupassImg from "../assets/projects/app-meupass.jpg";
import dashMeupassImg from "../assets/projects/dash-meupass.png";
// Import project images
import letralandiaImg from "../assets/projects/letralandia.png";
import suiteImg from "../assets/projects/suite.png";

// Image mapping
const projectImages: Record<string, string> = {
  "letralandia.png": letralandiaImg,
  "suite.png": suiteImg,
  "app-meupass.jpg": appMeupassImg,
  "dash-meupass.png": dashMeupassImg,
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section
      id="projects"
      className="min-h-[calc(100vh)] py-6 flex items-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={projectImages[project.image]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.category === "fullstack"
                        ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                        : project.category === "backend"
                          ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                          : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    }`}
                  >
                    {project.category === "fullstack"
                      ? "Full-stack"
                      : project.category === "backend"
                        ? "Back-end"
                        : "Front-end"}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
