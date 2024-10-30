import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {};

function AboutHero({}: Props) {
  const t = useTranslations("about.aboutHero");

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt={t("imageAlt")}
          src={logo}
          data-aos="fade-up"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1
            data-aos="fade-up"
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            {t("title")}
          </h1>
          <p data-aos="fade-up" className="mb-8 leading-relaxed">
            {t("description")}
          </p>
          <div className="flex justify-center gap-4">
            <button data-aos="fade-up" className="btn btn-primary">
              <Phone size={22} />
              {t("buttons.phone.label")}
            </button>
            <button data-aos="fade-up" className="btn btn-outline">
              <Mail size={22} />
              {t("buttons.mail.label")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
