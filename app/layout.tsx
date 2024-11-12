import React from "react";

import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

function ExternalLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                {children}
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </body>
        </html>
    );
}

export default ExternalLayout;
