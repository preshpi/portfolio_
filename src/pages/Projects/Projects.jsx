import React, { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";
import { client } from "../../client";

const Projects = () => {
  const controls = useAnimationHook();
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "allproject"]{
      title,
      subtitle,
      language,
      codeLink,
      viewLink,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt}
    }`
      )
      .then((data) => setProjectData(data))

      .catch(console.error);
  }, []);
  return (
    <motion.div
      className="py-12 px-5 overflow-y-auto lg:h-[450px] md:grid-cols-2 lg:grid-cols-1 grid"
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      {projectData.map((projectData, index) => (
        <div className="mb-[24px]" key={index}>
          <motion.div
            className="rounded lg:overflow-hidden shadow-lg w-80 h-full mx-auto bg-white dark:bg-secondary"
            key={index}
          >
            {projectData.mainImage && (
              <LazyLoadImage
                src={projectData.mainImage.asset.url}
                alt={projectData.mainImage.alt}
                placeholderSrc={projectData.mainImage.asset.url}
              />
            )}

            <div className="p-5 ">
              <div className="font-[500] text-[18px] leading-[22.97px] mt-[12px] text-black2 dark:text-white">
                {projectData.title}
              </div>
              <p className="text-gray text-[14px] mt-2 leading-[20.42px]">
                {projectData.subtitle}
              </p>
              <p className="mt-[12px] text-[#222222] dark:text-white2">
                {projectData.language}
              </p>
              <div className="mt-[12px] flex gap-[30px]">
                <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transistion-all duration-500">
                  <>
                    <TbBrandGithub className="dark:fill-white fill-black2" />
                    <a
                      href={projectData.codeLink}
                      target="_blank"
                      className="dark:text-gray"
                    >
                      Code
                    </a>
                  </>
                </span>

                <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75 hover:scale-110 transistion-all duration-500">
                  <AiFillEye className="dark:text-white" />
                  <a
                    href={projectData.viewLink}
                    target="_blank"
                    className="dark:text-gray"
                  >
                    View
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      ))}

      {/* {data.map(
        ({
          id,
          img,
          title,
          subtitle,
          language,
          code,
          codeLink,
          view,
          viewLink,
        }) => (
          <div className="mb-[24px]" key={id}>
            <motion.div
              className="rounded lg:overflow-hidden shadow-lg w-80 h-full mx-auto bg-white dark:bg-secondary"
              key={id}
            >
              <LazyLoadImage src={img} alt={title} placeholderSrc={img} />
              <div className="p-5 ">
                <div className="font-[500] text-[18px] leading-[22.97px] mt-[12px] text-black2 dark:text-white">
                  {title}
                </div>
                <p className="text-gray text-[14px] mt-2 leading-[20.42px]">
                  {subtitle}
                </p>
                <p className="mt-[12px] text-[#222222] dark:text-white2">
                  {language}
                </p>
                <div className="mt-[12px] flex gap-[30px]">
                  {code && (
                    <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transistion-all duration-500">
                      <>
                        <TbBrandGithub className="dark:fill-white fill-black2" />
                        <a href={codeLink} className="dark:text-gray">
                          {code}
                        </a>
                      </>
                    </span>
                  )}

                  <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75 hover:scale-110 transistion-all duration-500">
                    <AiFillEye className="dark:text-white" />
                    <a href={viewLink} className="dark:text-gray">
                      {view}
                    </a>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )
      )} */}
    </motion.div>
  );
};

export default Projects;
