import Divider from "@/components/Divider";
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
    <section className="container-app flex flex-col gap-4">
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
      <Divider />
      <FeedPost
        postTitle={translate("theIdea.title")}
        postBody={translate("theIdea.body")}
        user={myUserInfo}
        postedAt={publishedDate}
      >
        <Image
          src={imagesPostPath.theIdea}
          alt=""
          width={500}
          height={500}
          priority
        />
      </FeedPost>
    </section>
  );
}
