import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/slaty.jpg"
import img3 from "../assets/sly3.png"
import img4 from "../assets/sly4.png"
import img5 from "../assets/sly7.png"

const OurService = () => {
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
    <div className="text-white flex flex-col justify-center w-screen items-center gap-7 pt-44 p-10">
      {/* Animated "5 Spots Left" */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[11rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Vision Statement
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
        Build. Launch. Succeed
      </motion.h1>

      <motion.p
        className="text-gray-400 md:w-[50%] text-center p-3"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariant}
      >
       To empower students to achieve academic success and personal growth by providing innovative tools, personalized support, and opportunities for learning and mentorship, fostering a community where everyone can thrive
      </motion.p>

      <div className="flex flex-col gap-6 md:flex-row w-full items-center justify-center md:gap-14 p-4">
        {/* Card 1 */}
        <div className="border rounded-2xl flex justify-center items-center overflow-hidden border-gray-700 h-[15rem] md:h-[20rem] w-full md:w-[25%]">
  <img src={img2} className="max-w-full max-h-full object-contain" alt="" />
</div>


        {/* Card 2 */}
        <div className="border rounded-2xl flex justify-center items-center overflow-hidden border-gray-700 h-[15rem] md:h-[20rem] w-full md:w-[25%]">
  <img src={img4} className="max-w-full max-h-full object-contain" alt="" />
</div>


        {/* Card 3 */}
        <div className="border rounded-2xl flex justify-center items-center overflow-hidden border-gray-700 h-[15rem] md:h-[20rem] w-full md:w-[25%]">
  <img src={img5} className="max-w-full max-h-full object-contain" alt="" />
</div>

      </div>
    </div>
  );
};

export default OurService;
