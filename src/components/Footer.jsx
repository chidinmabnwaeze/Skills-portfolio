import React from "react";
import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
import twitter from "../assets/logo/twiitter x.jpeg";

const Footer = () => {
  return (
    <footer className="bg-purple-700 mt-12 p-3 flex flex-col justify-center items-center text-white">
      <div className="social-links flex">
        <a className="sm-link" href="#">
          <img className="w-8" src={facebook} alt="facebook" />
        </a>
        <a className="sm-link" href="#">
          <img className="w-8" src={insta} alt="insta" />
        </a>
        <a className="sm-link" href="#">
          <img className="w-8" src={linkedin} alt="linkedin" />
        </a>
        <a className="sm-link" href="#">
          <img className="w-8" src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="copy flex flex-col items-center mt-20">
        <p>&copy; Copyright Everistus Nwogo @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
