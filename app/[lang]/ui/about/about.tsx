"use client";

import { AboutItems } from "@/constants/abouts";

import { Link } from "@/i18n/routing";
import React from "react";
import SectionTitle from "../common/section-title/section-title";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Lang } from "@/types/lang";

function About() {
    const t = useTranslations("home.about");
    const { lang }: { lang: Lang } = useParams();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <SectionTitle
                    title={t("about_title")}
                    desk={t("about_description")}
                />
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {AboutItems[lang].map((item) => (
                        <div
                            data-aos="fade-up"
                            key={item.name}
                            className="p-4 md:w-1/3 flex flex-col text-center items-center"
                        >
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 flex-shrink-0">
                                {<item.icon />}
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    {item.name}
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {item.desk}
                                </p>
                                <Link
                                    href={"/#"}
                                    className="mt-3 text-primary inline-flex items-center"
                                >
                                    {t("more_info_button")}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
