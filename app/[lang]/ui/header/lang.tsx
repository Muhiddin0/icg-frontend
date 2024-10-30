import { LangItems } from "@/constants/langs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import React from "react";

function LangSwitcherDropdown() {
  const { lang } = useParams();
  const currentLang = LangItems.filter((item) => item.lang === lang)[0];

  return (
    <details className="dropdown dropdown-end">
      <summary className="">
        <Image
          src={`https://flagcdn.com/${currentLang.code}.svg`}
          className="rounded-md"
          alt={LangItems[0].code}
          width={40}
          height={40}
        />
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-2">
        {LangItems.map((item) => (
          <li key={item.code}>
            <Link className="flex items-center gap-2" href={"/" + item.lang}>
              <Image
                src={`https://flagcdn.com/${item.code}.svg`}
                className="rounded-md"
                alt={item.name}
                width={40}
                height={40}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default LangSwitcherDropdown;
