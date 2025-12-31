import React, { useState } from "react";
import toast from "react-hot-toast";

const UserAuth = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  // Handle input change
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Register user
  const userRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = values;

    try {
      const res = await fetch("http://localhost:8520/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("Signup Response:", data);

      if (res.ok) {
        toast.success("Signup successful");
        setIsLogin(true);
        setValues({ name: "", email: "", password: "" });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // Login user
  const userLogin = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      const res = await fetch("http://localhost:8520/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (res.ok) {
        toast.success("Successfully login!");
        onClose();
      }

      localStorage.setItem("token", data.jwttoken);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-black mb-4">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form
          onSubmit={isLogin ? userLogin : userRegister}
          className="space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={values.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-black"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-black"
          />

          <button
            type="submit"
            onClick={console.log("first")}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-black mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
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
