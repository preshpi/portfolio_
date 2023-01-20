import React from "react";
import { data } from "./dataProject";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <div className="w-[80%] mx-auto">
      {data.map(
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
          <div className="mb-[24px] ">
            <div key={id}>
              <div className="rounded overflow-hidden shadow-lg w-80 h-full mx-auto bg-white dark:bg-secondary">
                <LazyLoadImage
                  src={img}
                  alt={title}
                  effect="blur"
                  placeholderSrc={img}
                />
                  <div className="p-5 ">
                    <div class="font-[500] text-[18px] leading-[22.97px] mt-[12px] text-black2 dark:text-white">
                      {title}
                    </div>
                    <p class="text-gray text-[14px] leading-[20.42px]">
                      {subtitle}
                    </p>
                    <p className="mt-[12px] text-[#222222] dark:text-white2">
                      {language}
                    </p>
                    <div className="mt-[12px] flex gap-[30px]">
                      <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transistion-all duration-500">
                        <TbBrandGithub className="dark:fill-white fill-black2" />
                        <a href={codeLink} className="dark:text-gray">
                          {code}
                        </a>
                      </span>
                      <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75 hover:scale-110 transistion-all duration-500">
                        <AiFillEye className="dark:text-white" />
                        <a href={viewLink} className="dark:text-gray">
                          {view}
                        </a>
                      </span>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
