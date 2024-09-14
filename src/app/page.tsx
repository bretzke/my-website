import FeedPost from "@/components/FeedPost";
import { useTranslations } from "next-intl";

export const dynamic = "force-static";

export default function Home() {
  const translate = useTranslations("posts");

  return (
    <section className="container-app">
      <FeedPost
        postTitle={translate("helloWorld.title")}
        postBody={translate("helloWorld.body")}
      />
    </section>
  );
}
