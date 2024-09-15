import FeedPost from "@/components/FeedPost";
import { myUserInfo, publishedDate } from "@/utils/constants";
import { useTranslations } from "next-intl";

export default function Home() {
  const translate = useTranslations("posts");

  return (
    <section className="container-app">
      <FeedPost
        postTitle={translate("helloWorld.title")}
        postBody={translate("helloWorld.body")}
        user={myUserInfo}
        postedAt={publishedDate}
      />
    </section>
  );
}
