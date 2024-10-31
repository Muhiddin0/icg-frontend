import React from "react";

import { TableData } from "@/constants/coil";
import CoilTable from "./pancake-coil";
import LWC from "./lwc";
import StraightCopperPipeTable from "./straight-copper-pipes";
import ElbowTable from "./elbow";

type Props = {
  product: keyof typeof TableData;
  ft?: boolean;
};

export default function Table({ product, ft }: Props) {
  if (ft) return <ElbowTable />;

  if (product === "Pancake Coil") return <CoilTable />;
  else if (product === "LWC Copper Tube Sizes") return <LWC />;
  else if (product === "Straight copper pipes")
    return <StraightCopperPipeTable />;
}
