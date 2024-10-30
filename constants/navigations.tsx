export const NavigationsItems = [
  {
    isSub: false,
    title: "Asosiy",
    path: "/",
    priority: 0.8,
  },
  {
    isSub: true,
    title: "Biz haqimizda",
    items: [
      {
        title: "Kompaniya haqida",
        path: "/about",
        priority: 0.8,
      },
      {
        title: "Hamkorlarimiz",
        path: "/partners",
        priority: 0.8,
      },
      {
        title: "Export",
        path: "/export",
        priority: 0.8,
      },
      {
        title: "Qo'llanma",
        path: "/manuals",
        priority: 0.8,
      },
      {
        title: "Jamoa",
        path: "/team",
        priority: 0.8,
      },
    ],
  },
  {
    isSub: false,
    title: "Maxsulotlarimiz",
    path: "/products",
    priority: 1,
  },
  {
    isSub: false,
    title: "Yangiliklar",
    path: "/news",
    priority: 0.8,
  },
  {
    isSub: false,
    title: "Aloqa",
    path: "/contact",
    priority: 0.8,
  },
];
