"use client";

import { useTranslations } from "next-intl";
import React from "react";

function ExportPage() {
  const t = useTranslations("exports");

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
              {t("header.subtitle")}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {t("header.title")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {t("description")}
            </p>
          </div>
          <div className="">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1t8w5jWUhQ4Q5JXzxIJgbGMGVJadiLio&ehbc=2E312F"
                className="w-full h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExportPage;
