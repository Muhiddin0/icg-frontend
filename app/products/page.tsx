import { MainProductsItems } from "@/constants/products";
import React from "react";
import ProductSteps from "../ui/product-steps/product-steps";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <section>
        <div className="container mt-12 pb-20">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
              Jahon standartlarifagi maxsulotlar
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Mahsulotlarimiz
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              ICG.UZ kompaniyasi zamonaviy texnologiyalarga asoslangan yuqori
              sifatli mahsulotlar va yechimlar taklif etadi. Ular mijozlar
              ehtiyojlarini qondirish uchun moslashuvchan va innovatsion
              xizmatlarni taqdim etishga intiladi. Kompaniya mahsulotlari har
              bir mijozga individual yondashuv bilan ishlab chiqiladi, bu esa
              ularning ishonchini qozonishga yordam beradi.
            </p>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {MainProductsItems.map((item, index) => (
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
                  Olish
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

export default AboutPage;
