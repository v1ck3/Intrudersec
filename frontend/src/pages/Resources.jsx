import React from "react";

const blogs = [
  {
    title: "Offensive Pentesting",
    desc: "Introduction to Offensive Penetration Testing. Learn how attackers think and exploit weaknesses.",
    link: "https://offensivepentestings.blogspot.com/",
  },
  {
    title: "Defensive Operations",
    desc: "Understand defensive security strategies to protect systems against evolving threats.",
    link: "https://learndefensive.blogspot.com/",
  },
  {
    title: "Network Security",
    desc: "Beginner-friendly guide to securing networks and preventing attacks.",
    link: "https://linuxbyisa.blogspot.com/",
  },
  {
    title: "Linux F&S",
    desc: "Linux fundamentals and security essentials for beginners.",
    link: "https://linuxbyisa.blogspot.com/",
  },
  {
    title: "Bug Bounty Techniques",
    desc: "Learn how to find and responsibly report vulnerabilities for rewards.",
    link: "https://bugbountysociety.blogspot.com/",
  },
];

const resources = [
  {
    title: "Cybersecurity Educational Resources",
    desc: "A curated list of high-quality cybersecurity learning materials.",
    link: "https://github.com/CSIRT-MU/edu-resources?tab=readme-ov-file",
  },
];

const labs = [
  {
    title: "RXSS Lab",
    desc: "Hands-on lab to understand reflected cross-site scripting vulnerabilities.",
    link: "https://intrudersecacademy.github.io/challenges/rxss.html",
  },
];

/* Reusable Card Component */
const Card = ({ title, desc, link, buttonText }) => (
  <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-7 text-center
                  shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/30">

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl transition" />

    <h3 className="relative text-xl font-bold text-white mb-3">
      {title}
    </h3>

    <p className="relative text-gray-300 text-sm leading-relaxed mb-6">
      {desc}
    </p>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-6 py-2.5
                 text-sm font-semibold text-black rounded-full
                 bg-[#F4FF2D] hover:bg-cyan-400 transition"
    >
      {buttonText}
    </a>
  </div>
);

/* Section Wrapper */
const Section = ({ title, children }) => (
  <section className="bg-[#0A1D4A] py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-white text-4xl font-extrabold tracking-tight mb-16">
        {title}
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  </section>
);

const Resources = () => {
  return (
    <>
      {/* Resources */}
      <Section title="Resources">
        {resources.map((item, i) => (
          <Card key={i} {...item} buttonText="Explore" />
        ))}
      </Section>

      {/* Labs */}
      <Section title="Labs">
        {labs.map((item, i) => (
          <Card key={i} {...item} buttonText="Start Lab" />
        ))}
      </Section>

      {/* Blogs */}
      <Section title="Blogs">
        {blogs.map((item, i) => (
          <Card key={i} {...item} buttonText="Read Blog" />
        ))}
      </Section>
    </>
  );
};

export default Resources;
