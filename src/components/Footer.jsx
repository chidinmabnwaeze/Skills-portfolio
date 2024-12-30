import React from "react";
import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
import twitter from "../assets/logo/twiitter x.jpeg";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a className="sm-link" href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a className="sm-link" href="#">
          <img src={insta} alt="insta" />
        </a>
        <a className="sm-link" href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a className="sm-link" href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="copy">
        <p>&copy; Copyright Bayzel Integrated Services @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
