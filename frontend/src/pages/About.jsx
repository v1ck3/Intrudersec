import React from "react";

const About = () => {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      
    
      <div
        className="relative max-w-6xl mx-auto text-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">
          About Us
        </p>

        <h3 className="text-4xl sm:text-5xl font-extrabold text-black">
          IntruderSec Academy
        </h3>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          IntruderSec Academy is an Indian-based cybersecurity training platform
          founded in 2024, focused on ethical hacking, penetration testing, and
          digital forensics. Headquartered in Delhi, we deliver expert-led,
          hands-on learning experiences for future cyber defenders.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 text-left">
          
          {/* What We Offer */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold text-black mb-4">
               What We Offer
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li> Ethical hacking & digital forensics courses</li>
              <li> Hands-on labs & real-world scenarios</li>
              <li> Cybersecurity blogs & learning tools</li>
              <li> Career-focused training paths</li>
            </ul>
          </div>

          {/* Join Our Community */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-200 hover:-translate-y-1 transition">
            <h4 className="text-xl font-semibold text-black mb-4">
               Join Our Community
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li> Active Discord discussions & updates</li>
              <li> Connect with industry professionals</li>
              <li>Open-source tools & GitHub projects</li>
              <li> Collaborate & grow your network</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://discord.com/invite/36JGRMS9ne"
            target="_blank"
            className="bg-[#F4FF2D] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Join Discord 
          </a>

          <a
            href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
            target="_blank"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            WhatsApp Community 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
