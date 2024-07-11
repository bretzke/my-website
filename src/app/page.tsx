import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("index");

  return (
    <main className="p-4">
      <h1>{t("test")}</h1>

      <LocaleSwitcher />
    </main>
  );
}
