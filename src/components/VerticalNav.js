import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import { Link } from "react-scroll";

const sections = [
  { id: "Introduction", label: "Intro" },
  { id: "Skills", label: "Skills" },
  { id: "Experience", label: "Experience" },
  { id: "Resume", label: "Resume" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Contact" },
];

const VerticalNav = () => {
  const screenSize = useScreenSize();

  return (
    <div className="fixed right-12 top-2/3 transform -translate-y-1/2 flex flex-col gap-4 z-10">
      {screenSize.width >= 768 &&
        sections.map((section, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 cursor-pointer justify-end"
          >
            <div className="opacity-0 group-hover:opacity-100 text-white text-sm px-2 py-1 transition-opacity duration-300 text-end">
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                className="font-sans font-semibold tracking-wider"
              >
                {section.label.toUpperCase()}
              </Link>
            </div>
            <Link
              to={section.id}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="border-cyan-400 bg-cyan-400"
              className="w-3 h-3 rounded-full bg-gray-500 group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
            ></Link>
          </div>
        ))}
    </div>
  );
};

export default VerticalNav;
