"use client";

import { Elbows } from "@/constants/coil";
import { useTranslations } from "next-intl";
import React from "react";

const ElbowTable = () => {
  const t = useTranslations("elbow");

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-4 border-b">{t("headers.product")}</th>
            <th className="p-4 border-b">{t("headers.en_standard")}</th>
            <th className="p-4 border-b">{t("headers.astmb_standard")}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(Elbows).map(([product, standards]) => (
            <tr key={product} className="hover:bg-gray-100">
              <td className="p-4 border-b">{product}</td>
              <td className="p-4 border-b">
                {standards["EN Standard"].join(", ")}
              </td>
              <td className="p-4 border-b">
                {standards["ASTMB Standard"].join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ElbowTable;
