import { React } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="grid w-[200px] items-center space-y-4">
        <li>
          <NavLink to="/about" className="flex items-center space-x-8">
          <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>

            <p className="lg:text-[16px] lg:leading-[20.42px] mx-3 font-[700] uppercase navtext">
              About
            </p>
          </NavLink>
        </li> 
        <li>
          <NavLink to="/skills" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3  uppercase navtext">
              Skills
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3  uppercase navtext">
              Project
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3  uppercase navtext">
              Contact
            </p>
          </NavLink>
        </li>
        <li>
          <a
            href="https://preshblog.vercel.app/"
            target="_blank"
            className="flex items-center space-x-8"
          >
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3  uppercase navtext">
              Blog
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://preshpie.notion.site/Video-Editing-Portfolio-ea5a25af009a4423a444f0793132f244?pvs=4"
            target="_blank"
            className="flex items-center space-x-8"
          >
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3  uppercase navtext">
              Videos
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
