import React from "react";
import resume from "../../data/resume.pdf";
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im"
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";

function MobileSkills() {

    const container = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transistion: { delay: 1.5, duration: 1.5 },
      },
      exit: {
        opacity: 0,
        transistion: { ease: "easeInOut" },
      },
    };
    
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="mt-[32px] overflow-auto"
    >
      <div className="grid justify-center items-center place-items-center text-center">
        <span className="text-primary dark:text-gray text-[24px] md:text-[35px] leading-[30px] md:leading-[50px] font-[700]">
          I work mostly with{" "}
          <p className="text-secondary dark:text-white">
            Frontend Technologies
          </p>
        </span>

        <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap">
          Here are some of the{" "}
          <span className="text-secondary font-bold dark:text-white">
            tools
          </span>{" "}
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
          <span className="text-secondary font-bold dark:text-white">
            growth
          </span>{" "}
          and abilities{" "}
          <span className="text-secondary font-bold dark:text-white">
            professionally.
          </span>
        </p>

        <div className="mt-[28px] flex items-center justify-center">
          <a
            href={resume}
            target="_blank"
            download={"resume"}
            className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold"
          >
            <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
            <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
              View Resumé
            </span>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[40px]">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-[24px] space-y-3">
          <li className="w-[163px] h-[77px] mt-3 bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px] w-[101px] justify-evenly">
              <ImGit className="w-[35px] h-[35px] fill-[#F05032] hover:animate-spin duration-300 transition-all" />
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                Git
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px]  bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px] w-[101px] justify-evenly">
              <FaReact className="w-[35px] h-[35px] fill-[#60DAFB] hover:animate-spin duration-300 transition-all" />
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                React
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px] w-[101px] justify-evenly">
              <SiTailwindcss className="w-[35px] h-[35px] fill-[#07B7D4] hover:animate-spin duration-300 transition-all" />
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white">
                Tailwind
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px] w-[101px] justify-evenly">
              <span className="bg-[#F16529] rounded-md">
                <IoLogoHtml5 className="w-[35px] h-[35px] fill-white  hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                HTML
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px] w-[129px] justify-evenly">
              <span className="bg-[#2965F1] rounded-md">
                <DiCss3Full className="w-[35px] h-[35px] fill-white hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                CSS
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="bg-[#F7DF1E] w-[35px] h-[35px] flex justify-end items-end rounded-md">
                <DiJavascript1 className=" w-[25px] h-[25px] hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                JavaScript
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey gap-[14px] flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
              <span className="w-[35px] h-[35px] flex  justify-center items-center rounded-md">
                <SiTypescript className="w-[25px] h-[25px] fill-[#3074C0] hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                TypeScript
              </p>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="w-[35px] h-[35px] flex justify-center items-center rounded-md">
                <IoLogoSass className="fill-[#C76494] w-[25px] h-[25px] hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                Sass
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <span className="w-[35px] h-[35px] flex justify-center items-center rounded-md">
                <TbBrandNextjs className=" w-[25px] h-[25px] hover:animate-spin duration-300 transition-all" />
              </span>
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                NextJS
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px] font-[500]">
                Time Management
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px] font-[500]">
                Communication
              </p>
            </span>
          </li>
          <li className="w-[163px] h-[77px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
            <span className="flex gap-[16px]">
              <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px] font-[500]">
                Design to Code
              </p>
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default MobileSkills;
