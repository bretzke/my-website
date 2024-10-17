import { StaticPageProps } from "@/utils/constants";
import prisma from "@/utils/db";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export async function getStaticPaths() {
  const posts = await prisma.post.findMany({
    include: { PostTranslation: true },
  });

  const paths: BlogPostParams[] = [];

  posts.forEach((post) => {
    post.PostTranslation.forEach((postTranslated) => {
      paths.push({
        params: {
          post: postTranslated.seo,
          locale: postTranslated.language,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export interface BlogPostParams {
  params: StaticPageProps["params"] & {
    post: string;
  };
}

export async function generateMetadata({
  params: { post, locale },
}: BlogPostParams): Promise<Metadata> {
  const postTranslated = await prisma.postTranslation.findFirstOrThrow({
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

  const postData = await prisma.postTranslation.findFirstOrThrow({
    where: {
      language: locale,
      seo: post,
    },
  });

  return <div>{JSON.stringify(postData)}</div>;
}
