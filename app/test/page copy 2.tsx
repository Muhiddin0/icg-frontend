"use client";

import React, { useState } from "react";

interface TubeData {
  diameter: string;
  weightLbPerFt: number;
  weightKgPerM: number;
}

const tubeSizes: TubeData[] = [
  { diameter: "3/16", weightLbPerFt: 0.028, weightKgPerM: 0.043 },
  { diameter: "5.00", weightLbPerFt: 0.0308, weightKgPerM: 0.046 },
  { diameter: "6.00", weightLbPerFt: 0.052, weightKgPerM: 0.077 },
  { diameter: "1/4", weightLbPerFt: 0.053, weightKgPerM: 0.079 },
  // Add more data as needed
];

const Calculator = () => {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const handleCalculate = () => {
    const selectedTube = tubeSizes.find((tube) => tube.diameter === diameter);
    if (selectedTube && length) {
      const lengthFt = Number(length);
      setWeightLbs((selectedTube.weightLbPerFt * lengthFt).toFixed(2));
      setWeightKg((selectedTube.weightKgPerM * lengthFt * 0.3048).toFixed(2)); // Convert feet to meters
    }
  };

  const handleClear = () => {
    setDiameter("");
    setLength("");
    setWeightLbs("");
    setWeightKg("");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg space-y-4">
      <h2 className="text-center text-lg font-semibold">
        Qadringizni kiriting:
      </h2>

      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">Diameter:</label>
        <select
          value={diameter}
          onChange={(e) => setDiameter(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Tanlang</option>
          {tubeSizes.map((tube, index) => (
            <option key={index} value={tube.diameter}>
              {tube.diameter}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">Length (ft):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Hisoblash
        </button>
        <button
          onClick={handleClear}
          className="w-full bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Clear
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-red-500 font-semibold">Natijalar:</h3>
        <div className="space-y-2">
          <div>
            <label className="block font-medium">Hisoblangan vazn (lb):</label>
            <input
              type="text"
              readOnly
              value={weightLbs}
              placeholder="Lbs"
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block font-medium">Hisoblangan vazn (kg):</label>
            <input
              type="text"
              readOnly
              value={weightKg}
              placeholder="kg"
              className="w-full border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

// "use client";

// import React, { useState } from "react";

// const Calculator = () => {
//   const [material, setMaterial] = useState("Mis");
//   const [shape, setShape] = useState("Dumaloq");
//   const [quantity, setQuantity] = useState(1);
//   const [diameter, setDiameter] = useState("");
//   const [length, setLength] = useState("");
//   const [weightLbs, setWeightLbs] = useState("");
//   const [weightKg, setWeightKg] = useState("");

//   const handleCalculate = () => {
//     // Add your calculation logic here based on the input values
//     // For demonstration, I am setting a dummy calculation.
//     setWeightLbs((Number(diameter) * Number(length) * 0.5).toFixed(2));
//     setWeightKg((Number(diameter) * Number(length) * 0.22).toFixed(2));
//   };

//   const handleClear = () => {
//     setMaterial("Mis");
//     setShape("Dumaloq");
//     setQuantity(1);
//     setDiameter("");
//     setLength("");
//     setWeightLbs("");
//     setWeightKg("");
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg space-y-4">
//       <h2 className="text-center text-lg font-semibold">
//         Qadringizni kiriting:
//       </h2>

//       <div className="space-y-2">
//         <label className="block text-gray-700 font-medium">Material:</label>
//         <select
//           value={material}
//           onChange={(e) => setMaterial(e.target.value)}
//           className="w-full border rounded px-2 py-1"
//         >
//           <option>Mis</option>
//           <option>Temir</option>
//           <option>Oltin</option>
//         </select>
//       </div>

//       <div className="space-y-2">
//         <label className="block text-gray-700 font-medium">Shakl:</label>
//         <select
//           value={shape}
//           onChange={(e) => setShape(e.target.value)}
//           className="w-full border rounded px-2 py-1"
//         >
//           <option>Dumaloq</option>
//           <option>Kvadrat</option>
//           <option>Uchburchak</option>
//         </select>
//       </div>

//       <div className="space-y-2">
//         <label className="block text-gray-700 font-medium">Miqdori:</label>
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           className="w-full border rounded px-2 py-1"
//         />
//       </div>

//       <div className="space-y-2">
//         <label className="block text-gray-700 font-medium">Diameter:</label>
//         <input
//           type="text"
//           value={diameter}
//           onChange={(e) => setDiameter(e.target.value)}
//           className="w-full border rounded px-2 py-1"
//         />
//       </div>

//       <div className="space-y-2">
//         <label className="block text-gray-700 font-medium">Length:</label>
//         <input
//           type="text"
//           value={length}
//           onChange={(e) => setLength(e.target.value)}
//           className="w-full border rounded px-2 py-1"
//         />
//       </div>

//       <div className="flex space-x-4">
//         <button
//           onClick={handleCalculate}
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Hisoblash
//         </button>
//         <button
//           onClick={handleClear}
//           className="w-full bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//         >
//           Clear
//         </button>
//       </div>

//       <div className="mt-4">
//         <h3 className="text-red-500 font-semibold">Natijalar:</h3>
//         <div className="space-y-2">
//           <div>
//             <label className="block font-medium">Hisoblangan vazn:</label>
//             <input
//               type="text"
//               readOnly
//               value={weightLbs}
//               placeholder="Lbs"
//               className="w-full border rounded px-2 py-1"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Hisoblangan vazn:</label>
//             <input
//               type="text"
//               readOnly
//               value={weightKg}
//               placeholder="kg"
//               className="w-full border rounded px-2 py-1"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

// "use client";

// import { TableData } from "@/constants/coil";
// import React, { useState } from "react";

// type Props = {};

// type outhDiametrType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"];

// type outhDiametrMmType =
//   keyof (typeof TableData)["Pancake Coil"]["outer-diameter"][outhDiametrType];

// const Calc = (props: Props) => {
//   const [outhDiametr, setOuthDiametr] = useState<outhDiametrType>();
//   const [outhDiametrMm, setOuthDiametrMm] = useState<outhDiametrMmType>();
//   const [wallThickness, setWallThickness] = useState();

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
//             <p>mm</p>
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

//           {/* <label className="grid gap-1" htmlFor="">
//             <p>mm</p>
//             <select
//               onChange={(e) => setMm(e.target.value as mmType)}
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
//           </label> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calc;
