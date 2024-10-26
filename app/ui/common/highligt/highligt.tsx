"use client";

import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

interface Props {
  elements: any;
}

export const CustomHighlight = ({ elements }: Props) => {
  return (
    <div>
      <Splide
        options={{
          type: "loop", // Cheksiz aylanish
          drag: "free", // Erkin surish
          focus: "center", // Markazdagi slaydga fokus
          gap: "1rem",
          perPage: 5, // Har bir sahifada 3 slayd
          autoScroll: {
            speed: 0.6, // O'tish tezligi
            pauseOnHover: true, // O'tishda kursor bilan ustiga bosganda to'xtamaslik
            pauseOnFocus: false, // Fokuslanganida to'xtamaslik
          },
          arrows: false, // O'ng va chap strelkalarni o'chirish (agar kerak bo'lmasa)
          pagination: false, // Pastki nuqtalarni o'chirish
        }}
        extensions={{ AutoScroll }}
      >
        {elements}
      </Splide>
    </div>
  );
};
