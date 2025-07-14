import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AllSkills from "./Components/AllSkills";
import Loader from "./Components/Loader";
import AllProjects from "./Components/AllProjects";

// Home Layout
const Home = () => {
  const location = useLocation();
  const techStackEndRef = useRef(null);

  useEffect(() => {
    if (location.state?.fromSkills) {
      const timeout = setTimeout(() => {
        if (techStackEndRef.current) {
          techStackEndRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center", // scrolls to center of viewport
          });
        }
      }, 1300); // increased delay to ensure page has settled

      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <div ref={techStackEndRef} />
      <Projects />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<AllSkills />} />
      <Route path="/projects/all" element={<AllProjects />} />
    </Routes>
  );
};

export default App;
