import FeedPost from "@/components/FeedPost";
import FeedbackForm from "./FeedbackForm";
import prisma from "@/utils/db";

// TODO
// use this config when we had users feedback's
// export const revalidate = 60;

export const dynamic = "force-static";

export default async function Feedbacks() {
  const feedbacks = await prisma.userFeedback.findMany({
    where: {
      active: true,
    },
  });

  return (
    <section className="container-app">
      <FeedbackForm />

      {feedbacks.map((feedback) => (
        <FeedPost key={feedback.id} postBody={feedback.message} postTitle="" />
      ))}
    </section>
  );
}
