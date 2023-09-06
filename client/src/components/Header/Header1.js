import { LinkContainer } from "react-router-bootstrap";
import NavLink from "react-bootstrap/esm/NavLink";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../../images/kylejennings logo.png";

function Header1() {
  return (
    <Navbar style={{ backgroundColor: "#000" }}>
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
        <Navbar.Toggle />
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
