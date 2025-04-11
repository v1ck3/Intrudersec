import React, { useState } from "react";
import Courses from "./Courses";
import { HiArrowSmallDown } from "react-icons/hi2";


const Home = () => {
  return (
    <>
      <section className=" flex flex-col items-center justify-center text-center mt-20">
        <p className="text-xl md:text-5xl text-black font-medium italic tracking-wider mb-3  ">
          Welcome to
        </p>
        <h1 className="text-4xl md:text-9xl font-bold text-blue-600 leading-tight font-serif transition delay-10 duration-300 ease-in-out hover:-translate-z-1 hover:scale-110 hover:text-blue-800">
          IntruderSec <br className="hidden md:block" /> Academy
        </h1>

        <p className=" mt-10 md:text-2xl text-gray-700 mb-8">
          Master Cyber Security from Scratch. Learn ethical hacking, threat
          analysis, and digital defense with real-world projects.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition animate-bounce"
        >
          <HiArrowSmallDown size={50} />
        </a>
      </section>
      
      <Courses />
    </>
  );
};

export default Home;
