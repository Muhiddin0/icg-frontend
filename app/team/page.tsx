import { TeamMembersList } from "@/constants/team";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TeamPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            Bining jamoamiz{" "}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Bizning jamoamizda o'zaro xamkorlik, o'zaro tushunish, o'zaro
            ishonch kuchli. Biz birgalikda ishlaymiz, birgalikda yutuqlarga
            erishamiz. Bizning jamoamizda katta yoshdagi tajribali
            mutaxassislardan tortib yoshlar va talabalarga qadar bo'lgan barcha
            kasblarga ega bo'lgan insonlar ishlaydi.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {TeamMembersList.map((item) => (
            <div key={item.fullname} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
                  src={item.avatar}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {item.fullname}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{item.role}</h3>
                  <Link
                    href={`tel:${item.phone}`}
                    className="mb-4 text-primary flex items-center gap-2"
                  >
                    <Phone size={18} />
                    {item.phone}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
