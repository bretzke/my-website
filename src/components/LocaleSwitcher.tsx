import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useMemo } from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import prisma from "@/utils/db";
import { routesPath } from "@/utils/path";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const { post } = useParams();
  const nextLocale = useMemo(() => (locale === "pt" ? "en" : "pt"), [locale]);
  const translate = useTranslations("settingsModal");
  const currentPath = usePathname();

  const redirectTo = useMemo(() => {
    if (post) {
      return routesPath.blog(nextLocale);
    }

    return currentPath.replace(`/${locale}`, `/${nextLocale}`);
  }, [locale, nextLocale, currentPath, post]);

  return (
    <div className="relative flex flex-col gap-1 items-center">
      <Link href={redirectTo}>
        <Button variant="outline" className="p-0 h-16 w-16">
          <Image
            src={
              locale === "pt"
                ? "/images/brazil-flag.svg"
                : "/images/usa-flag.svg"
            }
            alt=""
            width={50}
            height={50}
          />
        </Button>
      </Link>

      <h4 className="font-semibold">{translate("language")}</h4>
    </div>
  );
}
