import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beige-50 via-white to-warm-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JD</span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('hero.greeting')}{' '}
            <span className="text-primary-600 dark:text-primary-400">
              Juathan
            </span>
            {t('hero.nicknameIntro')}{' '}
            <span className="text-secondary-600 dark:text-secondary-400">
              {t('hero.title')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
              tabIndex={0}
              aria-label="View my projects"
            >
              {t('hero.cta.viewWork')}
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer"
              tabIndex={0}
            >
              {t('hero.cta.getInTouch')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                tabIndex={0}
                aria-label={`Visit ${link.name}`}
              >
                <span className="sr-only">{link.name}</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors" />
              </a>
            ))}
          </div>
        </div>

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
