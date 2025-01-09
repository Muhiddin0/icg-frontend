"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import React, { Fragment, useEffect } from "react";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // this change
    // AOS.init();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
