import React, { useState, useEffect } from "react";
import ModalForm from "../ModalForm/ModalForm";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../images/kylejennings logo.png";
import { TbBaselineDensityMedium, TbX } from "react-icons/tb";

function Header1() {
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
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#000" }}
      className="headerContainer"
    >
      <Container>
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
        </Navbar.Toggle>{" "}
        <Navbar.Collapse className="justify-content-end">
          <NavLink>
            <ModalForm />
          </NavLink>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <LinkContainer
            style={{ color: "white", paddingLeft: "1rem" }}
            to="/land"
          >
            <NavLink>About</NavLink>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header1;
