"use client";

import { instance } from "@/services/axios";
import { ArticlesResponse } from "@/types/articles";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import DateUi from "../ui/time";
import { MoveRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import EmptyAnimation from "../ui/empty/empty";
import { Lang } from "@/types/lang";
import { useTranslations } from "next-intl";

function NewsPage({ params: { lang } }: { params: { lang: Lang } }) {
    const t = useTranslations("home.latestNews.button");

    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<ArticlesResponse>({
        queryFn: async () => {
            const { data } = await instance.get("/articles/");

            return data;
        },
        queryKey: ["articles"],
    });

    // const images = data.results.map(({ poster, desk }) => ({
    //   url: poster,
    //   width: 1200,
    //   height: 630,
    //   alt: desk,
    // }));

    // defaultSEOConfig.openGraph.images = images;

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data && data.results.length ? (
                            data.results.map(
                                ({ created_at, desk, id, poster, title }) => (
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <img
                                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                                src={poster}
                                                alt={title}
                                            />
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title}
                                                </h1>
                                                <p className="leading-relaxed mb-3 line-clamp-3">
                                                    {desk}
                                                </p>
                                                <div className="flex items-center justify-between flex-wrap">
                                                    <DateUi
                                                        lang={lang}
                                                        dateString={created_at}
                                                    />

                                                    <Link
                                                        href={`/news/${id}`}
                                                        className="text-primary inline-flex items-center gap-2 md:mb-2 lg:mb-0"
                                                    >
                                                        {t("readMore")}
                                                        <MoveRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <EmptyAnimation />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsPage;
