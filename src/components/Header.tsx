"use client";
import Link from "next/link";
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
import { useTranslations } from "next-intl";

export default function Header() {
  const translate = useTranslations("settingsModal");

  return (
    <header className="flex justify-between items-center sticky top-0 z-10 p-2 bg-header">
      <Link href="/">LOGO</Link>

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
