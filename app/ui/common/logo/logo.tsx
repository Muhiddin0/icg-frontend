import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        className="w-12"
        src={logo}
        alt={"logo"}
        width={100}
        height={100}
      />
    </Link>
  );
}

export default Logo;
