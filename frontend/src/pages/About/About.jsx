import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const initals = [
    {
      id: 1,
      text: "PD",
    },
    {
      id: 2,
      text: "FE",
    },
  ];

  return (
    <div className="grid justify-center items-center place-items-center lg:mt-[30px]">
      <Carousel responsive={responsive}>
        {initals.map(({ id, text }) => {
          return (
            <div
              className="w-[460px] h-[460px] bg-darkgrey relative group flex justify-center items-center"
              key={id}
            >
              <span className="absolute inset-0 w-[460px] h-[460px] border-2 border-darkgrey dark:border-white translate-y-4 translate-x-4 "></span>
              <span className="absolute inset-0 w-[460px] h-[460px] bg-darkgrey dark:bg-white"></span>
              <h1 className="text-[256px] font-[700] leading-[344px] text-white relative">
                {text}
              </h1>
            </div>
          );
        })}
      </Carousel>

      {/* <div className="mt-[56px] gap-x-[44px] gap-y-[20px] flex flex-wrap justify-center  lg:w-[560px]">
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>F</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>R</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>O</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>N</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>T</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>E</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>N</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>D</p>
        </div>
      </div> */}

      {/* <div className="mt-[56px] gap-x-[44px] gap-y-[20px] flex flex-wrap justify-center  lg:w-[560px]">
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>P</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>R</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>E</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>S</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>H</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>D</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>E</p>
        </div>
        <div className="w-[64px] h-[64px] bg-white text-black2 font-[700] text-[24px] leading-[30.62px] grid justify-center items-center place-items-center">
          <p>V</p>
        </div>
      </div>*/}
    </div>
  );
};

export default About;
