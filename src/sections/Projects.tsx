import { PROJECTS } from "@constants/index";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="projects-swiper"
            >
              {PROJECTS.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 overflow-hidden h-full hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10">
                    <div className="h-40 relative overflow-hidden">
                      <img
                        src={projectImages[project.image]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                            project.category === "fullstack"
                              ? "bg-purple-500/90 text-white"
                              : project.category === "backend"
                                ? "bg-red-500/90 text-white"
                                : "bg-blue-500/90 text-white"
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

                    <div className="p-5 flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                        {t(project.descriptionKey)}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
