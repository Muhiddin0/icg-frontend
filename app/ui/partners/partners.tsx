"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";

import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { CustomHighlight } from "../common/highligt/highligt";
import SectionTitle from "../common/section-title/section-title";

// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";

import { PartnorItems } from "@/constants/partnors";
import React from "react";

const Partnors: React.FC = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle
          title="Mahsulotlarimiz"
          desk="ICG.UZ kompaniyasi zamonaviy texnologiyalarga asoslangan yuqori
            sifatli mahsulotlar va yechimlar taklif etadi. Ular mijozlar
            ehtiyojlarini qondirish uchun moslashuvchan va innovatsion
            xizmatlarni taqdim etishga intiladi. Kompaniya mahsulotlari har bir
            mijozga individual yondashuv bilan ishlab chiqiladi, bu esa ularning
            ishonchini qozonishga yordam beradi."
        />
      </div>

      <CustomHighlight
        elements={PartnorItems.map((item) => (
          <React.Fragment key={item.name}>
            <SplideSlide className="flex items-center justify-center">
              <Image
                width={300}
                height={300}
                className="w-auto h-auto grayscale hover:grayscale-0 transition-all duration-200 ease-in"
                src={item.image}
                alt={item.name}
              />
            </SplideSlide>
          </React.Fragment>
        ))}
      />
    </section>
  );
};

export default Partnors;
