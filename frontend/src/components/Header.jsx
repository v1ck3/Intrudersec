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

  useEffect(() => {
    if (token) setOpenAuth(false);
  }, [token]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Floating Container */}
      <div className="max-w-full ">
        <div className="bg-[#162B6F] backdrop-blur-md text-white py-3 sm:py-4 px-4 sm:px-6  shadow-lg border border-white/10">

          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="text-base sm:text-lg md:text-xl font-bold truncate max-w-[180px] sm:max-w-none"
            >
              IntruderSec Academy
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/courses" className="hover:text-gray-300">Courses</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/resources" className="hover:text-gray-300">Resources</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>

              {token ? (
                <button
                  onClick={() => setOpenProfile(true)}
                  className="bg-white/20 px-5 py-2 rounded-full hover:bg-white/30 transition"
                >
                  Profile
                </button>
              ) : (
                <button
                  onClick={() => setOpenAuth(true)}
                  className="bg-white/20 px-5 py-2 rounded-full hover:bg-white/30 transition"
                >
                  Login / Signup
                </button>
              )}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="lg:hidden mt-4 flex flex-col items-center gap-4 text-sm font-medium pb-2">
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
                  className="bg-white/20 px-6 py-2 rounded-full w-full text-center"
                >
                  Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    setOpenAuth(true);
                    setIsOpen(false);
                  }}
                  className="bg-white/20 px-6 py-2 rounded-full w-full text-center"
                >
                  Login / Signup
                </button>
              )}
            </nav>
          )}
        </div>
      </div>

      {/* Modals */}
      <UserAuth isOpen={openAuth} onClose={() => setOpenAuth(false)} />
      <ProfileSidebar isOpen={openProfile} onClose={() => setOpenProfile(false)} />
    </header>
  );
};

export default Header;
