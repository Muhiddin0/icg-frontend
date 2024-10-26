import React from "react";

function ManualPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-primary 500 tracking-widest font-medium title-font mb-1">
            ICG companiyasi jahon bozorida
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Exportlarimiz
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            ICG kompaniyasi o‘zining mis quvurlari va boshqa mahsulotlarini
            dunyoning ko‘plab davlatlariga muvaffaqiyatli eksport qiladi.
            Kompaniya mahsulotlari yuqori sifatga ega bo‘lib, global talabga mos
            ravishda ishlab chiqariladi. ICG xalqaro bozorda ishonchli hamkor
            sifatida tan olingan va ko‘plab davlatlarga uzluksiz yetkazib
            beradi. Eksport hajmi kompaniyaning raqobatbardoshligini oshiradi va
            keng miqyosda qo‘llaniladi.
          </p>
        </div>
        <div className="">
          <div className="rounded-lg overflow-hidden">
            <embed
              src="https://icg.uz/static/assets/files/catalogue1.pdf"
              type=""
              className="w-full h-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManualPage;
