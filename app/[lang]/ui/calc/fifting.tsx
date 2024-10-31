"use client";

import { Elbows } from "@/constants/coil";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

type Product = keyof typeof Elbows;
type Standart = keyof (typeof Elbows)[Product];

const FitftingCoil: React.FC = () => {
  const t = useTranslations("products");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedStandard, setSelectedStandard] = useState<Standart | null>(
    null
  );

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value as Product);
    setSelectedStandard(null); // Mahsulot o'zgarganda standartni tozalash
  };

  const handleStandardChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedStandard(event.target.value as Standart);
  };

  return (
    <div className="p-4">
      <label className="block mb-2">
        {t("choiceProduct")}
        <select
          className="select select-bordered w-full"
          onChange={handleProductChange}
        >
          <option value="">--------</option>
          {Object.keys(Elbows).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-2">
        {t("choiceStandard")}{" "}
        <select
          className="select select-bordered w-full"
          onChange={handleStandardChange}
        >
          {selectedProduct ? (
            Object.keys(Elbows[selectedProduct]).map((standard) => (
              <option key={standard} value={standard}>
                {standard}
              </option>
            ))
          ) : (
            <option className="text-gray-500 " disabled>
              ---------
            </option>
          )}
        </select>
      </label>

      {selectedStandard && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{selectedStandard}</h3>
          <ul className="list-disc list-inside">
            {selectedProduct &&
              Elbows[selectedProduct][selectedStandard].map((size, index) => (
                <li key={index}>{size}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FitftingCoil;
