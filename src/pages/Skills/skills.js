import React from "react";
import { FaCode, FaTools, FaLightbulb } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Java",
  "React.js",
  "MongoDB",
  "Node.js",
  "Next.js",
  "Bootstrap",
  "TailwindCSS",
  "MySQL",
  "REST APIs",
];

const tools = ["Git + Github", "React DevTools", "Postman", "Vercel & Netlify"];

const knowledge = [
  "Object-Oriented Programming (OOPS)",
  "Responsive Web Design",
  "Routing and State Management",
  "Deployment and Hosting",
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen w-full bg-[#1B1B1B] text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-cyan-400 inline-block py-4">
          Skills
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 mt-10">
          {/* Development */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <FaCode className="text-2xl text-cyan-400" />
              <h3 className="text-2xl font-semibold">DEVELOPMENT</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-500 rounded-full p-3 md:p-4 text-center text-xs md:text-lg hover:bg-cyan-400 hover:text-intro transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="items-center space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <FaTools className="text-2xl text-cyan-400" />
                <h3 className="text-2xl font-semibold">TOOLS</h3>
              </div>
              <ul className="space-y-4 pl-6">
                {tools.map((tool, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <ImArrowRight className="text-xl text-cyan-400" />{" "}
                    <span className="text-md ">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* </div> */}

            {/* Knowledge */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <FaLightbulb className="text-2xl text-cyan-400" />
                <h3 className="text-2xl font-semibold">KNOWLEDGE</h3>
              </div>
              <ul className="space-y-4 pl-6">
                {knowledge.map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <ImArrowRight className="text-xl text-cyan-400" />{" "}
                    <span className="text-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
