import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";
import { Mail, Phone } from "lucide-react";

type Props = {};

function AboutHero({}: Props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={logo}
          data-aos="fade-up"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1
            data-aos="fade-up"
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Infinity Couper Group
          </h1>
          <p data-aos="fade-up" className="mb-8 leading-relaxed">
            ICG (Infinity Copper Group) O'zbekistondagi yetakchi mis quvurlari
            yetkazib beruvchi kompaniya hisoblanadi. 2010 yilda tashkil topgan
            bo'lib, avtomobilsozlik, qurilish, maishiy texnika kabi turli
            sohalarda qo'llaniladigan mis quvurlar ishlab chiqaradi. Kompaniya
            mijozlar ehtiyojlarini qondirish va innovatsiyalarga asoslangan
            mahsulotlarni taklif etadi. Barcha mahsulotlar sof mineral
            xomashyodan ishlab chiqariladi. Kompaniya dunyo bo'ylab ko'plab
            hamkorlarga ega va sifatni birinchi o'ringa qo'yadi.
          </p>
          <div className="flex justify-center gap-4">
            <button data-aos="fade-up" className="btn btn-primary">
              <Phone size={22} />
              Aloqa
            </button>
            <button data-aos="fade-up" className="btn btn-outline">
              <Mail size={22} />
              Bog'lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
