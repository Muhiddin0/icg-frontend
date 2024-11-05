export type Coil = {
    outer_diametr_in: string;
    outer_diametr_mm: string;
    wall_thickness_min_in: string;
    wall_thickness_min_mm: string;
    wall_thickness_max_in: string;
    wall_thickness_max_mm: string;
    unit_wight_min_lbft: string;
    unit_wight_min_kgm: string;
    unit_wight_max_lbft: string;
    unit_wight_max_kgm: string;
    unit: string | null;
    unit_first: string | null;
    unit_second: string | null;
};

export type Refnet = {
    en_standard: string;
    astmb_standard: string;
    drawing: string;
};
