import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Kyle1 from "../images/kyle1alt.jpg";
import Kyle2 from "../images/kyle2_res.webp";
import Kyle3 from "../images/kyle3.jpg";
import Kyle5 from "../images/kyle5.webp";
import Modal from "../components/Modal/Modal";
import Kyle4b from "../images/kyle4.jpg";
import Kyle7 from "../images/kyle7.JPG";
// import Kyle3a from "../images/kyle3a.webp";
import Kyle10 from "../images/IMG_0593.JPG";
import Kyle11 from "../images/IMG_0596.JPG";
import Kyle12 from "../images/IMG_7170.JPG";
import Concert from "../images/KJ_Kalamazoo Social Media Post.png";

const Home = () => {
  //Hooks

  //Functions

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <Image
                src={Kyle2}
                fluid
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col xs={12} lg={6}>
              <a
                href="https://www.ticketmaster.com/event/08005EF8E7E0386E?fbclid=IwAR0D3NnRy73sVkRbNLYPBMB1UO9zVGwcYzAa8dGUTfk9vYqiJujrs1uuEbY"
                target="no_blank"
              >
                <Image
                  src={Concert}
                  fluid
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </a>
            </Col>
          </Row>
        </Container>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-2">
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
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <Image src={Kyle3} fluid />
            </div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <Image src={Kyle7} fluid />
            </div>
          </div>
        </div>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-2">
            <Modal />
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col xs={4}>
              <Image src={Kyle5} fluid rounded />
              <Image src={Kyle11} fluid rounded />
            </Col>
            <Col xs={4}>
              <Image src={Kyle12} fluid rounded />
            </Col>
            <Col xs={4}>
              <Image src={Kyle4b} fluid rounded />
              <Image src={Kyle10} fluid rounded />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
