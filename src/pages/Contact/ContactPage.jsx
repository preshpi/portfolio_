import React from "react";
import Herocontact from "./Herocontact";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-full gap-5 px-12">
      <Herocontact />
      <Contact />
    </div>
  );
};

export default ContactPage;
