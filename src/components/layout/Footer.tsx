import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { SITE_CONFIG, SOCIAL_LINKS } from '../../constants';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">
              {SITE_CONFIG.author}
            </h3>
            <p className="text-gray-300 max-w-md">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  tabIndex={0}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  tabIndex={0}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  tabIndex={0}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  tabIndex={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('footer.connect')}
            </h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  tabIndex={0}
                  aria-label={`Visit ${link.name}`}
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {SITE_CONFIG.author}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
