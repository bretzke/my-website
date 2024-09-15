import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Cake, CalendarFold, Link, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { myUserInfo } from "@/utils/constants";

export default function ProfileHeader() {
  const translate = useTranslations("profileHeader");

  return (
    <header>
      <div className="w-full h-96 flex items-center justify-center bg-[url('/images/background.jpg')] bg-center bg-cover bg-no-repeat background mb-14">
        <div className="relative container-app h-full w-full">
          <Avatar className="h-36 w-36 absolute -bottom-10 border-2 border-solid border-secondary">
            <AvatarImage fetchPriority="high" src={myUserInfo.avatarUrl} />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
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
                  className="text-foreground p-0 h-auto gap-1"
                >
                  <Link />
                  <p className="text-base">Links</p>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Siga-me</DialogTitle>
                </DialogHeader>
                <div>{/* put social media links here! */}</div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-1">
            <Cake />
            <p>{translate("birthDate")}</p>
          </div>
          <div className="flex gap-1">
            <CalendarFold />
            <p>{translate("joined")}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
