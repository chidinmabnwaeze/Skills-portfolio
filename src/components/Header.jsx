import React, { useState } from "react";
import profile from "../assets/images/image.png";

const Header = ({ handleMenuClick, activeSection }) => {
  // const menu = [
  //   { id: "home", navlink: "Home" },
  //   { id: "about", navlink: "About Me" },
  //   { id: "skills", navlink: "Skills" },
  //   { id: "experience", navlink: "Experience" },
  //   { id: "projects", navlink: "Projects" },
  //   { id: "services", navlink: "Services" },
  //   { id: "references", navlink: "References" },
  //   { id: "contact", navlink: "Contact" },
  // ];
  const menu = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    // "services",
    // "references",
    "contact",
  ];

  // const navToggle = document.querySelector(".showLink");
  // const links = document.querySelector(".links");

  // const toggle = () => {
  //   navToggle.addEventListener("click", () => {
  //     if (links.contains("showLink")) {
  //       links.classList.remove(".showLink");
  //     } else {
  //       links.classList.add(".showLinks");
  //     }
  //   });
  // };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("showLinks");
  };

  return (
    <header
      className="header flex p-4 w-full fixed top-0 justify-center items-center z-10 bg-white shadow-sm"
      id="header"
    >
      <div className="navbar-brand flex mr-20">
        <a
          className="portfolio flex items-center text-xl text-purple-700"
          href="#"
        >
          <img
            className="logo w-16 mr-2 rounded-full"
            src={profile}
            alt="logo"
          />
          My Portfolio
        </a>
      </div>
      <nav className="navbar flex mr-7">
        <nav className="menuIcon hidden cursor-pointer" onClick={toggleMenu}>
          <i class="bx bx-menu-alt-right text-2xl text-purple-700"></i>
        </nav>
        <div className="nav-menu ">
          <ul className="nav flex">
            {menu.map((id) => (
              <li className="nav-list mr-6" key={id}>
                <button
                  className={`nav-link ${
                    activeSection === id ? "text-purple-700 font-bold" : ""
                  }`}
                  // key={item.id}
                  onClick={() => handleMenuClick(id)}
                >
                  {/* {item.navlink} */}{" "}
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
