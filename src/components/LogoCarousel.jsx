import React from 'react';
import { motion } from 'framer-motion';

const LogoCarousel = () => {
  // Array of logos
  const logos = [
    'Buildify',
    'Twitter',
    'Facebook',
    'Slaty',
    'LinkedIn',
    'iPhone',
    'JavaScript',
    'Vercel',
    'Test',
  ];

  return (
    <div className="text-white flex flex-col justify-center w-full items-center gap-7 pt-14">
      <p className="text-gray-500">
        Building the future One Platform at a Time
      </p>

      {/* Image Carousel Container */}
      <div className="overflow-hidden w-full md:w-[70rem]">
        <motion.div
          className="flex items-center justify-center gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 20, // Adjust for speed
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {/* Duplicate logos to create seamless infinite scroll */}
          {[...logos, ...logos].map((logo, idx) => (
            <h1
              key={idx}
              className={`font-bold text-2xl ${
                idx % 2 === 0 ? 'text-white' : 'text-orange-500'
              }`}
            >
              {logo}
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
