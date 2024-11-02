"use client";
import { routesPath } from "@/utils/path";
import { useLocale, useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { Button } from "./ui/button";

interface TabsAppProps {
  children: ReactNode;
}

interface MenuOptionProps {
  label: string;
  path: string;
}

export function TabsApp({ children }: TabsAppProps) {
  const locale = useLocale() as "pt" | "en";
  const { post } = useParams();
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
          path: routesPath.home(locale),
        },
        {
          label: translate("about"),
          path: routesPath.about(locale),
        },
        {
          label: translate("projects"),
          path: routesPath.projects(locale),
        },
        {
          label: "Blog",
          path: routesPath.blog(locale),
        },
        {
          label: translate("feedbacks"),
          path: routesPath.feedbacks(locale),
        },
      ] as MenuOptionProps[],
    [locale, translate]
  );

  if (post) {
    return children;
  }

  return (
    <main>
      <div className="container-app flex">
        {menuOptions.map((option) => {
          const selected = currentPath === option.path;

          return (
            <Button
              key={option.path}
              variant="ghost"
              className={`grow max-sm:px-1 py-0 text-foreground hover:bg-background`}
              onClick={() => handleTabChange(option.path)}
            >
              <span
                className={`border-b-4 h-10 flex items-center ${
                  selected ? "border-primary" : "border-transparent"
                }`}
              >
                {option.label}
              </span>
            </Button>
          );
        })}
      </div>
      <div className="py-4">{children}</div>
    </main>
  );
}
