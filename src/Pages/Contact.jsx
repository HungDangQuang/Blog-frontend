import Contactme from "../components/contact/index";
import React from "react";
import Navigation from "../components/navigation/Index";
import Footer from "../components/footer/Index";
import "../style/container.css";
import "../style/about.css";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="rootAbout">
        <div className="getmeabout">
          <div className="blog">
            <Contactme />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
