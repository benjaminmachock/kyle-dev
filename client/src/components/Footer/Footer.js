//Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  //Hooks

  //Functions

  return (
    <>
      <Container style={{ backgroundColor: "black", color: "white" }} fluid>
        <Row>
          <Col xs={12}>
            <h2>I AM FOOTER!!!</h2>
          </Col>
          <a href="https://instagram.com/kylejennings13" target="no_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/kylejennings13" target="no_blank">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/kylejenningsmusic" target="no_blank">
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/kylejenningsmusiconline"
            target="no_blank"
          >
            <FaYoutube />
          </a>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
