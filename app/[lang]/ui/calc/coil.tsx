"use client";

import React, { useEffect, useState } from "react";
import { convertLength, convertWeight } from "@/functions/converter";
import { removeExcessZeros } from "@/functions/prefixer";
import { Coil, Product } from "@/types/products";
import { calculateTotalWeight } from "./calculate";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import useGetUserBasket from "@/hooks/get-basket";

type wallThickness = {
    in: number;
    mm: number;
};

type unitWeight = {
    "lb/ft": number;
    "kg/m": number;
};

export type CalculateResult = {
    lb: string;
    kg: string;
};

type Props = {
    data: Product["coils"];
};

function CoilCalc({ data }: Props) {
    const [coil, setCoil] = useState<Coil | null>(null);
    const [wallThickness, setWallThickness] = useState<wallThickness | null>();
    const [unitWeight, setUnitWeight] = useState<unitWeight | null>(null);
    const [totalLength, setTotalLength] = useState<number>();
    const [result, setResult] = useState<CalculateResult | null>();

    const t = useTranslations("products");
    const calc = useTranslations("calc");
    const route = useRouter();

    const basket = useGetUserBasket();

    useEffect(() => {
        if (unitWeight && coil && wallThickness && totalLength) {
            const result = calculateTotalWeight(
                unitWeight["kg/m"],
                totalLength
            );
            setResult(result);
        }
    }, [coil, wallThickness, unitWeight, totalLength]);

    function handleShop() {
        console.log(basket);

        localStorage.setItem(
            "basket",
            JSON.stringify({
                ...basket,
                coils: [
                    ...basket.coils,
                    {
                        id: coil?.id,
                        product: coil?.product,
                        totalWeight: result,
                    },
                ],
            })
        );

        route.push("/basket");
    }

    if (data)
        return (
            <>
                <div className="grid grid-cols-2 my-5 gap-4">
                    <div className="col-span-full">
                        <p>{calc("outerDiameter")}</p>
                        <select
                            className="select select-bordered w-full col-span-full mt-3"
                            name="outer-diameter"
                            id=""
                            onChange={(e) => {
                                let coil = data[+e.target.value];
                                setCoil(coil);
                            }}
                        >
                            <option defaultChecked={true} value="">
                                ---------
                            </option>
                            {data.map(
                                (
                                    {
                                        id,
                                        outer_diameter_in,
                                        outer_diameter_mm,
                                    },
                                    index
                                ) => (
                                    <option
                                        key={"outer-diameter" + id}
                                        value={index}
                                    >{`(In) ${outer_diameter_in} (Mm) ${removeExcessZeros(
                                        outer_diameter_mm
                                    )}`}</option>
                                )
                            )}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 col-span-full gap-x-3">
                        <p className="col-span-full">{calc("wallThickness")}</p>
                        <label className="mt-2 col-span-1">
                            <p className="text-sm">
                                {calc("wallThicknessIn")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.wall_thickness_max_in
                                    )}
                                {calc("wallThicknessMin")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.wall_thickness_min_in
                                    )}
                            </p>
                            <input
                                className="input input-bordered w-full"
                                type="text"
                                onChange={(e) =>
                                    setWallThickness({
                                        in: +e.target.value,
                                        mm: convertLength(
                                            +e.target.value,
                                            "inToMm"
                                        ),
                                    })
                                }
                                disabled={!coil}
                                value={wallThickness ? wallThickness.in : 0}
                            />
                        </label>
                        <label className="mt-2 col-span-1">
                            <p className="text-sm">
                                {calc("wallThicknessMm")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.wall_thickness_max_mm
                                    )}
                                {calc("wallThicknessMin")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.wall_thickness_min_mm
                                    )}
                            </p>
                            <input
                                className="input input-bordered w-full"
                                type="text"
                                onChange={(e) =>
                                    setWallThickness({
                                        in: convertLength(
                                            +e.target.value,
                                            "mmToIn"
                                        ),
                                        mm: +e.target.value,
                                    })
                                }
                                disabled={!coil}
                                value={wallThickness ? wallThickness.mm : 0}
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-2 col-span-full gap-x-3">
                        <p className="col-span-full">{t("unitWeight")}</p>
                        <label className="mt-2 col-span-1">
                            <p className="text-sm mb-1">
                                {calc("unitWeightLbFtMax")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.unit_weight_max_lbft
                                    )}
                                {calc("unitWeightLbFtMin")}{" "}
                                {coil &&
                                    removeExcessZeros(
                                        coil.unit_weight_min_lbft
                                    )}
                            </p>
                            <input
                                className="input input-bordered w-full"
                                type="text"
                                onChange={(e) =>
                                    setUnitWeight({
                                        "lb/ft": +e.target.value,
                                        "kg/m": convertWeight(
                                            +e.target.value,
                                            "lbToKg"
                                        ),
                                    })
                                }
                                disabled={!coil}
                                value={unitWeight ? unitWeight["lb/ft"] : 0}
                            />
                        </label>
                        <label className="mt-2 col-span-1">
                            <p className="text-sm mb-1">
                                {calc("unitWeightKgMMax")}{" "}
                                {coil &&
                                    removeExcessZeros(coil.unit_weight_max_kgm)}
                                {calc("unitWeightKgMMin")}{" "}
                                {coil &&
                                    removeExcessZeros(coil.unit_weight_min_kgm)}
                            </p>
                            <input
                                className="input input-bordered w-full"
                                type="text"
                                onChange={(e) =>
                                    setUnitWeight({
                                        "kg/m": +e.target.value,
                                        "lb/ft": convertWeight(
                                            +e.target.value,
                                            "kgToLb"
                                        ),
                                    })
                                }
                                disabled={!coil}
                                value={unitWeight ? unitWeight["kg/m"] : 0}
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-2 col-span-full gap-x-3">
                        <p className="col-span-full">{calc("length")} </p>
                        <label className="mt-2 col-span-full">
                            <p className="text-sm mb-1">(m) </p>
                            <input
                                disabled={!coil}
                                className="input input-bordered w-full"
                                type="text"
                                onChange={(e) =>
                                    setTotalLength(+e.target.value)
                                }
                            />
                        </label>
                    </div>

                    <div className="col-span-full">
                        <ul>
                            <li>kg/m: {result ? result.kg : 0}</li>
                            <li>lb/ft: {result ? result.lb : 0}</li>
                        </ul>
                    </div>
                </div>

                <div className="flex">
                    <button
                        disabled={!coil || !totalLength}
                        onClick={handleShop}
                        className={clsx(
                            "flex gap-2  ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/50 rounded",
                            {
                                "opacity-60": !coil || !totalLength,
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

export default CoilCalc;
