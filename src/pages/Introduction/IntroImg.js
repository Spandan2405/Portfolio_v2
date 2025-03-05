import React from "react";
import Intro from "../../data/images/Intro.jpg";

function IntroImg() {
  return (
    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 ">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden ">
        <img
          src={Intro}
          alt="Spandan Gupta"
          className="w-full h-full object-cover bg-gray-700 bg-blend-overlay"
        />
      </div>
    </div>
  );
}

export default IntroImg;
