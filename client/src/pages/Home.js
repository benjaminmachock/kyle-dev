import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KyleCarousel from "../components/KyleCarousel/KyleCarousel";
import Button from "react-bootstrap/Button";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  //Hooks

  //Functions

  return (
    <>
      <KyleCarousel />
      <main>
        <div className="position-relative overflow-hidden p-1 p-md-3 m-md-1 text-center">
          <div className="col-md-6 p-lg-5 mx-auto">
            <a
              href="https://www.ticketmaster.com/event/08005EF8E7E0386E?fbclid=IwAR0D3NnRy73sVkRbNLYPBMB1UO9zVGwcYzAa8dGUTfk9vYqiJujrs1uuEbY"
              target="no_blank"
            >
              <Button
                variant="dark"
                size="lg"
                className="animatedBorder"
                style={{ fontSize: 40, color: "#e3e3e3" }}
              >
                BUY TICKETS
              </Button>
            </a>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <a
                className="footerLinks"
                style={{ color: "#e3e3e3" }}
                href="https://instagram.com/kylejennings13"
                target="no_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="footerLinks"
                style={{ color: "#e3e3e3" }}
                href="https://twitter.com/kylejennings13"
                target="no_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="footerLinks"
                style={{ color: "#e3e3e3" }}
                href="https://facebook.com/kylejenningsmusic"
                target="no_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="footerLinks"
                style={{ color: "#e3e3e3" }}
                href="https://youtube.com/kylejenningsmusiconline"
                target="no_blank"
              >
                <FaYoutube />
              </a>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
