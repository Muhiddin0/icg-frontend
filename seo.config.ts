export const defaultSEOConfig = {
  title: "ICG",
  description:
    "ICG.uz – O‘zbekistonning etakchi konsultatsiya va rivojlanish markazi. Biznes konsalting, moliyaviy maslahat, va xodimlarni rivojlantirish bo‘yicha xizmatlar ko‘rsatamiz. Biz bilan o‘sish va muvaffaqiyatga erishing!",

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://icg.uz",
    title: "ICG - Konsalting va rivojlanish markazi",
    description:
      "ICG.uz – O‘zbekistonning etakchi konsultatsiya va rivojlanish markazi. Biznes konsalting, moliyaviy maslahat, va xodimlarni rivojlantirish bo‘yicha xizmatlar ko‘rsatamiz. Biz bilan o‘sish va muvaffaqiyatga erishing!",
    images: [
      {
        url: "https://icg.uz/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ICG Konsalting va rivojlanish markazi",
      },
    ],
    site_name: "ICG",
  },

  twitter: {
    handle: "@ICGuzb",
    site: "@ICGuzb",
    cardType: "summary_large_image",
  },

  facebook: {
    appId: "1234567890", // Facebook ilova ID, mavjud bo'lsa
    pageUrl: "https://www.facebook.com/icg.uzb/", // Facebook sahifa URL manzili
  },

  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "ICG, konsultatsiya, rivojlanish markazi, biznes konsalting, moliyaviy maslahat, xodimlarni rivojlantirish, O‘zbekiston",
    },
    {
      name: "author",
      content: "ICG Uzbekistan",
    },
  ],
};
