import React from "react";
import AboutHero from "./components/about-hero";
import AboutStatistcs from "./components/about-statistics";
import AboutInfo from "./components/about-info";
import Certificates from "./components/about-certificates";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStatistcs />
      <AboutInfo
        status="ICG tarixi"
        desk={`Faoliyat mijozlar ehtiyojlarini qondirish, ishda moslashuvchanlik va yangi mahsulotlar, echimlar va xizmatlarni ishlab chiqishda innovatsiyalarga asoslangan.
              Infinity Copper Group tarixi 2010 yilda boshlangan. Kundalik hayotda, avtomobilsozlikda, qurilish ishlarida, maishiy konditsionerlar, muzlatgichlar, shuningdek, isitish uskunalari ishlab chiqarishda foydalaniladigan mis quvurlar ishlab chiqaruvchi zavod qurilishi Markaziy Osiyo bozorini rivojlantirish yo‘lidagi dastlabki qadamlardan biri bo‘ldi. suv ta'minoti va gaz ta'minoti tizimlari.`}
        img="https://icg.uz/media/images/about-3.jpg"
        title="Infinity Copper Group Markaziy Osiyoda yuqori sifatli mis quvurlari yetkazib beruvchi yetakchi hisoblanadi."
        ltr={false}
      />
      <AboutInfo
        status="BIZNING VAZIFA"
        title={`Mijozlarimizga tegishli mahsulotlar, xizmatlar va ma'lumotlarni olish imkonini beruvchi mis quvurlari yechimlarini topishga yordam beramiz`}
        img="https://icg.uz/media/images/about-4.jpg"
        desk={`
          Sizga sifatli mahsulotlarni taklif etamiz. Infinity Copper Group mahsulotlarini xarid qilish orqali siz uskunaning ishlashiga ishonch hosil qilasiz. Infinity Copper Group kompaniyasining barcha mahsulotlari chiqindi yoki qayta ishlangan misdan foydalanmasdan faqat eng sof mineral xomashyodan ishlab chiqariladi.
          Biz butun marketing hududida "Infinity Copper Group" brendi ostida ishlaymiz. Biz uchun brendimizning kuchi so‘zlardan emas, harakatlardan kelib chiqadi. Biz mijozlarimizga ishlarni bajarishga va'da beramiz va har kuni shu maqsadda ishlaymiz.
          Biz mijozlarimiz Infinity Copper Groupni innovatsiyalar, sifat va mijozlar ehtiyojini qondirish ramzi sifatida tan olishlarini istaymiz. Barcha harakatlarimizda biz mijozlarimizning ehtiyojlarini hisobga olamiz.
        `}
        ltr={true}
      />
      <Certificates />
    </>
  );
}

export default AboutPage;
