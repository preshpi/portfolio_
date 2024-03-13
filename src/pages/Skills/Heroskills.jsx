import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";
import useAnimationHook from "../../components/useAnimationHook";
import ResumeButton from "../../components/ResumeButton";

const Heroskills = () => {
  const header = "I work mostly with".split("");
  const sentence = "Frontend".split("");
  const word = "Technologies".split("");
  const controls = useAnimationHook();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="max-w-[500px]"
    >
      <p className="text-primary dark:text-gray text-[48px] leading-[64px] font-[700]">
        {header.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>
      <p className="text-secondary dark:text-white text-[48px] leading-[64px] font-[700]">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>
      <p className="text-secondary dark:text-white text-[48px] leading-[64px] font-[700]">
        {word.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>

      <p className="text-[16px] leading-[24px] dark:text-gray text-primary mt-[24px]">
        Here are some of the{" "}
        <span className="text-secondary font-bold dark:text-white">tools</span>{" "}
        i&apos;ve worked with over the years, for my{" "}
        <span className="text-secondary font-bold dark:text-white">
          personal, professional
        </span>{" "}
        and{" "}
        <span className="text-secondary font-bold dark:text-white">
          open source
        </span>{" "}
        projects.
      </p>

      <div className="mt-[32px]">
        <ResumeButton />
      </div>
    </motion.div>
  );
};

export default Heroskills;
