"use client";

import { useTranslations } from "next-intl";
import React from "react";

function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative">
      <video
        className="w-full h-screen object-cover absolute top-0 left-0 z-0 opacity-70"
        autoPlay={true}
        muted={true}
        loop={true}
        src={"/website.mp4"}
        title="ICG company website video background"
      ></video>
      <div className="relative z-20 text-white container grid grid-cols-1 items-center min-h-screen lg:grid-cols-2 mt-20 md:mt-10">
        <div className="col-span-full flex flex-col gap-3 items-start">
          <p data-aos="fade-up" className="text-shadow-for-white-bg">
            {t("welcome_message")}
          </p>
          <h1
            className="text-shadow-for-white-bg text-5xl font-bold"
            data-aos="fade-up"
          >
            {t("main_heading")}
          </h1>
          <p data-aos="fade-up" className="text-shadow-for-white-bg">
            {t("description")}
          </p>
          <button className="btn btn-primary" data-aos="fade-up">
            {t("about_us_button")}
          </button>
        </div>
      </div>

      <div className="video-shadow absolute bottom-0 left-0 w-full h-[30%]"></div>
    </section>
  );
}

export default Hero;
