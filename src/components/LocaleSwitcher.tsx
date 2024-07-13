"use client";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { startTransition } from "react";
import { setUserLocale } from "@/services/locale";
import Image from "next/image";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const translate = useTranslations("settingsModal");

  function handleOnClick() {
    const newLocale = locale === "en" ? "pt" : "en";
    startTransition(() => {
      setUserLocale(newLocale);
    });
  }

  return (
    <div className="relative flex flex-col gap-1 items-center">
      <h4 className="font-semibold">{translate("language")}</h4>
      <Button
        variant="outline"
        onClick={handleOnClick}
        className="p-0 h-16 w-16"
      >
        <Image
          src={locale === "pt" ? "/brazil-flag.svg" : "/usa-flag.svg"}
          alt=""
          width={50}
          height={50}
        />
      </Button>
    </div>
  );
}
