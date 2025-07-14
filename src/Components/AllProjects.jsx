import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { projects } from "../Constants/projects";
import TitleHeader from "../Components/TitleHeader";
import GradientSpheres from "../Components/GradientSpeheres";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBack = () => {
    navigate("/#projects");

    // Scroll manually after a small delay (to let navigation happen)
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="min-h-screen px-4 py-16 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* ❌ Close Button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={handleBack}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg transition"
        >
          <IoMdClose size={28} />
        </button>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <TitleHeader
          title="All Projects"
          number="04"
          text="Every Line Crafted with Care"
        />

        <GradientSpheres
          sphere1Class="about-gradient-sphere about-sphere-1"
          sphere2Class="about-gradient-sphere about-sphere-2"
        />

        <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mt-8 mb-12 animate-pulse opacity-80" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl border border-purple-600/40 shadow-2xl p-6 transition-all duration-300 hover:shadow-purple-500/30"
            >
              <div className="w-full h-52 overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 text-transparent bg-clip-text mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition flex items-center gap-2 text-xs font-medium"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
                {project.demoBackend && (
                  <a
                    href={project.demoBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition flex items-center gap-2 text-xs font-medium"
                  >
                    <FaExternalLinkAlt size={14} /> Backend API
                  </a>
                )}
                {project.demoPatient && (
                  <a
                    href={project.demoPatient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition flex items-center gap-2 text-xs font-medium"
                  >
                    <FaExternalLinkAlt size={14} /> Patient View
                  </a>
                )}
                {project.demoAdmin && (
                  <a
                    href={project.demoAdmin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition flex items-center gap-2 text-xs font-medium"
                  >
                    <FaExternalLinkAlt size={14} /> Admin View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleBack}
            className="group flex items-center gap-3 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            <span className="text-lg font-semibold">Go Back</span>
            <img
              src="/images/CaretRight.svg"
              alt="Right Arrow"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
