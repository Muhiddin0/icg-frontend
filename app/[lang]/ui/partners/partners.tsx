"use client";

import Image from "next/image";

import { CustomHighlight } from "../common/highligt/highligt";
import SectionTitle from "../common/section-title/section-title";

// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";

import { PartnorItems } from "@/constants/partnors";
import React from "react";
import { useTranslations } from "next-intl";

const Partnors: React.FC = () => {
  const t = useTranslations("home.partners");

  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle
          title={t("sectionTitle.title")}
          desk={t("sectionTitle.description")}
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
