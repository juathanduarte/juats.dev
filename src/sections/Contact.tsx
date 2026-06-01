import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import SectionTitle from "@components/ui/SectionTitle";
import TextArea from "@components/ui/TextArea";
import { SOCIAL_LINKS } from "@constants/index";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
    <section
      id="contact"
      className="section-padding bg-[#fcfcfc] dark:bg-[#0a0a0a] border-t border-neutral-150 dark:border-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col gap-16">
        <div className="w-full">
          <SectionTitle title={t("contact.title")} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-md font-bold text-neutral-950 dark:text-white font-mono uppercase tracking-wider border-b border-neutral-150 dark:border-neutral-900 pb-2">
              {t("contact.form.title")}
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-transparent w-full"
            >
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
                <div className="p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-350 dark:border-neutral-800">
                  <p className="text-neutral-900 dark:text-neutral-100 text-xs font-semibold font-mono">
                    {t("contact.form.successMessage")}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-350 dark:border-neutral-800">
                  <p className="text-neutral-900 dark:text-neutral-100 text-xs font-semibold font-mono">
                    {t("contact.form.errorMessage")}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                disabled={isSubmitting}
                className="font-mono uppercase tracking-wider text-xs"
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-bold text-neutral-950 dark:text-white font-mono uppercase tracking-wider border-b border-neutral-150 dark:border-neutral-900 pb-2">
                {t("contact.info.title")}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-neutral-200 dark:border-neutral-850 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 text-neutral-550 dark:text-neutral-450">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                    {t("contact.info.email")}
                  </p>
                  <a
                    href={
                      SOCIAL_LINKS.find((link) => link.icon === "email")?.url ||
                      "mailto:juathanduarte13@gmail.com"
                    }
                    className="text-sm text-neutral-850 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors font-mono"
                  >
                    juathanduarte13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 text-neutral-550 dark:text-neutral-450">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                    {t("contact.info.location")}
                  </p>
                  <p className="text-sm text-neutral-850 dark:text-neutral-200 font-mono">
                    {t("contact.info.locationValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 text-neutral-550 dark:text-neutral-450">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                    {t("contact.info.whatsapp")}
                  </p>
                  <p className="text-sm text-neutral-850 dark:text-neutral-200 font-mono">
                    (53) 99951-5492
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-neutral-200 dark:border-neutral-850 pt-6">
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-950 dark:text-white font-mono">
                {t("contact.whatsapp.title")}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                {t("contact.whatsapp.description")}
              </p>
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="md"
                fullWidth
                className="font-mono text-xs uppercase tracking-wider hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 mr-2 shrink-0" />
                {t("contact.whatsapp.button")}
              </Button>
            </div>

            <div className="flex flex-col gap-4 border-t border-neutral-200 dark:border-neutral-850 pt-6">
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                {t("common.followMe")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider font-mono text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors border border-neutral-200 dark:border-neutral-850 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    aria-label={`${t("common.followMe")} ${link.name}`}
                  >
                    {link.name}
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
