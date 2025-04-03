import { useTranslations } from "next-intl";
import ExperiencePost, {
  ExperiencePostProps,
} from "./components/ExperiencePost";
import { ReactNode } from "react";
import { companiesLogo, StaticPageProps } from "@/utils/constants";
import Divider from "@/components/Divider";
import { unstable_setRequestLocale } from "next-intl/server";
import ListStacks from "./components/ListStacks";

export default function About({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);

  const translate = useTranslations("about");

  const convertTextToHTML = {
    item: (chunks: ReactNode) => <li>{chunks}</li>,
    list: (chunks: ReactNode) => (
      <ul className="list-inside list-disc">{chunks}</ul>
    ),
    br: () => <br />,
  };

  const experiences = [
    {
      company: translate("experiences.iob.company"),
      logo: companiesLogo.iob,
      startDate: translate("experiences.iob.startDate"),
      endDate: translate("experiences.iob.endDate"),
      roles: [
        {
          title: translate("experiences.iob.roles.devSenior.title"),
          description: translate("experiences.iob.roles.devSenior.description"),
        },
      ],
    },
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
          {index !== experiences.length - 1 && <Divider />}
        </div>
      ))}

      <ListStacks />

      <h1 className="font-bold text-3xl text-center">
        {translate("education.title")}
      </h1>

      <ExperiencePost
        logo={companiesLogo.ftr}
        company="Faculdade de Tecnologia Rocketseat"
        startDate={translate("education.ftr.startDate")}
        endDate={translate("education.ftr.endDate")}
        roles={[
          {
            title: translate("education.ftr.course"),
            description: translate.rich(
              "education.ftr.description",
              convertTextToHTML
            ),
            startDate: "",
            endDate: "",
          },
        ]}
      />

      <ExperiencePost
        logo={companiesLogo.fam}
        company="Faculdade das Américas"
        startDate={translate("education.fam.startDate")}
        endDate={translate("education.fam.endDate")}
        roles={[
          {
            title: translate("education.fam.course"),
            description: translate.rich(
              "education.fam.description",
              convertTextToHTML
            ),
            startDate: "",
            endDate: "",
          },
        ]}
      />
    </section>
  );
}
