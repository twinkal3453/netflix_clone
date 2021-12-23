import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__page">
      <h1 className="company__name">Flixity</h1>
      <div className="icon__follow">
        <a href="https://www.facebook.com/twinkal.raj.1293" target="_blank">
          <div className="icon__social icon__facebook">
            <i className="fab fa-facebook-f"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/twinkal_raj/" target="_blank">
          <div className="icon__social icon__instagram">
            <i className="fab fa-instagram"></i>
          </div>
        </a>
        <a href="https://github.com/twinkal3453" target="_blank">
          <div className="icon__social icon__github">
            <i className="fab fa-github"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/twinkal-kumar-raj-38bb50193/"
          target="_blank"
        >
          <div className="icon__social icon__linkedIn">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </a>
      </div>

      <p>
        Terms of use <span>Privecy Policy</span>
      </p>
      <p className="copy__right">Copyright &#169; Flixcity 2021</p>
    </div>
  );
};

export default Footer;
