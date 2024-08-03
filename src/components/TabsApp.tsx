import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface TabsAppProps {
  children: ReactNode;
}

export function TabsApp({ children }: TabsAppProps) {
  const translate = useTranslations("tabs");

  return (
    <main className="">
      <Tabs defaultValue="account">
        <div className="border-b-2 border-border">
          <TabsList className="grid w-full grid-cols-2 container-app">
            <TabsTrigger value="account">{translate("posts")}</TabsTrigger>
            <TabsTrigger value="password">{translate("about")}</TabsTrigger>
          </TabsList>
        </div>
        <div className="">
          <TabsContent value="account">{children}</TabsContent>
          <TabsContent value="password">Sobre</TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
