"use client";

import { PartnorItems } from "@/constants/partnors";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";

function Partnors() {
  const t = useTranslations("partners");

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {PartnorItems.map((item) => (
              <div key={item.name} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-contain object-center h-full w-full p-5"
                    src={item.image}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {item.name}
                </h2>
                <p className="text-base leading-relaxed mt-2 line-clamp-4">
                  {item.deskription}
                </p>
                <Link
                  href={item.link}
                  className="text-primary inline-flex items-center mt-3"
                >
                  {t("buttonText")}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Partnors;
