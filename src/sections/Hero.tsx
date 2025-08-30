import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import avatar from '../assets/images/avatar.jpg';
import { SOCIAL_LINKS } from '../constants';
import {
  buttonVariants,
  containerVariants,
  imageVariants,
  itemVariants,
  socialLinkVariants,
  titleVariants,
} from '../constants/animations';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-50 via-white to-warm-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          {/* Profile Image - Left Side */}
          <motion.div variants={imageVariants} className="flex-shrink-0">
            <img
              src={avatar}
              alt="Juathan - Desenvolvedor Full-Stack"
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-lg object-cover shadow-lg"
            />
          </motion.div>

          {/* Main Content - Right Side */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left flex-1"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('hero.greeting')}{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Juathan
              </span>
              {t('hero.nicknameIntro')}{' '}
              <span className="text-secondary-600 dark:text-secondary-400">
                {t('hero.title')}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl lg:max-w-none"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer block"
                  tabIndex={0}
                  aria-label="View my projects"
                >
                  {t('hero.cta.viewWork')}
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer block"
                  tabIndex={0}
                >
                  {t('hero.cta.getInTouch')}
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  tabIndex={0}
                  aria-label={`Visit ${link.name}`}
                  variants={socialLinkVariants}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
