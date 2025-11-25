import { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../images/kylejennings logo.png";
import { TbBaselineDensityMedium, TbX } from "react-icons/tb";
import ModalForm1 from "../ModalForm/ModalForm";
import UpcomingShowsModal from "../UpcomingShowsModal/UpcomingShowsModal";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
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
              <TbX color="white" size={30} />
            ) : (
              <TbBaselineDensityMedium color="white" size={50} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end">
            <LinkContainer
              style={{ color: "white", paddingLeft: "2rem" }}
              to="/"
            >
              <NavLink
                onClick={() => handleNavLinkClick("home")}
                className={activeLink === "home" ? "active" : ""}
              >
                Home
              </NavLink>
            </LinkContainer>
            <LinkContainer
              style={{ color: "white", paddingLeft: "2rem" }}
              to="/land"
            >
              <NavLink
                onClick={() => handleNavLinkClick("about")}
                className={activeLink === "about" ? "active" : ""}
              >
                About
              </NavLink>
            </LinkContainer>
            <ModalForm1 />
            <UpcomingShowsModal />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
