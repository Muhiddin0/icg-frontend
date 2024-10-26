"use client";

import React from "react";

import CountUp from "react-countup";

type Props = {};

function AboutStatistcs({}: Props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <p data-aos="fade-up" className="text-center text-primary">
          Infinity Copper Group
        </p>
        <h1
          data-aos="fade-up"
          className="text-4xl font-medium title-font text-gray-900 mb-12 text-center"
        >
          Natijalarimiz
        </h1>
        <div className="px-5 pb-16 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2
                data-aos="fade-up"
                className="title-font font-medium sm:text-4xl text-3xl text-green-500"
              >
                <CountUp end={5} />
                mln+
              </h2>
              <p data-aos="fade-up" className="leading-relaxed">
                Yetkazib berilgan maxsulotlarimiz
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2
                data-aos="fade-up"
                className="title-font font-medium sm:text-4xl text-3xl text-primary"
              >
                <CountUp end={100} />+
              </h2>
              <p data-aos="fade-up" className="leading-relaxed">
                Butun dunyo bo'ylab hamkorlar
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2
                data-aos="fade-up"
                className="title-font font-medium sm:text-4xl text-3xl text-purple-500"
              >
                <CountUp end={1000} />+
              </h2>
              <p data-aos="fade-up" className="leading-relaxed">
                Bizdan xursand mijozlar
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2
                data-aos="fade-up"
                className="title-font font-medium sm:text-4xl text-3xl text-blue-500"
              >
                <CountUp end={10} delay={2} />+
              </h2>
              <p data-aos="fade-up" className="leading-relaxed">
                Yirik ish tajribamiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStatistcs;
