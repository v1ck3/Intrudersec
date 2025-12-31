import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import UserAuth from "./UserAuth";
import ProfileSidebar from "./ProfileSidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const token = localStorage.getItem("token");

  // Close auth modal when user logs in
  useEffect(() => {
    if (token) {
      setOpenAuth(false);
    }
  }, [token]);

  return (
    <header className="w-full py-6 bg-[#0A1D4A] text-white relative">
      <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">IntruderSec Academy</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>

          {token ? (
            <button
              onClick={() => setOpenProfile(true)}
              className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition"
            >
              Profile
            </button>
          ) : (
            <button
              onClick={() => setOpenAuth(true)}
              className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition"
            >
              Login / Signup
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#0A1D4A]/95 flex flex-col items-center gap-5 py-6 text-lg font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {token ? (
            <button
              onClick={() => {
                setOpenProfile(true);
                setIsOpen(false);
              }}
              className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition"
            >
              Profile
            </button>
          ) : (
            <button
              onClick={() => {
                setOpenAuth(true);
                setIsOpen(false);
              }}
              className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition"
            >
              Login / Signup
            </button>
          )}
        </nav>
      )}

      {/* Modals */}
      <UserAuth
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />

      <ProfileSidebar
        isOpen={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </header>
  );
};

export default Header;
