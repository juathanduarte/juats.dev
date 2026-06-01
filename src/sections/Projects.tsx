import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, FolderOpen, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@constants/index";
import amigoDePeloImg from "../assets/projects/amigo-de-pelo.png";
import appMeupassImg from "../assets/projects/app-meupass.jpg";
import blablacampusImg from "../assets/projects/blablacampus.jpeg";
import clineqappImg from "../assets/projects/clineqapp-hut8.jpeg";
import dashMeupassImg from "../assets/projects/dash-meupass.png";
import letralandiaImg from "../assets/projects/letralandia.png";
import logvcinteligenciaImg from "../assets/projects/logvcinteligencia.jpeg";
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
  "amigo-de-pelo.png": amigoDePeloImg,
  "logvcinteligencia.jpeg": logvcinteligenciaImg,
};

const Projects = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5
    );
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollLimits);
    window.addEventListener("resize", checkScrollLimits);

    checkScrollLimits();

    return () => {
      container.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="section-padding bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col gap-12">
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
                {t("projects.title")}
              </h2>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto select-none">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className="p-2 border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/20 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-600 transition-all focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className="p-2 border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/20 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-600 transition-all focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6"
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="w-[280px] sm:w-[360px] shrink-0 snap-start flex flex-col border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/20 backdrop-blur-sm transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700"
              >
                <div className="h-44 relative overflow-hidden border-b border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-900/50">
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 brightness-95 opacity-80 transition-all duration-500 hover:scale-105 hover:grayscale-0 hover:brightness-100 hover:opacity-100 ease-out"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2 select-none">
                    <span className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 tracking-wider">
                      {t(`projects.type.${project.projectType}`)}
                    </span>

                    <span className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 tracking-wider">
                      {project.category === "fullstack"
                        ? "Full-stack"
                        : project.category === "backend"
                          ? "Back-end"
                          : "Front-end"}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                      {project.title}
                    </h4>
                    <div className="flex gap-2.5 shrink-0 pt-0.5 font-mono text-[10px]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50 transition-colors inline-flex items-center gap-0.5"
                          aria-label={`Code for ${project.title}`}
                        >
                          Code
                          <ArrowUpRight className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50 transition-colors inline-flex items-center gap-0.5"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          Demo
                          <ArrowUpRight className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans line-clamp-3">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-900/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-zinc-100/50 dark:bg-zinc-900/30 text-zinc-500 dark:text-zinc-500 text-[9px] font-bold font-mono uppercase tracking-wider border border-zinc-200/50 dark:border-zinc-850/50"
                        >
                          {tech}
                        </span>
                      ))}
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
