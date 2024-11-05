"use client";

import { Calendar } from "lucide-react";
import React from "react";
import SectionTitle from "../common/section-title/section-title";
import { ArticlesResponse } from "@/types/articles";
import { useQuery } from "@tanstack/react-query";
import { instance } from "@/services/axios";
import DateUi from "../time";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import EmptyAnimation from "../empty/empty";
import { Lang } from "@/types/lang";
import { useParams } from "next/navigation";

function LatestNews() {
    const t = useTranslations("home.latestNews");
    const { lang }: { lang: Lang } = useParams();

    const keyUrl = "/articles?page_siz=3";

    instance.defaults.headers.common["Accept-Language"] = lang;
    const { data } = useQuery<ArticlesResponse>({
        queryFn: async () => {
            const { data } = await instance.get(keyUrl);

            return data;
        },
        queryKey: [keyUrl],
    });

    return (
        <section>
            <div className="container mt-16">
                <SectionTitle
                    title={t("sectionTitle.title")}
                    desk={t("sectionTitle.description")}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
                    {data ? (
                        data?.results.map(
                            ({ created_at, desk, id, poster, title }) => (
                                <div
                                    key={title}
                                    className="card card-compact bg-base-100 w-full shadow-xl"
                                >
                                    <figure>
                                        <img
                                            className="h-[250px] w-full object-cover rounded-xl"
                                            src={poster}
                                            alt={title}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title line-clamp-1">
                                            {title}
                                        </h2>
                                        <p className="line-clamp-3">{desk}</p>
                                        <p className="flex items-center gap-2">
                                            <Calendar size={20} />
                                            <DateUi
                                                lang={lang}
                                                dateString={created_at}
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link
                                                href={`/news/${id}`}
                                                className="btn btn-primary"
                                            >
                                                {t("button.readMore")}
                                            </Link>
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
    );
}

export default LatestNews;
