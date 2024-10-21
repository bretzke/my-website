import { unstable_setRequestLocale } from "next-intl/server";
import { AboutPage } from "../about/page";
import { StaticPageProps } from "@/utils/constants";

export default function Page({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);

  return <AboutPage />;
}
