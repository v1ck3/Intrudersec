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
    <section className=" bg-[#0A1D4A] py-20 px-6 max-w-8xl">
      {/* Title */}
      <h2 className="text-center text-8xl text-white/50 font-extrabold tracking-tight mb-14" >
        <span className="text-blue-700">Our</span> Courses
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in" data-aos-delay="100">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur shadow-md hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-3"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden h-56">
              <img
                src={course.img}
                alt={course.title}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.desc}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <a
                  href="https://discord.com/invite/36JGRMS9ne"
                  className="px-4 py-2 text-sm rounded-full bg-[#F4FF2D]  text-black hover:bg-blue-700 transition"
                >
                  Join Now
                </a>

                <a
                  href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
                  target="_blank"
                  className="px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 transition"
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
