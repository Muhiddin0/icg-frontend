"use client";

import { NavigationsItems } from "@/constants/navigations";
import React from "react";

import { AlignJustify, ShoppingCart } from "lucide-react";
import Logo from "../common/logo/logo";
import LangSwitcherDropdown from "./lang";
import clsx from "clsx";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Lang } from "@/types/lang";

function Header() {
    const { lang }: { lang: Lang } = useParams();

    const [scrollHeight, setScrollHeight] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollHeight(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleCloseMobileNavbar() {
        // @ts-ignore
        const btns = document.querySelectorAll(
            ".drop-btn"
        ) as HTMLButtonElement[];

        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            element.click();
        }
    }

    return (
        <header
            className={clsx("fixed top-0 left-0 right-0 z-50 bg-white", {
                "header-active": scrollHeight > 0,
            })}
        >
            <div className="container navbar">
                {/* Mobile Menu */}
                <div className="navbar-start">
                    <details className="dropdown lg:hidden">
                        <summary className="drop-btn btn btn-ghost mr-3">
                            <AlignJustify />
                        </summary>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow">
                            {NavigationsItems[lang].map((item) =>
                                item.isSub ? (
                                    <li key={item.title}>
                                        <details>
                                            <summary className="drop-btn">
                                                {item.title}
                                            </summary>
                                            <ul className="p-2">
                                                {item.items?.map((subItem) => (
                                                    <li key={subItem.title}>
                                                        <Link
                                                            onClick={
                                                                handleCloseMobileNavbar
                                                            }
                                                            href={subItem.path}
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    </li>
                                ) : (
                                    <li key={item.title}>
                                        <Link
                                            onClick={handleCloseMobileNavbar}
                                            href={item.path as string}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </details>

                    <Logo />
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {NavigationsItems[lang].map((item) =>
                            item.isSub ? (
                                <li key={item.title}>
                                    <details>
                                        <summary className="drop-btn">
                                            {item.title}
                                        </summary>
                                        <ul className="p-2 z-50 whitespace-nowrap w-52">
                                            {item.items?.map((subItem) => (
                                                <li key={subItem.title}>
                                                    <Link href={subItem.path}>
                                                        {subItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            ) : (
                                <li key={item.title}>
                                    <Link href={item.path as string}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="navbar-end flex gap-3">
                    <LangSwitcherDropdown />
                    <Link href="/basket" className="rounded-full">
                        <ShoppingCart />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
