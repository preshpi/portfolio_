import About from "./About";
import Heroabout from "./Heroabout";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-full gap-5 px-12">
      <Heroabout />
      <About />
    </div>
  );
};

export default AboutPage;
