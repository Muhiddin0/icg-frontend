"use client";

import { TableData } from "@/constants/coil";
import React, { useState } from "react";

type outhDiametrType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

type outhDiametrMmType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

type wallThicknessType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["wall-thickness"];

type unitWeightType =
  keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["unit-weight"];

const Calc = () => {
  const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
  const [outhDiametrMm, setOuthDiametrMm] = useState<outhDiametrMmType>();
  const [wallThickness, setWallThickness] = useState<wallThicknessType>();
  const [unitWeight, setUnitWeight] = useState<unitWeightType>();
  const [length, setLength] = useState<number | null>();
  const [result, setResult] = useState<string | null>(null);

  const calculateWeight = () => {
    if (outhDiametr && outhDiametrMm && wallThickness && unitWeight && length) {
      const weightPerMeter =
        TableData["Pancake Coil"]["outer-diameter"][outhDiametr][outhDiametrMm][
          "unit-weight"
        ][unitWeight as keyof typeof unitWeight]["kg/m"];
      const totalWeight = weightPerMeter * length;
      setResult(`Total Weight: ${totalWeight.toFixed(2)} kg`);
    } else {
      setResult("Please select all options and enter length.");
    }
  };

  return (
    <section>
      <div className="container py-28 flex items-center justify-center min-h-screen">
        <div className="flex flex-col rounded-lg shadow-lg bg-white p-4 w-[400px] gap-6">
          <h1>Pancake Coil Calculator</h1>

          <label className="grid gap-1">
            <p>Outer Diameter</p>
            <select
              onChange={(e) =>
                setOuthDiametr(e.target.value as outhDiametrType)
              }
              className="select select-bordered"
            >
              <option value="">Select Outer Diameter</option>
              {Object.keys(TableData["Pancake Coil"]["outer-diameter"]).map(
                (key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                )
              )}
            </select>
          </label>

          <label className="grid gap-1">
            <p>Diameter in mm</p>
            <select
              onChange={(e) =>
                setOuthDiametrMm(e.target.value as outhDiametrMmType)
              }
              className="select select-bordered"
              disabled={!outhDiametr}
            >
              <option value="">Select Diameter in mm</option>
              {outhDiametr &&
                Object.keys(
                  TableData["Pancake Coil"]["outer-diameter"][outhDiametr]
                ).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
            </select>
          </label>

          <label className="grid gap-1">
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
                  TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["wall-thickness"]
                ).map((key) => (
                  <option key={key} value={key}>
                    mm{" "}
                    {JSON.stringify(
                      TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                        outhDiametrMm
                      ]["wall-thickness"][key]["mm"]
                    )}{" "}
                    in{" "}
                    {JSON.stringify(
                      TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                        outhDiametrMm
                      ]["wall-thickness"][key]["in"]
                    )}
                  </option>
                ))}
            </select>
          </label>

          <label className="grid gap-1">
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
                  TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                    outhDiametrMm
                  ]["unit-weight"]
                ).map((key) => (
                  <option key={key} value={key}>
                    lb/ft{" "}
                    {JSON.stringify(
                      TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                        outhDiametrMm
                      ]["unit-weight"][key]["lb/ft"]
                    )}{" "}
                    kg/m{" "}
                    {JSON.stringify(
                      TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
                        outhDiametrMm
                      ]["unit-weight"][key]["kg/m"]
                    )}
                  </option>
                ))}
            </select>
          </label>

          <label className="grid gap-1">
            <p>Length (m)</p>
            <input
              type="number"
              className="input input-bordered w-full"
              onChange={(e) => setLength(parseFloat(e.target.value))}
            />
          </label>

          <button onClick={calculateWeight} className="btn btn-primary">
            Calculate
          </button>

          {result && <p className="mt-4 text-lg">{result}</p>}
        </div>
      </div>
    </section>
  );
};

export default Calc;

// "use client";

// import { TableData } from "@/constants/coil";
// import React, { useState } from "react";

// type Props = {};

// type OuterDiameterType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

// type OuterDiameterMmType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][OuterDiameterType];

// type WallThicknessType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][OuterDiameterMmType]["wall-thickness"];

// type UnitWeightType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][OuterDiameterMmType]["unit-weight"];

// const Calc = (props: Props) => {
//   const [outerDiameter, setOuterDiameter] = useState<OuterDiameterType>();
//   const [outerDiameterMm, setOuterDiameterMm] = useState<OuterDiameterMmType>();
//   const [wallThickness, setWallThickness] = useState<WallThicknessType>();
//   const [unitWeight, setUnitWeight] = useState<UnitWeightType>();
//   const [length, setLength] = useState<number | null>();
//   const [calculatedWeight, setCalculatedWeight] = useState<number | null>(null);

//   const handleCalculate = () => {
//     if (
//       outerDiameter &&
//       outerDiameterMm &&
//       wallThickness &&
//       unitWeight &&
//       length
//     ) {
//       const weightPerUnit =
//         TableData["Pancake Coil"]["outer-diameter"][outerDiameter][
//           outerDiameterMm
//         ]["unit-weight"][unitWeight];
//       const totalWeight = weightPerUnit * length;
//       setCalculatedWeight(totalWeight);

//       console.log("🤓 ~ page.tsx:36 -> weightPerUnit: ", weightPerUnit);
//     } else {
//       setCalculatedWeight(null);
//     }
//   };

//   return (
//     <section>
//       <div className="container py-28 flex items-center justify-center min-h-screen">
//         <div className="flex flex-col rounded-lg shadow-lg bg-white p-4 w-[400px] gap-6">
//           <h1>Pancake Coil Calculator</h1>

//           <label className="grid gap-1">
//             <p>Outer Diameter</p>
//             <select
//               onChange={(e) =>
//                 setOuterDiameter(e.target.value as OuterDiameterType)
//               }
//               className="select select-bordered"
//             >
//               {Object.keys(TableData["Pancake Coil"]["outer-diameter"]).map(
//                 (key) => (
//                   <option key={key} value={key}>
//                     {key}
//                   </option>
//                 )
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1">
//             <p>Diameter in mm</p>
//             <select
//               onChange={(e) =>
//                 setOuterDiameterMm(e.target.value as OuterDiameterMmType)
//               }
//               className="select select-bordered"
//             >
//               {outerDiameter ? (
//                 Object.keys(
//                   TableData["Pancake Coil"]["outer-diameter"][outerDiameter]
//                 ).map((key) => (
//                   <option key={key} value={key}>
//                     {key}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Wall Thickness</p>
//             <select
//               onChange={(e) =>
//                 setWallThickness(e.target.value as WallThicknessType)
//               }
//               className="select select-bordered"
//             >
//               {outerDiameterMm && outerDiameter ? (
//                 Object.values(
//                   TableData["Pancake Coil"]["outer-diameter"][outerDiameter][
//                     outerDiameterMm
//                   ]["wall-thickness"]["min"]
//                 ).map((value: any) => (
//                   <option key={value} value={value}>
//                     {value}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Unit Weight</p>
//             <select
//               onChange={(e) => setUnitWeight(e.target.value as UnitWeightType)}
//               className="select select-bordered"
//             >
//               {outerDiameterMm && outerDiameter ? (
//                 Object.values(
//                   TableData["Pancake Coil"]["outer-diameter"][outerDiameter][
//                     outerDiameterMm
//                   ]["unit-weight"]["min"]
//                 ).map((value: any) => (
//                   <option key={value} value={value}>
//                     {value}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>
//           <label className="grid gap-1">
//             <p>Length (m)</p>
//             <input
//               className="input input-bordered w-full"
//               type="number"
//               onChange={(e) => setLength(+e.target.value)}
//             />
//           </label>

//           <div>
//             <button className="btn btn-primary" onClick={handleCalculate}>
//               Hisoblash
//             </button>
//           </div>

//           {calculatedWeight !== null && (
//             <div className="mt-4">
//               <p>Calculated Weight: {calculatedWeight.toFixed(2)} kg</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calc;

// "use client";

// import { TableData } from "@/constants/coil";
// import React, { useState } from "react";

// type Props = {};

// type outhDiametrType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

// type outhDiametrMmType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

// type setWallThicknessType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["wall-thickness"];

// type unitWeightType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrMmType]["unit-weight"];

// const Calc = (props: Props) => {
//   const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
//   const [outhDiametrMm, setOuthDiametrMm] = useState<outhDiametrMmType>();
//   const [wallThickness, setWallThickness] = useState<setWallThicknessType>();
//   const [unitWeight, setUnitWeight] = useState<unitWeightType>();

//   const [length, setLength] = useState<number | null>();

//   return (
//     <section>
//       <div className="container py-28 flex items-center justify-center min-h-screen">
//         <div className="flex flex-col rounded-lg shadow-lg bg-white p-4 w-[400px] gap-6">
//           <h1>Pancake coil calc</h1>

//           <label className="grid gap-1" htmlFor="">
//             <p>Outh diametr</p>
//             <select
//               onChange={(e) =>
//                 setOuthDiametr(e.target.value as outhDiametrType)
//               }
//               className="select select-bordered"
//             >
//               {Object.keys(TableData["Pancake Coil"]["outer-diameter"]).map(
//                 (key) => (
//                   <option key={key} value={key}>
//                     {key}
//                   </option>
//                 )
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Mm</p>
//             <select
//               onChange={(e) =>
//                 setOuthDiametrMm(e.target.value as outhDiametrMmType)
//               }
//               className="select select-bordered"
//             >
//               {outhDiametr ? (
//                 Object.keys(
//                   TableData["Pancake Coil"]["outer-diameter"][outhDiametr]
//                 ).map((key) => (
//                   <option key={key} value={key}>
//                     {key}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Wall Thickness</p>
//             <select
//               onChange={(e) =>
//                 setWallThickness(e.target.value as setWallThicknessType)
//               }
//               className="select select-bordered"
//             >
//               {outhDiametrMm && outhDiametr ? (
//                 Object.values(
//                   TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
//                     outhDiametrMm
//                   ]["wall-thickness"]["min"]
//                 ).map((value: any) => (
//                   <option key={value} value={value}>
//                     {value}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Unit Weight</p>
//             <select
//               onChange={(e) => setUnitWeight(e.target.value as unitWeightType)}
//               className="select select-bordered"
//             >
//               {outhDiametrMm && outhDiametr ? (
//                 Object.values(
//                   TableData["Pancake Coil"]["outer-diameter"][outhDiametr][
//                     outhDiametrMm
//                   ]["unit-weight"]["min"]
//                 ).map((value: any) => (
//                   <option key={value} value={value}>
//                     {value}
//                   </option>
//                 ))
//               ) : (
//                 <option disabled>-------------</option>
//               )}
//             </select>
//           </label>

//           <label className="grid gap-1" htmlFor="">
//             <p>Length</p>
//             <input
//               className="input input-bordered w-full "
//               type="text"
//               onChange={(e) => setLength(+e.target.value)}
//             />
//           </label>

//           <div>
//             <button className="btn btn-primary">Hisoblash</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calc;
