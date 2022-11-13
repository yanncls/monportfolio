import React from "react";
import "../../styles/Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <ul className="navbar_links">
        <li>
          <a href="/home#who" className="navbar_link" onClick={handleShowLinks}>
            Présentation
          </a>
        </li>
        <li>
          <a href="#carousel" className="navbar_link" onClick={handleShowLinks}>
            Projets perso
          </a>
        </li>
        <li>
          <a
            href="/home#tech"
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Technos
          </a>
        </li>
        <li>
          <a
            href="/home#skills"
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="/home#graduate"
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Expériences
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
