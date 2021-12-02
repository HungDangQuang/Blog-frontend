import React from "react";
import "../../style/about.css";
import { FiMapPin } from "react-icons/fi";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="wrap_contact">
      <div className="content-contact">
        <div className="info">
          <h1>Contact us</h1>
          <p>
            Let's cover five different areas for high-performance web fonts and
            conclude with a 2021 recommendation.
          </p>

          <div className="address_contact">
            <div className="address_info">
              <div className="icon">
                <FiMapPin />
              </div>
              <div className="text">
                <h3> Addresss</h3>
                <p>conclude with a 2021 recommendation.</p>
              </div>
            </div>

            <div className="address_info">
              <div className="icon">
                <AiFillPhone />
              </div>
              <div className="text">
                <h3> Phone</h3>
                <p>000-1234-3456</p>
              </div>
            </div>

            <div className="address_info">
              <div className="icon">
                <AiTwotoneMail />
              </div>
              <div className="text">
                <h3> Email</h3>
                <p>admin@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
