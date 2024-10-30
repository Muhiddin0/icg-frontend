"use client";

import React from "react";
import AboutHero from "./components/about-hero";
import AboutStatistcs from "./components/about-statistics";
import AboutInfo from "./components/about-info";
import Certificates from "./components/about-certificates";
import { useTranslations } from "next-intl";

function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <AboutHero />
      <AboutStatistcs />
      <AboutInfo
        status={t("aboutInfoFirst.status")}
        desk={t("aboutInfoFirst.desk")}
        img="https://icg.uz/media/images/about-3.jpg"
        title={t("aboutInfoFirst.title")}
        ltr={false}
      />
      <AboutInfo
        status={t("aboutInfoSecond.status")}
        title={t("aboutInfoSecond.title")}
        img="https://icg.uz/media/images/about-4.jpg"
        desk={t("aboutInfoSecond.desk")}
        ltr={true}
      />
      <Certificates />
    </>
  );
}

export default AboutPage;
