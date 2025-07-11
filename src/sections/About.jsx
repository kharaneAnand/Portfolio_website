import React from "react";
import GradientSpheres from "../Components/GradientSpeheres";
import TitleHeader from "../Components/TitleHeader";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AboutRight from "../Components/AboutRight";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-5 py-20 md:py-40 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />

        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Panel */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700 backdrop-blur-xl hover:shadow-blue-500/40 transition-shadow duration-500">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anand Kharane
            </h1>

            <p className="text-gray-300 md:text-lg text-sm mt-4 leading-relaxed transition-opacity duration-500 ease-out opacity-100">
              Hi, I'm Anand Kharane, an engineering student at IIT Jodhpur,
              passionate about building and scaling web applications. I
              specialize in full-stack development, delivering clean, responsive
              frontends and robust backend systems. I love converting ideas into
              meaningful digital experiences.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:scale-110 hover:bg-blue-700 transition-all backdrop-blur-sm">
                Full Stack Developer
              </span>
              <span className="bg-purple-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:scale-110 hover:bg-purple-700 transition-all backdrop-blur-sm">
                App Developer
              </span>
            </div>

            <hr className="my-6 border-gray-600" />

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <ContactLink
                icon={<FiMail />}
                label="kharaneanand@gmail.com"
                href="mailto:kharaneanand@gmail.com"
                bg="bg-blue-600"
              />
              <ContactLink
                icon={<FaGithub />}
                label="github.com/kharaneanand"
                href="https://github.com/kharaneanand"
                bg="bg-gray-700"
              />
              <ContactLink
                icon={<FaLinkedin />}
                label="linkedin.com/in/anand-kharane"
                href="https://www.linkedin.com/in/anand-kharane-1b0b2a1b6/"
                bg="bg-blue-700"
              />
              <ContactLink
                icon={<FaInstagram />}
                label="@anand_kharane"
                href="https://www.instagram.com/anand_kharane"
                bg="bg-pink-600"
              />
            </div>

            {/* Resume Button */}
            <hr className="my-6 border-gray-600" />

            <div className="flex justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XUsFN7__kXRpIG9h8GQopGCfOu0ZwasW/view?usp=drive_link",
                    "_blank"
                  )
                }
                className="mt-6 px-6 py-3 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 focus:ring-4 focus:ring-green-400"
              >
                <span>📄</span> View Resume
              </button>
            </div>
          </div>

          {/* Right Panel - Image */}

          <div className="w-full h-full max-w-[500px]">
            <AboutRight />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Link
const ContactLink = ({ icon, label, href, bg }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-4 px-4 py-3 rounded-xl ${bg} bg-opacity-20 hover:bg-opacity-40 transition duration-300 shadow-md hover:scale-110 group`}
  >
    <div className="text-white text-xl transition-transform duration-300 group-hover:rotate-6">
      {icon}
    </div>
    <span className="font-medium text-white group-hover:underline">
      {label}
    </span>
  </a>
);

export default About;
