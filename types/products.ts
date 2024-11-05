import { ApiResponse } from ".";

export type ProductListItem = {
    id: number;
    poster: string;
    name: string;
    desk: string;
    created_at: string;
    updated_at: string;
};

export type Coil = {
    id: number;
    outer_diameter_in: string;
    outer_diameter_mm: number;
    wall_thickness_min_in: number;
    wall_thickness_min_mm: number;
    wall_thickness_max_in: number;
    wall_thickness_max_mm: number;
    unit_weight_min_lbft: number;
    unit_weight_min_kgm: number;
    unit_weight_max_lbft: number;
    unit_weight_max_kgm: number;
    unit: "Length" | "Coil weight";
    unit_first: string;
    unit_second: string;
    product: number;
};

export type RefnetType = {
    id: number;
    en_standard: string;
    astmb_standard: string;
    drawing: string;
    poster: string;
};

export type Product = {
    id: number;
    poster: string;
    name: string;
    content: string;
    desk: string;
    created_at: string;
    updated_at: string;
    coils: Coil[] | null;
    refnets: RefnetType[] | null;
};

export interface ProductApiResponse extends ApiResponse {
    results: ProductListItem[];
}
