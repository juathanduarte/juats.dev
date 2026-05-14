import { PROJECTS } from "@constants/index";
import { useTranslation } from "react-i18next";
import SectionTitle from "@components/ui/SectionTitle";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import appMeupassImg from "../assets/projects/app-meupass.jpg";
import blablacampusImg from "../assets/projects/blablacampus.jpeg";
import clineqappImg from "../assets/projects/clineqapp-hut8.jpeg";
import dashMeupassImg from "../assets/projects/dash-meupass.png";
import letralandiaImg from "../assets/projects/letralandia.png";
import presencasSiiepeImg from "../assets/projects/presencas_siiepe.jpeg";
import suiteImg from "../assets/projects/suite.png";
import amigoDePeloImg from "../assets/projects/amigo-de-pelo.png";
import Tooltip from "../components/ui/tooltip";

const projectImages: Record<string, string> = {
  "letralandia.png": letralandiaImg,
  "suite.png": suiteImg,
  "app-meupass.jpg": appMeupassImg,
  "dash-meupass.png": dashMeupassImg,
  "clineqapp-hut8.jpeg": clineqappImg,
  "presencas_siiepe.jpeg": presencasSiiepeImg,
  "blablacampus.jpeg": blablacampusImg,
  "amigo-de-pelo.png": amigoDePeloImg,
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <SectionTitle title={t("projects.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex flex-col bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-white/20 dark:border-gray-700/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border border-white/20 ${
                        project.category === "fullstack"
                          ? "bg-purple-500/80 text-white"
                          : project.category === "backend"
                            ? "bg-red-500/80 text-white"
                            : "bg-blue-500/80 text-white"
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

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          title={t("projects.github")}
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                          title={t("projects.liveDemo")}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-bold uppercase tracking-wider rounded-md border border-primary-100/50 dark:border-primary-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <Tooltip
                          content={
                            <div className="flex flex-col gap-1.5 p-1">
                              {project.technologies.slice(3).map((tech) => (
                                <span key={tech} className="text-xs font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          }
                          position="top"
                        >
                          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-[10px] font-bold rounded-md cursor-help hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                            +{project.technologies.length - 3}
                          </span>
                        </Tooltip>
                      )}
                    </div>
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
