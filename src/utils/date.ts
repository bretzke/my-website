import { DateTimeFormatOptions } from "next-intl";

interface FormatDateProps {
  locale: string;
  dateToFormat: Date;
  dateStyle?: "long" | "short";
  displayDay?: boolean;
}

export const formatDate = ({
  locale,
  dateToFormat,
  dateStyle = "short",
  displayDay = true,
}: FormatDateProps) => {
  const options =
    dateStyle === "short"
      ? { day: "2-digit", month: "2-digit", year: "numeric" }
      : ({
          day: "2-digit",
          month: "long",
          year: "numeric",
        } as {
          day?: string;
          month: string;
          year: string;
        });

  displayDay || delete options.day;

  return new Intl.DateTimeFormat(
    locale,
    options as DateTimeFormatOptions
  ).format(dateToFormat);
};
