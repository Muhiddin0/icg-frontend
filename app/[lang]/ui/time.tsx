import { parseISO, format } from "date-fns";
import { uz } from "date-fns/locale";

export default function DateUi({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: uz })}
    </time>
  );
}
