import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const supportedLocales = ["pt", "en"];

export default getRequestConfig(async ({ locale }) => {
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`@/messages/${locale}/index.ts`)).default,
  };
});
