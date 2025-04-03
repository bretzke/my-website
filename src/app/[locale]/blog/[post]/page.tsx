import Avatar from "@/components/Avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { type StaticPageProps, myUserInfo } from "@/utils/constants";
import { formatDate } from "@/utils/date";
import prisma from "@/utils/db";
import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";

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

  for (const post of posts) {
    for (const postTranslated of post.PostTranslation) {
      paths.push({
        locale: postTranslated.language,
        post: postTranslated.seo,
      });
    }
  }

  return paths;
}

export async function generateMetadata({
  params: { post, locale },
}: BlogPostParams): Promise<Metadata> {
  const [postTranslated, translate] = await Promise.all([
    prisma.blogPostTranslation.findFirstOrThrow({
      where: {
        seo: post,
        language: locale,
      },
      include: {
        post: true,
      },
    }),
    getTranslations("blog"),
  ]);

  return {
    title: postTranslated.title,
    description: translate("writtenBy"),
    openGraph: {
      images: postTranslated.post.imageUrl as string,
    },
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

  const translate = await getTranslations("blog");

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
            <BreadcrumbList className="sm:gap-1 flex-nowrap">
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${locale}/blog`}>Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{postData.title}</BreadcrumbPage>
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
                {translate("publishedIn")}
                {": "}
                {formatDate({
                  locale,
                  dateToFormat: postData.post.createdAt,
                  dateStyle: "long",
                })}
              </small>
            </div>
          </div>
        </div>

        <article className="blog-post">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code: ({ children, ...props }) => {
                const type = props.lang || "javascript";
                const showLines = (props as any)['data-show-lines'] || 'true';
                
                return (
                  <SyntaxHighlighter
                    language={type}
                    style={vs2015}
                    showLineNumbers={showLines === 'true'}
                    wrapLines
                  >
                    {`${String(children).replace(/\\n/g, "\n").replace(/\\t/g, "\t")}`}
                  </SyntaxHighlighter>
                );
              },
            }}
          >
            {postData.content}
          </ReactMarkdown>
        </article>
      </section>
    </div>
  );
}

export const dynamic = "force-static";
export const dynamicParams = false;
