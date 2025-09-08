import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/images/avatar.jpg";
import { SOCIAL_LINKS } from "../constants";

// Animations implemented via TailwindCSS transitions

const Hero = () => {
  const { t } = useTranslation();

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Section anchors used for SPA navigation
    <section
      id="home"
      className="min-h-[calc(100vh)] py-6 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 w-full">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              src={avatar}
              alt="Juathan - Desenvolvedor Full-Stack"
              className="w-64 h-96 lg:w-80 lg:h-112 xl:w-96 xl:h-128 rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="text-center lg:text-left flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white relative">
              {t("hero.greeting")}{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Juathan
              </span>
              {t("hero.nicknameIntro")}{" "}
              <span className="text-primary-700 dark:text-primary-300 relative">
                {t("hero.title")}
              </span>
              .
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-none">
              {t("hero.subtitle")}
            </p>

            <div className="flex justify-center lg:justify-start space-x-8">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-3xl focus:outline-none transform duration-200 hover:scale-110 active:scale-95"
                  aria-label={`Visit ${link.name}`}
                >
                  <span className="sr-only">{link.name}</span>
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {link.icon === "github" && <FaGithub className="w-8 h-8" />}
                    {link.icon === "linkedin" && (
                      <FaLinkedin className="w-8 h-8" />
                    )}
                    {link.icon === "email" && (
                      <FaEnvelope className="w-8 h-8" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
