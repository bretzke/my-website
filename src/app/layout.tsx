import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import ProfileHeader from "@/components/ProfileHeader";
import { TabsApp } from "@/components/TabsApp";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willian Bretzke | Portfolio",
  // description: "",
  creator: "Willian Bretzke",
  authors: [
    {
      name: "Willian Bretzke",
      url: "https://www.linkedin.com/in/willian-bretzke/",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <html lang={locale}>
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
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

