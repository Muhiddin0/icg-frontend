"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { Lang } from "@/types/lang";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/products";
import Image from "next/image";
import { CoilCalc } from "../../ui/calc";
import CoilTable from "../../ui/table/coil-table";
import RefnetTable from "../../ui/table/refnet-table";
import RefnetCalc from "../../ui/calc/refnet";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill'ning default style

type Props = {
    params: {
        id: string;
        lang: Lang;
    };
};

const ProductDetail = ({ params: { id, lang } }: Props) => {
    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<Product>({
        queryFn: async () => {
            const { data } = await instance.get("/products/" + id);

            return data;
        },
        queryKey: ["products"],
    });

    const t = useTranslations("products");

    if (data)
        return (
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="relative lg:w-4/5 mx-auto flex flex-wrap">
                        <Image
                            alt="ecommerce"
                            className="relative lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
                            src={data.poster}
                            width={1200}
                            height={600}
                        />

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {data.name}
                            </h1>

                            <p className="leading-relaxed">{data.desk}</p>

                            {data.coils && <CoilCalc data={data.coils} />}
                            {data.refnets && <RefnetCalc product={data} />}
                        </div>
                    </div>
                </div>

                <div className="container py-16 mx-auto">
                    {data.coils && <CoilTable product={data} />}
                    {data.refnets && <RefnetTable product={data} />}
                </div>

                <div
                    // dangerouslySetInnerHTML={{ __html: data.content }}
                    className="container py-16 mx-auto"
                >
                    {/* @ts-ignore  */}
                    <ReactQuill
                        value={data.content}
                        readOnly={true}
                        theme="snow"
                    />
                </div>
            </section>
        );
};

export default ProductDetail;
