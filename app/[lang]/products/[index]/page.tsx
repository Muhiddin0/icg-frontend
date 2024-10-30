import React from "react";

import { MainProductsItems } from "@/constants/products";
import Calc from "@/app/[lang]/ui/calc/calc";
import { Lang } from "@/types/types";
import ProductTableGenrator from "../../ui/table/table";
import { TableData } from "@/constants/coil";

type Props = {
  params: {
    index: string;
    lang: Lang;
  };
};

const ProductDetail = ({ params: { index, lang } }: Props) => {
  const product = MainProductsItems[lang][+index];
  console.log("🚀 ~ ProductDetail ~ product:", product);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={product.image_url}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">{product.description}</p>

            {product.tcode && <Calc product={product.tcode as any} />}
            <div className="flex">
              <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/50 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 mx-auto">
        <ProductTableGenrator
          product={product.tcode as keyof typeof TableData}
        />
      </div>
    </section>
  );
};

export default ProductDetail;
