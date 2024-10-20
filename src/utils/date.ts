interface FormatDateProps {
  locale: string;
  dateToFormat: Date;
  dateStyle?: "long" | "short";
}

export const formatDate = ({
  locale,
  dateToFormat,
  dateStyle = "short",
}: FormatDateProps) => {
  return new Intl.DateTimeFormat(
    locale,
    dateStyle === "short"
      ? { day: "2-digit", month: "2-digit", year: "numeric" }
      : {
          month: "long",
          year: "numeric",
        }
  ).format(dateToFormat);
};
