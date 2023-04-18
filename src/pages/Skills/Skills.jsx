import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
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

  const data = [
    {
      id: 1,
      icons: <ImGit />,
      text: "Git",
      color: "#F05032",
    },
    {
      id: 2,
      icons: <FaReact />,
      text: "React",
      color: "#60DAFB"
    },
    {
      id: 3,
      icons: <SiTailwindcss />,
      text: "Tailwind",
      color: "#07B7D4"
    },
    {
      id: 4,
      icons: <IoLogoHtml5 />,
      text: "HTML",
      color: "#F16529"
    },
    {
      id: 5,
      icons: <DiCss3Full />,
      text: "CSS",
      color: "#2965F1"
    },
    {
      id: 6,
      icons: <DiJavascript1 />,
      text: "JavaScript",
      color: "#F7DF1E"
    },
    {
      id: 7,
      icons: <SiTypescript />,
      text: "TypeScript",
      color: "#3074C0"
    },
    {
      id: 8,
      icons: <IoLogoSass />,
      text: "Sass",
      color: "#C76494"
    },
    {
      id: 9,
      icons: <TbBrandNextjs />,
      text: "NextJS",
      color: "#111"
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex justify-center items-center"
    >
      <ul className="grid grid-cols-2 gap-x-[24px] space-y-3  justify-center items-center">
        {data.map(({ id, icons, text, color }) => (
          <li
            id={id}
            className="w-[200px] h-[96px] bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300"
          >
            <span className="flex gap-[16px]">
              {React.cloneElement(icons, { color: color, size: 24 })}
              <p className="flex justify-center items-center text-[16px] text-black2 dark:text-white leading-[24px]">
                {text}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
