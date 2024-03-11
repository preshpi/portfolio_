import React from "react";
import Heroskills from "./Heroskills";
import Skills from "./Skills";

const SkillsPage = () => {
  return (
    <div className="flex items-center justify-center h-full gap-5 px-12">
      <Heroskills />
      <Skills />
    </div>
  );
};

export default SkillsPage;
