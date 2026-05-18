import SectionTitle from "@components/ui/SectionTitle";
import { PROJECTS } from "@constants/index";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import amigoDePeloImg from "../assets/projects/amigo-de-pelo.png";
import appMeupassImg from "../assets/projects/app-meupass.jpg";
import blablacampusImg from "../assets/projects/blablacampus.jpeg";
import clineqappImg from "../assets/projects/clineqapp-hut8.jpeg";
import dashMeupassImg from "../assets/projects/dash-meupass.png";
import letralandiaImg from "../assets/projects/letralandia.png";
import logvcinteligenciaImg from "../assets/projects/logvcinteligencia.jpeg";
import presencasSiiepeImg from "../assets/projects/presencas_siiepe.jpeg";
import suiteImg from "../assets/projects/suite.png";
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
  "logvcinteligencia.jpeg": logvcinteligenciaImg,
};

const Projects = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const children = container.querySelectorAll("[data-index]");
    const visible: number[] = [];

    children.forEach((child) => {
      const childRect = child.getBoundingClientRect();
      const index = Number(child.getAttribute("data-index"));

      const childWidth = childRect.width;
      const leftBound = containerRect.left;
      const rightBound = containerRect.right;

      const overlapLeft = Math.max(
        0,
        Math.min(childRect.right, rightBound) -
          Math.max(childRect.left, leftBound)
      );
      const overlapRatio = overlapLeft / childWidth;

      if (overlapRatio >= 0.2) {
        visible.push(index);
      }
    });

    setVisibleIndices(visible.sort((a, b) => a - b));
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Initial check with a small timeout to let the page lay out properly
    const timer = setTimeout(() => {
      handleScroll();
    }, 150);

    window.addEventListener("resize", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const firstVisible = visibleIndices.length > 0 ? visibleIndices[0] : 0;
  const lastVisible =
    visibleIndices.length > 0 ? visibleIndices[visibleIndices.length - 1] : 0;

  const leftCount = visibleIndices.length > 0 ? firstVisible : 0;
  const rightCount =
    visibleIndices.length > 0
      ? PROJECTS.length - 1 - lastVisible
      : PROJECTS.length;

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-gray-50 to-primary-50/20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <SectionTitle title={t("projects.title")} />

          <div>
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-8 pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PROJECTS.map((project, index) => (
                <div
                  key={project.id}
                  data-index={index}
                  className="group relative flex flex-col min-w-[300px] md:min-w-[400px] lg:min-w-[450px] snap-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-white/20 dark:border-gray-700/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="h-52 relative overflow-hidden shrink-0">
                    <img
                      src={projectImages[project.image]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Badges Container */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      {/* Project Type Badge */}
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border border-white/20 shadow-sm ${
                          project.projectType === "academic"
                            ? "bg-emerald-500/80 text-white"
                            : project.projectType === "personal"
                              ? "bg-amber-500/80 text-white"
                              : "bg-indigo-500/80 text-white"
                        }`}
                      >
                        {t(`projects.type.${project.projectType}`)}
                      </span>

                      {/* Category Badge */}
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border border-white/20 shadow-sm ${
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
                                  <span
                                    key={tech}
                                    className="text-xs font-medium"
                                  >
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

            {/* Controls & Feedback (Bolinhas apenas) */}
            <div className="flex flex-col items-center gap-6 mt-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scroll("left")}
                  disabled={leftCount === 0}
                  className="p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-primary-50 dark:hover:bg-primary-950/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700/50 shadow-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-gray-700"
                  aria-label="Scroll left"
                >
                  <FaChevronLeft size={14} />
                </button>

                <div className="flex items-center gap-2 px-3 py-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/30 shadow-inner">
                  {PROJECTS.map((_, idx) => {
                    const isVisible = visibleIndices.includes(idx);
                    return (
                      <span
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isVisible
                            ? "w-6 bg-primary-500 shadow-sm shadow-primary-500/20"
                            : "w-2 bg-gray-300 dark:bg-gray-700"
                        }`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() => scroll("right")}
                  disabled={rightCount === 0}
                  className="p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-primary-50 dark:hover:bg-primary-950/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700/50 shadow-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:text-gray-700"
                  aria-label="Scroll right"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
