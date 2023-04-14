import React from "react";
import Socials from "./Socials"
function Footer() {
  return (
    <>
      <Socials />
      <div className="sticky top-[100%] flex flex-col justify-center items-center border-t dark:border-resume border-darkgrey">
        <p className="text-darkgrey dark:text-resume py-2 px-2">
          © 2023 PreshDev.
        </p>
        <p className="text-darkgrey dark:text-resume py-2 px-2">
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
