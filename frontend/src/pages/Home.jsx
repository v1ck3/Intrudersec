import React from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/heromain1.png"; // <-- Replace with your image
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-white text-black pt-10 md:pt-16 relative overflow-hidden">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">

    {/* Hero Text */}
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-xs bg-black/10 px-3 py-1 rounded-full uppercase tracking-wide">
        #1 E-learning Platform 2026
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-6">
        Launch Career with <br /> Ready Online Courses
      </h2>

      <p className="text-gray-600 mt-5 text-sm sm:text-base">
        Join thousands of learners worldwide accessing cutting-edge
        courses designed for modern minds.
      </p>

      <Link
        to="/courses"
        className="mt-7 bg-[#F4FF2D] hover:bg-lime-300 text-black font-semibold px-6 sm:px-8 py-3 rounded-full inline-flex items-center gap-2 transition hover:scale-105"
      >
        Enroll Our Course Now <ArrowRight size={20} />
      </Link>
    </div>

    {/* Image Section */}
    <div className="relative mt-16 flex justify-center ">
      <div className="w-full max-w-lg sm:max-w-xl bg-[#162B6F] h-64 sm:h-72 md:h-80 rounded-t-full flex justify-center items-end relative">
        <img
          src={heroImg}
          alt="student"
          className="h-[300px] sm:h-[350px] md:h-[390px] object-contain drop-shadow-xl -mt-16 sm:-mt-20 relative z-10"
        />
      </div>
    </div>
  </div>
</section>

      <section className="px-4">
  <div className="bg-[#162B6F] backdrop-blur-md max-w-7xl mx-auto rounded-xl border border-blue-300/20 -mt-20 mb-16 py-6 z-10 relative shadow-lg">

    <div className="flex flex-col md:flex-row gap-8 md:justify-between text-white max-w-5xl mx-auto px-6 py-4">

      {/* Stats */}
      <div className="text-center md:text-left">
        <strong className="block text-4xl sm:text-5xl md:text-7xl font-bold">
          5000+
        </strong>
        <p className="mt-1 text-sm sm:text-base">
          Top Notch Courses
        </p>
      </div>

      {/* Testimonial */}
      <div className="text-center md:text-right max-w-md mx-auto md:mx-0">
        <p className="text-yellow-300 text-lg">★★★★★</p>
        <p className="text-sm text-gray-200">
          "Modern, sleek, and focused on real skills. I loved the hands-on
          projects and their system."
        </p>
        <p className="mt-1 text-gray-300 text-sm">
          — Jason Kim, UX Designer
        </p>
      </div>

    </div>
  </div>
</section>


      
      
      <About />
      <Courses />
      <Contact />
    </>
  );
};

export default Home;
