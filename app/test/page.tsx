"use client";

import { TableData } from "@/constants/coil";
import React, { useState } from "react";

type Props = {};

type outhDiametrType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

type mmType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

const Calc = (props: Props) => {
  const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
  const [mm, setMm] = useState<mmType>();

  return (
    <section>
      <div className="container py-28 flex items-center justify-center min-h-screen">
        <div className="flex flex-col rounded-lg shadow-lg bg-white p-4 w-[400px] gap-6">
          <h1>Pancake coil calc</h1>

          <label className="grid gap-1" htmlFor="">
            <p>Outh diametr</p>
            <select
              onChange={(e) =>
                setOuthDiametr(e.target.value as outhDiametrType)
              }
              className="select select-bordered"
            >
              {Object.keys(TableData["Pancake Coil"]["outer-diameter"]).map(
                (key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                )
              )}
            </select>
          </label>

          <label className="grid gap-1" htmlFor="">
            <p>mm</p>
            <select
              onChange={(e) => setMm(e.target.value as mmType)}
              className="select select-bordered"
            >
              {outhDiametr ? (
                Object.keys(
                  TableData["Pancake Coil"]["outer-diameter"][outhDiametr]
                ).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))
              ) : (
                <option disabled>-------------</option>
              )}
            </select>
          </label>

          {/* <label className="grid gap-1" htmlFor="">
            <p>mm</p>
            <select
              onChange={(e) => setMm(e.target.value as mmType)}
              className="select select-bordered"
            >
              {outhDiametr ? (
                Object.keys(
                  TableData["Pancake Coil"]["outer-diameter"][outhDiametr]
                ).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))
              ) : (
                <option disabled>-------------</option>
              )}
            </select>
          </label> */}
        </div>
      </div>
    </section>
  );
};

export default Calc;
