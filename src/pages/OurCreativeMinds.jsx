import React from 'react'
import { motion } from "framer-motion";

const OurCreativeMinds = () => {
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
    <div className="text-white flex flex-col justify-center w-screen items-center gap-7 pt-36">
        {/* Animated "5 Spots Left" */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[11rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Our Creative Minds
      </motion.p>

      {/* Animated Date Text */}
      <motion.h1
        className="text-white text-2xl font-semi-bold md:text-6xl text-center"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        The People Behind The Magic
      </motion.h1>

      <motion.p
        className="text-gray-500 text-center"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        We re real people building real solution-no fluff, no corperate jargon, just result
      </motion.p>

      <div className="flex flex-col gap-6 md:flex-row w-full items-center justify-center md:gap-14 p-4">
      <div className="border rounded-2xl flex justify-center items-center border-gray-700 h-[15rem] md:h-[20rem] w-full md:w-[25%]">
          <div className="text-center text-gray-500">Content Placeholder</div>
        </div>
      <div className="border rounded-2xl flex justify-center items-center border-gray-700 h-[15rem] md:h-[20rem] w-full md:w-[25%]">
          <div className="text-center text-gray-500">Content Placeholder</div>
        </div>
      </div>
    </div>
  )
}

export default OurCreativeMinds