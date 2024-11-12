"use client";

import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";
import ContactForm from "../ui/contact/contact-form";

function ContactPage() {
    const t = useTranslations("contact");

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=41.2988889,69.3272222&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{
                                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                            }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    {t("title")}
                                </h2>
                                <p className="mt-1">{t("description")}</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font  font-semibold text-gray-900 tracking-widest text-xs">
                                    {t("contact_info.email.heading")}
                                </h2>
                                <Link
                                    href={"mailto:info@icg.uz"}
                                    className="text-primary leading-relaxed"
                                >
                                    {t("contact_info.email.link")}
                                </Link>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    {t(
                                        "contact_info.international_phone.heading"
                                    )}
                                </h2>
                                <Link
                                    href={"tel:+998998117222"}
                                    className="leading-relaxed"
                                >
                                    +998 99 811 72 22
                                </Link>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    {t("contact_info.local_phone.heading")}
                                </h2>
                                <Link
                                    href={"tel:+998983000062"}
                                    className="leading-relaxed"
                                >
                                    {t("contact_info.local_phone.link")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}

export default ContactPage;
