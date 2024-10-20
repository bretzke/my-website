import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaticPageProps } from "@/utils/constants";
import { formatDate } from "@/utils/date";
import prisma from "@/utils/db";
import { unstable_setRequestLocale } from "next-intl/server";
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
  });

  return (
    <section className="container-app flex">
      {posts.map((post) => (
        <Link href={`/${locale}/blog/${post.seo}`} key={post.id}>
          <Card>
            <CardHeader>
              <Image
                src={post.post.imageUrl as string}
                alt=""
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <small className="text-sm">
                {formatDate({ dateToFormat: post.post.createdAt, locale })}
              </small>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </section>
  );
}
