import { StaticPageProps } from "@/utils/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { ProjetcsPage } from "../projects/page";

export default function Page({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);

  return <ProjetcsPage />;
}
