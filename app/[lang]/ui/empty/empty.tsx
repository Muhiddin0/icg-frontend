"use client";

import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function EmptyAnimation() {
  const t = useTranslations("news.empty");
  return (
    <div className="w-full h-[80vh] flex items-center justify-center flex-col">
      <Newspaper size={100} />
      <h1 className="lg:text-3xl text-xl font-semibold mt-4">{t("title")}</h1>
      <p className="text-center text-gray-500 text-sm lg:text-base mt-4 max-w-lg">
        {t("description")}
      </p>
    </div>
  );
}

export default EmptyAnimation;
