import React from "react";

import { ProductsItem } from "@/constants/products";
import SectionTitle from "../common/section-title/section-title";

function ProductsList() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle
          title="Mahsulotlarimiz"
          desk="ICG.UZ kompaniyasi zamonaviy texnologiyalarga asoslangan yuqori
            sifatli mahsulotlar va yechimlar taklif etadi. Ular mijozlar
            ehtiyojlarini qondirish uchun moslashuvchan va innovatsion
            xizmatlarni taqdim etishga intiladi. Kompaniya mahsulotlari har bir
            mijozga individual yondashuv bilan ishlab chiqiladi, bu esa ularning
            ishonchini qozonishga yordam beradi."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {ProductsItem.map(({ image, title }) => (
            <div
              data-aos="fade-up"
              className="product-card card bg-red-400 hover:bg-transparent image-full shadow-xl"
            >
              <figure>
                <img
                  className="product-img transition-all duration-300 ease-in-out scale-100"
                  src={image}
                  alt={title}
                />
              </figure>
              <div className="card-body transition-all duration-300 ease-in-out">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
