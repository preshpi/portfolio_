import { React, useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BiSun, BiMoon } from "react-icons/bi";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
// import Footer from "./components/Socials";
import Heroabout from "./pages/About/Heroabout";
import Heroskills from "./pages/Skills/Heroskills";
import Heroproject from "./pages/Projects/Heroproject";
import Herocontact from "./pages/Contact/Herocontact";
import Socials from "./components/Socials";

function App() {
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
    <div className="flex items-center justify-center h-[100vh] bg-resume dark:bg-bgblack transition-colors duration-300">
      <div className="w-[80%] mx-auto p-2">
        <div className="flex items-end justify-end mb-8">
          <button onClick={handleThemeSwitch}>
            {theme === "dark" ? (
              <div className="w-[48px] h-[48px] grid place-items-center justify-center items-center rounded-full shadow-lg bg-darkgrey text-white">
                <BiSun />
              </div>
            ) : (
              <div className="w-[48px] h-[48px] grid place-items-center justify-center items-center rounded-full shadow-lg bg-white text-darkgrey">
                <BiMoon />
              </div>
            )}
          </button>
        </div>       
          <div className="flex gap-[50px] ">
            <div className="w-1/2 overflow-auto">
              <div className="h-[65vh] w-full">
                <Routes>
                  <Route path="/" element={<Heroabout />} />
                  <Route path="about" element={<Heroabout />} />
                  <Route path="skills" element={<Heroskills />} />
                  <Route path="projects" element={<Heroproject />} />
                  <Route path="contact" element={<Herocontact />} />
                </Routes>
              </div>

              <Navbar />
              {/* <Socials /> */}
            </div>
            <div className="w-1/2 overflow-auto">
              <div className="h-[65vh] w-full">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="about" element={<About />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
            </div>
          </div>      
      </div>
    </div>
  );
}

export default App;
