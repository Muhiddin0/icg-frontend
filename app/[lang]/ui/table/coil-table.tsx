"use client";

import { removeExcessZeros } from "@/functions/prefixer";
import { Product } from "@/types/products";
import React from "react";

const ProductTable: React.FC<{ product: Product }> = ({ product }) => {
    if (product.coils)
        return (
            <div className="flex justify-center items-center p-8">
                <div className="overflow-auto">
                    <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 border">
                                    Outer Diameter (in)
                                </th>
                                <th className="p-4 border">Size (mm)</th>
                                <th className="p-4 border">
                                    Wall Thickness (in/mm)
                                </th>
                                <th className="p-4 border">
                                    Unit Weight (lb/ft, kg/m)
                                </th>
                                <th className="p-4 border">
                                    (
                                    {product.coils[0].unit === "Length"
                                        ? "Length ft, m"
                                        : "Coil weight kg, m"}
                                    )
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.coils.map((coil, idx) => (
                                <tr
                                    key={coil.id}
                                    className={
                                        idx % 2 === 0
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    }
                                >
                                    <td className="p-4 border">
                                        {coil.outer_diameter_in}
                                    </td>
                                    <td className="p-4 border">
                                        {removeExcessZeros(
                                            coil.outer_diameter_mm
                                        )}{" "}
                                        mm
                                    </td>
                                    <td className="p-4 border">
                                        {`Min: ${removeExcessZeros(
                                            coil.wall_thickness_min_in
                                        )} in / ${removeExcessZeros(
                                            coil.wall_thickness_min_mm
                                        )} mm`}
                                        <br />
                                        {`Max: ${removeExcessZeros(
                                            coil.wall_thickness_max_in
                                        )} in / ${removeExcessZeros(
                                            coil.wall_thickness_max_mm
                                        )} mm`}
                                    </td>
                                    <td className="p-4 border">
                                        {`Min: ${removeExcessZeros(
                                            coil.unit_weight_min_lbft
                                        )} lb/ft / ${removeExcessZeros(
                                            coil.unit_weight_min_kgm
                                        )} kg/m`}
                                        <br />
                                        {`Max: ${removeExcessZeros(
                                            coil.unit_weight_max_lbft
                                        )} lb/ft / ${removeExcessZeros(
                                            coil.unit_weight_max_kgm
                                        )} kg/m`}
                                    </td>
                                    <td className="p-4 border">
                                        {product.coils?.[0].unit === "Length"
                                            ? `${coil.unit_first} ft / ${coil.unit_second} m`
                                            : `${coil.unit_first} kg / ${coil.unit_first} m`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
};

export default ProductTable;
