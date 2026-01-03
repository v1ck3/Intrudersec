import Course from "../models/Course.model.js";

/* ================= CREATE COURSE ================= */
export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "Course creation failed" });
  }
};

/* ================= GET COURSES ================= */
export const getCourses = async (req, res) => {
  const courses = await Course.find({ status: "published" });
  res.json(courses);
};
