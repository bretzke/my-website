import FeedPost from "@/components/FeedPost";
import FeedbackForm from "./FeedbackForm";
import prisma from "@/utils/db";
import Divider from "@/components/Divider";
import { StaticPageProps } from "@/utils/constants";
import { unstable_setRequestLocale } from "next-intl/server";

// TODO
// use this config when we had users feedback's
// export const revalidate = 60;

export default async function Feedbacks({
  params: { locale },
}: StaticPageProps) {
  unstable_setRequestLocale(locale);
  const feedbacks = await prisma.userFeedback.findMany({
    where: {
      active: true,
    },
  });

  return (
    <section className="container-app flex flex-col gap-4">
      <FeedbackForm />

      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="flex flex-col gap-4">
          <Divider />
          <FeedPost
            key={feedback.id}
            postBody={feedback.message}
            postTitle=""
            user={{ name: feedback.name, avatarUrl: feedback.imageUrl }}
            postedAt={feedback.createdAt}
          />
        </div>
      ))}
    </section>
  );
}
