"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";

interface TabsAppProps {
  children: ReactNode;
}

interface MenuOptionProps {
  label: string;
  path: string;
}

export function TabsApp({ children }: TabsAppProps) {
  const locale = useLocale();
  const currentPath = usePathname();
  const translate = useTranslations("tabs");
  const router = useRouter();

  function handleTabChange(value: string) {
    router.push(value);
  }

  const menuOptions = useMemo(
    () =>
      [
        {
          label: translate("posts"),
          path: `/${locale}`,
        },
        {
          label: translate("about"),
          path: `/${locale}/about`,
        },
        {
          label: translate("projects"),
          path: `/${locale}/projects`,
        },
        {
          label: translate("feedbacks"),
          path: `/${locale}/feedbacks`,
        },
      ] as MenuOptionProps[],
    [locale, translate]
  );

  return (
    <main>
      <Tabs
        defaultValue={currentPath}
        onValueChange={handleTabChange}
        activationMode="manual"
      >
        <div className="container-app">
          <TabsList className="w-full bg-secondary flex p-0">
            {menuOptions.map((option) => (
              <TabsTrigger
                key={option.path}
                value={option.path}
                className="grow max-sm:px-1 max-sm:py-3"
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
