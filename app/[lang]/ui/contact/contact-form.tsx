import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { sendContactForm } from "@/lib/api";

import { toast } from "react-toastify";

type Props = {};

function ContactForm({}: Props) {
  const t = useTranslations("home.contact");
  const notifications = useTranslations("notifications");

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit() {
    setIsLoading(true);

    if (!email || !message || !name) return;
    sendContactForm({
      email: email,
      message: message,
      name: name,
      subject: "Shikoyat",
    })
      .then(() => {
        toast(notifications("success"));
        setIsLoading(false);
      })
      .catch((error) => {
        toast(notifications("error"));
        setIsLoading(false);
      });
  }

  return (
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        {t("sectionTitle.title")}
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        {t("sectionTitle.description")}
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          {t("contactForm.name")}
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border  focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          {t("contactForm.emailOrPhone")}
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border  focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-600"
        ></label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          className="w-full bg-white rounded border ring-primary/30 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button
        disabled={isLoading}
        onClick={handleSubmit}
        className="btn btn-primary"
      >
        {isLoading && <span className="loading loading-spinner"></span>}
        {t("contactForm.submitButton")}
      </button>
    </div>
  );
}

export default ContactForm;
