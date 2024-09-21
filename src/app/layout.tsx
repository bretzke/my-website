import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
