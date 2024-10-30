import { TableData } from "@/constants/coil";
import React from "react";

const CoilTable = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="overflow-auto">
        <table className="table-auto border-collapse w-full text-left bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4 border">Outer Diameter</th>
              <th className="p-4 border">Size</th>
              <th className="p-4 border">Wall Thickness (in/mm)</th>
              <th className="p-4 border">Unit Weight (lb/ft, kg/m)</th>
              <th className="p-4 border">Length (ft, m)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(TableData["Pancake Coil"]["outer-diameter"]).map(
              ([diameter, sizes], idx) =>
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
                      {`${details.length.ft} ft`}
                      <br />
                      {`${details.length.m} m`}
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

export default CoilTable;
