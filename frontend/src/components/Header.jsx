import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-[#0A1D4A] text-white">
      <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center relative">

        {/* Logo */}
        <h1 className="text-2xl font-bold">IntruderSec Academy</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/courses" className="hover:text-gray-300 transition">Courses</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/resources" className="hover:text-gray-300 transition">Resources</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link to="/news" className="hover:text-gray-300 transition">News</Link>
        </nav>

        {/* Login Button */}
        {/* <button className="hidden md:block bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition">
          Login
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-[#0A1D4A]/95 text-white flex flex-col items-center gap-5 py-6 text-lg font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Courses</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</Link>
          <Link to="/news" onClick={() => setIsOpen(false)} className="hover:text-gray-300">News</Link>

          <button className="mt-2 bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
