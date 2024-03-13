import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";
import useAnimationHook from "../../components/useAnimationHook";
import ResumeButton from "../../components/ResumeButton";
function Heroabout() {
  const controls = useAnimationHook();

  const header = "Hello, I'm".split("");
  const sentence = "Precious Egwuenu".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      <span className="text-primary dark:text-gray font-[700] leading-[64px] text-[48px]">
        {header.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </span>

      <p className="name font-[700] leading-[64px] text-[48px] dark:text-white">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>

      <p className="text-[16px] leading-[26px] text-para dark:text-gray h-[192px] word-break mt-[24px] w-[500px]">
        I am a{" "}
        <span className="text-secondary font-bold dark:text-white">
          {" "}
          frontend developer{" "}
        </span>{" "}
        I have a strong background in creating visually appealing and{" "}
        <span className="text-secondary font-bold dark:text-white">
          {" "}
          user-friendly web experiences.
        </span>{" "}
        I am motivated to find a role where I can challenge myself{" "}
        <span className="text-secondary font-bold dark:text-white">
          and provide value to website users.
        </span>{" "}
        I am excited to bring my knowledge and experience to a team and
        contribute to a company's success.
      </p>

      <div className="mt-[20px]">
        <ResumeButton />
      </div>
    </motion.div>
  );
}

export default Heroabout;
