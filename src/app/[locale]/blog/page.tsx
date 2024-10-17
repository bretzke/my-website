import { StaticPageProps } from "@/utils/constants";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Blog({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);
  return <div>Blog index</div>;
}
