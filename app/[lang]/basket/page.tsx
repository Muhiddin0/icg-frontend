"use client";

import React, { useEffect, useState } from "react";
import ExmptyBasker from "../ui/empty/empty-basket";
import SelCoilsItem from "./self-coils-item";
import SelfRefnetsItem from "./self-refnets-item";
import useGetUserBasket from "@/hooks/get-basket";
import { Link } from "@/i18n/routing";
import { Basket } from "@/types/basket";

function BasketPage() {
    const useBasket = useGetUserBasket();

    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        setBasket(useBasket);
    }, [useBasket]);

    function handleChange(data: Basket) {
        console.log("🚀 ~ handleChange ~ data:", data);
        setBasket(data);
    }

    if (basket)
        return (
            <>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        {basket.coils.length === 0 &&
                        basket.refnets.length === 0 ? (
                            <ExmptyBasker />
                        ) : (
                            <>
                                {basket.coils.map((item, index) => (
                                    <SelCoilsItem
                                        handleChange={handleChange}
                                        index={index}
                                        coil={item}
                                    />
                                ))}

                                {basket.refnets.map((item, index) => (
                                    <SelfRefnetsItem
                                        handleChange={handleChange}
                                        index={index}
                                        product={item}
                                    />
                                ))}
                            </>
                        )}
                        {basket.coils.length === 0 &&
                        basket.refnets.length === 0 ? null : (
                            <div className="flex justify-end">
                                <Link
                                    href={"/basket/shop"}
                                    className="btn btn-primary"
                                >
                                    Shop
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </>
        );
}

export default BasketPage;
