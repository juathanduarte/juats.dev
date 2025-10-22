import { PROJECTS } from "@constants/index";
import { useTranslation } from "react-i18next";
import appMeupassImg from "../assets/projects/app-meupass.jpg";
import blablacampusImg from "../assets/projects/blablacampus.jpeg";
import clineqappImg from "../assets/projects/clineqapp-hut8.jpeg";
import dashMeupassImg from "../assets/projects/dash-meupass.png";
import letralandiaImg from "../assets/projects/letralandia.png";
import presencasSiiepeImg from "../assets/projects/presencas_siiepe.jpeg";
import suiteImg from "../assets/projects/suite.png";

const projectImages: Record<string, string> = {
  "letralandia.png": letralandiaImg,
  "suite.png": suiteImg,
  "app-meupass.jpg": appMeupassImg,
  "dash-meupass.png": dashMeupassImg,
  "clineqapp-hut8.jpeg": clineqappImg,
  "presencas_siiepe.jpeg": presencasSiiepeImg,
  "blablacampus.jpeg": blablacampusImg,
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50">
              <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {t("projects.title")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="card hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-1 min-w-0">
                        {project.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap flex-shrink-0 ${
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
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full whitespace-nowrap flex-shrink-0"
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
      </div>
    </section>
  );
};

export default Projects;
