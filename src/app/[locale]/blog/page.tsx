import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StaticPageProps } from "@/utils/constants";
import { formatDate } from "@/utils/date";
import prisma from "@/utils/db";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);

  const posts = await prisma.blogPostTranslation.findMany({
    include: {
      post: true,
    },
    where: {
      language: locale,
    },
    orderBy: {
      post: {
        createdAt: "desc"
      }
    }
  });

  const translate = await getTranslations("blog");

  return (
    <section className="container-app flex max-sm:flex-col gap-4 max-sm:gap-8">
      {posts.map((post) => (
        <Link
          href={`/${locale}/blog/${post.seo}`}
          key={post.id}
          className="w-2/4 max-sm:w-full grow"
        >
          <Card className="h-full">
            <CardHeader className="relative h-56 p-0">
              <Image src={post.post.imageUrl as string} alt={post.title} fill />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 p-4">
              <CardTitle>{post.title}</CardTitle>
              <small className="text-sm">
                {translate("publishedIn")}
                {": "}
                {formatDate({
                  locale,
                  dateToFormat: post.post.createdAt,
                  dateStyle: "long",
                })}
              </small>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
}
