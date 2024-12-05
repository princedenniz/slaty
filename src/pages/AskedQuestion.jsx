import React, { useState } from 'react';
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";

const AskedQuestion = () => {
  // Use an object to manage the open/close state of each question
  const [dropdownState, setDropdownState] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const toggleDropdown = (question) => {
    setDropdownState(prevState => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

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
    <div className="text-white flex flex-col justify-center items-center gap-7 pt-36 px-4 md:px-0">
      {/* Animated "Need to Know" Badge */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-36 text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Need to Know
      </motion.p>

      {/* Animated Heading */}
      <motion.h1
        className="text-white text-2xl font-semibold md:text-5xl text-center leading-snug"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        Frequently Asked Questions
      </motion.h1>

      {/* Accordion-like Dropdown Section */}
      <div className="space-y-4 w-full max-w-4xl">
        {/* Question 1 */}
        <div
          className="flex flex-col bg-gray-700 rounded-3xl justify-between px-7 py-5 cursor-pointer transition-all hover:bg-gray-600"
          onClick={() => toggleDropdown('question1')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold md:text-2xl">What's Included In The MVP?</h2>
            <GoChevronDown
              className={`text-white transition-transform duration-300 ${dropdownState.question1 ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Dropdown Answer */}
          <motion.div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownState.question1 ? 'max-h-40' : 'max-h-0'}`}
            initial="hidden"
            animate={dropdownState.question1 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            <p className="text-gray-400 mt-3">
              Your MVP includes a fully functional SaaS platform built on Bubble (for the no-code plan). It features essential user flows, core functionalities, responsive design, and robust testing to ensure a seamless user experience. Think of it as your launch-ready foundation.
            </p>
          </motion.div>
        </div>

        {/* Question 2 */}
        <div
          className="flex flex-col bg-gray-700 rounded-3xl justify-between px-7 py-5 cursor-pointer transition-all hover:bg-gray-600"
          onClick={() => toggleDropdown('question2')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold md:text-2xl">What Is The Timeline For Delivery?</h2>
            <GoChevronDown
              className={`text-white transition-transform duration-300 ${dropdownState.question2 ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Dropdown Answer */}
          <motion.div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownState.question2 ? 'max-h-40' : 'max-h-0'}`}
            initial="hidden"
            animate={dropdownState.question2 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            <p className="text-gray-400 mt-3">
              The delivery timeline will depend on the specific features you require. We typically aim for a 4-6 week development period for a complete MVP, including testing and revisions.
            </p>
          </motion.div>
        </div>

        {/* Question 3 */}
        <div
          className="flex flex-col bg-gray-700 rounded-3xl justify-between px-7 py-5 cursor-pointer transition-all hover:bg-gray-600"
          onClick={() => toggleDropdown('question3')}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold md:text-2xl">How Much Does It Cost?</h2>
            <GoChevronDown
              className={`text-white transition-transform duration-300 ${dropdownState.question3 ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Dropdown Answer */}
          <motion.div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownState.question3 ? 'max-h-40' : 'max-h-0'}`}
            initial="hidden"
            animate={dropdownState.question3 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            <p className="text-gray-400 mt-3">
              The cost varies depending on the complexity of the features and functionalities you need. Our pricing starts at $10,000 for a basic MVP.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
