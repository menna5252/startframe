
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <nav className="bg-gray-700 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-white text-2xl font-bold uppercase">
            Start Framework
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden px-3 py-2 border rounded-md"
            aria-label="Toggle navigation"
          >
            <span className="text-xl">☰</span>
          </button>
          {/* Navbar Links */}
          <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/about"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white uppercase font-semibold px-2 py-1 hover:bg-teal-500 rounded-lg transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

