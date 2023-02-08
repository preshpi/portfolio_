import React from "react";
import Socials from "./Socials"
function Footer() {
  return (
    <>
      <Socials />
    <div className="mt-5 flex justify-center items-center border-t dark:border-resume border-darkgrey">
      <p className="text-darkgrey dark:text-resume py-2 px-2">© 2023 PreshDev</p>
    </div>
    </>
   
  );
}

export default Footer;
