import React from "react";
import profile from "../assets/images/image.png";

const Header = () => {
  return (
    <header
      className="header flex p-4 w-full fixed top-0 justify-center items-center z-10 bg-white shadow-sm"
      id="header"
    >
      <div className="navbar-brand flex mr-20">
        <a className="bayzel flex items-center text-xl text-purple-700" href="">
          <img
            className="logo w-16 mr-2 rounded-full"
            src={profile}
            alt="logo"
          />
          My Portfolio
        </a>
      </div>
      <nav className="navbar flex mr-7">
        <div className="nav-menu">
          <ul className="nav-lists flex">
            <li className="nav-list mr-6">
              <a className="nav-link active:divide-violet-700" href="/home">
                Home
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/about">
                About Me
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/skills">
                Skills
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/experience">
                Experience
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/references">
                References
              </a>
            </li>
            <li className="nav-list mr-6">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
