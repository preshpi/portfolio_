import React from "react";
import resume from "../../data/resume.pdf";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";

function MobileSkills() {
  return (
    <div className="grid justify-center items-center place-items-center text-center mt-[32px]">
      <span className="text-primary dark:text-gray text-[24px] leading-[30px] font-[700] text-center">
        I work mostly with{" "}
        <span className="text-secondary dark:text-white">
          Frontend Technologies
        </span>
      </span>

      <p className="text-[16px] leading-[24px] dark:text-gray text-primary mt-[24px]">
        Here are some of the{" "}
        <span className="text-secondary font-bold dark:text-white">tools</span>{" "}
        i’ve worked with over the years, for my{" "}
        <span className="text-secondary font-bold dark:text-white">
          personal, professional
        </span>{" "}
        and{" "}
        <span className="text-secondary font-bold dark:text-white">
          open source
        </span>{" "}
        projects. My{" "}
        <span className="text-secondary font-bold dark:text-white">
          soft skills
        </span>{" "}
        have also contributed majorly to my{" "}
        <span className="text-secondary font-bold dark:text-white">growth</span>{" "}
        and abilities{" "}
        <span className="text-secondary font-bold dark:text-white">
          professionally.
        </span>
      </p>

      <div className="mt-[24px]">
        <a
          href="#_"
          className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold"
        >
          <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
          <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
            <a href={resume} target="_blank" download={"resume"}>
              View Resumé
            </a>
          </span>
        </a>
      </div>

      <div className="flex justify-center items-center mt-[40px]">
          <ul className="grid grid-cols-2 gap-x-[24px] space-y-3">
            <li className="w-[163px] h-[77px] mt-3 bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <img
                  src="https://cdn.simpleicons.org/git"
                  alt="git icon"
                  className="w-[32px] h-[32px]"
                />
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  Git
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px]  bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <img
                  src="https://cdn.simpleicons.org/react"
                  alt="react icon"
                  className="w-[32px] h-[32px]"
                />
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  React
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <img
                  src="https://cdn.simpleicons.org/tailwindcss"
                  alt="tailwind icon"
                  className="w-[32px] h-[32px]"
                />
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  Tailwind
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <span className="bg-[#F16529] rounded-md">
                  <IoLogoHtml5 className="w-[35px] h-[35px] fill-white" />
                </span>
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  HTML
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <span className="bg-[#2965F1] rounded-md">
                  <DiCss3Full className="w-[35px] h-[35px] fill-white" />
                </span>
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  CSS
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <span className="bg-[#F7DF1E] w-[35px] h-[35px] flex justify-end items-end rounded-md">
                  <DiJavascript1 className=" w-[25px] h-[25px]" />
                </span>
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px]">
                  JavaScript
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Team-Work
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Creative Thinking
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Debugging
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Time Management
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Communication
                </p>
              </span>
            </li>
            <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="flex gap-[16px]">
                <p className="flex justify-center items-center text-[12px] text-black2 dark:text-white leading-[19px] font-[500]">
                  Design to Code
                </p>
              </span>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default MobileSkills;
