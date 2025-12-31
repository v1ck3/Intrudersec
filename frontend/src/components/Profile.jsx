import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Get user data from localStorage
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
        
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#0A1D4A] text-white flex items-center justify-center text-3xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            {name || "User"}
          </h2>
          <p className="text-gray-500 text-sm">
            {email || "user@email.com"}
          </p>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Name</span>
            <span className="font-medium text-gray-800">{name}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium text-gray-800">{email}</span>
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
