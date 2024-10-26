import React from "react";
import RealtimeChart from "./chart";

function Hero() {
  return (
    <section className="relative">
      <video
        className="w-full h-screen object-cover absolute top-0 left-0 z-0 opacity-70"
        autoPlay={true}
        muted={true}
        loop={true}
        src={"/website.mp4"}
      ></video>

      <div className="relative z-20 text-white container grid grid-cols-1 items-center min-h-screen lg:grid-cols-2 mt-20 md:mt-10">
        {/* info */}
        <div className="flex flex-col gap-3 items-start">
          <p data-aos="fade-up" className="text-shadow-for-white-bg">
            ICG ga xush kelibsiz!
          </p>
          <h1
            className="text-shadow-for-white-bg text-5xl font-bold"
            data-aos="fade-up"
          >
            Qiymat yaratamiz
          </h1>
          <p data-aos="fade-up" className="text-shadow-for-white-bg">
            Biz yuqori sifatli maxsulotni taqdim etamiz bu sizga uzoq vaqt
            xizmat qiladi!
          </p>
          <button className="btn btn-primary" data-aos="fade-up">
            Biz haqimizda
          </button>
        </div>

        {/* chart */}
        <div>
          <RealtimeChart />
        </div>
      </div>

      <div className="video-shadow absolute bottom-0 left-0 w-full h-full"></div>
    </section>
  );
}

export default Hero;
