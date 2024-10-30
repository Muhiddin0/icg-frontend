"use client";

import { MainProductsItems } from "@/constants/products";
import React from "react";
import ProductSteps from "../ui/product-steps/product-steps";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Lang } from "@/types/types";

function ProductsPage({ params: { lang } }: { params: { lang: Lang } }) {
  const t = useTranslations("products");

  // const seoImages = MainProductsItems.map(({ image_url, description }) => ({
  //   url: image_url,
  //   width: 1200,
  //   height: 630,
  //   alt: description,
  // }));

  // defaultSEOConfig.openGraph.images.push(...seoImages);

  return (
    <>
      <section>
        <div className="container mt-12 pb-20">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
              {t("subtitle")}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {t("title")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {MainProductsItems[lang].map((item, index) => (
              <div
                key={item.name}
                className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:[&>div>img]:scale-110"
              >
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full transition-all duration-200 ease-in-out"
                    src={item.image_url}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {item.name}
                </h2>
                <p className="text-base leading-relaxed mt-2 line-clamp-2">
                  {item.description}
                </p>
                <Link
                  href={"products/" + index}
                  className="text-primary inline-flex items-center mt-3"
                >
                  {t("link_text")}

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

      <ProductSteps />
    </>
  );
}

export default ProductsPage;
