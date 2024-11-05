"use client";

import React, { useState } from "react";
import { Product } from "@/types/products";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import useGetUserBasket from "@/hooks/get-basket";

type Props = {
    product: Product;
};

function RefnetCalc({ product }: Props) {
    const t = useTranslations("products");
    const elbow = useTranslations("elbow.headers");

    const basket = useGetUserBasket();

    const route = useRouter();

    const [length, setLength] = useState("");

    function handleShop() {
        localStorage.setItem(
            "basket",
            JSON.stringify({
                ...basket,
                refnets: [
                    ...basket.refnets,
                    {
                        product: product,
                        count: Number(length),
                    },
                ],
            })
        );
        route.push("/basket");
    }

    if (product)
        return (
            <>
                <div className="grid grid-cols-full my-5 gap-4">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                                <th>{elbow("en_standard")}</th>
                                <th>{elbow("astmb_standard")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.refnets?.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.en_standard}</td>
                                    <td>{item.astmb_standard}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <label className="mt-8 w-full" htmlFor="">
                        <p>{t("count")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="number"
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </label>
                </div>

                <div className="flex">
                    <button
                        onClick={handleShop}
                        className={clsx(
                            "flex gap-2  ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/50 rounded",
                            {
                                "opacity-60": !length,
                            }
                        )}
                    >
                        <ShoppingCart />
                        {t("addShopCard")}
                    </button>
                </div>
            </>
        );
}

export default RefnetCalc;
