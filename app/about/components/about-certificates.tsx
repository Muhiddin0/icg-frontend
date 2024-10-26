import Image from "next/image";
import Link from "next/link";
import React from "react";

import certificate1 from "@/assets/certificates/certificates (1).jpg";
import certificate2 from "@/assets/certificates/certificates (2).jpg";
import certificate3 from "@/assets/certificates/certificates (3).jpg";

function Certificates() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div data-aos={"fade-right"} className="p-4 md:w-1/3">
            <Link
              href={"/"}
              className="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <Image
                className="w-full object-cover object-center hover:shadow-xl transition-all duration-300 rounded-xl"
                src={certificate1}
                alt="blog"
              />
            </Link>
          </div>
          <div data-aos={"fade-up"} className="p-4 md:w-1/3">
            <Link
              href={"/"}
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <Image
                className="w-full object-cover object-center hover:shadow-xl transition-all duration-300 rounded-xl"
                src={certificate2}
                alt="blog"
              />
            </Link>
          </div>
          <div data-aos={"fade-left"} className="p-4 md:w-1/3">
            <Link
              href={"/"}
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <Image
                className="w-full object-cover object-center hover:shadow-xl transition-all duration-300 rounded-xl"
                src={certificate3}
                alt="blog"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
