"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { apiPaths, myUserInfo, publishedDate } from "@/utils/constants";
import { useToast } from "@/hooks/use-toast";
import FeedPost from "@/components/FeedPost";

const Optional = () => {
  const translate = useTranslations("feedbacks");
  return (
    <div className="flex gap-1 items-center">
      <div className="h-1 w-1 rounded-full bg-foreground" />
      <small className="text-xs">{translate("optional")}</small>
    </div>
  );
};

function SheetForm() {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const translate = useTranslations("feedbacks");
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: translate("formFeedback.fields.name.requiredError"),
    }),
    message: z.string().min(1, {
      message: translate("formFeedback.fields.message.requiredError"),
    }),
    siteUrl: z.string(),
    imageUrl: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      message: "",
      siteUrl: "",
    },
  });

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    setIsSending(true);

    try {
      const response = await fetch(apiPaths.feedbacks, {
        method: "POST",
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error();
      }

      toast({
        title: translate("formFeedback.fields.successToast.title"),
        description: translate("formFeedback.fields.successToast.description"),
      });

      form.reset();
      changeDialogStatus(false);
    } catch {
      toast({
        title: translate("formFeedback.fields.errorToast.title"),
        description: translate("formFeedback.fields.errorToast.description"),
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  }

  function changeDialogStatus(newValue: boolean) {
    setOpen(newValue);
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={changeDialogStatus}>
        <SheetTrigger asChild>
          <Button>{translate("cta")}</Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{translate("formFeedback.title")}</SheetTitle>
            <SheetDescription>
              {translate("formFeedback.body")}
            </SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 mt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {translate("formFeedback.fields.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "formFeedback.fields.name.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="siteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      {translate("formFeedback.fields.siteUrl.label")}
                      <Optional />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "formFeedback.fields.siteUrl.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      {translate("formFeedback.fields.avatarUrl.label")}
                      <Optional />
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={translate(
                          "formFeedback.fields.avatarUrl.placeholder"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {translate("formFeedback.fields.message.label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={translate(
                          "formFeedback.fields.message.placeholder"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSending}>
                {isSending
                  ? translate("formFeedback.btnSendingFeedback")
                  : translate("formFeedback.btnSendFeedback")}
              </Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function FeedbackForm() {
  const translate = useTranslations("feedbacks");
  return (
    <FeedPost
      postTitle={translate("title")}
      user={myUserInfo}
      postedAt={publishedDate}
      pinned
    >
      <SheetForm />
    </FeedPost>
  );
}
