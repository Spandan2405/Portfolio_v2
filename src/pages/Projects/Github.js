import React from "react";
import { IoLogoGithub } from "react-icons/io5";

function Github() {
  return (
    <a href="https://github.com/Spandan2405" target="_blank" rel="noreferrer">
      <div
        className="group h-[14vh] w-full bg-cyan-600 flex items-center justify-center hover:bg-cyan-500"
        href=""
      >
        <h1 className="text-white text-lg md:text-2xl font-serif font-semibold tracking-wider group-hover:hidden">
          SEE MORE PROJECTS
        </h1>
        <h1 className="invisible group-hover:visible transition duration-1000 ease-in-out">
          <IoLogoGithub className="text-3xl md:text-4xl text-white" />
        </h1>
      </div>
    </a>
  );
}

export default Github;
