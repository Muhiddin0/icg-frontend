import { LangItems } from "@/constants/langs";
import { usePathname, useRouter } from "@/i18n/routing";
import { Lang } from "@/types/lang";
import Image from "next/image";
import { useParams } from "next/navigation";

import React from "react";

function LangSwitcherDropdown() {
    const { lang } = useParams();
    const currentLang = LangItems.filter((item) => item.lang === lang)[0];

    const route = useRouter();
    const pathname = usePathname();

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
                        <button
                            onClick={() => {
                                route.push(pathname, {
                                    locale: item.lang as Lang,
                                });
                            }}
                            className="flex items-center gap-2"
                        >
                            <Image
                                src={`https://flagcdn.com/${item.code}.svg`}
                                className="rounded-md"
                                alt={item.name}
                                width={40}
                                height={40}
                            />
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </details>
    );
}

export default LangSwitcherDropdown;
