import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/carousel1.webp";
import image2 from "../../images/carousel2.webp";
import image3 from "../../images/carousel3.webp";
import image4 from "../../images/carousel4.webp";
import image5 from "../../images/carousel5.webp";

function KyleCarousel() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Carousel data-bs-theme="dark" fade>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={image5}
                  alt="Second slide"
                />
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
