import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };
  return (
    <section className=" bg-[#0A1D4A] max-w-8xl mx-auto px-6 py-20" >
      
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl text-white font-extrabold tracking-tight">
          <span className="text-white">Contact</span> Us
        </h2>
        <p className="text-white  mt-3 max-w-2xl mx-auto">
          Have questions or need help? We're here to support and guide you.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-12 px-20" data-aos="fade-up">
        
        {/* Left Section */}
        <div className="space-y-6 text-white ">
          <div className="flex items-start gap-4">
            <Phone className="text-blue-700" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p className="">+91 9871307390</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-blue-700" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="">intrudersecacademy@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-700" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Head Office</h4>
              <p className="">Delhi, India</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href="tel:+919871307390"
              className=" bg-[#F4FF2D] text-black px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Call Now
            </a>
            <a
              href="https://chat.whatsapp.com/CG20L0M8TBtDppqCetHQ0J"
              target="_blank"
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-5">

        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="w-full px-4 py-2 border rounded-lg h-32"
          placeholder="Write your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>

        {status && <p className="text-center text-green-600 mt-2">{status}</p>}
      </form>
      </div>
    </section>
  );
};

export default Contact;
