import FeedPost from "@/components/FeedPost";
import { myUserInfo, publishedDate, StaticPageProps } from "@/utils/constants";
import { imagesPostPath } from "@/utils/imagesPath";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default function Home({ params: { locale } }: StaticPageProps) {
  unstable_setRequestLocale(locale);
  const translate = useTranslations("posts");

  return (
    <section className="container-app">
      <FeedPost
        postTitle={translate("helloWorld.title")}
        postBody={translate("helloWorld.body")}
        user={myUserInfo}
        postedAt={publishedDate}
        pinned
      >
        <Image
          src={imagesPostPath.helloWorld}
          alt=""
          width={1000}
          height={1000}
          priority
        />
      </FeedPost>
    </section>
  );
}
