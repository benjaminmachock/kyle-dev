import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/kyle1.webp";
import image2a from "../../images/kyle_concert_2.webp";
import image2 from "../../images/carousel2_resized_compressed.webp";
import image3 from "../../images/carousel3_compressed_resized.webp";
import image6 from "../../images/kyle3_concert.webp";

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
                <img
                  className="d-block w-100"
                  src={image2a}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image6} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default KyleCarousel;
