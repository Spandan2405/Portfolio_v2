import React from "react";
import IntroContent from "./IntroContent";
import IntroImg from "./IntroImg.js";
import useScreenSize from "./../../hooks/useScreenSize";

function Intro() {
  const screenSize = useScreenSize();
  return (
    <section id="Introduction">
      <div className="min-h-screen w-full bg-[#1B1B1B] text-stone-200 flex items-center justify-center p-8">
        {screenSize.width < 768 && (
          <div className="max-w-[1500px] flex flex-col md:flex-row items-center md:items-start space-y-6">
            <IntroImg />
            <IntroContent />
          </div>
        )}
        {screenSize.width >= 768 && (
          <div className="max-w-[1500px] flex flex-col md:flex-row items-center md:items-start">
            <IntroContent />
            <IntroImg />
          </div>
        )}
      </div>
    </section>
  );
}

export default Intro;
