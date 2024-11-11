import React from "react";
import { instance } from "@/services/axios";
import { useParams } from "next/navigation";
import { Lang } from "@/types/lang";
import { useQuery } from "@tanstack/react-query";
import DateUi from "../ui/time";
import Image from "next/image";
import { Basket, RefnetsProduct } from "@/types/basket";

interface Props {
    product: RefnetsProduct;
    handleChange: (data: Basket) => void;
    index: number;
}

export interface SelfRefnetItemResponse {
    en_standard: string;
    astmb_standard: string;
    drawing: string;
    poster: string;
    product: {
        id: number;
        poster: string;
        name: string;
        content: string;
        desk: string;
        created_at: string;
        updated_at: string;
    };
}

function SelfRefnetsItem({ product, handleChange, index }: Props) {
    const { lang }: { lang: Lang } = useParams();

    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<SelfRefnetItemResponse>({
        queryFn: async () => {
            const { data } = await instance.get(
                "products/refnet/" + product.product.refnets?.[0].id
            );
            return data;
        },
        queryKey: ["refnet", product.product.id],
    });
    function handleDelete(id: number) {
        let basket: Basket = JSON.parse(
            localStorage.getItem("basket") as string
        );

        basket.refnets = basket.refnets.filter((item, i) => i !== index);
        localStorage.setItem("basket", JSON.stringify(basket));

        handleChange(basket);
    }

    if (product && data)
        return (
            <div className="py-8 flex flex-wrap md:flex-nowrap gap-4">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <div className="font-semibold title-font text-gray-700">
                        <Image
                            width={400}
                            height={400}
                            src={data.poster}
                            alt="poster"
                        />
                    </div>
                    <span className="mt-1 text-gray-500 text-sm">
                        <DateUi
                            lang={lang}
                            dateString={product.product.created_at}
                        />
                    </span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {product.product.name}
                    </h2>
                    <p className="leading-relaxed">{data.product.desk}</p>
                    <p className="leading-relaxed">Count: {product.count}</p>
                    <div className="mt-3">
                        <button
                            onClick={() => handleDelete(product.product.id)}
                            className="btn btn-outline btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default SelfRefnetsItem;
