import React from "react";

const blogs = [
  {
    title: "Offensive Pentesting",
    desc: "Introduction to Offensive Penetration Testing. Offensive Security focuses on finding weaknesses and exploiting them…..",
    link: "https://offensivepentestings.blogspot.com/",
  },
  {
    title: "Defensive Operations",
    desc: "Introduction to Defensive Security. As cyber threats evolve, organizations must defend their systems…..",
    link: "https://learndefensive.blogspot.com/",
  },
  {
    title: "Network Security",
    desc: "Introduction to Network Security for Beginners. Learn how networks are protected…..",
    link: "https://linuxbyisa.blogspot.com/",
  },
  {
    title: "Linux F&S",
    desc: "Linux Fundamentals and Security for beginners. Linux is a powerful open-source OS…..",
    link: "https://linuxbyisa.blogspot.com/",
  },
  {
    title: "Bug Bounty Techniques",
    desc: "Bug Bounty for beginners. Learn how to report security vulnerabilities and earn rewards…..",
    link: "https://bugbountysociety.blogspot.com/",
  },
];

const resources = [
  {
    title: "Cybersecurity Educational Resources",
    desc: "This is an awesome list of resources related to teaching cybersecurity,.....",
    link: "https://github.com/CSIRT-MU/edu-resources?tab=readme-ov-file",
  },
  
];

const labs = [
  {
    title: "RXSS",
    desc: "Reflected cross-site scripting (or XSS) arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way.",
    link: "https://intrudersecacademy.github.io/challenges/rxss.html",
  },
  
];

const Resources = () => {
  return (
    <>
    <section className=" bg-[#0A1D4A] py-20 px-6 max-w-8xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-white text-4xl font-extrabold tracking-tight mb-14" data-aos="fade-in">
         Resources
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn" data-aos="zoom-in">
        {resources.map((resources, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
              {resources.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {resources.desc}
            </p>

            <a
              href={resources.link}
              className="inline-block px-5 py-2 text-sm font-medium  text-black rounded-full bg-[#F4FF2D] hover:bg-blue-700 transition shadow-sm"
            >
              View Blog
            </a>
          </div>
        ))}
      </div>
    </section>

    <section className=" bg-[#0A1D4A] py-20 px-6 max-w-8xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-white text-4xl font-extrabold tracking-tight mb-14"  data-aos="fade-in">
         LABS
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn" data-aos="zoom-in">
        {labs.map((labs, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
              {labs.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {labs.desc}
            </p>

            <a
              href={labs.link}
              className="inline-block px-5 py-2 text-sm font-medium  text-black rounded-full bg-[#F4FF2D] hover:bg-blue-700 transition shadow-sm"
            >
              View Blog
            </a>
          </div>
        ))}
      </div>
    </section>
    
    <section className=" bg-[#0A1D4A] py-20 px-6 max-w-8xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-4xl font-extrabold tracking-tight mb-14"  data-aos="fade-in">
        <span className="text-white">Blogs</span>
      </h2>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn" data-aos="zoom-in">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">
              {blog.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {blog.desc}
            </p>

            <a
              href={blog.link}
              className="inline-block px-5 py-2 text-sm font-medium  text-black rounded-full bg-[#F4FF2D] hover:bg-blue-700 transition shadow-sm"
            >
              View Blog
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Resources;
