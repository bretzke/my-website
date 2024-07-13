"use client";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-10 p-2 backdrop-filter backdrop-blur">
      <Link href="/">LOGO</Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Settings />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <div>
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
