import { CalculateResult } from "@/app/[lang]/ui/calc/coil";
import { Product, RefnetType } from "./products";

export interface CoilsProduct {
    id: number;
    product: number;
    totalWeight: CalculateResult;
}

export interface RefnetsProduct {
    product: Product;
    count: number;
}

export interface Basket {
    coils: CoilsProduct[];
    refnets: RefnetsProduct[];
}
