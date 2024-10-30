import React from "react";

import "./globals.css";

function ExternalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default ExternalLayout;
