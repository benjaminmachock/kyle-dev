import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Logo from "../../images/kylejennings logo.png";
import Image from "react-bootstrap/esm/Image";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src={Logo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/schedule">
                <NavLink>Schedule</NavLink>
              </LinkContainer>
              <LinkContainer to="/book">
                <NavLink>Book</NavLink>
              </LinkContainer>
              <LinkContainer to="/merchandise">
                <NavLink>Merch</NavLink>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavLink>Contact</NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
