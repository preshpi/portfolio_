import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";
import { SkillsData } from "./MobileSkills";
export const data = [
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
    color: "#60DAFB",
  },
  {
    id: 3,
    icons: <SiTailwindcss />,
    text: "Tailwind",
    color: "#07B7D4",
  },
  {
    id: 4,
    icons: <IoLogoHtml5 />,
    text: "HTML",
    color: "#F16529",
  },
  {
    id: 5,
    icons: <DiCss3Full />,
    text: "CSS",
    color: "#2965F1",
  },
  {
    id: 6,
    icons: <DiJavascript1 />,
    text: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: 7,
    icons: <SiTypescript />,
    text: "TypeScript",
    color: "#3074C0",
  },
  {
    id: 8,
    icons: <IoLogoSass />,
    text: "Sass",
    color: "#C76494",
  },
  {
    id: 9,
    icons: <TbBrandNextjs />,
    text: "NextJS",
    color: "#111",
  },
];
const Skills = () => {
  const controls = useAnimationHook();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="flex justify-center items-center"
    >
      <SkillsData />
    </motion.div>
  );
};

export default Skills;
