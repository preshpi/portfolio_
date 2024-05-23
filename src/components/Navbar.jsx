import { React } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "https://preshblog.vercel.app/", external: true },
    {
      name: "Video",
      path: "https://preshpie.notion.site/Video-Editing-Portfolio-ea5a25af009a4423a444f0793132f244?pvs=4",
      external: true,
    },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="fixed left-0 md:left-6 top-0 z-50 h-screen flex flex-col items-center justify-between">
      <div className="w-0.5 h-24 dark:bg-resume bg-secondary"></div>
      <ul className="h-80 gap-5 w-full dark:text-resume text-secondary flex flex-col justify-between items-center">
        {navItems.map((item, index) => (
          <li key={index} className="list-none -rotate-90">
            {item.external ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase relative group transition-all duration-300"
              >
                {item.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-black dark:bg-resume transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase relative group transition-all duration-300 ${
                    isActive
                      ? "dark:text-white line-through decoration-2 dark:no-underline dark:text-shadow-custom"
                      : ""
                  }`
                }
              >
                {item.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-black dark:bg-resume transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <div className="w-0.5 h-24 dark:bg-resume bg-secondary"></div>
    </div>
  );
};

export default Navbar;
