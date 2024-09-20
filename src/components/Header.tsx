"use client";
import Link from "next/link";
import { Handjet } from "next/font/google";
import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function Header() {
  const locale = useLocale();
  const translate = useTranslations("settingsModal");

  return (
    <header className="flex justify-between items-center sticky top-0 z-10 p-2 bg-header">
      <Link href={`/${locale}`} className={handjet.className}>
        <h1 className="text-4xl">{"<Bretzke>"}</h1>
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Settings />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{translate("title")}</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <div className="flex justify-around mt-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
