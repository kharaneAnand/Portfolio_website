import { motion } from "framer-motion";
import GradientSpheres from "../Components/GradientSpeheres";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Gradient Spheres for depth */}
      <GradientSpheres
        sphere1Class="absolute top-10 left-10 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl"
        sphere2Class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl"
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-0  bg-[url('/images/noise.png')]
 opacity-10 mix-blend-overlay pointer-events-none"
      />

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-5 md:px-20">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 mb-4"
          >
            👋 Hey, I’m
          </motion.p>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
          >
            Anand Kharane
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl md:text-5xl font-bold mt-4"
          >
            <Typewriter
              words={[
                "CREATIVE DEVELOPER",
                "DESIGN THINKER",
                "LIFELONG LEARNER",
                "PROBLEM SOLVER",
                "TECH ENTHUSIAST",
                "CRAFTING CHAOS INTO CODE ",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p className="text-sm text-gray-400">Scroll Down</p>
        <img src="/images/arrowdown.svg" alt="Scroll" className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
