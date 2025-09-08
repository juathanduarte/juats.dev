import { getSocialIcon } from "@utils/social";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { SOCIAL_LINKS } from "../../constants";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">
              Juathan Coelho Duarte
            </h3>
            <p className="text-gray-300 max-w-md">{t("footer.description")}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { to: "home", label: t("header.navigation.home") },
                { to: "about", label: t("header.navigation.about") },
                { to: "projects", label: t("header.navigation.projects") },
                { to: "contact", label: t("header.navigation.contact") },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer block focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t("footer.connect")}
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors text-gray-300 hover:text-white focus:outline-none transform hover:scale-110 active:scale-95 duration-200"
                  aria-label={`${t("common.followMe")} ${link.name}`}
                >
                  <span className="sr-only">{link.name}</span>
                  {getSocialIcon(link.icon, "w-5 h-5")}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Juathan Coelho Duarte. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
