import { motion } from "framer-motion";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/images/avatar.jpg";
import AnimatedIcon from "../components/ui/AnimatedIcon";
import { SOCIAL_LINKS } from "../constants";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  socialLinkVariants,
  titleVariants,
} from "../constants/animations";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
      key={useId()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20"
        >
          {/* Profile Image - Left Side - Hidden on mobile */}
          <motion.div
            variants={imageVariants}
            className="flex-shrink-0 hidden sm:block"
          >
            <img
              src={avatar}
              alt="Juathan - Desenvolvedor Full-Stack"
              className="w-64 h-96 lg:w-80 lg:h-112 xl:w-96 xl:h-128 rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          {/* Main Content - Right Side */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left flex-1 flex flex-col gap-6"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white relative"
            >
              {t("hero.greeting")}{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Juathan
              </span>
              {t("hero.nicknameIntro")}{" "}
              <span className="text-primary-700 dark:text-primary-300 relative">
                {t("hero.title")}

                <div className="absolute -bottom-2 -right-2">
                  <AnimatedIcon />
                </div>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-none"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-8"
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-3xl focus:outline-none"
                  aria-label={`Visit ${link.name}`}
                  variants={socialLinkVariants}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-12 h-12 flex items-center justify-center">
                    {link.icon === "github" && <FaGithub className="w-8 h-8" />}
                    {link.icon === "linkedin" && (
                      <FaLinkedin className="w-8 h-8" />
                    )}
                    {link.icon === "email" && (
                      <FaEnvelope className="w-8 h-8" />
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
