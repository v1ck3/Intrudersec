import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-blue-600 text-amber-50">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-semibold">IntruderSec Academy</h1>

        {/* Hamburger Menu (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">Home</Link>
          <Link to="/courses" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">Courses</Link>
          <Link to="/about" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">About</Link>
          <Link to="/resources" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">Resources</Link>
          <Link to="/contact" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">Contact</Link>
          <Link to="/news" className="hover:text-blue-100 transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110">News</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col items-center gap-4 pb-4 md:hidden font-semibold text-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-100">Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-blue-100">Courses</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-100">About</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="hover:text-blue-100">Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-100">Contact</Link>
          <Link to="/news" onClick={() => setIsOpen(false)} className="hover:text-blue-100">News</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

