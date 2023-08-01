//Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  //Hooks

  //Functions

  return (
    <>
      <Container style={{ backgroundColor: "black", color: "white" }}>
        <Row>
          <Col xs={12}>
            <h2>I AM FOOTER!!!</h2>
          </Col>
          <a href="https://instagram.com/kylejennings13">
            <FaInstagram />
          </a>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
