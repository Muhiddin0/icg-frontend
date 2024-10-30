import React from "react";

interface Props {
  title: string;
  desk?: string;
}

function SectionTitle({ title, desk }: Props) {
  return (
    <>
      <div className="text-center mb-20">
        <h1
          data-aos="fade-up"
          className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
        >
          {desk}
        </p>
        <div data-aos="fade-up" className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
        </div>
      </div>
    </>
  );
}

export default SectionTitle;
