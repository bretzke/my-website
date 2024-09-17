"use client";
import { useTranslations } from "next-intl";
import Avatar from "./Avatar";
import {
  Cake,
  CalendarFold,
  Link as LinkIcon,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { mySocialMedias, myUserInfo, publishedDate } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { useFormattedDate } from "@/hooks/use-formatted-date";
import Typewriter from "typewriter-effect";
import { useParams } from "next/navigation";

export default function ProfileHeader() {
  const { locale } = useParams();
  const translate = useTranslations("profileHeader");

  return (
    <header>
      <div className="w-full h-96 flex items-center justify-center bg-black bg-center bg-cover bg-no-repeat background mb-14">
        <div className="relative container-app h-full w-full text-xl">
          <div className="m-auto w-full h-full flex items-center justify-center text-center text-white">
            <Typewriter
              onInit={(typewritter) => {
                if (locale === "en") {
                  typewritter
                    .typeString("Welcome to my hello")
                    .pauseFor(200)
                    .deleteChars(5)
                    .typeString("(oops, my mistake)")
                    .pauseFor(200)
                    .deleteChars(18)
                    .typeString("world!")
                    .start();
                  return;
                }

                typewritter
                  .typeString("Bem-vindo(a) ao meu olá ")
                  .pauseFor(200)
                  .deleteChars(4)
                  .typeString("(ops, errei)")
                  .pauseFor(200)
                  .deleteChars(12)
                  .typeString("mundo!")
                  .start();
              }}
            />
          </div>
          <div className="absolute -bottom-10">
            <Avatar
              imageUrl={myUserInfo.avatarUrl}
              alt={myUserInfo.name}
              size="large"
              hasBorder
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 container-app">
        <div>
          <h2 className="text-2xl font-bold">Willian Bretzke</h2>
          <h3 className="text-lg font-semibold">{translate("phrase")}</h3>
          <p>{translate("description")}</p>
        </div>

        <div className="flex gap-4 flex-wrap mb-4">
          <div className="flex gap-1">
            <MapPin />
            <p>SC, BR</p>
          </div>
          <div className="flex gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="text-foreground p-0 h-auto gap-1 underline"
                >
                  <LinkIcon />
                  <p className="text-base">Links</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="min-w-96">
                <DialogHeader>
                  <DialogTitle>{translate("followMe")}</DialogTitle>
                  <DialogDescription />
                </DialogHeader>
                <div className="flex justify-around">
                  <div className="flex flex-col items-center gap-1">
                    <Link href={mySocialMedias.email.link}>
                      <Button variant="outline" className="p-0 h-16 w-16">
                        <Mail size={50} />
                      </Button>
                    </Link>
                    <h4 className="font-semibold">
                      {mySocialMedias.email.label}
                    </h4>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Link href={mySocialMedias.github.link} target="_blank">
                      <Button variant="outline" className="p-0 h-16 w-16">
                        <Image
                          height={50}
                          width={50}
                          alt="GitHub"
                          src={mySocialMedias.github.image}
                          className="dark:invert"
                          priority
                        />
                      </Button>
                    </Link>
                    <h4 className="font-semibold">
                      {mySocialMedias.github.label}
                    </h4>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Link href={mySocialMedias.linkedin.link} target="_blank">
                      <Button variant="outline" className="p-0 h-16 w-16">
                        <Linkedin size={50} />
                      </Button>
                    </Link>
                    <h4 className="font-semibold">
                      {mySocialMedias.linkedin.label}
                    </h4>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-1">
            <Cake />
            <p>{translate("birthDate")}</p>
          </div>
          <div className="flex gap-1">
            <CalendarFold />
            <p>
              {translate("joined")}
              {useFormattedDate(publishedDate, "long")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
