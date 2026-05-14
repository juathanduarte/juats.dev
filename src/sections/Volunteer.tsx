import Timeline from "@components/ui/Timeline";
import SectionTitle from "@components/ui/SectionTitle";
import { useTranslation } from "react-i18next";
import amigodepeloLogo from "../assets/images/amigodepelo_logo.png";
import type { ITimelineItem } from "../types";

const Volunteer = () => {
  const { t } = useTranslation();

  const volunteerExperiences: ITimelineItem[] = [
    {
      id: "volunteer1",
      title: t("volunteer.experience.title"),
      company: t("volunteer.experience.company"),
      description: t("volunteer.experience.description"),
      period: t("volunteer.experience.period"),
      logo: amigodepeloLogo,
      websites: "https://amigo-de-pelo-937434044574.us-west1.run.app",
      isLast: true,
    },
  ];

  return (
    <section id="volunteer" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t("volunteer.title")} />

        <div className="max-w-4xl mx-auto">
          <Timeline items={volunteerExperiences} />
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
