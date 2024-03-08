import { React, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

import MobileNav from "./components/MobileNav";
const Heroabout = lazy(() => import("./pages/About/Heroabout"));
const Heroskills = lazy(() => import("./pages/Skills/Heroskills"));
const Heroproject = lazy(() => import("./pages/Projects/Heroproject"));
const Herocontact = lazy(() => import("./pages/Contact/Herocontact"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const MobileAbout = lazy(() => import("./pages/About/MobileAbout"));
const MobileProject = lazy(() => import("./pages/Projects/MobileProject"));
const MobileSkills = lazy(() => import("./pages/Skills/MobileSkills"));
const MobileContact = lazy(() => import("./pages/Contact/MobileContact"));

import UseDarkmode from "./components/useDarkmode";
import Error404 from "./pages/Error404";

function Loading() {
  return (
    <div className="loading items-center justify-center flex">
      <div className="progress"></div>
    </div>
  );
}

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
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Heroabout />
                      </Suspense>
                    }
                  />
                  <Route
                    path="skills"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Heroskills />
                      </Suspense>
                    }
                  />
                  <Route
                    path="projects"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Heroproject />
                      </Suspense>
                    }
                  />
                  <Route
                    path="contact"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Herocontact />
                      </Suspense>
                    }
                  />
                </Routes>
                <div className="mt-[70px]">
                  <Navbar />
                </div>
              </>
            </div>
            <div className="w-1/2 overflow-auto">
              <>
                <Routes location={location} key={location.key}>
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Loading />}>
                        <About />
                      </Suspense>
                    }
                  />
                  <Route
                    path="skills"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Skills />
                      </Suspense>
                    }
                  />
                  <Route
                    path="projects"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Projects />
                      </Suspense>
                    }
                  />
                  <Route
                    path="contact"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Contact />
                      </Suspense>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Error404 />
                      </Suspense>
                    }
                  />
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
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <MobileAbout />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<Loading />}>
                <MobileProject />
              </Suspense>
            }
          />
          <Route
            path="skills"
            element={
              <Suspense fallback={<Loading />}>
                <MobileSkills />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <MobileContact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Error404 />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
