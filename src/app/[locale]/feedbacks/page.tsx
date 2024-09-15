import FeedPost from "@/components/FeedPost";
import FeedbackForm from "./FeedbackForm";
import prisma from "@/utils/db";
import Divider from "@/components/Divider";

// TODO
// use this config when we had users feedback's
// export const revalidate = 60;

export default async function Feedbacks() {
  const feedbacks = await prisma.userFeedback.findMany({
    where: {
      active: true,
    },
  });

  return (
    <section className="container-app flex flex-col gap-4">
      <FeedbackForm />

      {feedbacks.map((feedback) => (
        <>
          <Divider />
          <FeedPost
            key={feedback.id}
            postBody={feedback.message}
            postTitle=""
            user={{ name: feedback.name, avatarUrl: feedback.imageUrl }}
            postedAt={feedback.createdAt}
          />
        </>
      ))}
    </section>
  );
}
