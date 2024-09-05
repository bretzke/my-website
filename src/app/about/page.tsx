import { useTranslations } from "next-intl";
import Image from "next/image";
import ExperiencePost, {
  ExperiencePostProps,
} from "./components/ExperiencePost";
import { ReactNode } from "react";
import { companiesLogo } from "@/utils/constants";

const convertTextToHTML = {
  item: (chunks: ReactNode) => <li>{chunks}</li>,
  list: (chunks: ReactNode) => (
    <ul className="list-inside list-disc">{chunks}</ul>
  ),
  br: () => <br />,
};

export default function About() {
  const translate = useTranslations("about");

  const experiences = [
    {
      company: translate("experiences.blip.company"),
      logo: companiesLogo.blip,
      startDate: translate("experiences.blip.startDate"),
      endDate: translate("experiences.blip.endDate"),
      roles: [
        {
          title: translate("experiences.blip.roles.senior.title"),
          startDate: translate("experiences.blip.roles.senior.startDate"),
          endDate: translate("experiences.blip.roles.senior.endDate"),
          description: translate.rich(
            "experiences.blip.roles.senior.description",
            convertTextToHTML
          ),
        },
        {
          title: translate("experiences.blip.roles.midLevel.title"),
          startDate: translate("experiences.blip.roles.midLevel.startDate"),
          endDate: translate("experiences.blip.roles.midLevel.endDate"),
          description: translate.rich(
            "experiences.blip.roles.midLevel.description",
            convertTextToHTML
          ),
        },
        {
          title: translate("experiences.blip.roles.chatbot.title"),
          startDate: translate("experiences.blip.roles.chatbot.startDate"),
          endDate: translate("experiences.blip.roles.chatbot.endDate"),
          description: translate.rich(
            "experiences.blip.roles.chatbot.description",
            convertTextToHTML
          ),
        },
      ],
    },
    {
      company: translate("experiences.adsomos.company"),
      logo: companiesLogo.adsomos,
      startDate: translate("experiences.adsomos.startDate"),
      endDate: translate("experiences.adsomos.endDate"),
      roles: [
        {
          title: translate("experiences.adsomos.roles.backend.title"),
          startDate: "",
          endDate: "",
          description: translate.rich(
            "experiences.adsomos.roles.backend.description",
            convertTextToHTML
          ),
        },
      ],
    },
    {
      company: translate("experiences.litoralcar.company"),
      logo: companiesLogo.litoralcar,
      startDate: translate("experiences.litoralcar.startDate"),
      endDate: translate("experiences.litoralcar.endDate"),
      roles: [
        {
          title: translate("experiences.litoralcar.roles.web.title"),
          startDate: "",
          endDate: "",
          description: translate.rich(
            "experiences.litoralcar.roles.web.description",
            convertTextToHTML
          ),
        },
      ],
    },
  ] as ExperiencePostProps[];

  return (
    <section className="container-app flex flex-col gap-4">
      <h1 className="font-bold text-3xl text-center">
        {translate("experiences.title")}
      </h1>

      {experiences.map((experience, index) => (
        <div key={experience.company} className="flex flex-col gap-4">
          <ExperiencePost {...experience} />
          {index !== experiences.length - 1 && (
            <hr className="bg-gray-500 h-0.5" />
          )}
        </div>
      ))}
    </section>
  );
}
