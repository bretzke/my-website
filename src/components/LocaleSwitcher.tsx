"use client";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { startTransition } from "react";
import { setUserLocale } from "@/services/locale";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  function handleOnClick() {
    const newLocale = locale === "en" ? "pt" : "en";
    startTransition(() => {
      setUserLocale(newLocale);
    });
  }

  return (
    <div className="relative">
      <Button onClick={handleOnClick}>{t("btnChange")}</Button>
    </div>
  );
}
