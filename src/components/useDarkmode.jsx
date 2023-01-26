import { React, useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

function useDarkmode() {

  // It exports a function useDarkmode 
  // that uses the useState and useEffect hooks to handle 
  // switching between dark and light mode, and storing the 
  // theme in the local storage.
  // It also uses the onClick event handler on a 
  // button to trigger the handleThemeSwitch function that 
  // changes the theme. And it uses the BiSun and 
  // BiMoon components to display the appropriate icon depending 
  // on the theme.

    const [theme, setTheme] = useState(localStorage.getItem("theme") || null);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <button onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <div className="w-[48px] h-[48px] grid place-items-center justify-center items-center rounded-full shadow-sm shadow-white bg-darkgrey text-white">
            <BiSun />
          </div>
        ) : (
          <div className="w-[48px] h-[48px] grid place-items-center justify-center items-center rounded-full shadow-sm shadow-darkgrey bg-white text-darkgrey">
            <BiMoon />
          </div>
        )}
      </button>
    </div>
  );
}

export default useDarkmode;
