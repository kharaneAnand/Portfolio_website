import React from "react";
import { useNavigate } from "react-router-dom";
import TitleHeader from "./TitleHeader";
import TechIcon from "./TechIcon";
import { programmingLang, webAndAppDev, Tools } from "../Constants";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";

const AllSkills = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen px-5 py-20 md:py-32 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      {/* ✖️ Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
        aria-label="Close and go back"
      >
        <IoMdClose />
      </button>

      {/* ✨ Floating Glow Gradient Backgrounds */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse" />

      {/* Content Container */}
      <div className="container max-w-6xl mx-auto z-10 relative">
        <TitleHeader
          title="All Skills"
          number="03"
          text="Complete Overview of My Technical Arsenal"
        />

        <div className="mt-16 space-y-20">
          {/* 💻 Programming Languages */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              💻 Programming Languages
            </h2>
            <div className="flex flex-wrap gap-6">
              {programmingLang.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>

          {/* 🌐 Web & App Development */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              🌐 Web & App Development
            </h2>
            <div className="flex flex-wrap gap-6">
              {webAndAppDev.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>

          {/* 🛠️ Tools & Platforms */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              🛠️ Tools & Platforms
            </h2>
            <div className="flex flex-wrap gap-6">
              {Tools.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        {/* 🔙 Back Button at Bottom */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => navigate("/", { state: { fromSkills: true } })}
            className="group flex items-center gap-3 px-6 py-3 border border-white rounded-full text-white 
             hover:bg-white hover:text-black 
             focus:bg-white focus:text-black 
             active:bg-white active:text-black 
             transition-all duration-200"
          >
            <span className="text-lg font-semibold">⬅ Back to Tech Stack</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
