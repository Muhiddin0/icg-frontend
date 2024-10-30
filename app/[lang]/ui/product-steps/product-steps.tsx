"use client";

import { ICGAdvantagesSteps } from "@/constants/steps";
import { Lang } from "@/types/types";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

function ProductSteps() {
  const { lang }: { lang: Lang } = useParams();
  const t = useTranslations("products");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {ICGAdvantagesSteps[lang].map((item) => (
              <div key={item.step} className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                  {<item.icon />}
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  {t("steps-finish.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("steps-finish.description")}
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://icg.uz/media/images/about-1.jpg"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductSteps;
