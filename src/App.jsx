import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Loader from "./Components/Loader";

const App = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
