import { React } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";

import Heroabout from "./pages/About/Heroabout";
import Heroskills from "./pages/Skills/Heroskills";
import Heroproject from "./pages/Projects/Heroproject";
import Herocontact from "./pages/Contact/Herocontact";

import Socials from "./components/Socials";
import Footer from "./components/Footer";

import MobileNav from "./components/MobileNav";
import MobileAbout from "./pages/About/MobileAbout";
import MobileContact from "./pages/Contact/MobileContact";
import MobileProject from "./pages/Projects/MobileProject";
import MobileSkills from "./pages/Skills/MobileSkills";

import UseDarkmode from "./components/useDarkmode";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Large screen */}

      <div className="h-screen bg-resume overflow-y-scroll dark:bg-bgblack transition-colors duration-300 lg:block hidden">
        <div className="w-full h-14 flex items-end justify-end pt-4 px-2">
          <UseDarkmode />
          <Socials />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex w-[80%] h-[100%] items-center justify-center">
            <div className="w-1/2 overflow-auto">
              <>
                <Routes location={location} key={location.key}>
                  <Route path="/" element={<Heroabout />} />
                  <Route path="about" element={<Heroabout />} />
                  <Route path="skills" element={<Heroskills />} />
                  <Route path="projects" element={<Heroproject />} />
                  <Route path="contact" element={<Herocontact />} />
                </Routes>
                <div className="mt-[70px]">
                  <Navbar />
                </div>
              </>
            </div>
            <div className="w-1/2 overflow-auto">
              <>
                <Routes location={location} key={location.key}>
                  <Route path="/" element={<About />} />
                  <Route path="about" element={<About />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* small screen & tablet */}
      <div className="lg:hidden block min-h-screen bg-resume dark:bg-bgblack transition-colors duration-300">
        <MobileNav />
        <Routes>
          <Route path="/" element={<MobileAbout />} />
          <Route path="about" element={<MobileAbout />} />
          <Route path="projects" element={<MobileProject />} />
          <Route path="skills" element={<MobileSkills />} />
          <Route path="contact" element={<MobileContact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
