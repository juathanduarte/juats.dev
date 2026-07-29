import SectionTitle from "@components/ui/SectionTitle";
import Stats from "@components/ui/Stats";
import Timeline from "@components/ui/Timeline";
import { useTranslation } from "react-i18next";
import camaraCangucuLogo from "@/assets/images/camara_cangucu.png";
import cangucuLogo from "@/assets/images/cangucu.png";
import dhauzLogo from "@/assets/images/dhauz_logo.jpeg";
import hut8Logo from "@/assets/images/hut8_logo.jpeg";
import meupassLogo from "@/assets/images/meupass_logo.jpeg";
import murabeiLogo from "@/assets/images/murabei_logo.jpeg";
import quantumRiseLogo from "@/assets/images/quantumrise_logo.png";
import smartnxLogo from "@/assets/images/smartnx_logo.webp";
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
      id: "experience5",
      title: t("about.journey.experience5.title"),
      company: t("about.journey.experience5.company"),
      description: t("about.journey.experience5.description"),
      period: t("about.journey.experience5.period"),
      logo: murabeiLogo,
      websites: "https://murabei.com/",
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
    },
    {
      id: "experience6",
      title: t("about.journey.experience6.title"),
      company: t("about.journey.experience6.company"),
      description: t("about.journey.experience6.description"),
      period: t("about.journey.experience6.period"),
      logo: cangucuLogo,
      websites: "https://www.cangucu.rs.gov.br/",
    },
    {
      id: "experience7",
      title: t("about.journey.experience7.title"),
      company: t("about.journey.experience7.company"),
      description: t("about.journey.experience7.description"),
      period: t("about.journey.experience7.period"),
      logo: camaraCangucuLogo,
      websites: "https://camaracangucu.rs.gov.br/",
      isLast: true,
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[#fcfcfc] dark:bg-[#0a0a0a] border-t border-neutral-150 dark:border-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="space-y-16 sm:space-y-20">
          <div className="space-y-6">
            <SectionTitle title={t("about.title")} />
            <p className="text-sm sm:text-base text-neutral-550 dark:text-neutral-400 max-w-2xl mx-auto text-center leading-relaxed font-sans">
              {t("about.bio.paragraph")}
            </p>
          </div>

          <Stats />

          <div className="pt-4">
            <Timeline items={experiences} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
