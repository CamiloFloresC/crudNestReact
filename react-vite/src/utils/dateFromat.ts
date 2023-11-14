export function dateFormat(date: string) {
  const fecha = new Date(date);
  const opciones: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formatoFecha = new Intl.DateTimeFormat("es-ES", opciones);
  const fechaFormateada = formatoFecha.format(fecha);
  return fechaFormateada;
}
