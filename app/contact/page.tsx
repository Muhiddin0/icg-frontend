import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=41.2988889,69.3272222&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Manzil
              </h2>
              <p className="mt-1">
                Toshkent shahar, Yashnobod tumani, Elbek ko`chasi, 61-uy
                (do`stlik metrosi tarafidan, oldingi Chkalova metrosi)
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link
                href={"mailto:info@icg.uz"}
                className="text-primary leading-relaxed"
              >
                info@icg.uz
              </Link>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Xalqaro telefon
              </h2>
              <Link href={"tel:+998998117222"} className="leading-relaxed">
                +998 99 811 72 22
              </Link>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Mahalliy
              </h2>
              <Link href={"tel:+998983000062"} className="leading-relaxed">
                tel:+998 98 300 00 62
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Aloqa
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Biz bilan bog'lanishingiz yoki be'pul maslaxat olishingiz mumkun
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Ism
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email yoki Telefon
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/40 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full bg-white rounded border border-gray-300 focus:border-primary/50 focus:ring-2 focus:ring-primary/40 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/90 rounded text-lg transition-all duration-200">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
