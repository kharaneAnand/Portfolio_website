import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TitleHeader from "../Components/TitleHeader";
import { projects } from "../Constants/projects";
import GradientSpheres from "../Components/GradientSpeheres";

const slideVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const totalProjects = projects.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalProjects);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalProjects]);

  const project = projects[current];

  return (
    <section
      id="projects"
      className="px-4 py-16 md:py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden relative"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <TitleHeader
          title="My Projects"
          number="03"
          text="Crafted with Care & Code"
        />

        <GradientSpheres
          sphere1Class="about-gradient-sphere about-sphere-1"
          sphere2Class="about-gradient-sphere about-sphere-2"
        />

        <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mt-8 mb-12 animate-pulse opacity-80" />

        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl border border-purple-600/40 shadow-2xl p-6 md:p-12 transition-all duration-500 hover:shadow-purple-600/20"
            >
              <div className="w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl border border-purple-500/20 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium shadow-md hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition flex items-center gap-2 text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={20} /> Live Demo
                    </a>
                  )}
                  {project.demoBackend && (
                    <a
                      href={project.demoBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition flex items-center gap-2 text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={20} /> Backend API
                    </a>
                  )}
                  {project.demoPatient && (
                    <a
                      href={project.demoPatient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition flex items-center gap-2 text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={20} /> Patient View
                    </a>
                  )}
                  {project.demoAdmin && (
                    <a
                      href={project.demoAdmin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition flex items-center gap-2 text-sm font-medium"
                    >
                      <FaExternalLinkAlt size={20} /> Admin View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            {projects.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-8 rounded-full cursor-pointer transition-all duration-300 ${
                  i === current
                    ? "bg-purple-500 scale-110"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

          <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mt-8 mb-12 animate-pulse opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
