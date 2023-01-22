import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";


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
            <CgClose className="text-[38px] cursor-pointer hover:text-[red]" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-full p-2 h-[420px] bg-[#a93a3a] top-0 z-10 transition-all duration-300 drop-shadow-lg"
        }
      >
        <div className="flex justify-between items-center pt-4">
          <h2 className="font-[700] text-[24px] leading-[30.62px] dark:text-white text-secondary">
            <Link onClick={handleClick} to="/" className="cursor-pointer">
              PreshDev
            </Link>
          </h2>

          <div onClick={handleClick}>
            {!nav ? (
              <HiOutlineMenuAlt3 className="text-[38px] dark:text-white text-secondary" />
            ) : (
              <CgClose className="text-[38px] cursor-pointer hover:text-[red] transition-colors duration-300" />
            )}
          </div>
        </div>
        <li className="cursor-pointer font-[500] justify-center items-center flex w-full leading-[32px] lg:text-[24px] md:text-[19px]  text-[#292929] h-[52px] mt-[50px]">
          <Link onClick={handleClose} to="/">
            ABOUT
          </Link>
        </li>
        <li className="cursor-pointer font-[500] justify-center items-center flex w-full leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929] h-[52px] mt-[18px]">
          <Link onClick={handleClose} to="/mobileSkills">
            SKILLS
          </Link>
        </li>
        <li className="cursor-pointer font-[500] justify-center items-center flex w-full leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929]  h-[52px] mt-[24px]">
          <Link onClick={handleClose} to="/mobileProject">
            PROJECT
          </Link>
        </li>
        <li className="cursor-pointer font-[500] justify-center items-center flex w-full leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929] h-[52px] mt-[18px]">
          <Link onClick={handleClose} to="/mobileContact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
