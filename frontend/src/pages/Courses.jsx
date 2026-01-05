import React, { useEffect, useState } from "react";

const Courses = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [coursesList, setCoursesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");
        const adminSecret = "adminsecret";

        const res = await fetch("http://localhost:8520/api/admin/get-course", {
          headers: {
            "Content-Type": "application/json",
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

  return (
    <section className="relative bg-[#0A1D4A] py-24 px-4 overflow-hidden">

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <p className="uppercase tracking-widest text-xs text-gray-300 mb-3">
          Our Programs
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Our <span className="text-[#F4FF2D]">Courses</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          Learn industry-ready cybersecurity skills through practical, hands-on courses designed for real-world threats.
        </p>
      </div>

      {error && <p className="text-red-400 text-center mb-6">{error}</p>}

      {loading ? (
        <p className="text-yellow-300 text-center">Loading courses...</p>
      ) : (
        <div
          className="relative z-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {coursesList.length === 0 ? (
            <p className="text-gray-400 text-center sm:col-span-2 lg:col-span-4">
              No courses available
            </p>
          ) : (
            coursesList.map((course, index) => (
              <div
                key={course._id || index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
              >
            
                

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4FF2D] transition">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center gap-3">
                    <a
                      href="https://discord.com/invite/36JGRMS9ne"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-full bg-[#F4FF2D] text-black font-semibold hover:scale-105 transition"
                    >
                      Join Now
                    </a>

                    <a
                      href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 hover:scale-105 transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Courses;
