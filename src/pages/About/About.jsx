import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";
const About = () => {
  const controls = useAnimationHook();

  const initals = [
    {
      id: 1,
      text: "FE",
      data: [
        {
          id: 1,
          txt: "F",
        },
        {
          id: 2,
          txt: "R",
        },
        {
          id: 3,
          txt: "O",
        },
        {
          id: 4,
          txt: "N",
        },
        {
          id: 5,
          txt: "T",
        },
        {
          id: 6,
          txt: "E",
        },
        {
          id: 7,
          txt: "N",
        },
        {
          id: 8,
          txt: "D",
        },
      ],
    },

    {
      id: 2,
      text: "PD",
      data: [
        {
          id: 1,
          txt: "P",
        },
        {
          id: 2,
          txt: "R",
        },
        {
          id: 3,
          txt: "E",
        },
        {
          id: 4,
          txt: "S",
        },
        {
          id: 5,
          txt: "H",
        },
        {
          id: 6,
          txt: "D",
        },
        {
          id: 7,
          txt: "E",
        },
        {
          id: 8,
          txt: "V",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      <div className="max-w-[500px]">
        <Carousel autoplay effect="fade" dots={false}>
          {initals.map(({ id, text, data }) => {
            return (
              <div className="w-full h-full" key={id}>
                <div className="relative group flex justify-center mx-auto">
                  <span className="absolute inset-0 w-[350px] h-[330px] border-2 border-darkgrey dark:border-white translate-y-4 translate-x-14"></span>
                  <div className="w-[350px] h-[330px] bg-darkgrey dark:bg-white flex items-center justify-center">
                    <h1 className="text-[226px] font-[700] text-white dark:text-darkgrey">
                      {text}
                    </h1>
                  </div>
                </div>
                <div className="gap-x-[44px] gap-y-[5px] py-4 flex flex-wrap justify-center">
                  {data.map(({ txt, id }) => {
                    return (
                      <div
                        key={id}
                        className="w-[54px] h-[54px]  bg-white text-black2 font-[700] text-[24px] mt-[35px] leading-[30.62px] grid justify-center items-center place-items-center"
                      >
                        <p>{txt}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default About;
