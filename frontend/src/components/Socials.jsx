import React from "react";
import { FaTiktok, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
const Socials = () => {
  return (
    <div>
      <div className="mt-[12px]">
        <ul className="flex space-x-6">
          <li className=" flex cursor-pointer justify-center items-center border border-black2 w-[48px] h-[48px] p-[2px]">
            <FaLinkedinIn className="text-white bg-black2 w-[34px] h-[34px]" />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Socials;
