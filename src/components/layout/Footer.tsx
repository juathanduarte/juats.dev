import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "../../constants";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#0a0a0a] text-neutral-600 dark:text-neutral-400 border-t border-neutral-150 dark:border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-bold text-neutral-950 dark:text-white">
            Juathan Coelho Duarte
          </h3>
          <p className="text-xs text-neutral-450 dark:text-neutral-500 max-w-sm leading-relaxed font-sans">
            {t("footer.description")}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-mono text-neutral-550 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
                aria-label={`${t("common.followMe")} ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-[10px] text-neutral-400 dark:text-neutral-505 font-mono">
            © {currentYear} // {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
