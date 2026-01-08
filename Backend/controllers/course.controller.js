import Course from "../models/courses.model.js";


export const createCourse = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    // generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    const course = await Course.create({ ...req.body, slug });
    res.status(201).json(course);
  } catch (error) {
    console.error("Course creation failed:", error);
    res.status(500).json({ message: "Course creation failed" });
  }
};


/* ================= GET COURSES ================= */
export const getCourses = async (req, res) => {
  const courses = await Course.find({ status: "published" });
  res.json(courses);
};


export const deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    console.log("BODY:", req.body);
console.log("PARAMS:", req.params);
    if (!courseId)
      return res.status(400).json({ message: "courseId required" });

    const deleted = await Course.findByIdAndDelete(courseId);
    if (!deleted)
      return res.status(404).json({ message: "Course not found" });

    res.status(200).json({ message: "Course deleted", course: deleted });
  } catch (err) {
    res.status(500).json({ message: "Delete error", error: err.message });
  }
};
