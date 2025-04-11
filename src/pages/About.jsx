import React from "react";

const About = () => {
  return (
    <>
      <section className=" text-black py-16 px-4 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <br/> IntruderSec Academy
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-black text-center">
            IntruderSec Academy is an Indian-based cybersecurity training
            platform founded in 2024, focused on ethical hacking, penetration
            testing, and digital forensics. Headquartered in Delhi, it offers
            expert-led, hands-on courses for learners passionate about
            cybersecurity. And empowering individuals to safeguard digital assets and counter cyber threats effectively.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-black">
            <div>
              <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Comprehensive courses on ethical hacking and digital forensics
                </li>
                <li>Industry-recognized certifications</li>
                <li>Practical, hands-on learning environment</li>
                <li>Access to cybersecurity blogs and tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Join Our Community
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Active Discord server for discussions and updates</li>
                <li>
                  Connect with cybersecurity professionals and enthusiasts
                </li>
                <li>Explore open-source tools on GitHub</li>
                <li>Collaborate and grow your network</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.discord.gg/36JGRMS9ne"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join Now
            </a>

            <a
              href="https://chat.whatsapp.com/GHnvsHZDrTa85DcIdUx64g"
              className="inline-flex items-center px-3 ml-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Connect on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
