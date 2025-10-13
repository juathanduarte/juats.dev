import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/images/avatar.jpg";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { SOCIAL_LINKS } from "../constants";

const Hero = () => {
  const { t } = useTranslation();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Section anchors used for SPA navigation
    <section
      id="home"
      className="min-h-screen flex items-start sm:items-center justify-center relative overflow-hidden pt-20 sm:pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-transparent dark:from-primary-800/20" />

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/30 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/30 dark:bg-primary-600/30 rounded-full blur-xl animate-pulse delay-2000" />

      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0 relative z-10 h-full">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-4rem)] lg:min-h-0">
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
            <div className="space-y-6 sm:space-y-8 lg:space-y-8 flex flex-col justify-center h-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">
                  {t("hero.greeting")}{" "}
                </span>
                <span className="gradient-text">Juathan</span>
                <span className="text-gray-900 dark:text-white">!</span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  {t("hero.nicknameIntro")}{" "}
                </span>
                <span className="gradient-text">{t("hero.title")}</span>
                <span className="text-gray-900 dark:text-white">.</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </p>

              <div className="flex justify-center lg:justify-start space-x-6 pt-6 sm:pt-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 lg:p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    aria-label={`Visit ${link.name}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="sr-only">{link.name}</span>
                    <div className="w-8 h-8 lg:w-8 lg:h-8 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {link.icon === "github" && (
                        <FaGithub className="w-6 h-6 lg:w-6 lg:h-6" />
                      )}
                      {link.icon === "linkedin" && (
                        <FaLinkedin className="w-6 h-6 lg:w-6 lg:h-6" />
                      )}
                      {link.icon === "email" && (
                        <FaEnvelope className="w-6 h-6 lg:w-6 lg:h-6" />
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full opacity-20 blur-xl" />

              <div className="relative z-10">
                <img
                  src={avatar}
                  alt="Juathan - Desenvolvedor Full-Stack"
                  className="w-80 h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem] rounded-2xl object-cover border-4 border-white/30 dark:border-gray-600/30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
