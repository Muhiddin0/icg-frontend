"use client";

import { TableData } from "@/constants/coil";
import { useTranslations } from "next-intl";
import React from "react";

const LWC = () => {
  const t = useTranslations("table");

  return (
    <div className="flex justify-center items-center p-8">
      <div className="overflow-auto">
        <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4 border">{t("tableHeaders.outerDiameter")}</th>
              <th className="p-4 border">{t("tableHeaders.size")}</th>
              <th className="p-4 border">{t("tableHeaders.wallThickness")}</th>
              <th className="p-4 border">{t("tableHeaders.unitWeight")}</th>
              <th className="p-4 border">{t("tableHeaders.length")}</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(
              TableData["LWC Copper Tube Sizes"]["outer-diameter"]
            ).map(([diameter, sizes], idx) =>
              Object.entries(sizes).map(([size, details]) => (
                <tr
                  key={`${diameter}-${size}`}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="p-4 border">{diameter}</td>
                  <td className="p-4 border">{size}</td>
                  <td className="p-4 border">
                    {`Min: ${details["wall-thickness"].min.in} in / ${details["wall-thickness"].min.mm} mm`}
                    <br />
                    {`Max: ${details["wall-thickness"].max.in} in / ${details["wall-thickness"].max.mm} mm`}
                  </td>
                  <td className="p-4 border">
                    {`Min: ${details["unit-weight"].min["lb/ft"]} lb/ft / ${details["unit-weight"].min["kg/m"]} kg/m`}
                    <br />
                    {`Max: ${details["unit-weight"].max["lb/ft"]} lb/ft / ${details["unit-weight"].max["kg/m"]} kg/m`}
                  </td>
                  <td className="p-4 border">
                    {`${details["coil-weight"].lb} lb`}
                    <br />
                    {`${details["coil-weight"].kg} kg`}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LWC;
