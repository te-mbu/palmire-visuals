"use client";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-full h-32 flex items-center justify-center sm:h-40 md:h-52">
      <div className="w-[90w] flex items-center justify-center gap-5 sm:w-[40vw] sm:gap-8 md:gap-20">
        <a
          href="https://www.instagram.com/palmire.visuals/"
          target="_blank"
          className="text-xl text-light px-3 py-1 sm:hover:text-third sm:text-4xl"
        >
          INSTAGRAM
        </a>
        <a
          href="mailto:mbu.terence@gmail.com"
          className="text-xl text-light px-3 py-1 sm:hover:text-third sm:text-4xl"
        >
          MAIL
        </a>
      </div>
    </div>
  );
};

export default Footer;
