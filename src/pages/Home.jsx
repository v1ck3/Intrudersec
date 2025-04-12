import React, { useState } from "react";
import Courses from "./Courses";
import { HiArrowSmallDown } from "react-icons/hi2";
import Marquee from "../components/Marquee";
import asset from "../assets/in1.png";
import asset1 from "../assets/CER1.png";

const Home = () => {
  return (
    <>
      <section className=" flex flex-col items-center justify-center text-center mt-20">
        <p className="text-xl md:text-5xl text-black font-medium italic tracking-wider mb-3  ">
          Welcome to
        </p>
        <h1 className="text-6xl md:text-9xl font-bold text-blue-600 leading-tight font-serif transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-90 hover:text-blue-800">
          IntruderSec <br /> Academy
        </h1>

        <p className=" mt-10 text-2xl text-gray-700 mb-8  ">
          Master Cyber Security from Scratch. Learn ethical hacking, threat
          analysis, and digital defense with real-world projects.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 mt-8 transition animate-bounce"
        >
          <HiArrowSmallDown size={50} />
        </a>
      </section>

      <Marquee />

      <div className="py-16 px-6 text-center ">
        <div className="grid md:grid-cols-2 gap-6 ">
          {/* card */}
          <div className="p-5 ">
            <a href="https://www.discord.gg/36JGRMS9ne">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
                IntruderSec Academy
              </h5>
            </a>
            <p className="mb-3 mt-7 text-2xl font-normal text-gray-700 dark:text-gray-700">
              Is an Indian-based cybersecurity training platform founded in
              2024, focused on ethical hacking, penetration testing, and digital
              forensics. <br /> Headquartered in Delhi, it offers expert-led,
              hands-on courses for learners passionate about cybersecurity. And
              empowering individuals to safeguard digital assets and counter
              cyber threats effectively.
            </p>

            <p>
              <i>
                {" "}
                <strong>-Vivek Poswal</strong> <br />
                Founder & Ethical Hacking Specialist
              </i>
            </p>
          </div>

          <div className="flex items-baseline justify-center">
            <img className="rounded-t-lg w-120 h-110 " src={asset} alt="" />
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center">
        {/* Text Section */}
        <div className="md:col-span-2">
          <div className="p-5">
            <a href="https://www.discord.gg/36JGRMS9ne">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black uppercase">
                Certification
              </h5>
            </a>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-700">
            When you successfully finish the program, IntruSec Academy will award you a Certified certificate.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-3 flex items-center justify-center mt-5">
          <img
            src={asset1}
            alt="IntruderSec"
            className="w-full max-w-md md:max-w-lg h-auto border border-blue-900 shadow-2xl shadow-gray-500 hover:shadow-blue-600 transition duration-500 ease-in-out transform hover:scale-90 rounded-2xl"
          />
        </div>
      </div>

      <Courses />
    </>
  );
};

export default Home;
