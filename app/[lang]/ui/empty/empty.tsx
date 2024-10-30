import { Newspaper } from "lucide-react";
import React from "react";

function EmptyAnimation() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center flex-col">
      <Newspaper size={100} />
      <h1 className="lg:text-3xl text-xl font-semibold mt-4">
        Yangiliklar majud emas
      </h1>
      <p className="text-center text-gray-500 text-sm lg:text-base mt-4 max-w-lg">
        Biz sizni yangiliklar bilan tanishtiramiz. Ammo hozirgi vaqtda hech
        qanday yangiliklar mavjud emas. Iltimos, kelajakda qaytib tashrif
        buyuring.
      </p>
    </div>
  );
}

export default EmptyAnimation;
