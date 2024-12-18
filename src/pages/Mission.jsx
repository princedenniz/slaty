import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowDownRight, GoArrowDown } from "react-icons/go";


const Mission = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeInOut' }
    })
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: 'easeInOut', delay: 1.5 }
    },
    hover: {
      borderColor: 'rgba(255, 165, 0, 0.8)',
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    
    <div className="text-white flex flex-col justify-center w-screen items-center gap-7 pt-32">
      {/* Animated "5 Spots Left" */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[9rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Our Mission
      </motion.p>

      {/* Animated Date Text */}
      <motion.h1
        className="text-white text-3xl font-semibold text-center md:text-6xl md:w-[70%]"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        Slaty empowers students <span className="text-orange-500"> to overcome</span> academic challenges  <span className="text-orange-500">with tools that </span> 
        inspire focus <span className="text-orange-500"> motivation, and success</span>
        {/* <p className='px-8'>Making <span className="text-orange-500">SaaS</span> Creation Accessible To <span className="text-orange-500">All</span></p> */}
      </motion.h1>

      {/* Animated "Your Idea Is Reality" */}
      {/* <motion.h1
        className="text-4xl md:text-7xl font-bold"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={textVariant}
      >
        Your Idea Is Reality
      </motion.h1> */}

      {/* Animated Subtitle */}
      <motion.p
        className="text-gray-400 text-center"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariant}
      >
         Together, we help every student thrive
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="flex items-center text-orange-500 gap-3 px-16 py-2 rounded-2xl"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariant}
      >
        Book A Call
        <GoArrowDownRight />
      </motion.button>

      <motion.div
  className="mt-20"
  initial={{ y: 0 }}
  animate={{ y: [0, 20, 0] }}
  transition={{
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  }}
>
  <GoArrowDown className="text-9xl font-thin text-orange-400" />
</motion.div>
    </div>
  );
};

export default Mission;
