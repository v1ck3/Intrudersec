import User from "../models/User.model.js";
import Course from "../models/Course.model.js";

/* ================= ADMIN DASHBOARD ================= */
export const adminDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();

    res.json({
      message: "Welcome Admin",
      admin: req.user.name,
      stats: {
        totalUsers,
        totalCourses
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Admin dashboard error" });
  }
};

/* ================= PROMOTE USER TO ADMIN ================= */
export const promoteToAdmin = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = "admin";
    await user.save();

    res.json({ message: "User promoted to admin" });
  } catch (error) {
    res.status(500).json({ message: "Promotion failed" });
  }
};
