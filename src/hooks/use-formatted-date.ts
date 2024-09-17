import { useParams } from "next/navigation";

export const useFormattedDate = (dateToFormat: Date, dateStyle = "short") => {
  const { locale } = useParams();

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
