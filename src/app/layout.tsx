import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import ProfileHeader from "@/components/ProfileHeader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        <body className={fontSans.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="container">
              <main className="bg-secondary">
                <ProfileHeader />
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
