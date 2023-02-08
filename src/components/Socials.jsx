import React from "react";
import { FaTiktok, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"
const Socials = () => {
  const socialcontainer = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  const icons = {
    hidden: {
      opacity: 2,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  };

  const items = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/preshpi-22/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 1,
      link: "https://github.com/preshpi",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://twitter.com/preshypie",
      icon: <FaTwitter />,
    },
    {
      id: 3,
      link: "https://www.tiktok.com/@tech.girl4?lang=en",
      icon: <FaTiktok />,
    },
  ];

  return (
    <div>
      <div className="mt-[45px] flex lg:justify-start justify-center lg:items-start items-center">
        <motion.ul 
          variants={socialcontainer}
          initial="hidden"
          animate="animate"
          className="flex space-x-6">
         
            {
              items.map(({icon, id, link}) => {
                return (
                  <motion.li 
                    className="border-primary border p-[2px] lg:hover:animate-bounce transition-all duration-300 animate-pulse" key={id}>
                    <a
                      href={link}
                      target="_blank"
                      className="bg-black2 flex cursor-pointer justify-center items-center w-[35px] h-[35px]"
                    >
                      <span className="text-white text-[30px]"> {icon}</span>
                    </a>
                  </motion.li>
                );
              })
            }
        </motion.ul>
      </div>
    </div>
  );
};

export default Socials;
