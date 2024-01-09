import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import UseDarkmode from "./useDarkmode";
import { motion } from "framer-motion";

function MobileNav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const list = [
    {
      id: 1,
      text: "ABOUT",
      path: "/",
    },
    {
      id: 2,
      text: "SKILLS/TOOLS",
      path: "/skills",
    },
    {
      id: 3,
      text: "PROJECTS",
      path: "/projects",
    },
    {
      id: 4,
      text: "CONTACT",
      path: "contact",
    },
    {
      id: 5,
      blog: "BLOG",
    },
    {
      id: 6,
      video: "VIDEOS",
    },
    {
      id: 7,
      icon: <UseDarkmode />,
    },
  ];

  const sidebar = {
    open: {
      opacity: 3,
    },
    closed: {
      opacity: 0.2,
      transistion: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 1,
      transistion: { ease: "easeInOut" },
    },
  };

  return (
    <div className="w-[95%] mx-auto h-[80px] z-10 relative top-0">
      <div className="flex justify-between items-center pt-4 p-2">
        <h1 className="font-[700] text-[24px] leading-[30.62px] text-secondary">
          <Link
            to="/"
            className="cursor-pointer dark:text-white text-secondary"
          >
            PreshDev
          </Link>
        </h1>

        <div onClick={handleClick}>
          {!nav ? (
            <HiOutlineMenuAlt3 className="text-[38px] cursor-pointer dark:text-white text-secondary" />
          ) : (
            <CgClose className="hidden" />
          )}
        </div>
      </div>

      <motion.ul
        variants={sidebar}
        initial="open"
        exit="exit"
        animate={nav ? "open" : "closed"}
        className={
          !nav
            ? "hidden"
            : "right-[0px] w-[50%] p-2 h-full fixed bg-grey2 dark:bg-secondary top-0 z-10 transition-all duration-300 drop-shadow-lg"
        }
      >
        <div className="ml-auto pt-2 w-[40px]">
          <CgClose
            onClick={handleClose}
            className="text-[38px] cursor-pointer dark:text-white text-black transition-colors duration-300"
          />
        </div>

        {list.map(({ id, text, path, icon, blog, video }) => {
          return (
            <motion.li
              key={id}
              className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center "
            >
              <NavLink onClick={handleClose} to={path}>
                {text}
              </NavLink>
              <a href="https://preshblog.vercel.app/" target="_blank">
                {blog}
              </a>
              <a
                href="https://preshpie.notion.site/Video-Editing-Portfolio-ea5a25af009a4423a444f0793132f244?pvs=4"
                target="_blank"
              >
                {video}
              </a>
              {icon}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default MobileNav;
