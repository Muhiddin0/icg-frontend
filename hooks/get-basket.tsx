"use client";

import { Basket } from "@/types/basket";
import { useEffect, useState } from "react";

function useGetUserBasket() {
    const [basket, setBasket] = useState<Basket>({
        coils: [],
        refnets: [],
    });

    useEffect(() => {
        let localBasket = localStorage.getItem("basket");
        if (localBasket) {
            let data = JSON.parse(localBasket);
            setBasket(data);
        } else {
            setBasket({
                refnets: [],
                coils: [],
            });
        }
    }, []);

    return basket;
}

export default useGetUserBasket;
