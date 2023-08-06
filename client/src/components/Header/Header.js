import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>KJ</Navbar.Brand>
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
