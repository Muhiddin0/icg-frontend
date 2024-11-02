"use client";

import { TableData } from "@/constants/coil";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../products/[index]/page";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type outhDiametrType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

type outhDiametrMmType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

type wallThickness = {
  in: number;
  mm: number;
};

type unitWeight = {
  "lb/ft": number;
  "kg/m": number;
};

type TotalLength = number;

const Calc = ({
  product,
}: {
  product: keyof typeof TableData;
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<ProductType | null | undefined>
  >;
}) => {
  const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
  const [outhDiametrMm, setOuthDiametrMm] = useState<outhDiametrMmType>();
  const [wallThickness, setWallThickness] = useState<wallThickness>({
    in: 0,
    mm: 0,
  });
  const [unitWeight, setUnitWeight] = useState<unitWeight>({
    "lb/ft": 0,
    "kg/m": 0,
  });

  const [wallThicknessIsError, setWallThicknessIsError] =
    useState<boolean>(false);
  const [unitWeightIsError, setUnitWeightIsError] = useState<boolean>(false);

  const [length, setLength] = useState<TotalLength | null>(null);

  const [totalWeight, setTotalWeight] = useState<{
    lb: string;
    kg: string;
  } | null>(null);

  const t = useTranslations("calc");

  function calculateTotalWeight() {
    if (length && unitWeight["kg/m"] && unitWeight["lb/ft"]) {
      const weightKg = length * unitWeight["kg/m"];
      const weightLb = weightKg * 2.20462;
      setTotalWeight({ lb: weightLb.toFixed(2), kg: weightKg.toFixed(2) });
    } else {
      setTotalWeight(null);
    }
  }

  function convertLength(
    length: number,
    direction: "mmToIn" | "inToMm"
  ): number {
    return direction === "mmToIn" ? length / 25.4 : length * 25.4;
  }

  function convertWeight(
    weight: number,
    direction: "lbToKg" | "kgToLb"
  ): number {
    return direction === "lbToKg" ? weight * 0.453592 : weight / 0.453592;
  }

  useEffect(() => {
    calculateTotalWeight();

    if (outhDiametr && outhDiametrMm) {
      if (
        wallThickness.in >
          Number(
            TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
              "wall-thickness"
            ]["max"]["in"]
          ) ||
        wallThickness.in <
          Number(
            TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
              "wall-thickness"
            ]["min"]["in"]
          )
      ) {
        setWallThicknessIsError(true);
      } else {
        setWallThicknessIsError(false);
      }

      if (
        unitWeight["lb/ft"] >
          Number(
            TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
              "unit-weight"
            ]["max"]["lb/ft"]
          ) ||
        unitWeight["lb/ft"] <
          Number(
            TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
              "unit-weight"
            ]["min"]["lb/ft"]
          )
      ) {
        setUnitWeightIsError(true);
      } else {
        setUnitWeightIsError(false);
      }
    }
  }, [outhDiametr, outhDiametrMm, wallThickness, unitWeight, length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
      <label className="col-span-full grid gap-1">
        <p>{t("outerDiameter")}</p>
        <select
          onChange={(e) => {
            const value = e.target.value.split("-");
            setOuthDiametr(value[0] as outhDiametrType);
            setOuthDiametrMm(value[1] as outhDiametrMmType);
          }}
          className="select select-bordered"
        >
          <option value="">Select Outer Diameter</option>
          {Object.keys(TableData[product]["outer-diameter"]).map((outerKey) => {
            return Object.keys(
              TableData[product]["outer-diameter"][
                outerKey as outhDiametrMmType
              ]
            ).map((innerKey) => (
              <option
                key={`${outerKey}-${innerKey}`}
                value={`${outerKey}-${innerKey}`}
              >
                In {outerKey}, Mm {innerKey}
              </option>
            ));
          })}
        </select>
      </label>

      <div className="grid grid-cols-2 col-span-full gap-3">
        <div className="col-span-full">
          <p>{t("wallThickness")}</p>
        </div>

        <label className="col-span-1 grid gap-1">
          <p>
            (In) Max{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "wall-thickness"
              ]["max"]["in"]}
            , Min{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "wall-thickness"
              ]["min"]["in"]}
          </p>
          <input
            type="number"
            className="input input-bordered"
            onChange={(e) => {
              const inValue = +e.target.value;
              setWallThickness((prev) => ({
                in: inValue,
                mm: convertLength(inValue, "inToMm"),
              }));
            }}
            disabled={!outhDiametrMm || !outhDiametr}
            value={wallThickness.in}
          />
        </label>

        <label className="col-span-1 grid gap-1">
          <p>
            (Mm) Max{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "wall-thickness"
              ]["max"]["mm"]}
            , Min{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "wall-thickness"
              ]["min"]["mm"]}
          </p>
          <input
            type="number"
            className="input input-bordered"
            onChange={(e) => {
              const mmValue = +e.target.value;
              setWallThickness((prev) => ({
                in: convertLength(mmValue, "mmToIn"),
                mm: mmValue,
              }));
            }}
            disabled={!outhDiametrMm || !outhDiametr}
            value={wallThickness.mm}
          />
        </label>

        <p
          className={clsx("text-red-500", {
            "opacity-0": !wallThicknessIsError,
            "opacity-100": !!wallThicknessIsError,
          })}
        >
          {t("error")}
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-full gap-3">
        <div className="col-span-full">
          <p>{t("unitWeight")}</p>
        </div>
        <label className="col-span-1 grid gap-1">
          <p>
            (lb/ft) Max{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "unit-weight"
              ]["max"]["lb/ft"]}
            , Min{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "unit-weight"
              ]["min"]["lb/ft"]}
          </p>

          <input
            type="number"
            className="input input-bordered"
            onChange={(e) => {
              const lbValue = +e.target.value;
              setUnitWeight({
                "lb/ft": lbValue,
                "kg/m": convertWeight(lbValue, "lbToKg"),
              });
            }}
            disabled={!outhDiametrMm || !outhDiametr}
            value={unitWeight["lb/ft"]}
          />
        </label>
        <label className="col-span-1 grid gap-1">
          <p>
            (Kg/m) Max{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "unit-weight"
              ]["max"]["kg/m"]}
            , Min{" "}
            {outhDiametr &&
              outhDiametrMm &&
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "unit-weight"
              ]["min"]["kg/m"]}
          </p>{" "}
          <input
            type="number"
            className="input input-bordered"
            onChange={(e) => {
              const kgValue = +e.target.value;
              setUnitWeight({
                "kg/m": kgValue,
                "lb/ft": convertWeight(kgValue, "kgToLb"),
              });
            }}
            disabled={!outhDiametrMm || !outhDiametr}
            value={unitWeight["kg/m"]}
          />
        </label>

        <p
          className={clsx("text-red-500", {
            "opacity-0": !unitWeightIsError,
            "opacity-100": !!unitWeightIsError,
          })}
        >
          {t("error")}
        </p>
      </div>

      <label className="col-span-1 grid gap-1">
        <p>{t("length")}</p>
        <input
          disabled={!outhDiametrMm || !outhDiametr}
          type="number"
          className="input input-bordered w-full"
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />
      </label>

      <div className="col-span-full">
        <ul>
          <li>lb/ft: {totalWeight?.lb}</li>
          <li>kg/m: {totalWeight?.kg}</li>
        </ul>
      </div>
    </div>
  );
};

export default Calc;
