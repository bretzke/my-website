"use client";
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
import Link from "next/link";
import { routesPath } from "@/utils/path";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function Header() {
  const translate = useTranslations("settingsModal");
  const locale = useLocale();

  return (
    <nav className="flex justify-between items-center sticky top-0 z-10 p-2 bg-header">
      <Link className={handjet.className} href={routesPath.home(locale)}>
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
    </nav>
  );
}
