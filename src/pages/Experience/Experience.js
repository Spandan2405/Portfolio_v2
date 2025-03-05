import backgroundImage from "../../data/images/experience-lg.jpg";
import { PiStudentFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="Experience">
      <div
        className="min-h-screen bg-gray-700 bg-blend-overlay relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4 py-16 text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Experience
          </h1>
          <div className="w-32 h-0.5 bg-cyan-400 mx-auto mb-8"></div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1B1B1B]"></div>

            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-16">
              {/* College */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1B1B1B] p-6 rounded md:mr-8">
                    <h3 className="text-lg font-bold mb-2">
                      B.Tech in Electronics and Communication Engineering
                    </h3>
                    <p className="text-cyan-400 mb-4">
                      Vellore Institute of Technology, Chennai
                    </p>
                    <p className="text-sm mb-4 text-[#cbcbcb]">
                      Currently in my 4th year, I have developed a strong
                      foundation in programming, data structures and
                      development.
                      <br />
                      <p className="font-bold text-center text-lg mt-2">
                        Graduating in May 2025.
                      </p>
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="text-right md:pl-8">
                      <p className="font-bold">2021 - PRESENT</p>
                    </div>
                  </div>
                </div>
                {/* Timeline icon */}
                <div className="absolute ml-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
                  <div className="bg-cyan-500 rounded-full p-3 hidden md:block">
                    <PiStudentFill className="h-5 w-5 text-intro" />
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:text-right order-2 md:order-1 flex items-center justify-center md:justify-end">
                    <div className="md:pr-8">
                      <p className="font-bold"> SEPT 2023 - NOV 2023</p>
                    </div>
                  </div>
                  <div className="bg-[#1B1B1B] p-6 rounded order-1 md:order-2 md:ml-8">
                    <h3 className="text-lg font-bold mb-2">
                      Full Stack Web Development Intern
                    </h3>
                    <p className="text-cyan-400 mb-4">Ethnus | Remote</p>
                    <p className="text-sm text-[#cbcbcb]">
                      Developed responsive and dynamic web applications using
                      MERN stack (MongoDB, Express.js, React.js, Node.js). Led
                      front-end development, focusing on UI/UX design,
                      responsiveness, and seamless integration with backend
                      services. Collaborated in a team environment, meeting
                      deadlines and optimizing code for performance.
                    </p>
                  </div>
                </div>
                <div className="absolute ml-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-cyan-500 rounded-full p-3 hidden md:block">
                    <FiBriefcase className="h-5 w-5 text-intro" />
                  </div>
                </div>
              </div>

              {/* Freelance */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1B1B1B] p-6 rounded md:mr-8">
                    <h3 className="text-lg font-bold mb-2">
                      Freelance Developer
                    </h3>
                    <p className="text-cyan-400 mb-4">
                      Jewelry E-commerce Platform | Remote
                    </p>
                    <p className="text-sm text-[#cbcbcb]">
                      Revamped an outdated jewelry store website into a modern,
                      mobile-friendly e-commerce platform using React.js,
                      Bootstrap, and JavaScript. Designed an intuitive UI/UX
                      experience, featuring an optimized product catalog and
                      seamless navigation across all devices. Ensured
                      cross-browser compatibility and performance optimization,
                      increasing user engagement and online visibility.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="text-right md:pl-8">
                      <p className="font-bold"> JAN 2025 - Present</p>
                    </div>
                  </div>
                </div>
                {/* Timeline icon */}
                <div className="absolute ml-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-cyan-500 rounded-full p-3 hidden md:block">
                    <IoSearch className="h-5 w-5 text-intro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
