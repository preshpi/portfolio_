import React from "react";
import resume from '../../data/resume.pdf';

function Heroabout() {
  return (
    <div className="">
      <div className="grid font-[700] leading-[64px] text-[48px]">
        <h1 className="text-primary dark:text-gray">Hello, I'm</h1>
        <span className="name dark:text-white">Precious Egwuenu</span>
      </div>
      <p className="text-[16px] leading-[26px] text-para dark:text-gray h-[192px] word-break mt-[24px] w-[543px]">
        I am a <span className="text-secondary font-bold dark:text-white"> frontend developer </span> I have a strong background in creating visually appealing and
        <span className="text-secondary font-bold dark:text-white"> user-friendly web experiences.
        </span> I am motivated to find a role where I can challenge myself <span className="text-secondary font-bold dark:text-white">
          and provide value to website users.
        </span> I have actively sought internships such as <span className="text-secondary font-bold dark:text-white">
          She Code Africa training (SCA)
        </span> HNG, ZURI, <span className="text-secondary font-bold dark:text-white">
          and many more to improve my skills.
        </span> I am excited to bring my knowledge and experience to a team and
        contribute to a company's success.
      </p>

      <div className="mt-[32px]">
        <span className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold cursor-pointer">
          <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
          <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
            <a href={resume} target="_blank" download={"resume"}>
              View Resumé
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Heroabout;
