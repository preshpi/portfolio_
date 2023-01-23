import React from "react";
import resume from "../../data/resume.pdf";

function MobileAbout() {
  return (
    <div className="mt-[32px]">
      <div className="text-center grid items-center justify-center place-items-center">
        <div className="grid items-center justify-center text-center font-[700] leading-[30px] md:leading-[50px] text-[24px] md:text-[35px]">
          <span className="text-primary dark:text-gray">Hello, I'm</span>
          <span className="name dark:text-white">Precious Egwuenu</span>
        </div>

        <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap">
          I am a <span className="text-secondary font-bold dark:text-white"> frontend developer </span>{" "}
          I have a strong background in creating visually appealing and
          <span className="text-secondary font-bold dark:text-white"> user-friendly web experiences. </span>{" "}
          I am motivated to find a role where I can challenge myself{" "}
          <span className="text-secondary font-bold dark:text-white">
            and provide value to website users.
          </span>{" "}
          I have actively sought internships such as{" "}
          <span className="text-secondary font-bold dark:text-white">
            She Code Africa training (SCA)
          </span>{" "}
          HNG, ZURI,{" "}
          <span className="text-secondary font-bold dark:text-white">
            and many more to improve my skills.
          </span>{" "}
          I am excited to bring my knowledge and experience to a team and
          contribute to a company's success.
        </p>
      </div>

      <div className="mt-[24px] flex justify-center items-center">
        <a
          href={resume}
          target="_blank"
          download={"resume"}
          className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold cursor-pointer"
        >
            <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-[6px] translate-x-[6px] transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
            <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
                View Resumé
            </span>
        </a>
      </div>
    </div>
  );
}

export default MobileAbout;
