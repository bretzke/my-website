import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Cake, CalendarFold, Link, MapPin } from "lucide-react";

export default function ProfileHeader() {
  const translate = useTranslations("profileHeader");

  return (
    <div>
      <div className="w-full h-96 flex items-center justify-center bg-red-400 mb-14">
        <div className="relative container-profile h-full w-full">
          <Avatar className="h-36 w-36 absolute -bottom-10 border-2 border-solid border-secondary">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col gap-4 container-profile">
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
            <Link />
            <p>Links</p>
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
    </div>
  );
}
