import React from "react";
import { TbFileDownload } from "react-icons/tb";

function Resume() {
  return (
    <section id="Resume">
      <a
        href="https://drive.google.com/file/d/1Mpq4tlrGnoClm4IBdS_dh49r1lNwqxNu/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <div className="group h-[14vh] w-full bg-cyan-600 flex items-center justify-center hover:bg-cyan-500">
          <h1 className="text-white text-lg md:text-2xl font-serif font-semibold tracking-wider group-hover:hidden text-center">
            VIEW MY FULL RESUME
          </h1>
          <h1 className="invisible group-hover:visible transition duration-1000 ease-in-out">
            <TbFileDownload className="text-3xl md:text-4xl text-white text-center" />
          </h1>
        </div>
      </a>
    </section>
  );
}

export default Resume;
