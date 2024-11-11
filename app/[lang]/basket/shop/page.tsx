"use client";

import { sendContactForm } from "@/lib/api";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function ShopPage() {
    const t = useTranslations("shop");

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    function handleSubmit() {
        if (firstName && lastName && email && phone && companyName && address) {
            sendContactForm({
                email: "test@gmail.com",
                message: "Salom",
                name: "muhiddin",
                subject: "test",
            });
        }
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-semibold">{t("shopTitle")}</h1>
                <div className="grid grid-cols-12 gap-3 mt-6">
                    <label className="col-span-6" htmlFor="">
                        <p>{t("firstNameLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>{t("lastNameLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>{t("emailLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>{t("phoneLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>

                    <label className="col-span-full" htmlFor="">
                        <p>{t("companyNameLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </label>
                    <label className="col-span-full" htmlFor="">
                        <p>{t("addressLabel")}</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>

                    <div className="col-span-full">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary w-full"
                        >
                            <p>{t("submitButton")}</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopPage;
