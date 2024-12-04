import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeInOut" },
    }),
  };

  
  return (
    <div className="text-white flex flex-col justify-center w-screen items-center gap-7 pt-48 p-10">
      {/* Animated "5 Spots Left" */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[9rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Let Talk
      </motion.p>

      {/* Animated Date Text */}
      <motion.h1
        className="text-white text-2xl font-semi-bold md:text-6xl"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        {" "}
        We're Here To Help
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center p-3"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariant}
      >
        Our team is ready to support you with expert advice & solutions.
      </motion.p>

    </div>
  );
};

export default Contact;
