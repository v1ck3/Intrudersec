import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";

const ProfileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    onClose();
    navigate("/");
    window.location.reload();
  };



  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
      {/* Sidebar */}
      <div className="w-72 bg-[#0A1D4A]/70 backdrop-blur-md h-full p-6 text-white relative">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <HiX size={26} />
        </button>

        {/* User Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold">My Profile</h2>
          <p className="text-sm text-gray-300">
            Welcome back <span className="text-white font-bold">{name}</span>
          </p>
          <p className="text-sm text-gray-300">
            Email: <span className="text-white font-bold">{email}</span>
          </p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <Link to="/profile" onClick={onClose} className="hover:text-gray-300">
            Profile
          </Link>
          <Link to="/courses" onClick={onClose} className="hover:text-gray-300">
            My Courses
          </Link>
          <Link
            to="/resources"
            onClick={onClose}
            className="hover:text-gray-300"
          >
            Resources
          </Link>

          {localStorage.getItem("role") === "admin" && (
            <Link
              to="/admin/dashboard"
              onClick={onClose}
              className="hover:text-gray-300"
            >
              Admin Dashboard
            </Link>
          )}
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500/80 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProfileSidebar;
