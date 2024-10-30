import React from "react";

import CoilTable from "./pancake-coil";
import { TableData } from "@/constants/coil";

type Props = {
  product: keyof typeof TableData;
};

export default function Table({ product }: Props) {
  if (product === "Pancake Coil") return <CoilTable />;
}
