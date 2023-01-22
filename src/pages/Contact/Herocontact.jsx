import React from "react";

const Herocontact = () => {
  return (
    <>
      <h4 className="text-primary dark:text-gray  lg:text-[48px] lg:leading-[64px] font-[700] w-[459px]">
        Want to work with <span>me? let’s </span>{" "}
        <span className="text-secondary dark:text-white">Connect</span>
      </h4>

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
    </>
  );
};

export default Herocontact;
