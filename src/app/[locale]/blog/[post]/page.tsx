import { StaticPageProps } from "@/utils/constants";
import prisma from "@/utils/db";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export interface BlogPostParams {
  params: StaticPageProps["params"] & {
    post: string;
  };
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    include: { PostTranslation: true },
  });
  const paths: BlogPostParams["params"][] = [];

  posts.forEach((post) => {
    post.PostTranslation.forEach((postTranslated) => {
      paths.push({
        locale: postTranslated.language,
        post: postTranslated.seo,
      });
    });
  });

  return paths;
}

export async function generateMetadata({
  params: { post, locale },
}: BlogPostParams): Promise<Metadata> {
  const postTranslated = await prisma.blogPostTranslation.findFirstOrThrow({
    where: {
      seo: post,
      language: locale,
    },
  });

  return {
    title: postTranslated.title,
  };
}

export default async function BlogPost({
  params: { locale, post },
}: BlogPostParams) {
  unstable_setRequestLocale(locale);

  const postData = await prisma.blogPostTranslation.findFirstOrThrow({
    where: {
      language: locale,
      seo: post,
    },
  });

  return <div>{JSON.stringify(postData)}</div>;
}

export const dynamic = "force-static";
export const dynamicParams = false;
