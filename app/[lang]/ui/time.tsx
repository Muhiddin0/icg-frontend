import { Lang } from "@/types/lang";
import { parseISO, format } from "date-fns";
import { uz, ru, enUS as en } from "date-fns/locale";

export default function DateUi({
    dateString,
    lang,
}: {
    dateString: string;
    lang: Lang;
}) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            {format(date, "LLLL d, yyyy", {
                locale: lang === "uz" ? uz : lang === "ru" ? ru : en,
            })}
        </time>
    );
}
