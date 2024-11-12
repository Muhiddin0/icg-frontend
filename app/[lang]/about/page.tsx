"use client";

import React from "react";
import AboutHero from "./components/about-hero";
import AboutStatistcs from "./components/about-statistics";
import AboutInfo from "./components/about-info";
import Certificates from "./components/about-certificates";
import { useTranslations } from "next-intl";

import about3 from "@/assets/about/about-3.jpg";
import about4 from "@/assets/about/about-4.jpg";

function AboutPage() {
    const t = useTranslations("about");

    return (
        <>
            <AboutHero />
            <AboutStatistcs />
            <AboutInfo
                status={t("aboutInfoFirst.status")}
                desk={t("aboutInfoFirst.desk")}
                img={about3.src}
                title={t("aboutInfoFirst.title")}
                ltr={false}
            />
            <AboutInfo
                status={t("aboutInfoSecond.status")}
                title={t("aboutInfoSecond.title")}
                img={about4.src}
                desk={t("aboutInfoSecond.desk")}
                ltr={true}
            />
            <Certificates />
        </>
    );
}

export default AboutPage;
