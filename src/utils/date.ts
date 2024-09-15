export const formatDate = (dateToFormat: Date) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(dateToFormat);
};
