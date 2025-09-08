import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import TextArea from "@components/ui/TextArea";
import { SOCIAL_LINKS } from "@constants/index";
import { getSocialIcon } from "@utils/social";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t("contact.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id={nameId}
                name="name"
                type="text"
                label={t("contact.form.name")}
                placeholder={t("contact.form.namePlaceholder")}
                required
              />

              <Input
                id={emailId}
                name="email"
                type="email"
                label={t("contact.form.email")}
                placeholder={t("contact.form.emailPlaceholder")}
                required
              />

              <Input
                id={subjectId}
                name="subject"
                type="text"
                label={t("contact.form.subject")}
                placeholder={t("contact.form.subjectPlaceholder")}
                required
              />

              <TextArea
                id={messageId}
                name="message"
                label={t("contact.form.message")}
                placeholder={t("contact.form.messagePlaceholder")}
                rows={5}
                required
              />

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("contact.info.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("contact.info.description")}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("contact.info.email")}
                  </p>
                  <a
                    href={
                      SOCIAL_LINKS.find((link) => link.icon === "email")?.url ||
                      "mailto:juathanduarte13@gmail.com"
                    }
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    tabIndex={0}
                  >
                    juathanduarte13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("contact.info.location")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("contact.info.locationValue")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                {t("common.followMe")}
              </h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    tabIndex={0}
                    aria-label={`${t("common.followMe")} ${link.name}`}
                  >
                    <span className="sr-only">{link.name}</span>
                    {getSocialIcon(link.icon, "w-6 h-6")}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
