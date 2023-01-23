import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import UseDarkmode from "./useDarkmode";

function MobileNav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-[100%] h-[80px] z-10">
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

      <ul
        className={
          !nav
            ? "hidden"
            : "left-[0px] w-[50%] p-2 h-full fixed bg-grey2 dark:bg-secondary top-0 z-10 transition-all duration-300 drop-shadow-lg"
        }
      >
        <div
          className="flex justify-between items-center pt-4"
          onClick={handleClose}
        >
          <div onClick={handleClick}>
            {!nav ? (
              <HiOutlineMenuAlt3 className="text-[38px] dark:text-white text-secondary" />
            ) : (
              <CgClose className="text-[38px] cursor-pointer dark:text-white text-secondary transition-colors duration-300" />
            )}
          </div>
        </div>
        <li className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center ">
          <Link onClick={handleClose} to="/">
            ABOUT
          </Link>
        </li>
        <li className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center ">
          <Link onClick={handleClose} to="/skills">
            SKILLS
          </Link>
        </li>
        <li className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center ">
          <Link onClick={handleClose} to="/projects">
            PROJECT
          </Link>
        </li>
        <li className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center ">
          <Link onClick={handleClose} to="/contact">
            CONTACT
          </Link>
        </li>
        <li className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center ">
          <UseDarkmode />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
