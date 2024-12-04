import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowDownRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Footer = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeInOut' },
    }),
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1.5, duration: 0.8 } },
    hover: {
      scale: 1.1,
      backgroundColor: 'rgba(255, 165, 0, 1)',
      color: '#000',
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="text-white flex flex-col justify-center w-full items-center gap-10 mt-32 pt-32 px-4 text-center bg-gray-900 ">
      <motion.p className="text-4xl font-bold text-orange-500">Slaty</motion.p>

      {/* Animated Heading */}
      <motion.h1
        className="text-2xl md:text-6xl font-bold leading-snug"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        Let's Turn Your Dream Into Reality
      </motion.h1>

      <div>
        <motion.p
          className="text-gray-400 text-lg md:text-xl"
          animate="visible"
          custom={2}
          variants={textVariant}
        >
          We bring your vision to life with creativity
        </motion.p>
        <motion.p
          className="text-gray-400 text-lg md:text-xl"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariant}
        >
          and precision. Let’s make it happen.
        </motion.p>
      </div>

      {/* Animated Button */}
      <motion.button
        className="flex items-center gap-3 px-10 py-3 text-lg md:text-xl font-semibold rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 shadow-lg"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariant}
      >
        Book A Call
        <GoArrowDownRight className="text-2xl" />
      </motion.button>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-400 mt-6">
      <Link
            // key={i}
            to="/terms&conditions"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            How it Works
          </Link>
      <Link
            // key={i}
            to="/terms&conditions"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            Mission
          </Link>
      <Link
            // key={i}
            to="/terms&conditions"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            Works
          </Link>
      <Link
            // key={i}
            to="/terms&conditions"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            Services
          </Link>
      <Link
            // key={i}
            to="/Contact"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            Contact
          </Link>
      <Link
            // key={i}
            to="/terms&conditions"
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            Terms & Conditions
          </Link>
        {/* {['How it Works', 'Mission', 'Works', 'Services', 'Contact', 'Terms & Conditions'].map((link, i) => (
          <Link
            key={i}
            to=""
            className="hover:text-orange-500 transition duration-300 text-sm md:text-base"
          >
            {link}
          </Link>
        ))} */}
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Slaty. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
