"use client";

import { instance } from "@/services/axios";
import { ArticleRetriveResponse } from "@/types/articles";
import { Lang } from "@/types/lang";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

type Props = {
    params: {
        id: string;
        lang: Lang;
    };
};

function page({ params: { id, lang } }: Props) {
    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<ArticleRetriveResponse>({
        queryFn: async () => {
            const { data } = await instance.get("/articles/" + id);

            return data;
        },
        queryKey: ["articles", id],
    });

    if (data)
        return (
            <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <Image
                            width={1200}
                            height={630}
                            src={data.poster}
                            alt={data.title}
                        />

                        <h1 className="mt-8 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {data.title}
                        </h1>

                        <p className="my-3">{data.desk}</p>

                        <div
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </div>
                </section>
            </>
        );
}

export default page;
