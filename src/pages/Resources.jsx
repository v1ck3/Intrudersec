import React from "react";

const Resources = () => {
  return (
    <>
      <div className="py-16 px-6 text-center ">
        <h2 className="text-3xl font-bold mb-6 uppercase"> Resources</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
          {/* card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black animate-bounce">
                Cybersecurity Educational Resources
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
              This is an awesome list of resources related to teaching cybersecurity,.....
              </p>
              <a
                target="_blank"
                href="https://github.com/CSIRT-MU/edu-resources?tab=readme-ov-file"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="https://www.discord.gg/36JGRMS9ne">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Soon
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Learn the fundamentals of ethical hacking, cybersecurity tools,
                and penetration testing techniques.
              </p>
              <a
                target="_blank"
                href="https://www.discord.gg/36JGRMS9ne"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </a>
            </div>
          </div>

          

          
        </div>
      </div>

      {/* labs */}

      <div className="py-16 px-6 text-center ">
        <h2 className="text-3xl font-bold mb-6 uppercase">Labs</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
          {/* card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  RXSS
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
              Reflected cross-site scripting (or XSS) arises when an application receives data in an HTTP request and includes that data within the immediate response in an unsafe way.
              </p>
              <a
                target="_blank"
                href="https://reflected-xss.glitch.me/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center ">
        <h2 className="text-3xl font-bold mb-6 uppercase">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
          {/* card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="https://www.discord.gg/36JGRMS9ne">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Offensive Pentesting
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Introduction to Offensive Penetration Testing Offensive
                Penetration Testing (Pentesting) is the process of.....
              </p>
              <a
                target="_blank"
                href="https://offensivepentestings.blogspot.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Blog
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="https://www.discord.gg/36JGRMS9ne">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Defensive Operations
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Introduction to Defensive Security As cyber threats continue to
                evolve, organizations must defend their....
              </p>
              <a
                target="_blank"
                href="https://learndefensive.blogspot.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Blog
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="https://www.discord.gg/36JGRMS9ne">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Network Security
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Introduction to Network Security for Beginners What is Network
                Security? Network security refers to.....
              </p>
              <a
                target="_blank"
                href="https://linuxbyisa.blogspot.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Blog
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="https://www.discord.gg/36JGRMS9ne">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Linux F&S
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Linux Fundamentals and Security for Beginners Introduction to
                Linux 🐧 Linux is a powerful, open-source....
              </p>
              <a
                target="_blank"
                href="https://linuxbyisa.blogspot.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Blog
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-100 dark:border-gray-100">
            <div className="p-5">
              <a href="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Bug Bounty Techniques
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                Bug Bounty for Beginners: A Complete Guide Introduction to Bug
                Bounty 🕵️‍♂️ Bug bounty programs allow.....
              </p>
              <a
                target="_blank"
                href="https://bugbountysociety.blogspot.com/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
