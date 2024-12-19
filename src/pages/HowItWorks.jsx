import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";

const HowItWorks = () => {

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 1.5 },
    },
    hover: {
      borderColor: "rgba(255, 165, 0, 0.8)",
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const items = [
    {
      title: "Term Paper",
      description: "A detailed academic essay that involves research on a specific topic, demonstrating understanding through structured arguments, analysis, and proper citations."
    },
    {
      title: "Book Review",
      description: "A critical analysis of a book, summarizing its content, themes, and evaluating its strengths and weaknesses, offering recommendations to potential readers."
    },
    {
      title: "Project Writing",
      description: "A structured report outlining a project's research, methodology, analysis, and conclusions, often with data and recommendations."
    }
  ];
  

  return (
    <div className="text-white flex flex-col justify-center items-center gap-7 pt-20 px-4 w-full">
      {/* Title */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-40 text-center p-2 bg-black text-sm sm:text-base"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
      >
        How It Works
      </motion.p>

      {/* Headings */}
      <div className="text-center flex flex-col justify-center items-center">
        <motion.h1
          className="text-white text-xl text-center md:w-[70%] font-semibold sm:text-3xl md:text-5xl lg:text-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            },
          }}
        >
          Slaty connects tutors with students, offering a chance to earn income while empowering academic success
        </motion.h1>
        {/* <motion.h1
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.8 },
            },
          }}
        >
          30 Days
        </motion.h1> */}
      </div>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 text-sm md:text-base lg:text-lg text-center px-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.8 },
          },
        }}
      >
        Sign up today to start tutoring and earning!

      </motion.p>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4 md:px-8">
        {items.map((title, i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={i}
              ref={ref}
              className="rounded-2xl bg-gray-900 text-center flex flex-col items-center border border-gray-600 w-full sm:w-[45%] lg:w-[30%] p-6 sm:p-8"
              variants={cardVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="w-full h-32 border border-gray-700 rounded-2xl bg-black flex justify-center items-center">
                <motion.div
                  className="rounded-full p-6 bg-orange-400 w-8 h-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {/* <IoIosPeople /> */}
                </motion.div>
              </div>
              <div className="pt-5 flex flex-col gap-3">
                <h1 className="font-semibold text-lg md:text-2xl">{title.title}</h1>
                <p className="text-sm text-gray-400">
                  {title.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Button */}
      {/* <motion.button
        className="border border-gray-800 bg-orange-500 flex items-center gap-2 px-8 py-3 rounded-lg text-sm md:text-base"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={buttonVariant}
      >
        Learn More
        <GoArrowDownRight />
      </motion.button> */}
    </div>
  );
};

export default HowItWorks;
