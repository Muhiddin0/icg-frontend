import { useTranslations } from "next-intl";
import React from "react";

function ManualPage() {
    const t = useTranslations("manuals");

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-primary 500 tracking-widest font-medium title-font mb-1">
                            {t("header.subtitle")}
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            {t("header.title")}
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            {t("description")}
                        </p>
                    </div>
                    <div className="">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                                src="https://drive.google.com/file/d/13OrgCC96JBfhxkRu7bMw70P7ieNzBCdN/preview"
                                allow="autoplay"
                                className="w-full h-[80vh]"
                            ></iframe>

                            {/* <embed
                                src="https://drive.google.com/file/d/13OrgCC96JBfhxkRu7bMw70P7ieNzBCdN/view?usp=drive_link"
                                type=""
                                className="w-full h-[800px]"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ManualPage;
