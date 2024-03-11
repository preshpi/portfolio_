import { React, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

import MobileNav from "./components/MobileNav";
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const SkillsPage = lazy(() => import("./pages/Skills/SkillsPage"));
const ProjectPage = lazy(() => import("./pages/Projects/ProjectPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));

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
        <div className="h-full flex items-center justify-center p-5 relative">
          <Navbar />
          <div className="w-full h-full ">
            <Routes location={location} key={location.key}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route
                path="/skills"
                element={
                  <Suspense fallback={<Loading />}>
                    <SkillsPage />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loading />}>
                    <ContactPage />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loading />}>
                    <ProjectPage />
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
          </div>
          <div className="flex items-end h-full justify-between flex-col absolute right-0 p-5">
            <UseDarkmode />
            <Socials />
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
