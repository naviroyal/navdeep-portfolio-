import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.scss";
export const Navbar = () => {
  const [clicked, setClickedItem] = useState({
    home: true,
    exp: false,
    skills: false,
    contact: false,
  });

  const handleClick = (e) => {
    if (e.target.id === "#home") {
      setClickedItem({
        home: true,
        exp: false,
        skills: false,
        contact: false,
      });
    } else if (e.target.id === "#exp") {
      setClickedItem({
        home: false,
        exp: true,
        skills: false,
        contact: false,
      });
    } else if (e.target.id === "#skills") {
      setClickedItem({
        home: false,
        exp: false,
        skills: true,
        contact: false,
      });
    } else {
      setClickedItem({
        home: false,
        exp: false,
        skills: false,
        contact: true,
      });
    }
  };

  return (
    <div className="navbar" onClick={handleClick}>
      <AnchorLink
        className="navbar--item"
        href="#home"
        id="#home"
        style={{
          color: clicked.home ? "black" : "grey",
          textDecoration: clicked.home ? "underline" : "none",
        }}
      >
        Home
      </AnchorLink>
      <AnchorLink
        className="navbar--item"
        href="#experience"
        id="#exp"
        style={{
          color: clicked.exp ? "black" : "grey",
          textDecoration: clicked.exp ? "underline" : "none",
        }}
      >
        Experience
      </AnchorLink>
      <AnchorLink
        className="navbar--item"
        href="#skills"
        id="#skills"
        style={{
          color: clicked.skills ? "black" : "grey",
          textDecoration: clicked.skills ? "underline" : "none",
        }}
      >
        Skills
      </AnchorLink>
      <AnchorLink
        className="navbar--item"
        href="#contact"
        id="#contact"
        style={{
          color: clicked.contact ? "black" : "grey",
          textDecoration: clicked.contact ? "underline" : "none",
        }}
      >
        Contact
      </AnchorLink>
    </div>
  );
};
