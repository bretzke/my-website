import FeedPost from "@/components/FeedPost";
import FeedbackForm from "./FeedbackForm";
import prisma from "@/utils/db";
import Divider from "@/components/Divider";
import { StaticPageProps } from "@/utils/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

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
    orderBy: [{ pinned: "desc" }, { createdAt: "asc" }],
  });

  return (
    <section className="container-app flex flex-col gap-4">
      <FeedbackForm />

      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="flex flex-col gap-4">
          <Divider />
          <div className="flex justify-between">
            <FeedPost
              key={feedback.id}
              postBody={feedback.message}
              postTitle=""
              user={{ name: feedback.name, avatarUrl: feedback.imageUrl }}
              postedAt={feedback.createdAt}
              pinned={feedback.pinned}
            />
            {!!feedback.siteUrl?.length && (
              <Link href={feedback.siteUrl} target="_blank">
                <Button variant="default">
                  <SquareArrowOutUpRight size={16} />
                </Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
