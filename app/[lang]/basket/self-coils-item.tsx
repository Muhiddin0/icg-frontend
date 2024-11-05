import React from "react";
import { CoilsProduct } from "@/types/basket";
import { instance } from "@/services/axios";
import { useParams } from "next/navigation";
import { Lang } from "@/types/lang";
import { useQuery } from "@tanstack/react-query";
import DateUi from "../ui/time";
import Image from "next/image";

interface Props {
    coil: CoilsProduct;
}

export type WallThickness = {
    min: {
        in: string;
        mm: string;
    };
    max: {
        in: string;
        mm: string;
    };
};

export type UnitWeight = {
    min: {
        "lb/ft": string;
        "kg/m": string;
    };
    max: {
        "lb/ft": string;
        "kg/m": string;
    };
};

export type CoilResponse = {
    outer_diameter: {
        in: string;
        mm: string;
    };
    wall_thickness: WallThickness;
    unit_weight: UnitWeight;
    unit: "Length";
    unit_first: string;
    unit_second: string;
    product: {
        id: number;
        poster: string;
        name: string;
        content: string;
        desk: string;
        created_at: string;
        updated_at: string;
    };
};

function SelCoilsItem({ coil }: Props) {
    const { lang }: { lang: Lang } = useParams();

    instance.defaults.headers.common["Accept-Language"] = lang;

    const { data } = useQuery<CoilResponse>({
        queryFn: async () => {
            const { data } = await instance.get("products/coil/" + coil.id);
            return data;
        },
        queryKey: ["coil", coil.id],
    });

    function handleDelete(id: number) {
        localStorage.getItem("basket");
    }

    if (data)
        return (
            <div className="py-8 flex flex-wrap md:flex-nowrap gap-4">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <div className="font-semibold title-font text-gray-700">
                        <Image
                            width={400}
                            height={400}
                            src={data.product.poster}
                            alt="poster"
                        />
                    </div>
                    <span className="mt-1 text-gray-500 text-sm">
                        <DateUi
                            lang={lang}
                            dateString={data.product.created_at}
                        />
                    </span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {data.product.name}
                    </h2>
                    <p className="leading-relaxed">{data.product.desk}</p>
                    <ul className="text-sm">
                        <li>kg: {coil.totalWeight.kg}</li>
                        <li>lb: {coil.totalWeight.lb}</li>
                    </ul>

                    <div className="mt-3">
                        <button
                            onClick={() => handleDelete(coil.id)}
                            className="btn btn-outline btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default SelCoilsItem;
