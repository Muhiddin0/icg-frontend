"use client";

import { TableData } from "@/constants/coil";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../products/[index]/page";

type outhDiametrType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

type outhDiametrMmType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

type wallThicknessType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["wall-thickness"];

type unitWeightType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["unit-weight"];

const Calc = ({
  product,
  setSelectedProduct,
}: {
  product: keyof typeof TableData;
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<ProductType | null | undefined>
  >;
}) => {
  const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
  const [outhDiametrMm, setOuthDiametrMm] = useState<outhDiametrMmType>();
  const [wallThickness, setWallThickness] = useState<wallThicknessType>();
  const [unitWeight, setUnitWeight] = useState<unitWeightType>();
  const [length, setLength] = useState<number | null>();
  const [result, setResult] = useState<string | null>(
    "Please select all options and enter length."
  );

  const calculateWeight = () => {
    if (outhDiametr && outhDiametrMm && wallThickness && unitWeight && length) {
      const weightPerMeter =
        TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
          "unit-weight"
        ][unitWeight as keyof typeof unitWeight]["kg/m"];
      const totalWeight = weightPerMeter * length;
      setResult(`Total Weight: ${totalWeight.toFixed(2)} kg`);

      setSelectedProduct({
        name: product,
        "outer-diameter": outhDiametr,
        "diameter-in-mm": outhDiametrMm,
        "wall-thickness": wallThickness as string,
        "unit-weight": unitWeight as string,
        length: length?.toString() || "",
        weight: totalWeight.toFixed(2) + " kg",
      });
    } else {
      setResult("Please select all options and enter length.");
    }
  };

  useEffect(() => {
    calculateWeight();
  }, [outhDiametr, outhDiametrMm, wallThickness, unitWeight, length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
      <h1 className="col-span-full">Pancake Coil Calculator</h1>

      <label className="col-span-full grid gap-1">
        <p>Outer Diameter</p>
        <select
          onChange={(e) => {
            let value = e.target.value.split("-");
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
            ).map((innerKey) => {
              return (
                <option
                  key={`${outerKey}-${innerKey}`}
                  value={`${outerKey}-${innerKey}`}
                >
                  In {outerKey}, Mm {innerKey}
                </option>
              );
            });
          })}
        </select>
      </label>

      <label className="col-span-1 grid gap-1">
        <p>Wall Thickness</p>
        <select
          onChange={(e) =>
            setWallThickness(e.target.value as wallThicknessType)
          }
          className="select select-bordered"
          disabled={!outhDiametrMm || !outhDiametr}
        >
          <option value="">Select Wall Thickness</option>
          {outhDiametrMm &&
            outhDiametr &&
            Object.keys(
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "wall-thickness"
              ]
            ).map((key) => (
              <option key={key} value={key}>
                In{" "}
                {JSON.stringify(
                  TableData[product]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["wall-thickness"][key]["in"]
                )}
                , Mm{" "}
                {JSON.stringify(
                  TableData[product]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["wall-thickness"][key]["mm"]
                )}{" "}
              </option>
            ))}
        </select>
      </label>

      <label className="col-span-1 grid gap-1">
        <p>Unit Weight</p>
        <select
          onChange={(e) => setUnitWeight(e.target.value as unitWeightType)}
          className="select select-bordered"
          disabled={!outhDiametrMm || !outhDiametr}
        >
          <option value="">Select Unit Weight</option>
          {outhDiametrMm &&
            outhDiametr &&
            Object.keys(
              TableData[product]["outer-diameter"][outhDiametr][outhDiametrMm][
                "unit-weight"
              ]
            ).map((key) => (
              <option key={key} value={key}>
                lb/ft{" "}
                {JSON.stringify(
                  TableData[product]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["unit-weight"][key]["lb/ft"]
                )}{" "}
                kg/m{" "}
                {JSON.stringify(
                  TableData[product]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["unit-weight"][key]["kg/m"]
                )}
              </option>
            ))}
        </select>
      </label>

      <label className="col-span-1 grid gap-1">
        <p>Length (m)</p>
        <input
          type="number"
          className="input input-bordered w-full"
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />
      </label>

      <div className="col-span-full mb-5">
        {result && <p className="mt-4 text-lg">{result}</p>}
      </div>
    </div>
  );
};

export default Calc;
