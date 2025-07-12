import React from "react";
import TitleHeader from "../Components/TitleHeader";
import GradientSpheres from "../Components/GradientSpeheres";
import TechIcon from "../Components/TechIcon";
import { programmingLang } from "../Constants";
import { webAndAppDev } from "../Constants";
import { Tools } from "../Constants";
import { useNavigate } from "react-router-dom";

const TechStack = () => {
  const navigate = useNavigate();

  return (
    <div
      id="techstack"
      className="relative px-5 py-20 md:py-40 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <TitleHeader
          title="Tech Stack"
          number="02"
          text="Creative Coder, Relentless Explorer"
        />
      </div>
      <div className="md:mt-20 mt-10 relative">
        <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          💻 Programming Languages
        </h1>
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {programmingLang.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {programmingLang.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {programmingLang.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:mt-10 mt-5 relative">
        <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          🌐 Web & App Development
        </h1>
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {webAndAppDev.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {webAndAppDev.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:mt-10 mt-5 relative">
        <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          🛠️ Tools & Platforms
        </h1>
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {Tools.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
            {Tools.map((icon, index) => (
              <TechIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center relative z-10">
        <button
          onClick={() => navigate("/skills")}
          className="group flex items-center gap-3 px-6 py-3 border border-white rounded-full text-white
  hover:bg-white hover:text-black 
  focus:bg-white focus:text-black 
  active:bg-white active:text-black 
  transition-all duration-100"
        >
          <span className="text-lg font-semibold">Explore All Skills</span>
          <img
            src="/images/CaretRight.svg"
            alt="Right Arrow"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default TechStack;
