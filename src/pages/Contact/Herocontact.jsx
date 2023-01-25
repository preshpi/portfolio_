import React from "react";
import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";

const Herocontact = () => {

  const header = "Want to work with me?".split("");
  const sentence = "let’s Connect".split("");

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
      <span className="text-primary dark:text-gray  lg:text-[48px] lg:leading-[64px] font-[700] w-[459px]">
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

      <p className="text-[16px] leading-[24px] text-primary dark:text-white lg:mt-[24px] w-[445px]">
        I am open to{" "}
        <span className="text-secondary dark:text-gray font-bold">remote</span>{" "}
        and{" "}
        <span className="text-secondary dark:text-gray font-bold">
          onsite full-time,
        </span>{" "}
        part-time, and contract frontend web development{" "}
        <span className="text-secondary dark:text-gray font-bold">jobs.</span>
      </p>
    </motion.div>
  );
};

export default Herocontact;
