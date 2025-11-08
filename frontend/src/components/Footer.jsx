import React from "react";

import { FaYoutube, FaLinkedin, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0A1D4A] text-white py-6 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Copyright */}
          <div className="text-center md:text-left text-sm">
            © 2025 <span className="font-semibold">IntruderSec Academy</span> |
            All rights reserved.
          </div>

          {/* Right: Socials */}
          <div className="flex space-x-4 mr-6">
            <a
              href="https://www.youtube.com/@intrudersec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/intrudersecacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.x.com/IntruderSec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            
            <a
              href="https://www.discord.gg/36JGRMS9ne"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaDiscord size={24} />
            </a>


            <a
              href="https://chat.whatsapp.com/GHnvsHZDrTa85DcIdUx64g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300  transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <FaWhatsapp size={24} />
            </a>

            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
