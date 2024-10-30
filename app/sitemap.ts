import { NavigationsItems } from "../constants/navigations";

const domain = "https://icg.uz";

export default async function sitemap() {
  const urls = NavigationsItems.flatMap((item) => {
    if (item.isSub && item.items) {
      return item.items.map((subItem) => ({
        url: `${domain}${subItem.path}`,
        lastModified: new Date(),
        changefreq: "daily",
        priority: subItem.priority,
      }));
    }
    return {
      url: `${domain}${item.path}`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: item.priority,
    };
  });

  return urls;
}
