import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8520/api/v1/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message);

      if (data.success) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      
     

      {/* Heading */}
      <div className="relative text-center mb-16" data-aos="fade-up">
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">
          Get in Touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black">
          Contact <span className="text-[#162B6F]">Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Have questions or need guidance? Our team is always ready to help you.
        </p>
      </div>

      {/* Content Grid */}
      <div
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        data-aos="fade-up"
      >
        {/* Left Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Phone className="text-blue-600" />
            <div>
              <h4 className="font-semibold text-lg text-black">Call Us</h4>
              <p className="text-gray-600">+91 98713 07390</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-blue-600" />
            <div>
              <h4 className="font-semibold text-lg text-black">Email</h4>
              <p className="text-gray-600">intrudersecacademy@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-600" />
            <div>
              <h4 className="font-semibold text-lg text-black">Head Office</h4>
              <p className="text-gray-600">Delhi, India</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:+919871307390"
              className="bg-[#F4FF2D] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition text-center"
            >
              Call Now
            </a>

            <a
              href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 space-y-5"
        >
          <input
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <textarea
            className="w-full px-4 py-3 border rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button className="w-full bg-[#162B6F] text-white py-3 rounded-xl hover:bg-blue-800 transition font-semibold">
            Send Message
          </button>

          {status && (
            <p className="text-center text-green-600 text-sm mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
