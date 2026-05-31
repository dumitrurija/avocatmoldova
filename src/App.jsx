import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import AboutMe from "./components/sections/AboutMe";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
    </div>
  );
};

export default App;
