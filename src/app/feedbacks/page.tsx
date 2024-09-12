import FeedPost from "@/components/FeedPost";
import FeedbackForm from "./FeedbackForm";
import { useTranslations } from "next-intl";

export default function Feedback() {
  const translate = useTranslations("feedbacks");

  return (
    <section className="container-app">
      <FeedPost postBody={<FeedbackForm />} postTitle={translate("title")} />
    </section>
  );
}
