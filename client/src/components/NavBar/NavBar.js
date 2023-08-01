//Imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  //Hooks

  //Functions

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Kyle Jennings</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Book</Nav.Link>
            <Nav.Link href="#features">Music</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
