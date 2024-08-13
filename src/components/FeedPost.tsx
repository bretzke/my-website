import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface FeedPostProps {
  title: string;
  body: string;
}

export default function FeedPost({ title, body }: FeedPostProps) {
  return (
    <article>
      <div className="flex gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/profile.jpg" />
          <AvatarFallback>WB</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <div>
            <h3 className="text-lg font-semibold">
              Will <small className="font-normal">@bretzke.dev</small>
            </h3>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div>{body}</div>
        </div>
      </div>
    </article>
  );
}
