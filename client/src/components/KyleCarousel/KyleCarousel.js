import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/carousel1_resized_compressed.webp";
import image2 from "../../images/carousel2_resized_compressed.webp";
import image3 from "../../images/carousel3_compressed_resized.webp";
import image4 from "../../images/carousel4_compressed_resized.webp";
import image5 from "../../images/carousel5_compressed_resized.webp";

function KyleCarousel() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Carousel fade id="custom-carousel">
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <a
                  href="https://www.ticketmaster.com/event/08005EF8E7E0386E?fbclid=IwAR0D3NnRy73sVkRbNLYPBMB1UO9zVGwcYzAa8dGUTfk9vYqiJujrs1uuEbY"
                  target="no_blank"
                >
                  <img
                    className="d-block w-100"
                    src={image5}
                    alt="Second slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default KyleCarousel;
