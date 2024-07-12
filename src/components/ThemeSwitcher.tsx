"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  function handleOnClick() {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return <Button onClick={handleOnClick}>Alterar tema</Button>;
}
