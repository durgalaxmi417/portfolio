import React, { useState } from "react";
import profileImage from "./mymainimage.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add emojis for icons (mobile only)
  const navLinks = [
    { name: "Home", icon: "🏠" },
    { name: "About", icon: "ℹ️" },
    { name: "Career", icon: "💼" },
    { name: "Experience", icon: "📜" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[90%] 
                    border border-white/10 shadow-xl backdrop-blur-xl rounded-3xl 
                    bg-[#0a0a23]/90 transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          Durga Lakshmi<span className="text-[#0fe2f2]">.Dev</span>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav Links (No Icons) */}
        <ul className="hidden sm:flex items-center gap-8 text-white text-sm font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className="block px-4 py-2 rounded-xl transition duration-300 hover:bg-white/10 hover:text-[#7830e1]"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Profile Image */}
        <div className="hidden sm:flex items-center">
          <img
            src={profileImage}
            alt="User"
            className="w-9 h-9 rounded-full object-cover border border-white/20 shadow-md"
          />
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1b394d] text-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
       <div className="flex justify-end p-4 ">
        <button
          onClick={() => setMenuOpen(false)}
          className="text-2xl focus:outline-none sm:hidden"
        >
          ➡
        </button>
         
        </div>

        {/* Mobile Nav Links (With Icons) */}
        <ul className="flex flex-col gap-6 p-6 text-lg sm:hidden">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-2 py-1 rounded-lg transition duration-300 hover:bg-white/10 hover:text-[#7830e1]"
              >
                <span>{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



