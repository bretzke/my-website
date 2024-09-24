import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const userLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];
  const defaultLocale = userLanguage === "pt" ? "pt" : "en";

  const handleI18nRouting = createMiddleware({
    locales: ["pt", "en"],
    defaultLocale,
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icons|manifest|images/.*).*)",
  ],
};
