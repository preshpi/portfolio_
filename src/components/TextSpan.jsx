import { React, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

function TextSpan({ children }) {
  const [playtext, setPlayText] = useState(false);
  const controls = useAnimationControls();

  const textBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        duration: 1
      },
    });
    setPlayText(true)
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!playtext) textBand();
      }}
      onAnimationComplete={() => setPlayText(false)}
    >
      {children}
    </motion.span>
  );
}

export default TextSpan;
