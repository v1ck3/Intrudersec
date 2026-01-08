import express from "express";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";
import { createCourse, deleteCourse, getCourses } from "../controllers/course.controller.js";
import userauthentication from "../controllers/handlesignup.js"



const router = express.Router();

router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin",
    admin: req.user.name
  });
});

router.post("/create-course", protect, adminOnly, createCourse);
router.delete("/delete-course/:courseId", protect, adminOnly, deleteCourse);
router.get("/get-course", getCourses);
router.get("/getuser", protect, adminOnly, userauthentication.allUsers);



export default router;
