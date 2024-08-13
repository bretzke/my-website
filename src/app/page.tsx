import FeedPost from "@/components/FeedPost";
import { useTranslations } from "next-intl";

export default function Home() {
  const translate = useTranslations("posts");

  return (
    <section className="container-app">
      <FeedPost
        title={translate("helloWorld.title")}
        body={translate("helloWorld.body")}
      />
    </section>
  );
}
