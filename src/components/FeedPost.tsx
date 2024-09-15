import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SeparatorCircle from "./SeparatorCircle";

import { formatDate } from "@/utils/date";
import { myUserInfo } from "@/utils/constants";

interface PostUserProps {
  name: string;
  avatarUrl: string | null;
}

interface FeedPostProps {
  postTitle: string;
  postBody: string | ReactNode;
  user: PostUserProps;
  postedAt: any;
}

export default function FeedPost({
  postTitle,
  postBody,
  postedAt,
  user,
}: FeedPostProps) {
  return (
    <article>
      <div className="flex gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={myUserInfo.avatarUrl} />
          <AvatarFallback>WB</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 grow">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <SeparatorCircle />
              <small className="font-normal">{formatDate(postedAt)}</small>
            </div>
            <h1 className="text-2xl font-bold">{postTitle}</h1>
          </div>

          {typeof postBody === "string" ? <div>{postBody}</div> : postBody}
        </div>
      </div>
    </article>
  );
}
