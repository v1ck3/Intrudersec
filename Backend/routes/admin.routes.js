import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin",
    admin: req.user.name
  });
});

router.post("/create-course", protect, adminOnly, (req, res) => {
  res.json({ message: "Course created (admin only)" });
});

export default router;
