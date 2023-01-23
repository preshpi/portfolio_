import React from "react";
import { FaTiktok, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
const Socials = () => {
  return (
    <div>
      <div className="mt-[53px] flex lg:justify-start justify-center lg:items-start items-center">
        <ul className="flex space-x-6">
          <li className="border-primary border p-[2px]">
            <a
              href="https://www.linkedin.com/in/preshpi-22/"
              target="_blank"
              className="bg-black2 flex cursor-pointer justify-center items-center w-[35px] h-[35px]"
            >
              <FaLinkedinIn className="text-white text-[30px]" />
            </a>
          </li>
          <li className="border-primary border p-[2px]">
            <a
              href="https://github.com/preshpi"
              target="_blank"
              className="bg-black2 flex cursor-pointer justify-center items-center w-[35px] h-[35px]"
            >
              <FaGithub className="text-white text-[30px]" />
            </a>
          </li>
          <li className="border-primary border p-[2px]">
            <a
              href="https://twitter.com/preshypie"
              target="_blank"
              className="bg-black2 flex cursor-pointer justify-center items-center w-[35px] h-[35px]"
            >
              <FaTwitter className="text-white text-[30px]" />
            </a>
          </li>
          <li className="border-primary border p-[2px]">
            <a
              href="https://www.tiktok.com/@tech.girl4?lang=en"
              target="_blank"
              className="bg-black2 flex cursor-pointer justify-center items-center w-[35px] h-[35px]"
            >
              <FaTiktok className="text-white text-[30px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
