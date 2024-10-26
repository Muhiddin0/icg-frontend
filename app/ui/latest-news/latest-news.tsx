import { NewsItems } from "@/constants/news";
import { Calendar, MoveRight } from "lucide-react";
import React from "react";
import SectionTitle from "../common/section-title/section-title";

function LatestNews() {
  return (
    <section>
      <div className="container mt-16">
        <h1 className="text-4xl text-center"></h1>
        <SectionTitle
          title="So'ngi yangiliklar"
          desk="So'ngi yangiliklar - bu yerda bizning kompaniyaning yangi mahsulotlari, xizmatlari va yutuqlari haqida ma'lumotlar keltiriladi. Shuningdek, bu yerda bizning ustozlarimiz va hamkorlarimizning maqolalari, intervyulari va boshqa yangiliklari keltiriladi."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {NewsItems.map(({ date, img, title }) => (
            <div
              key={title}
              className="card card-compact bg-base-100 w-full shadow-xl"
            >
              <figure>
                <img
                  className="h-[250px] w-full object-cover rounded-xl"
                  src={img}
                  alt={title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title line-clamp-1">{title}</h2>
                <p className="line-clamp-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  atque temporibus, sunt tenetur hic dolorum tempora neque
                  molestias perferendis aspernatur nisi numquam provident
                  distinctio itaque, nulla architecto animi? Expedita,
                  laudantium.
                </p>
                <p className="flex items-center gap-2">
                  <Calendar size={20} />
                  {date}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">O'qish</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
