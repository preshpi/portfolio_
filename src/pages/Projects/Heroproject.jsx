import React from "react";
import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";


const Heroproject = () => {
    const header = "I love working on".split("");
    const sentence = "fun projects".split("");

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
    >

      <span className="text-primary dark:text-gray  lg:text-[48px] lg:leading-[64px] font-[700] w-[409px]">
        {header.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </span>
      <p className="name font-[700] leading-[64px] text-[48px] dark:text-white">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>
      <p className="text-[16px] leading-[24px] text-primary dark:text-white lg:mt-[24px]">
        In my leisure time, I enjoy{" "}
        <span className="text-secondary dark:text-gray font-bold">
          experimenting
        </span>{" "}
        with and building things that I find personally{" "}
        <span className="text-secondary dark:text-gray font-bold">
          interesting
        </span>{" "}
        or{" "}
        <span className="text-secondary dark:text-gray font-bold">useful.</span>{" "}
        A few examples of these projects can be found on my{" "}
        <span className="text-secondary dark:text-gray font-bold">
          GitHub page,
        </span>{" "}
        where you can also find other{" "}
        <span className="text-secondary dark:text-gray font-bold">
          miscellaneous creations
        </span>{" "}
        I have worked on.
      </p>

      <div className="lg:mt-[32px]">
        <a
          href="https://github.com/preshpi"
          target="_blank"
          className="relative w-[160px] h-[48px] group text-center px-6 py-3 font-bold"
        >
          <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white text-resume"></span>
          <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
            View Github
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Heroproject;
