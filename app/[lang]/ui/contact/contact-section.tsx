import React from "react";
import SectionTitle from "../common/section-title/section-title";
import { useTranslations } from "next-intl";

function ContactSection() {
  const t = useTranslations("home.contact");

  return (
    <section>
      <div className="container px-5 pt-24 mx-auto">
        <SectionTitle
          title={t("sectionTitle.title")}
          desk={t("sectionTitle.description")}
        />
      </div>

      <div className="text-gray-600 body-font relative mt-12">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=41.2988889,69.3272222&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {t("contactForm.heading")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("contactForm.description")}
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                {t("contactForm.emailOrPhone")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border  focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              ></label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border ring-primary/30 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/50 rounded text-lg">
              {t("contactForm.submitButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
