import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import TextArea from "@components/ui/TextArea";
import { SOCIAL_LINKS } from "@constants/index";
import { getSocialIcon } from "@utils/social";
import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

interface IFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simular envio de email (aqui você pode integrar com um serviço como EmailJS, Formspree, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Por enquanto, vamos redirecionar para o WhatsApp com a mensagem
      const whatsappMessage = encodeURIComponent(
        `Olá Juats! Meu nome é ${formData.name} e quero falar sobre: ${formData.subject}\n\nMensagem: ${formData.message}\n\nEmail: ${formData.email}`
      );

      const whatsappUrl = `https://wa.me/5553999515492?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/5553999515492?text=${encodeURIComponent(t("contact.whatsapp.defaultMessage"))}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section
      id="contact"
      className="min-h-[calc(100vh)] py-6 flex items-center bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t("contact.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                id={nameId}
                name="name"
                type="text"
                label={t("contact.form.name")}
                placeholder={t("contact.form.namePlaceholder")}
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <Input
                id={emailId}
                name="email"
                type="email"
                label={t("contact.form.email")}
                placeholder={t("contact.form.emailPlaceholder")}
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <Input
                id={subjectId}
                name="subject"
                type="text"
                label={t("contact.form.subject")}
                placeholder={t("contact.form.subjectPlaceholder")}
                value={formData.subject}
                onChange={handleInputChange}
                required
              />

              <TextArea
                id={messageId}
                name="message"
                label={t("contact.form.message")}
                placeholder={t("contact.form.messagePlaceholder")}
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    {t("contact.form.successMessage")}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    {t("contact.form.errorMessage")}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("contact.info.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
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

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {t("contact.info.whatsapp")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    (53) 99951-5492
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                {t("contact.whatsapp.title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {t("contact.whatsapp.description")}
              </p>
              <Button
                onClick={handleWhatsAppClick}
                variant="primary"
                size="lg"
                fullWidth
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                {t("contact.whatsapp.button")}
              </Button>
            </div>

            <div className="flex flex-col gap-4">
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
