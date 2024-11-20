import { projectsInfo, StaticPageProps } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);

  const translate = useTranslations("projects");

  const convertTextToHTML = {
    stripedoc: (chunks: ReactNode) => (
      <Link
        target="_blank"
        className="list-inside list-disc underline cursor-pointer"
        href="https://docs.stripe.com/testing"
      >
        {chunks}
      </Link>
    ),
    i: (chunks: ReactNode) => <i className="list-inside list-disc">{chunks}</i>,
    br: () => <br />,
  };

  const projects = [
    {
      title: translate("dictionary.title"),
      bgImage: projectsInfo.dictionary.logo,
      description: translate.rich("dictionary.description", convertTextToHTML),
      repo: projectsInfo.dictionary.repo,
      site: projectsInfo.dictionary.site,
    },
    {
      title: translate("myWebsite.title"),
      description: translate("myWebsite.description"),
      bgImage: projectsInfo.myWebsite.logo,
      site: "",
      repo: projectsInfo.myWebsite.repo,
    },
    {
      title: translate("wbShop.title"),
      bgImage: projectsInfo.wbShop.logo,
      description: translate.rich("wbShop.description", convertTextToHTML),
      repo: projectsInfo.wbShop.repo,
      site: projectsInfo.wbShop.site,
    },
  ];

  return (
    <section className="container-app flex flex-col gap-4">
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
            {project.site.length > 0 && (
              <Link href={project.site} target="_blank">
                <Button variant="outline">{translate("website")}</Button>
              </Link>
            )}
            {project.repo.length > 0 && (
              <Link href={project.repo} target="_blank">
                <Button variant="outline">{translate("repo")}</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
