import React from "react";

const About = () => {
  return (
    <section className=" bg-[#0A1D4A] max-w-8xl  px-6 py-16 text-center">
     <div data-aos="fade-up">
       {/* Heading */}
      
      <h3 className="text-4xl font-extrabold mt-1 text-white">
        IntruderSec Academy
      </h3>

      {/* Description */}
      <p className="text-white mt-6 max-w-4xl mx-auto leading-relaxed">
        IntruderSec Academy is an Indian-based cybersecurity training platform founded in 2024, 
        focused on ethical hacking, penetration testing, and digital forensics. Headquartered in 
        Delhi, it offers expert-led, hands-on courses for learners passionate about cybersecurity. 
        Our mission is to empower individuals to safeguard digital assets and counter cyber threats 
        effectively.
      </p>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left max-w-4xl mx-auto">
        {/* What We Offer */}
        <div>
          <h4 className="text-2xl text-white font-semibold mb-3">What We Offer</h4>
          <ul className="space-y-2 text-white">
            <li>• Comprehensive courses on ethical hacking and digital forensics</li>
            <li>• Practical, hands-on learning environment</li>
            <li>• Access to cybersecurity blogs and tools</li>
          </ul>
        </div>

        {/* Join Our Community */}
        <div>
          <h4 className="text-2xl text-white font-semibold mb-3">Join Our Community</h4>
          <ul className="space-y-2 text-white">
            <li>• Active Discord server for discussions and updates</li>
            <li>• Connect with cybersecurity professionals and enthusiasts</li>
            <li>• Explore open-source tools on GitHub</li>
            <li>• Collaborate and grow your network</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        <a
          href="https://discord.com/invite/36JGRMS9ne"
          className="bg-[#F4FF2D] text-black px-6 py-2 rounded-full hover:bg-blue-100 transition"
        >
          Join Now
        </a>
        <a
          href="https://wa.me/919871307390"
          target="_blank"
          className="bg-[#F4FF2D] text-black px-6 py-2 rounded-full hover:bg-blue-100 transition"
        >
          Connect on WhatsApp
        </a>
      </div>
     </div>
    </section>
  );
};

export default About;
