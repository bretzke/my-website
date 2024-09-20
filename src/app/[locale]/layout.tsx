import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import ProfileHeader from "@/components/ProfileHeader";
import { TabsApp } from "@/components/TabsApp";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { supportedLocales } from "@/i18n";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import { getTranslations } from "next-intl/server";
import { StaticPageProps } from "@/utils/constants";

const fontSans = FontSans({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export const runtime = "edge";

export async function generateMetadata({
  params: { locale },
}: StaticPageProps) {
  const t = await getTranslations({ locale });

  return {
    title: t("pageTitle"),
    creator: "Willian Bretzke",
    authors: [
      {
        name: "Willian Bretzke",
        url: "https://www.linkedin.com/in/willian-bretzke/",
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics />
      <NextIntlClientProvider messages={messages}>
        <body className={`${fontSans.className} min-w-80`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="container">
              <div className="bg-secondary">
                <ProfileHeader />
                <TabsApp>{children}</TabsApp>
              </div>
            </div>
            <Footer />
          </ThemeProvider>
          <Toaster />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
