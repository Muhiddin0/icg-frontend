"use client";

import React from "react";

import { ProductsItem } from "@/constants/products";
import SectionTitle from "../common/section-title/section-title";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Lang } from "@/types/lang";
import { instance } from "@/services/axios";
import { useQuery } from "@tanstack/react-query";
import { ProductApiResponse } from "@/types/products";

function ProductsList() {
    const { lang }: { lang: Lang } = useParams();

    const t = useTranslations("home.products");

    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<ProductApiResponse>({
        queryFn: async () => {
            const { data } = await instance.get("/products/");

            return data;
        },
        queryKey: ["products"],
    });

    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <SectionTitle
                    title={t("sectionTitle.title")}
                    desk={t("sectionTitle.description")}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {data?.results?.map((product) => (
                        <div
                            data-aos="fade-up"
                            className="product-card card bg-red-400 hover:bg-transparent image-full shadow-xl"
                        >
                            <figure>
                                <img
                                    className="product-img transition-all duration-300 ease-in-out scale-100"
                                    src={product.poster}
                                    alt={product.name}
                                />
                            </figure>
                            <div className="card-body transition-all duration-300 ease-in-out">
                                <h2 className="card-title">{product.name}</h2>
                                <p></p>
                                <div className="card-actions justify-end">
                                    <Link
                                        href={"/products" + product.id}
                                        className="btn btn-primary"
                                    >
                                        {t("productCard.buttonText")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsList;
