import React from "react";
import {
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaShareAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FloatButton } from "antd";
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
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="grid lg:justify-start justify-center  lg:items-start items-center">
      <FloatButton.Group
        trigger="click"
        type="default"
        icon={<FaShareAlt />}
        className="mx-3"
      >
        <motion.div
          variants={socialcontainer}
          initial="hidden"
          animate="animate"
          className="gap-5 grid"
        >
          <a
            href="https://www.linkedin.com/in/preciousegwuenu/"
            target="_blank"
          >
            <FloatButton icon={<FaLinkedinIn />} className="dark:bg-white" />
          </a>
          <a href="https://github.com/preshpi" target="_blank">
            <FloatButton
              icon={<FaGithub />}
              className="dark:bg-white hover:opacity-75"
            />
          </a>
          <a href="https://twitter.com/preshdevvvv" target="_blank">
            <FloatButton
              icon={<FaTwitter />}
              className="dark:bg-white hover:opacity-75"
            />
          </a>
          <a
            href="https://www.tiktok.com/@preshdevvv?_t=8j4w9YmFWre&_r=1"
            target="_blank"
          >
            <FloatButton
              icon={<FaTiktok />}
              className="dark:bg-white hover:opacity-75"
            />
          </a>
        </motion.div>
      </FloatButton.Group>
    </div>
  );
};

export default Socials;
