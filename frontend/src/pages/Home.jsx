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
      <section className="bg-white text-black pt-10  relative overflow-hidden" >
        <div className="container mx-auto max-w-7xl px-6 lg:px-10 relative z-10" data-aos="fade-in">
          {/* Hero Text */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wide">
              #1 E-learning Platform 2025
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
              Launch Career with <br /> Ready Online Courses
            </h2>

            <p className="text-gray-600 mt-5">
              Join thousands of learners worldwide accessing cutting-edge
              courses designed for modern minds.
            </p>

            <Link to="/courses" className="mt-7 bg-[#F4FF2D] hover:bg-lime-300 text-black font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 transition hover:scale-105">
              Enroll Our Course Now <ArrowRight size={20} />
            </Link>
          </div>

          {/* Bottom Section */}
          <div className="relative mt-16">
            <div className="w-full max-w-2xl mx-auto bg-[#162B6F] h-80 rounded-t-full flex justify-center items-end relative">
              <img
                src={heroImg}
                alt="student"
                className="h-[390px] object-contain drop-shadow-xl -mt-20 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#0A1D4A] w-full ">
          <div className="flex justify-between text-sm text-white max-w-5xl mx-auto px-6 py-4">
            <p data-aos="fade-left">
              <strong className="flex text-white text-4xl">5000+ </strong> Top Notch
              Courses
            </p>

            <div className="text-right max-w-xs" data-aos="fade-right">
              <p className="text-yellow-300 text-lg">★★★★★</p>
              <p className="text-sm">
                "Modern, sleek, and focused on real skills. I loved the hands-on
                projects and their system."
              </p>
              <p className="mt-1 text-gray-800">— Jason Kim, UX Designer</p>
            </div>
          </div>

          {/* Company Logos */}
          
        </div>
      </section>

      
      
      <About />
      <Courses />
      <Contact />
    </>
  );
};

export default Home;
