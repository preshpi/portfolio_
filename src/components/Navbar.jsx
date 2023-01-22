import { React } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
  return (
    <div>
      <ul className="items-center space-y-4">
        <li>
          <NavLink to="/about" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 w-[82px] uppercase  navtext">
              About
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 w-[82px] uppercase navtext">
              Skills
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 w-[82px] uppercase navtext">
              Project
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex items-center space-x-8">
            <div className="h-[2px] w-16 bg-primary dark:bg-gray navline"></div>
            <p className="lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 w-[82px] uppercase navtext">
              Contact
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
