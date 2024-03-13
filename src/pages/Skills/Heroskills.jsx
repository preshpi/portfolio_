import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";
import useAnimationHook from "../../components/useAnimationHook";
import { client } from "../../client";

const Heroskills = () => {
  const header = "I work mostly with".split("");
  const sentence = "Frontend".split("");
  const word = "Technologies".split("");
  const controls = useAnimationHook();
  const [resume, setResume] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "resume"]{
     link
    }`
      )
      .then((data) => setResume(data))

      .catch(console.error);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="max-w-[500px]"
    >
      <p className="text-primary dark:text-gray text-[48px] leading-[64px] font-[700]">
        {header.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>
      <p className="text-secondary dark:text-white text-[48px] leading-[64px] font-[700]">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>
      <p className="text-secondary dark:text-white text-[48px] leading-[64px] font-[700]">
        {word.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>

      <p className="text-[16px] leading-[24px] dark:text-gray text-primary mt-[24px]">
        Here are some of the{" "}
        <span className="text-secondary font-bold dark:text-white">tools</span>{" "}
        i&apos;ve worked with over the years, for my{" "}
        <span className="text-secondary font-bold dark:text-white">
          personal, professional
        </span>{" "}
        and{" "}
        <span className="text-secondary font-bold dark:text-white">
          open source
        </span>{" "}
        projects.
      </p>

      <div className="mt-[32px]">
        {resume.map(({ link }) => (
          <a
            href={link}
            target="_blank"
            download={"link"}
            key={link}
            className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold cursor-pointer"
          >
            <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
            <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
              View Resumé
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Heroskills;
