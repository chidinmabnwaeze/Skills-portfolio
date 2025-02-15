import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 mt-12 p-3 flex flex-col justify-center items-center text-white js-scroll hideScroll">
      <div className="social-links flex">
        <a className="sm-link m-1" href="#">
          <i class="bx bxl-facebook text-2xl"></i>
        </a>
        <a className="sm-link m-1" href="#">
          <i class="bx bxl-instagram text-2xl"></i>
        </a>
        <a className="sm-link m-1" href="#">
          <i class="bx bxl-linkedin text-2xl"></i>
        </a>
        <a className="sm-link m-1" href="#">
          <i class="fa-brands fa-x-twitter text-2xl"></i>
        </a>
        <a className="sm-link m-1" href="https://github.com/guavacoderepo">
          <i class="bx bxl-github text-2xl"></i>
        </a>
      </div>
      <div className="copy flex flex-col items-center mt-20">
        <p>&copy; Everistus Nwogo @2025</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
