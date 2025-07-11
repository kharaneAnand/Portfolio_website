import React from "react";
import { motion } from "framer-motion";
import GradientSpheres from "../Components/GradientSpeheres";
import TitleHeader from "../Components/TitleHeader";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-6 z-10 relative">
        <TitleHeader
          title="Contact Me"
          number="05"
          text="Let’s Connect and Collaborate"
        />

        {/* Spheres / Background */}
        <GradientSpheres
          sphere1Class="gradient-sphere sphere-1"
          sphere2Class="gradient-sphere sphere-2"
        />

        {/* Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-2xl mx-auto mt-20 p-[2px] rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 shadow-[0_0_40px_#a855f7] animate-pulse-slow"
        >
          <div className="w-full h-full bg-black/80 backdrop-blur-xl p-10 rounded-3xl text-white shadow-xl relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text"
            >
              Let's Talk
            </motion.h3>

            <p className="text-center text-gray-300 text-lg leading-relaxed mb-8">
              Interested in working together, starting a project, or just want
              to say hi? I'm all ears. Let's create something amazing!
            </p>

            {/* Email CTA */}
            <div className="flex justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-pink-500/40 transition duration-300"
                onClick={() =>
                  (window.location.href = "mailto:kharaneanand@gmail.com")
                }
              >
                <FiMail className="text-xl" />
                Send an Email
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 text-white text-3xl">
              <a
                href="https://github.com/kharaneanand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anand-kharane-1b0b2a1b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/anand_kharane"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
