import React from "react";
import { motion } from "framer-motion";

const Price = () => {
  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeInOut" },
    }),
  };

  const cards = [
    {
      title: "No-Code",
      price: "$530 upfront",
      details: ["60 Days Delivery", "Support for 3 months", "Basic Features"],
    },
    {
      title: "No-Code Pro",
      price: "$930 upfront",
      details: ["90 Days Delivery", "Support for 6 months", "Advanced Features", "Custom Integrations"],
    },
    {
      title: "Enterprise",
      price: "$1,530 upfront",
      details: ["120 Days Delivery", "Support for 12 months", "Premium Features", "Dedicated Support", "Custom Solutions"],
    },
    {
      title: "Startup",
      price: "$430 upfront",
      details: ["45 Days Delivery", "Support for 2 months", "Basic Features", "Limited Integrations"],
    },
    {
      title: "Business",
      price: "$730 upfront",
      details: ["75 Days Delivery", "Support for 6 months", "Advanced Features", "Integrations with third-party apps"],
    },
  ];
  

  return (
    <div className="text-white flex flex-col items-center gap-7 pt-20 px-4">
      {/* Animated Heading */}
      <motion.p
        className="text-gray-400 rounded-full border border-gray-800 w-[9rem] text-center p-2 bg-black"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={textVariant}
      >
        Simple Pricing
      </motion.p>

      <motion.h1
        className="text-2xl text-center font-semibold md:text-4xl"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariant}
      >
        Simple Plans for Ambitious Ideas
      </motion.h1>

      {/* Payment Options */}
      <div className="rounded-full bg-gray-900 flex flex-col md:flex-row items-center gap-5 px-6 py-4 w-full max-w-2xl">
        <div className="rounded-full bg-gray-800 flex items-center justify-center px-4 py-2 w-full md:w-56">
          <button className="flex items-center justify-center gap-2 focus:ring-2 focus:ring-orange-500 active:bg-gray-700">
            <p>Pay in 2</p>
            <p className="rounded-full bg-white text-orange-600 px-3 py-1">
              Save 20%
            </p>
          </button>
        </div>
        <div className="flex justify-center gap-4 w-full md:w-auto">
          <button className="rounded-full px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-orange-500 active:bg-orange-600">
            Pay in 2
          </button>
          <button className="rounded-full px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-orange-500 active:bg-orange-600">
            Pay in 4
          </button>
          <button className="rounded-full px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-orange-500 active:bg-orange-600">
            Pay in 6
          </button>
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6 px-4">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border border-gray-500 bg-slate-900 rounded-3xl p-6 w-full md:w-[40%] max-w-md"
          >
            <p className="text-gray-400 rounded-full border flex justify-center items-center border-gray-800 w-[9rem] text-center p-2 bg-black mx-auto">
              Simple Pricing
            </p>
            <h1 className="text-2xl text-white font-semibold md:text-3xl">
              Custom 
            </h1>
            <p className="text-gray-500">
              Launch your MVP fast with core features in 60 days
            </p>
            <h1 className="text-2xl text-white font-semibold md:text-3xl">
              $530 <span>upfront</span>
            </h1>
            <p className="text-gray-500">5 monthly payments of $530</p>
            <button className="rounded-3xl py-3 bg-orange-500 text-white">
              Get Started
            </button>
            <p className="text-gray-500 mt-4">What's included:</p>
            <div className="text-gray-500">60 Days Delivery</div>
            <div className="text-gray-500">Support for 6 months</div>
            <div className="text-gray-500">Custom Design</div>
            <div className="text-gray-500">Core Features Implementation</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
