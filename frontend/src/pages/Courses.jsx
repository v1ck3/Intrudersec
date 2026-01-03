import React from "react";
import asset from "../assets/S1.png";
import asset1 from "../assets/P1.png";
import asset2 from "../assets/N1.png";
import asset3 from "../assets/M1.png";

const courses = [
  {
    title: "Intruder Security Fundamentals",
    desc: "Learn the fundamentals of ethical hacking, cybersecurity tools, and penetration testing techniques.",
    img: asset,
  },
  {
    title: "Certified Pentesting Professional",
    desc: "Master the art of penetration testing with real-world scenarios.",
    img: asset1,
  },
  {
    title: "Certified Mobile App Intruder",
    desc: "Understand how mobile applications work and learn bug hunting using mobiles.",
    img: asset2,
  },
  {
    title: "IntruderSec Network Security Expert",
    desc: "Explore network security techniques to protect against cyber threats.",
    img: asset3,
  },
];

const Courses = () => {
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
          Learn industry-ready cybersecurity skills through practical,
          hands-on courses designed for real-world threats.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="relative z-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F4FF2D] transition">
                {course.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {course.desc}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <a
                  href="https://discord.com/invite/36JGRMS9ne"
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-full bg-[#F4FF2D] text-black font-semibold hover:scale-105 transition"
                >
                  Join Now
                </a>

                <a
                  href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 hover:scale-105 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;