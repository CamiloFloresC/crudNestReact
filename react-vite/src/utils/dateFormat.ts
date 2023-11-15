export function dateFormat(date: string) {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const dateFormat = new Intl.DateTimeFormat("es-ES", options);
  const formattedDate = dateFormat.format(newDate);
  return formattedDate;
}
