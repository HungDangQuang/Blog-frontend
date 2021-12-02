import React from "react";
import "../../style/about.css";

const About = () => {
  return (
    <div className="backgroundAbout">
      <div className="wrapperAbout">
        <div className="imageAbout ">
          <div className="imageLeft"></div>
        </div>
        <div className="contentAbout">
          <div className="wrapConnent">
            <div>
              <h5
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 1000,
                  borderBottom: "1px solid #ccc",
                }}
              >
                ABOUT US
              </h5>
            </div>
            <div className="titleBody">
              <h4 style={{ fontFamily: "Open Sans", fontWeight: 1000 }}>
                We include Dang Quang Hung, Nguyen Huu Toan. The people who have
                created this website for the purpose of selecting the best
                knowledge about programming for readers. We create blogs to
                create meaningful, memorable and iconic benefits.
              </h4>
              <h6 style={{ fontFamily: "Open Sans" }}>
                We create blogs to create meaningful, memorable and iconic
                benefits. We always create great blogs for you. You can contact
                us through the social media page below.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
