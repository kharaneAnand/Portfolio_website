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

// Home Layout
const Home = () => {
  const location = useLocation();
  const techStackEndRef = useRef(null);

  useEffect(() => {
    if (location.state?.fromSkills) {
      setTimeout(() => {
        techStackEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
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
    </Routes>
  );
};

export default App;
