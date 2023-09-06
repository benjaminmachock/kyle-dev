import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Logo from "../../images/kylejennings logo.png";
import Image from "react-bootstrap/Image";
import { TbBaselineDensityMedium, TbX } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const menuBtn = document.querySelector(".navbar-toggler-icon");

    if (menuBtn) {
      if (isMenuOpen) {
        menuBtn.classList.add("cross-icon");
      } else {
        menuBtn.classList.remove("cross-icon");
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#000" }}
        className="headerContainer"
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image
              src={Logo}
              className="d-inline-block align-top"
              alt="Kyle Jennings"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          style={{ backgroundColor: "transparent", border: "none" }}
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <TbX color="white" size={50} />
          ) : (
            <TbBaselineDensityMedium color="white" size={50} />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
          <Nav className="me-auto">
            <LinkContainer
              style={{
                color: "white",
                paddingLeft: "1rem",
              }}
              to="/book"
            >
              <NavLink>Book</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer
              style={{ color: "white", paddingLeft: "1rem" }}
              to="/land"
            >
              <NavLink>About</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
