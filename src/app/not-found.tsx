"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const locale = useLocale();

  router.push(`/${locale}`);
}
