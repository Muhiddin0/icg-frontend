import React from "react";
import SectionTitle from "../common/section-title/section-title";
import { useTranslations } from "next-intl";
import ContactForm from "./contact-form";

function ContactSection() {
    const t = useTranslations("home.contact");
    return (
        <section>
            <div className="container px-5 pt-24 mx-auto">
                <SectionTitle
                    title={t("sectionTitle.title")}
                    desk={t("sectionTitle.description")}
                />
            </div>

            <div className="text-gray-600 body-font relative mt-12">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=41.2988889,69.3272222&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{
                            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                        }}
                    />
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
