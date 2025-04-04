"use client";
import { ReactNode } from "react";
import SeparatorCircle from "./SeparatorCircle";

import Avatar from "./Avatar";
import { Pin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFormattedDate } from "@/hooks/use-formatted-date";

interface PostUserProps {
  name: string;
  avatarUrl: string | null;
}

interface FeedPostProps {
  postTitle: string;
  postBody?: string;
  children?: ReactNode;
  user: PostUserProps;
  postedAt: any;
  pinned?: boolean;
}

export default function FeedPost({
  postTitle,
  postBody = "",
  postedAt,
  user,
  pinned = false,
  children = undefined,
}: FeedPostProps) {
  const translate = useTranslations();
  return (
    <article>
      <div className="flex gap-4">
        <Avatar size="small" imageUrl={user.avatarUrl || ""} alt={user.name} />

        <div className="flex flex-col gap-1 grow">
          {pinned && (
            <div className="flex gap-1 items-center">
              <Pin size={16} className="fill-primary-foreground" />
              <span className="text-sm">{translate("pinned")}</span>
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <SeparatorCircle />
              <small className="font-normal">
                {useFormattedDate(postedAt)}
              </small>
            </div>
            {postTitle.length > 0 && (
              <h1 className="text-2xl font-bold">{postTitle}</h1>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {postBody.length > 0 && (
              <div
                dangerouslySetInnerHTML={{
                  __html: postBody,
                }}
              />
            )}
            {!!children && children}
          </div>
        </div>
      </div>
    </article>
  );
}
