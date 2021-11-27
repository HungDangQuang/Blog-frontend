import "../../style/footer.css";
import React from "react";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="social">
        <h3 style={{ fontFamily: `${"Roboto"}, sans-serif` }}>Youbo</h3>
        <ul>
          <li>
            <ion-icon name="logo-facebook"> </ion-icon>
          </li>
          <li>
            <ion-icon name="logo-instagram">Intagram</ion-icon>
          </li>
          <li>
            <ion-icon name="logo-pinterest"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-twitter"></ion-icon>
          </li>
          <li>
            <ion-icon name="logo-skype"></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
