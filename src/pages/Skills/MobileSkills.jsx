import React, { useEffect } from "react";
import resume from "../../data/PreshDevResume.pdf";
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";

function MobileSkills() {
  const controls = useAnimationHook();

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
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
          i`ve worked with over the years, for my{" "}
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
          {data.map(({ id, icons, text, color }) => (
            <li
              id={id}
              key={id}
              className="w-[163px] h-[77px] mt-3 bg-white dark:bg-darkgrey flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300"
            >
              <span className="flex gap-[16px] w-[101px] justify-evenly">
                <span className="w-[35px] h-[35px]">
                  {React.cloneElement(icons, { color: color, size: 24 })}
                </span>
                <p className="flex justify-center items-center text-[14px] text-black2 dark:text-white leading-[19px]">
                  {text}
                </p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default MobileSkills;
