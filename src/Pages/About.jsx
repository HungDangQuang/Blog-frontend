import Aboutme from "../components/about/Index";
import React from "react";
import Navigation from "../components/navigation/Index";
import "../style/container.css";
import "../style/about.css";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="rootAbout">
        <div className="getmeabout">
          <div className="blog">
            <Aboutme />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
