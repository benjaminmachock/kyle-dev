import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Logo from "../../images/kylejennings logo.png";
import Image from "react-bootstrap/Image";
import { useModal } from "../Book/Book";

const Header = () => {
  const { openModal } = useModal();
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
            style={{ background: "white" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <LinkContainer style={{ color: "white" }} to="/book">
                <NavLink onClick={openModal}>Book</NavLink>
              </LinkContainer>

              <LinkContainer style={{ color: "white" }} to="/meet-kyle">
                <NavLink>Meet Kyle </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
