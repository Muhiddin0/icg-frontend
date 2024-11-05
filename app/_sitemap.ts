import { Lang } from "@/types/lang";
import { NavigationsItems } from "../constants/navigations";

const domain = "https://icg.uz";

function generateNavigationMap(lang: Lang) {
    return NavigationsItems[lang].flatMap((item) => {
        if (item.isSub && item.items) {
            return item.items.map((subItem) => ({
                url: `/${lang}/${domain}${subItem.path}`,
                lastModified: new Date(),
                changefreq: "daily",
                priority: subItem.priority,
            }));
        }
        return {
            url: `/${lang}/${domain}${item.path}`,
            lastModified: new Date(),
            changefreq: "daily",
            priority: item.priority,
        };
    });
}

export default async function sitemap() {
    const urls_uz = generateNavigationMap("uz");
    const urls_ru = generateNavigationMap("ru");
    const urls_en = generateNavigationMap("en");

    return {};
}
