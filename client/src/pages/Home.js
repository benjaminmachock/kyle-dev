import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KyleCarousel from "../components/KyleCarousel/KyleCarousel";
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons";

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
        <h3 style={{ color: "white", textAlign: "center" }}>SOCIALS</h3>
        <hr style={{ color: "white" }} />
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://instagram.com/kylejennings13"
                network="instagram"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://twitter.com/kylejennings13"
                network="twitter"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://facebook.com/kylejenningsmusic"
                network="facebook"
                target="_blank"
              />
              <SocialIcon
                style={{ margin: ".5rem" }}
                url="https://youtube.com/kylejenningsmusiconline"
                network="youtube"
                target="_blank"
              />
            </Col>
          </Row>
        </Container>
        <hr style={{ color: "white" }} />
      </main>
    </>
  );
};

export default Home;
