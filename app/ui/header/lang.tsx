import { LangItems } from "@/constants/langs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LangSwitcherDropdown() {
  return (
    <details className="dropdown dropdown-end">
      <summary className="">
        <Image
          src={`https://flagcdn.com/${LangItems[0].code}.svg`}
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
    // <div className="flex-none">
    //   <ul tabIndex={0} className="menu menu-horizontal px-1">
    //     <details>
    //       <summary>Lang</summary>
    //       <ul className="bg-base-100 rounded-t-none p-2">
    //         {LangItems.map((item) => (
    //           <li key={item.code}>
    //             <Link
    //               className="flex items-center gap-2"
    //               href={"/" + item.lang}
    //             >
    //               <Image
    //                 src={`https://flagcdn.com/${item.code}.svg`}
    //                 className="rounded-md"
    //                 alt={item.name}
    //                 width={40}
    //                 height={40}
    //               />
    //               {item.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </details>
    //   </ul>
    // </div>
  );
}

export default LangSwitcherDropdown;
