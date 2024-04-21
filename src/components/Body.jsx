import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "./Contact";
import Footer from "./Footer";
import Certification from "./Certification.jsx";
import Experience from "./Experience.jsx";
const Body = () => {
  return (
    <div className="font-Poppins">
      <Header />
      <Home />
      <About />
      <Experience/>
      <Certification />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;