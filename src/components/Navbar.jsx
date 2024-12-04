import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-screen top-0 fixed flex justify-center p-4 sm:p-6 z-30">
      <div className="w-full max-w-5xl bg-gray-950 rounded-lg border border-gray-600">
        {/* Header Section */}
        <div className="flex justify-between px-8 py-2 items-center">
          {/* Logo */}
          <Link to="/" className="text-lg sm:text-xl md:text-2xl text-orange-600">
            SLATY
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between gap-4 text-gray-400">
            <li className="cursor-pointer hover:text-white text-sm md:text-base">
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li className="cursor-pointer hover:text-white text-sm md:text-base">
              <Link to="/mission">Mission</Link>
            </li>
            <li className="cursor-pointer hover:text-white text-sm md:text-base">
              <Link to="/work">Works</Link>
            </li>
            <li className="cursor-pointer hover:text-white text-sm md:text-base">
              <Link to="/price">Pricing</Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-gray-800 text-center hover:text-white p-2 sm:p-3 w-28 sm:w-32 rounded-2xl text-sm sm:text-base text-gray-400 border border-x-orange-200"
          >
            Let Talk
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl sm:text-3xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col justify-center items-center px-6 py-4">
            <ul className="flex flex-col items-center gap-6 text-gray-400">
              <li onClick={toggleMenu}>
                <Link to="/how-it-works" className="hover:text-white text-base">
                  How it works
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/mission" className="hover:text-white text-base">
                  Mission
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/work" className="hover:text-white text-base">
                  Works
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/price" className="hover:text-white text-base">
                  Pricing
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/contact" className="hover:text-white text-base">
                  Contact
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/terms&conditions" className="hover:text-white text-base">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            {/* Mobile Button */}
            <div className="flex justify-center mt-6 w-full">
              <Link
                to="/contact"
                className="bg-gray-800 w-full hover:text-white px-6 py-2 rounded-2xl text-base text-gray-400 border border-x-orange-200 text-center"
                onClick={toggleMenu}
              >
                Let Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
