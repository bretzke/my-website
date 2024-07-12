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
    <header className="flex justify-between items-center p-2">
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
