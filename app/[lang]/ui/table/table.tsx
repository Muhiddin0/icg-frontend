import React from "react";

import { TableData } from "@/constants/coil";
import CoilTable from "./pancake-coil";
import LWC from "./lwc";
import StraightCopperPipeTable from "./straight-copper-pipes";

type Props = {
  product: keyof typeof TableData;
};

export default function Table({ product }: Props) {
  if (product === "Pancake Coil") return <CoilTable />;
  else if (product === "LWC Copper Tube Sizes") return <LWC />;
  else if (product === "Straight copper pipes")
    return <StraightCopperPipeTable />;
}
