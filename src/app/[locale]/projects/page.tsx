import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsInfo, StaticPageProps } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { renderToString } from "react-dom/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { unstable_setRequestLocale } from "next-intl/server";

const convertTextToHTML = {
  link: (chunks: ReactNode) => (
    <Link
      target="_blank"
      className="list-inside list-disc underline cursor-pointer"
      href="/chunks"
    >
      {chunks}
    </Link>
  ),
  i: (chunks: ReactNode) => <i className="list-inside list-disc">{chunks}</i>,
  br: () => <br />,
};

export default function Projects({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);
  const translate = useTranslations("projects");
  const projects = [
    {
      title: translate("wbShop.title"),
      bgImage: projectsInfo.wbShop.logo,
      description: translate.rich("wbShop.description", convertTextToHTML),
      repo: projectsInfo.wbShop.repo,
      site: projectsInfo.wbShop.site,
    },
  ];

  return (
    <section className="container-app">
      {projects.map((project) => (
        <Card key={project.title} className="flex flex-col grow">
          <CardHeader className="relative grow">
            <Image
              priority
              src={project.bgImage}
              width={1500}
              height={1500}
              alt={project.title}
            />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <CardTitle>{project.title}</CardTitle>
            <div>{project.description}</div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link href={project.site} target="_blank">
              <Button variant="outline">Site</Button>
            </Link>
            <Link href={project.repo} target="_blank">
              <Button variant="outline">Repositório</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
