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
    <div className="mt-[35px] grid lg:justify-start justify-center  lg:items-start items-center">
      <FloatButton.Group
        trigger="click"
        type="default"
        style={{
          right: 24,
        }}
        icon={<FaShareAlt />}
      >
        <motion.div
          variants={socialcontainer}
          initial="hidden"
          animate="animate"
          className="gap-5 grid"
        >
          <a href="https://www.linkedin.com/in/preshpi-22/" target="_blank">
            <FloatButton icon={<FaLinkedinIn />} />
          </a>
          <a href="https://github.com/preshpi" target="_blank">
            <FloatButton icon={<FaGithub />} />
          </a>
          <a href="https://twitter.com/preshypie" target="_blank">
            <FloatButton icon={<FaTwitter />} />
          </a>
          <a href="https://www.tiktok.com/@tech.girl4?lang=en" target="_blank">
            <FloatButton icon={<FaTiktok />} />
          </a>
        </motion.div>
      </FloatButton.Group>
    </div>
  );
};

export default Socials;
