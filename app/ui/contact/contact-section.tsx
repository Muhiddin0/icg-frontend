import React from "react";
import SectionTitle from "../common/section-title/section-title";

function ContactSection() {
  return (
    <section>
      <div className="container px-5 pt-24 mx-auto">
        <SectionTitle
          title="Bog'lanish"
          desk="Sizning xabarlar va takliflaringizni eshitishdan mamnunmiz. Quyidagi forma orqali bizga murojaat qiling."
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
              Aloqa
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Biz bilan bog'lanishingiz yoki be'pul maslaxat olishingiz mumkun
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email yoki Telefon
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Xabar
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Jo'natish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
