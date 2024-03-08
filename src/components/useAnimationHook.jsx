import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useAnimationContainer = (delay = 0.5, duration = 0.7) => {
  const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
      await controls.start({
        opacity: 1,
        transition: { delay, duration, ease: "easeInOut" },
      });
    };

    animation();

    return () => controls.stop();
  }, [controls, delay, duration]);

  return controls;
};

export default useAnimationContainer;
