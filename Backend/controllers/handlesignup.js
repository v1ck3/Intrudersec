import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ================= SIGNUP ================= */
const handleuser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔐 Secure role assignment
    let finalRole = "student";
    if (
      role === "admin" &&
      req.headers["x-admin-secret"] === process.env.ADMIN_SECRET
    ) {
      finalRole = "admin";
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: finalRole
    });

    res.status(201).json({
      message: "Signup successful",
      userId: user._id
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

/* ================= LOGIN ================= */
const handlelogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      jwttoken: token,
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};


const allUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
};

export default { handleuser, handlelogin, allUsers };