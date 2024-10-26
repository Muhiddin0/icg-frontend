import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  desk: string;
  img: string;
  ltr: boolean;
  status: string;
};

export default function AboutInfo({ ltr, desk, img, title, status }: Props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-10">
        <div
          className={clsx(
            "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0",
            {
              "order-1": ltr,
            }
          )}
        >
          <img
            className="object-cover object-center rounded"
            data-aos={ltr ? "fade-left" : "fade-right"}
            alt="hero"
            src={img}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p
            data-aos={ltr ? "fade-right" : "fade-left"}
            className="text-primary"
          >
            {status}
          </p>
          <h1
            data-aos={ltr ? "fade-right" : "fade-left"}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            {title}
          </h1>
          <p
            data-aos={ltr ? "fade-right" : "fade-left"}
            className="mb-8 leading-relaxed"
          >
            {desk}
          </p>
        </div>
      </div>
    </section>
  );
}
