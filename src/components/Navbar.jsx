import { React } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="dark:text-resume text-secondary fixed left-0 md:left-6 top-0 z-50 h-screen flex flex-col items-center justify-between">
      <div className="w-0.5 h-36 dark:bg-resume bg-secondary"></div>
      <ul className="h-60 flex flex-col justify-between items-center">
        <li className="list-none navbar -rotate-90">
          <NavLink to="/">
            <p className="text-xs font-semibold uppercase navtext">About</p>
          </NavLink>
        </li>

        <li className="list-none navbar -rotate-90">
          <NavLink to="/skills">
            <p className="text-xs font-[700] uppercase navtext">Skills</p>
          </NavLink>
        </li>
        <li className="list-none navbar -rotate-90">
          <NavLink to="/projects">
            <p className="text-xs font-[700] uppercase navtext">Project</p>
          </NavLink>
        </li>
        <li className="list-none navbar -rotate-90">
          <NavLink to="/contact">
            <p className="text-xs font-[700] uppercase navtext">Contact</p>
          </NavLink>
        </li>
      </ul>
      <div className="w-0.5 h-36 dark:bg-resume bg-secondary"></div>
    </div>
  );
};

export default Navbar;
