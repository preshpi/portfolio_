import React from "react";
import resume from '../../data/resume.pdf';
const Heroskills = () => {
  return (
    <>
      <h2 className="text-primary dark:text-gray text-[48px] leading-[64px] font-[700]">
        I work mostly with{" "}
        <span className="text-secondary dark:text-white">
          Frontend Technologies
        </span>
      </h2>
      <p className="text-[16px] leading-[24px] dark:text-gray text-primary mt-[24px]">
        Here are some of the <span className="text-secondary font-bold dark:text-white">tools</span> i’ve worked with over the years, for my <span className="text-secondary font-bold dark:text-white">
          personal, professional
        </span> and <span className="text-secondary font-bold dark:text-white">
          open source
        </span> projects. My <span className="text-secondary font-bold dark:text-white">
          soft skills
        </span> have also contributed majorly to my <span className="text-secondary font-bold dark:text-white">growth</span>{" "}
        and abilities <span className="text-secondary font-bold dark:text-white">
          professionally.
        </span>
      </p>

      <div className="mt-[32px]">
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
    </>
  );
};

export default Heroskills;
