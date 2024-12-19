import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/slaty.jpg"

const Work = () => {
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
    <div className="text-white flex flex-col w-screen items-center gap-7 pt-48">
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[18rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
         Acing Your Courses with Slaty
      </motion.p>

      <motion.h1
        className="text-white text-2xl md:w-[50%] text-center font-semi-bold md:text-6xl"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        Achieving academic success starts with staying organized and motivated.
      </motion.h1>

      <div className="w-screen flex flex-col md:flex-row justify-center items-center">
  <div className="w-full md:w-[70%] flex flex-col-reverse md:flex-row gap-8 md:gap-20 p-4 md:p-0">
    {/* Left Section */}
    <div className="flex flex-col w-full md:w-[50%] border-l-2 border-gray-900">
      <div className="border-l-2 flex flex-col gap-6 border-b-2 p-6 md:p-12 border-l-orange-500 border-b-gray-500 h-auto md:h-48">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl">Slaty</h1>
          {/* <p className="text-xl md:text-3xl">Try AirMedia</p> */}
        </div>
        <div className="text-gray-400 text-sm md:text-base">
        Slaty helps you track deadlines, set goals, and build habits to stay ahead. Simplify your studies and excel with ease!

        </div>
      </div>

      <div className="hover:border-l-2 flex gap-4 md:gap-6 items-center border-b-2 p-6 md:p-12 border-l-orange-400 border-b-gray-500 h-auto md:h-36">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl">Slaty</h1>
        </div>
        <div className="text-gray-400 text-sm md:text-base">
        Providing Job Opportunities with Slaty
        </div>
      </div>

      <div className="hover:border-l-2 p-6 md:p-12 gap-4 md:gap-6 items-center flex border-l-orange-500 h-auto md:h-36">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl">Slaty</h1>
        </div>
        <div className="text-gray-400 text-sm md:text-base">
        Get expert guidance whenever you need it!

        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="border rounded-2xl flex justify-center px-3 items-center border-gray-700 h-[20rem] md:h-[30rem] w-full md:w-[50%]">
      {/* <div className="text-center text-gray-500">Content Placeholder</div> */}
      <img src={img1} alt="" />
    </div>
  </div>
</div>

    </div>
  );
};

export default Work;
