import React from "react";


const Contact = () => {
  return (
    <>
      <section className="  text-black py-24 px-4 md:px-16 bg-radial-[at_50%_90%] from-sky-200 via-blue-300 to-indigo-100 to-60%">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Let's Connect
        </h2>
        <p className="text-xl md:text-2xl text-black mb-10 max-w-2xl mx-auto">
          Have questions, ideas, or just want to say hi? We’d love to hear from you. Reach out and we’ll get back to you as soon as we can.
        </p>

        <div className="text-left md:text-center mt-16  ">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">📍 Our Location</h3>
          <p className="text-black text-lg md:text-xl mb-6">Delhi, India</p>

          <h3 className="text-3xl md:text-4xl font-semibold mb-4">📧 Email Us</h3>
          <p className="text-black text-lg md:text-xl mb-6 underline"><a href="mailto:support@intrudersec.in">support@intrudersec.in</a></p>

          <h3 className="text-3xl md:text-4xl font-semibold mb-4">📞 Call Us</h3>
          <p className="text-black text-lg md:text-xl">+91 9871 3073 90</p>
        </div>

        <div className="mt-20">
          <a
            href="https://discord.com/invite/36JGRMS9ne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block animate-bounce bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full text-xl transition-all shadow-lg hover:scale-105"
          >
            Join Our Discord Community
          </a>
        </div>
      </div>
    </section>
     </>
  );
};

export default Contact;
