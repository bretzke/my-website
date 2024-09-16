import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["pt", "en"],
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|manifest|images/.*).*)",
  ],
};
