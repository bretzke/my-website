import FeedPost from "@/components/FeedPost";
import { Button } from "@/components/ui/button";

export default function Feedback() {
  return (
    <section className="container-app">
      <FeedPost
        postBody={
          <div>
            <Button>Clique aqui</Button>
          </div>
        }
        postTitle="Quer me deixar uma mensagem?"
      />
    </section>
  );
}
