import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>{children}</body>
    </html>
  );
}
