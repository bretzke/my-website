import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

export default function FeedbackForm() {
  const translate = useTranslations("feedbacks");

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>{translate("cta")}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{translate("formFeedback.title")}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
