import { React } from "react";
import { Routes, Route } from "react-router-dom";

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

function App() {
 
  return (
    <>
      {/* Large screen */}
      <div className="items-center justify-center h-[100vh] bg-resume dark:bg-bgblack transition-colors duration-300 lg:block hidden">
        <div className="w-[80%] mx-auto">
          <div className="flex items-end justify-end mb-5 pt-[15px]">
            <UseDarkmode />
          </div>
          <div className="flex gap-[50px]">
            <div className="w-1/2 overflow-auto">
              <div className="h-[60vh] w-full">
                <Routes>
                  <Route path="/" element={<Heroabout />} />
                  <Route path="about" element={<Heroabout />} />
                  <Route path="skills" element={<Heroskills />} />
                  <Route path="projects" element={<Heroproject />} />
                  <Route path="contact" element={<Herocontact />} />
                </Routes>
              </div>

              <Navbar />
              <Socials />
            </div>
            <div className="w-1/2 overflow-auto">
              <div className="h-[65vh] w-full">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="about" element={<About />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small screen & tablet */}
      <div className="lg:hidden  min-h-screen block bg-resume dark:bg-bgblack transition-colors duration-300">
        <MobileNav />
        <Routes>
          <Route path="/" element={<MobileAbout />} />
          <Route path="about" element={<MobileAbout />} />
          <Route path="projects" element={<MobileProject />} />
          <Route path="skills" element={<MobileSkills />} />
          <Route path="contact" element={<MobileContact />} />
        </Routes>
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
