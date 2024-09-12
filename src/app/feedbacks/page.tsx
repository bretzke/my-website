import FeedPost from "@/components/FeedPost";
import prisma from "@/utils/db";
import FeedbackForm from "./FeedbackForm";

export default async function Feedback() {
  const feedbacks = await prisma.userFeedback.findMany();

  return (
    <section className="container-app">
      <FeedPost
        postBody={<FeedbackForm />}
        postTitle="Quer me deixar uma mensagem?"
      />
    </section>
  );
}
