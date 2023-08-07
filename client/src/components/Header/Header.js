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
      <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: 0 }}>
        <Container fluid style={{ backgroundColor: "#63605F" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image src={Logo} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/schedule" style={{ color: "#e3e3e3" }}>
                <NavLink>Schedule</NavLink>
              </LinkContainer>
              <LinkContainer to="/book" style={{ color: "#e3e3e3" }}>
                <NavLink>Book</NavLink>
              </LinkContainer>
              <LinkContainer to="/merchandise" style={{ color: "#e3e3e3" }}>
                <NavLink>Merch</NavLink>
              </LinkContainer>
              <LinkContainer to="/contact" style={{ color: "#e3e3e3" }}>
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
