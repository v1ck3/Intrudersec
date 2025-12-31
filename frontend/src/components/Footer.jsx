import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A1D4A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">IntruderSec Academy</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering students and professionals with industry-ready cyber
            security skills through practical learning and real-world exposure.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.youtube.com/@intrudersec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition transform hover:-translate-y-1"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/intrudersecacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition transform hover:-translate-y-1"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.x.com/IntruderSec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition transform hover:-translate-y-1"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://www.discord.gg/36JGRMS9ne"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition transform hover:-translate-y-1"
            >
              <FaDiscord size={22} />
            </a>
            <a
              href="https://chat.whatsapp.com/GHnvsHZDrTa85DcIdUx64g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition transform hover:-translate-y-1"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/profile" className="hover:text-white">My Profile</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/resources" className="hover:text-white">Free Resources</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/news" className="hover:text-white">Cyber News</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@intrudersecacademy.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">IntruderSec Academy</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
