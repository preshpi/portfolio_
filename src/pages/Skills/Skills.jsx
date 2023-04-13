import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
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
      className="flex justify-center items-center"
    >
      <ul className="grid grid-cols-2 gap-x-[24px] space-y-3  justify-center items-center">
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <img
              src="https://cdn.simpleicons.org/git"
              alt="git icon"
              className="w-[32px] h-[32px]"
            />
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              Git
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey group flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <FaReact className="w-[35px] h-[35px] fill-[#60DAFB] animate-spin group-hover:animate-none duration-300 transition-all" />
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              React
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <SiTailwindcss className="w-[35px] h-[35px] fill-[#07B7D4] duration-300 transition-all" />
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              Tailwind
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <span className="bg-[#F16529] rounded-md">
              <IoLogoHtml5 className="w-[35px] h-[35px] fill-white" />
            </span>
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              HTML
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <span className="bg-[#2965F1] rounded-md">
              <DiCss3Full className="w-[35px] h-[35px] fill-white" />
            </span>
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              CSS
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="flex gap-[16px]">
            <span className="bg-[#F7DF1E] w-[35px] h-[35px] flex justify-end items-end rounded-md">
              <DiJavascript1 className=" w-[25px] h-[25px]" />
            </span>
            <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
              JavaScript
            </p>
          </span>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey gap-[16px] flex justify-center items-center hover:scale-95 shadow-md transition-all duration-300">
          <span className="w-[35px] h-[35px] flex justify-center items-center rounded-md">
            <TbBrandNextjs className=" w-[25px] h-[25px] dark:text-white" />
          </span>
          <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
            Next JS
          </p>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex gap-[16px] justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="w-[35px] h-[35px] flex justify-center items-center rounded-md">
            <SiTypescript className=" w-[25px] h-[25px] fill-[#3074C0]" />
          </span>
          <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
            Typescript
          </p>
        </li>
        <li className="w-[200px] h-[96px] bg-white dark:bg-darkgrey gap-[16px] flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
          <span className="w-[35px] h-[35px] flex justify-center items-center rounded-md">
            <IoLogoSass className=" w-[25px] h-[25px] fill-[#C76494]" />
          </span>
          <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
            Sass
          </p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Skills;
