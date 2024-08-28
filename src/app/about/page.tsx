import { useTranslations } from "next-intl";

export default function About() {
  const translate = useTranslations("about");

  return (
    <section className="container-app flex flex-col gap-4">
      <h1 className="font-bold text-3xl text-center">
        {translate("experiences.title")}
      </h1>

      <p className="whitespace-pre-line">{translate("experiences.title")}</p>

      <h1 className="font-bold text-3xl text-center">
        {translate("stacks.title")}
      </h1>

      <p className="whitespace-pre-line">{translate("stacks.title")}</p>
    </section>
  );
}
