import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowDownRight } from "react-icons/go";
import HowItWorks from '../pages/HowItWorks';
import Mission from '../pages/Mission';
import Work from '../pages/Work';
import OurService from '../pages/OurService';
import Price from '../pages/Price';
import WhatOurUserAreSaying from '../pages/WhatOurUserAreSaying';
import OurCreativeMinds from '../pages/OurCreativeMinds';
import AskedQuestion from '../pages/AskedQuestion';
import LogoCarousel from './LogoCarousel';
import Footer from './Footer';

const Hero = () => {
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
    <div>
    <div className="text-white flex flex-col justify-center w-screen items-center gap-7 pt-48">
      {/* Animated "5 Spots Left" */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[9rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        5 Spots Left
      </motion.p>

      {/* Animated Date Text */}
      <motion.h1
        className="text-orange-500 text-4xl font-bold md:text-7xl"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        <span className="text-white">It's</span> January 01
      </motion.h1>

      {/* Animated "Your Idea Is Reality" */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={textVariant}
      >
        Your Idea Is Reality
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-gray-400"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={textVariant}
      >
        No-code MVP Development
      </motion.p>

      {/* Animated Button */}
      <motion.a
  href="https://slate-waitlist-8l48.vercel.app/"
  // target="_blank"
  rel="noopener noreferrer"
  className="border border-gray-800 bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center gap-3 px-8 py-4 rounded-2xl shadow-lg hover:shadow-orange-400 transition-shadow duration-300"
  initial="hidden"
  animate="visible"
  whileHover="hover"
  variants={buttonVariant}
>
  <span className="text-lg font-semibold">Join Waitlist</span>
  <GoArrowDownRight className="text-xl" />
</motion.a>


      <LogoCarousel/>
    </div>

    <HowItWorks/>

    <Mission/>

    <Work/>

    <OurService/>

    <Price/>

    <WhatOurUserAreSaying/>

    <OurCreativeMinds/>

    {/* <AskedQuestion/>
    <Footer/> */}
    </div>
  );
};

export default Hero;