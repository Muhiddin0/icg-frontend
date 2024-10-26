import React from "react";
import Logo from "../common/logo/logo";
import { FooterItems } from "@/constants/footer";
import Link from "next/link";
import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Logo />
          <p className="mt-2 text-sm text-gray-500">
            Faoliyat mijozlar ehtiyojlarini qondirishga, ishda moslashuvchanlik
            va innovatsiyalar asosida yangi mahsulot va xizmatlar yaratishga
            qaratilgan.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {FooterItems.map((item) => (
            <div key={item.title} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                {item.title}
              </h2>
              <nav className="list-none mb-10">
                {item.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Qmatrics —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Qmatrics
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {/* linkedin */}
            <Link
              href={"https://www.facebook.com/Q.Matrics/"}
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>

            {/* telegram */}
            <Link
              href={
                "https://l.instagram.com/?u=https%3A%2F%2Ft.me%2Fqmatrics%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaa6uzMPAjMFPrynLiTL9KNzHpP2LPO6RvQJne4wPiofJprIpGeKu0JDyMo_aem_ZwUFnHUKbgx0EteIyQBajA&e=AT0Gsw9Cf3seJbPUeZxGpMYNnXcHm5EdC4Gpdb6eUflsy60s_uZtiHvFKxfhROx-YcLLqSBoE34aL9iYEdTXZwRtR6Mil2th_T07UCQ"
              }
              className="ml-3 text-gray-500"
            >
              <Send />
            </Link>
            <Link
              href={"https://www.instagram.com/q.matrics/"}
              className="ml-3 text-gray-500"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
