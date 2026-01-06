import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const AdminDashboard = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const initialFormState = {
    courseId: "",
    title: "",
    description: "",
    category: "",
    level: "Beginner",
    duration: "",
    price: 0,
    currency: "USD",
    language: "English",
    thumbnail: "asset",
    isFree: "false",
    isOpen: "true",
    maxStudents: "",
    features: "",
    rating: "",
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");
        const adminSecret = "adminsecret";

        const res = await fetch(`${import.meta.env.VITE_API_URI_ADMIN}/get-course`, {
          headers: {
            "Content-Type": "application/json",
            "x-admin-secret": adminSecret,
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Courses API failed");

        const courses = await res.json();
        setCoursesCount(Array.isArray(courses) ? courses.length : 0);
        setCoursesList(Array.isArray(courses) ? courses : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const resetForm = () => {
    setForm(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const adminSecret = "adminsecret";

      const payload = {
        courseId: form.courseId,
        title: form.title,
        description: form.description,
        category: form.category,
        level: form.level,
        duration: form.duration,
        price: Number(form.price),
        currency: form.currency,
        language: form.language,
        rating: Number(form.rating),
        studentsEnrolled: 0,
        thumbnail: form.thumbnail,
        enrollment: {
          isOpen: form.isOpen === "true",
          maxStudents: form.maxStudents ? Number(form.maxStudents) : null,
        },
        features: form.features ? form.features.split(",").map((f) => f.trim()) : [],
        status: "published",
      };

      const res = await fetch(`${import.meta.env.VITE_API_URI_ADMIN}/create-course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add course");

      const newCourse = await res.json();

      if (res.status === 201) {
        resetForm();
        toast.success("Course added successfully!");
      }

      setCoursesList((prev) => [newCourse, ...prev]);
      setCoursesCount((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      toast.error("Course add failed!");
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white p-8 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          IntruderSec Academy – Admin Dashboard
        </h1>
        <p className="text-gray-300 mb-10">
          Manage courses and monitor platform.
        </p>

        {error && <p className="text-red-400 mb-6">{error}</p>}

        {loading ? (
          <p className="text-yellow-300">Loading courses...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 justify-center">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Total Courses</h2>
                <p className="text-5xl font-bold text-blue-400">
                  {coursesCount}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl mt-12 mb-12 text-left">
              <h2 className="text-2xl font-bold mb-4 flex gap-4 text-center"><FaPlus /> Add New Course</h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  name="courseId"
                  placeholder="Course ID"
                  value={form.courseId}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="title"
                  placeholder="Course Title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="category"
                  placeholder="Category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <input
                  name="duration"
                  placeholder="Duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={form.price}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="currency"
                  placeholder="Currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="language"
                  placeholder="Language"
                  value={form.language}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <input
                  name="rating"
                  type="number"
                  step="0.1"
                  placeholder="Rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700"
                />

                <textarea
                  name="features"
                  placeholder="Features (comma separated)"
                  value={form.features}
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700 md:col-span-2"
                />

                <textarea
                  name="description"
                  placeholder="Course Description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="p-2 rounded-lg bg-gray-900 border border-gray-700 md:col-span-2"
                />

                <button
                  type="submit"
                  className="bg-green-500 p-3 rounded-xl font-bold md:col-span-2 mt-4 hover:opacity-80"
                >
                  Add Course
                </button>
              </form>
            </div>

            <div className="mt-16 text-left">
              <h2 className="text-3xl font-bold mb-6">📘 Course List</h2>

              {coursesList.length === 0 ? (
                <p className="text-gray-400">No courses available</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {coursesList.map((course) => (
                    <div
                      key={course._id}
                      className="bg-gray-800 p-5 rounded-xl shadow-lg text-left"
                    >
                      <h3 className="text-xl font-semibold">{course.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {course.level} • {course.duration}
                      </p>
                      <p className="text-gray-300 mt-3 text-sm">
                        {course.description}
                      </p>
                      <p className="text-green-400 font-bold mt-4">
                        {course.isFree
                          ? "Free"
                          : `${course.price} ${course.currency}`}
                      </p>
                      <span className="text-yellow-300 text-xs mt-2 block">
                        ⭐ {course.rating}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
