"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeSwitcher() {
  const translate = useTranslations("settingsModal");
  const { setTheme, resolvedTheme } = useTheme();

  function handleOnClick() {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div className="relative flex flex-col gap-1 items-center">
      <Button
        onClick={handleOnClick}
        variant="outline"
        className="p-0 h-16 w-16"
      >
        {resolvedTheme === "dark" ? <Moon size={50} /> : <Sun size={50} />}
      </Button>

      <h4 className="font-semibold">{translate("theme")}</h4>
    </div>
  );
}
