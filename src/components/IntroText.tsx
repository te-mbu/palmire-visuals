import React from "react";
import { motion } from "framer-motion";

interface IntroTextProps {
  setIntroDone: (done: boolean) => void;
}

const IntroText: React.FC<IntroTextProps> = ({ setIntroDone }) => {
  const textVariants = {
    initial: { y: "50vh" },
    animate: { y: "0px" },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-start items-center z-50"
      initial={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      transition={{ duration: 2, delay: 3 }}
      onAnimationComplete={() => setIntroDone(true)}
    >
      <motion.p
        className="text-grey-50 font-[500] leading-tight text-vw"
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1.5,
          delay: 1.2,
          type: "spring",
          stiffness: 20,
          when: "beforeChildren",
        }}
      >
        <motion.span className="text-light">PALMIRE MBU</motion.span>,
        VIDEOGRAPHER & EDITOR
      </motion.p>
    </motion.div>
  );
};

export default IntroText;
