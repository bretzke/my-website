import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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

      <div className="mx-36 flex flex-col gap-2 container-profile">
        <div>
          <h2 className="text-2xl font-bold">Willian Bretzke</h2>
          <h3 className="text-lg font-semibold">{translate("phrase")}</h3>
        </div>

        <p>{translate("description")}</p>
      </div>
    </div>
  );
}
