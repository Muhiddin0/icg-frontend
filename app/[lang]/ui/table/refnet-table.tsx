"use client";

import { Product } from "@/types/products";
import { useTranslations } from "next-intl";
import React from "react";

const RefnetTable: React.FC<{ product: Product }> = ({ product }) => {
    const t = useTranslations("elbow.headers");

    if (product.refnets)
        return (
            <div className="flex justify-center items-center p-8">
                <div className="overflow-auto">
                    <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 border">
                                    {t("en_standard")}
                                </th>
                                <th className="p-4 border">
                                    {t("astmb_standard")}
                                </th>
                                <th className="p-4 border">{t("drawing")}</th>
                                <th className="p-4 border">{t("poster")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.refnets.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        idx % 2 === 0
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    }
                                >
                                    <td className="p-4 border">
                                        {item.en_standard}
                                    </td>
                                    <td className="p-4 border">
                                        {item.astmb_standard}
                                    </td>
                                    <td className="p-4 border">
                                        <img
                                            width={100}
                                            height={100}
                                            src={item.drawing}
                                            alt="drawing"
                                            className="object-cover"
                                        />
                                    </td>
                                    <td className="p-4 border">
                                        <img
                                            width={100}
                                            height={100}
                                            src={item.poster}
                                            alt="poster"
                                            className="object-cover"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    return null;
};

export default RefnetTable;
