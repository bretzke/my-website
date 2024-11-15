import Avatar from "@/components/Avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { myUserInfo, StaticPageProps } from "@/utils/constants";
import { formatDate } from "@/utils/date";
import prisma from "@/utils/db";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

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
    include: {
      post: true,
    },
  });

  return (
    <div className="flex flex-col gap-4 pb-4">
      <header className="w-full max-sm:h-64 max-md:h-96 max-lg:h-[500px] h-[600px] relative bg-background">
        <Image
          src={postData.post.imageUrl as string}
          alt={postData.title}
          fill
        />
      </header>
      <section className="container-app flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold">{postData.title}</h1>
          <Breadcrumb>
            <BreadcrumbList className="sm:gap-1">
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${locale}/blog`}>Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{postData.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <Avatar size="small" imageUrl={myUserInfo.avatarUrl} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold leading-none">
                {myUserInfo.name}
              </h3>
              <small>
                {formatDate({
                  locale,
                  dateToFormat: postData.post.createdAt,
                  dateStyle: "long",
                })}
              </small>
            </div>
          </div>
        </div>

        <article
          className="flex flex-col gap-4"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        ></article>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
export const dynamicParams = false;
