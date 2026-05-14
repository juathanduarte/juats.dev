import dhauzLogo from "@/assets/images/dhauz_logo.jpeg";
import quantumRiseLogo from "@/assets/images/quantumrise_logo.png";
import hut8Logo from "@/assets/images/hut8_logo.jpeg";
import meupassLogo from "@/assets/images/meupass_logo.jpeg";
import smartnxLogo from "@/assets/images/smartnx_logo.webp";
import Stats from "@components/ui/Stats";
import Timeline from "@components/ui/Timeline";
import SectionTitle from "@components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import type { ITimelineItem } from "../types";

const About = () => {
  const { t } = useTranslation();

  const experiences: ITimelineItem[] = [
    {
      id: "experience3",
      title: t("about.journey.experience3.title"),
      company: t("about.journey.experience3.company"),
      description: t("about.journey.experience3.description"),
      period: t("about.journey.experience3.period"),
      logo: [dhauzLogo, quantumRiseLogo],
      websites: ["https://dhauz.com/pt/", "https://www.quantumrise.com/"],
    },
    {
      id: "experience1",
      title: t("about.journey.experience1.title"),
      company: t("about.journey.experience1.company"),
      description: t("about.journey.experience1.description"),
      period: t("about.journey.experience1.period"),
      logo: smartnxLogo,
      websites: "https://www.smartnx.com/",
    },
    {
      id: "experience2",
      title: t("about.journey.experience2.title"),
      company: t("about.journey.experience2.company"),
      description: t("about.journey.experience2.description"),
      period: t("about.journey.experience2.period"),
      logo: meupassLogo,
      websites: "https://parceiros.meupass.com.br/",
    },
    {
      id: "experience4",
      title: t("about.journey.experience4.title"),
      company: t("about.journey.experience4.company"),
      description: t("about.journey.experience4.description"),
      period: t("about.journey.experience4.period"),
      logo: hut8Logo,
      websites: "https://www.hut8.com.br/",
      isLast: true,
    },
  ];

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: <>
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-primary-50/30 to-primary-100/30 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          <div className="space-y-6">
            <SectionTitle title={t("about.journey.title")} />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              {t("about.bio.paragraph")}
            </p>
          </div>

          <div className="card">
            <Stats />
          </div>

          <Timeline items={experiences} />
        </div>
      </div>
    </section>
  );
};

export default About;
