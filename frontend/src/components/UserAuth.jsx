import React, { useState } from "react";
import toast from "react-hot-toast";

const UserAuth = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default
  });

  if (!isOpen) return null;

  // ================= INPUT HANDLER =================
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ================= SIGNUP =================
  const userRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8520/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message || "Signup failed");
      }

      toast.success("Signup successful 🎉 Please login");

      setIsLogin(true);
      setValues({
        name: "",
        email: "",
        password: "",
        role: "student",
      });
    } catch {
      toast.error("Server error");
    }
  };

  // ================= LOGIN =================
  const userLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:8520/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return toast.error(data.message || "Login failed");
    }

    // Store auth data
    localStorage.setItem("token", data.jwttoken);
    localStorage.setItem("userId", data._id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("role", data.role);

    toast.success("Login successful 🚀");

    setValues({
      name: "",
      email: "",
      password: "",
      role: "student",
    });

    onClose();

    // 🔐 ROLE-BASED REDIRECT
    if (data.role === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/";
    }
  } catch {
    toast.error("Server error");
  }
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-center text-black mb-6">
          {isLogin ? "Login to Your Account" : "Create Account"}
        </h2>

        {/* Form */}
        <form
          onSubmit={isLogin ? userLogin : userRegister}
          className="space-y-4"
        >
          {/* Name */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={values.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-black outline-none"
            />
          )}

          {/* Role Selection */}
          {!isLogin && (
            <div className="flex justify-center gap-6 text-black">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={values.role === "student"}
                  onChange={handleChange}
                />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={values.role === "admin"}
                  onChange={handleChange}
                />
                Admin
              </label>
            </div>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-black outline-none"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-black outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-black mt-5">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserAuth;
