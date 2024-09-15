"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TabsAppProps {
  children: ReactNode;
}

interface MenuOptionProps {
  label: string;
  path: string;
}

function removeLocaleFromRoute(route: string) {
  const supportedLocales = ["pt", "en"];

  const parts = route.split("/").filter(Boolean);

  if (supportedLocales.includes(parts[0])) {
    return "/" + parts.slice(1).join("/");
  }

  return route;
}

export function TabsApp({ children }: TabsAppProps) {
  const currentPath = removeLocaleFromRoute(usePathname());
  const translate = useTranslations("tabs");
  const router = useRouter();

  function handleTabChange(value: string) {
    router.push(value);
  }

  const menuOptions = [
    {
      label: translate("posts"),
      path: "/",
    },
    {
      label: translate("about"),
      path: "/about",
    },
    {
      label: translate("projects"),
      path: "/projects",
    },
    {
      label: translate("feedbacks"),
      path: "/feedbacks",
    },
  ] as MenuOptionProps[];

  return (
    <main>
      <Tabs
        defaultValue={currentPath}
        onValueChange={handleTabChange}
        activationMode="manual"
      >
        <div>
          <TabsList className="w-full container-app bg-secondary flex">
            {menuOptions.map((option) => (
              <TabsTrigger
                key={option.path}
                value={option.path}
                className="grow"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="py-4">{children}</div>
      </Tabs>
    </main>
  );
}
