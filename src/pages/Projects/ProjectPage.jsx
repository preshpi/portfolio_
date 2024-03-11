import React from "react";
import Heroproject from "./Heroproject";
import Projects from "./Projects";

const ProjectPage = () => {
  return (
    <div className="flex items-center justify-center h-full gap-5 px-12">
      <Heroproject />
      <Projects />
    </div>
  );
};

export default ProjectPage;
