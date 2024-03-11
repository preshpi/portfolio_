import React from "react";
import Socials from "./Socials";
function Footer() {
  return (
    <>
      <Socials />
      <div className="sticky top-[100%] text-xs md:text-[14px] flex py-3 gap-2 justify-center items-center border-t dark:border-resume border-darkgrey">
        <p className="text-darkgrey dark:text-resume ">© 2024 PreshDev.</p>
        <p className="text-darkgrey dark:text-resume">
          Designed by{" "}
          <span className="underline">
            {" "}
            <a href="https://www.behance.net/olatunjisaac-j">@JolaOluwa</a>
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
